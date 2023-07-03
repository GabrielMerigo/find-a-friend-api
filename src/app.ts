import fastify from "fastify";
import { petRoutes } from "./http/controllers/pet/routes";
import { userRoutes } from "./http/controllers/user/routes";

export const app = fastify();

app.register(petRoutes);
app.register(userRoutes);
