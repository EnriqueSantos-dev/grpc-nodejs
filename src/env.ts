import * as dotenv from "dotenv-safe";

dotenv.config();

export const env = {
  port: process.env.PORT,
};
