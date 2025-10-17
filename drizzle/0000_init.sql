-- Create profiles table
CREATE TABLE IF NOT EXISTS "profiles" (
  "id" text PRIMARY KEY NOT NULL,
  "skills" jsonb NOT NULL,
  "interests" jsonb NOT NULL,
  "assets" jsonb NOT NULL,
  "network" jsonb NOT NULL,
  "constraints" jsonb NOT NULL,
  "goals" jsonb NOT NULL,
  "work_style" jsonb NOT NULL,
  "market_hunches" jsonb NOT NULL,
  "created_at" timestamp DEFAULT now() NOT NULL
);

-- Create recommendations table
CREATE TABLE IF NOT EXISTS "recommendations" (
  "id" text PRIMARY KEY NOT NULL,
  "profile_id" text NOT NULL,
  "items" jsonb NOT NULL,
  "created_at" timestamp DEFAULT now() NOT NULL
);

-- Create index on profile_id for faster lookups
CREATE INDEX IF NOT EXISTS "recommendations_profile_id_idx" ON "recommendations" ("profile_id");
