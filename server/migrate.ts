import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import fs from "fs";
import path from "path";

export async function runMigrations() {
  const databaseUrl = process.env.DATABASE_URL;
  
  if (!databaseUrl) {
    console.log("⚠️  No DATABASE_URL found, skipping migrations (using in-memory storage)");
    return;
  }

  const client = postgres(databaseUrl, { max: 1 });
  const db = drizzle(client);
  const projectMigrations = path.resolve(process.cwd(), "drizzle");
  const bundledMigrations = path.resolve(import.meta.dirname, "./drizzle");
  const migrationsFolder = fs.existsSync(projectMigrations) ? projectMigrations : bundledMigrations;

  try {
    console.log("🔄 Running database migrations...");
    await migrate(db, { migrationsFolder });
    console.log("✅ Database migrations completed successfully");
  } catch (error) {
    console.error("❌ Migration failed:", error);
    throw error;
  } finally {
    await client.end();
  }
}
