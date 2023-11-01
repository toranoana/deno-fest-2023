import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { basicAuth } from "basic_auth";
import { envConfig } from "./../utils/config.ts";

export function basicAuthHandler(req: Request, ctx: MiddlewareHandlerContext) {
  if (envConfig.DO_BASIC_AUTH === "true") {
    const authObject: { [key: string]: string } = {};
    authObject[envConfig.BASIC_USER] = envConfig.BASIC_PASSWORD;

    const unauthorized = basicAuth(req, "not auth", authObject);

    if (unauthorized) {
      return unauthorized;
    }
  }

  return ctx.next();
}
