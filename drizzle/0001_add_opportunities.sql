CREATE TABLE IF NOT EXISTS "opportunities" (
  "id" text PRIMARY KEY NOT NULL,
  "slug" text NOT NULL UNIQUE,
  "title" text NOT NULL,
  "summary" text NOT NULL,
  "category" text NOT NULL,
  "skills_needed" jsonb NOT NULL,
  "assets_helpful" jsonb NOT NULL,
  "difficulty" integer NOT NULL,
  "time_to_cash" integer NOT NULL,
  "startup_cost" integer NOT NULL,
  "typical_arpu" integer,
  "demand_tags" jsonb NOT NULL,
  "example_tasks" jsonb NOT NULL,
  "example_prompts" jsonb NOT NULL,
  "scoring_factors" jsonb NOT NULL,
  "created_at" timestamp DEFAULT now() NOT NULL
);

CREATE INDEX IF NOT EXISTS "opportunities_slug_idx" ON "opportunities" ("slug");
