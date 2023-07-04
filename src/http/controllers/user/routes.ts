import { FastifyInstance } from "fastify";
import { authenticate } from "./authenticate";
import { register } from "./register";

export const userRoutes = async (app: FastifyInstance) => {
  app.post("/register", register);
  app.post("/authenticate", authenticate);
};
