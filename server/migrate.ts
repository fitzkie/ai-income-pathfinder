import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

export async function runMigrations() {
  const databaseUrl = process.env.DATABASE_URL;
  
  if (!databaseUrl) {
    console.log("⚠️  No DATABASE_URL found, skipping migrations (using in-memory storage)");
    return;
  }

  const client = postgres(databaseUrl, { max: 1 });
  const db = drizzle(client);

  try {
    console.log("🔄 Running database migrations...");
    await migrate(db, { migrationsFolder: "./drizzle" });
    console.log("✅ Database migrations completed successfully");
  } catch (error) {
    console.error("❌ Migration failed:", error);
    throw error;
  } finally {
    await client.end();
  }
}
