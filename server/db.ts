import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

// when DATABASE_URL is not provided we still export the symbols but
// they are no-ops.  this allows the rest of the codebase to compile
// without a running database.
let pool: pg.Pool | undefined;
let db: ReturnType<typeof drizzle> | {} = {};

if (process.env.DATABASE_URL) {
  pool = new Pool({ connectionString: process.env.DATABASE_URL });
  db = drizzle(pool, { schema });
}

export { pool, db };

