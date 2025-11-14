# Multi-stage build for production deployment
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Copy package files
COPY package*.json ./
# Use legacy-peer-deps during CI install to avoid ERESOLVE failures
# (temporary workaround; prefer fixing package versions long-term)
RUN npm ci --legacy-peer-deps

# Build the application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the Vite frontend
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy necessary files
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server ./server
COPY --from=builder /app/shared ./shared

# Expose port
EXPOSE 5000

# Start the application
CMD ["npm", "run", "dev"]
