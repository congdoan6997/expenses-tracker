import app from "./app";
import { z } from "zod";
const ServeEnv = z.object({
  PORT: z
    .string()
    .regex(/^\d+$/, "Port must be a numeric string")
    .default("3000")
    .transform(Number),
});
const ProcessEnv = ServeEnv.parse(process.env);

const server = Bun.serve({
  fetch: app.fetch,
  hostname: "0.0.0.0",
  port: ProcessEnv.PORT,
});

console.log(`Server listening on ${server.port}`);
