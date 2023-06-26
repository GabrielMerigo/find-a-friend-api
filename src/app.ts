import fastify from "fastify";
import { petRoutes } from "./http/controllers/pet/routes";

export const app = fastify();

app.register(petRoutes);
