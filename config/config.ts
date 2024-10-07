import dotenv from "dotenv";
import path from "path";

// Load environment variables from .env file
dotenv.config({
  path: path.join(
    __dirname,
    `../../.env.${process.env.NODE_ENV || "development"}`
  ),
});

interface Config {
  env: string;
  port: number;
  corsOrigin: string;
}

const config: Config = {
  env: process.env.NODE_ENV || "development",
  port: parseInt(process.env.PORT || "3000", 10),
  corsOrigin: process.env.CORS_ORIGIN || "http://localhost:4200",
};

export default config;
