import fastify from "fastify";
import { petRoutes } from "./routes/pet";

export const app = fastify();

app.register(petRoutes, { prefix: "pet" });
