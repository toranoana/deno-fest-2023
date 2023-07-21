import "https://deno.land/std@0.195.0/dotenv/load.ts";

const envConfig = {
  DO_BASIC_AUTH: Deno.env.get("DO_BASIC_AUTH")!,
  BASIC_USER: Deno.env.get("BASIC_USER")!,
  BASIC_PASSWORD: Deno.env.get("BASIC_PASSWORD")!
};

export { envConfig };