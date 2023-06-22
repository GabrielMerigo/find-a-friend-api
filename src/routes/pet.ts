import { FastifyInstance } from "fastify";

export const petRoutes = async (app: FastifyInstance) => {
  app.post("/", () => {});
  app.get("/:cityId", () => {});
};
