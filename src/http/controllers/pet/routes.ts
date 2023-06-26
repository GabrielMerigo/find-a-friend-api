import { FastifyInstance } from "fastify";
import { create } from "./create";
import { getPetByCityId } from "./getPetByCityId";

export const petRoutes = async (app: FastifyInstance) => {
  app.post("/pet", create);
  app.get("/pet/:cityId", getPetByCityId);
};
