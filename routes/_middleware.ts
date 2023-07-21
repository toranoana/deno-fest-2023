import { basicAuthHandler } from "../middlewares/basic_auth.ts";

export const handler = [
  basicAuthHandler
]