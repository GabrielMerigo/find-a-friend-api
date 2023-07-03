import { FastifyInstance } from "fastify";
import { register } from "./register";

export const userRoutes = async (app: FastifyInstance) => {
  app.post("/user", register);
};
