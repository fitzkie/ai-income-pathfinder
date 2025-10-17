import { drizzle } from "drizzle-orm/neon-http";
import { migrate } from "drizzle-orm/neon-http/migrator";
import { neon } from "@neondatabase/serverless";

export async function runMigrations() {
  const databaseUrl = process.env.DATABASE_URL;
  
  if (!databaseUrl) {
    console.log("⚠️  No DATABASE_URL found, skipping migrations (using in-memory storage)");
    return;
  }

  try {
    console.log("🔄 Running database migrations...");
    
    const sql = neon(databaseUrl);
    const db = drizzle(sql);
    
    // Run migrations
    await migrate(db, { migrationsFolder: "./drizzle" });
    
    console.log("✅ Database migrations completed successfully");
  } catch (error) {
    console.error("❌ Migration failed:", error);
    throw error;
  }
}
