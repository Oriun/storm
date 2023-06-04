import Dotenv from "dotenv";
import pg from "pg";

Dotenv.config();

class StormClient {
  private connectionString: string;

  constructor() {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error("No connection string provided");
    }
    this.connectionString = connectionString;
  }
}

export default StormClient;