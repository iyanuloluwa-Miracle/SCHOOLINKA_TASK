import { Sequelize } from "sequelize-typescript";
// import { Pool } from 'pg'; // Uncomment if needed
import * as dotenv from "dotenv";
import { Blog } from "../model/Blogs";

dotenv.config();

class Database {
  public sequelize: Sequelize | undefined;

  private POSTGRES_DB = process.env.POSTGRES_DB as string;
  private POSTGRES_HOST = process.env.POSTGRES_HOST as string;
  private POSTGRES_PORT = process.env.POSTGRES_PORT as unknown as number;
  private POSTGRES_USER = process.env.POSTGRES_USER as unknown as string;
  private POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD as unknown as string;

  constructor() {
    this.connectToPostgreSQL();
  }

  // Uncomment the following code if you need to use the 'pg' library
  /*
  private async connectToPostgreSQL() {
    const pgPool = new Pool({
      connectionString: process.env.POSTGRES_URL + "?sslmode=require",
    });

    const { rows } = await pgPool.query('SELECT NOW()');
    console.log('PostgreSQL is connected:', rows[0].now);
  }
  */

  private async connectToPostgreSQL() {
    this.sequelize = new Sequelize({
      database: this.POSTGRES_DB,
      username: this.POSTGRES_USER,
      password: this.POSTGRES_PASSWORD,
      host: this.POSTGRES_HOST,
      port: this.POSTGRES_PORT,
      dialect: "postgres",
      models: [Blog],
    });

    try {
      await this.sequelize.authenticate();
      console.log("✅ PostgreSQL Connection has been established successfully.");
    } catch (err) {
      console.error("❌ Unable to connect to the PostgreSQL database:", err);
    }
  }
}

export default Database;
