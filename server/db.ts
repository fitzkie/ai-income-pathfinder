import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "@shared/db-schema";

// Get database URL from environment
const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL environment variable is not set");
}

// Create connection using postgres-js driver (works with standard PostgreSQL)
const client = postgres(databaseUrl);
export const db = drizzle(client, { schema });
