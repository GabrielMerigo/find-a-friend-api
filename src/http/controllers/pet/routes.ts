import { FastifyInstance } from "fastify";
import { create } from "./create";
import { getPetByCityAndState } from "./getPetByCityAndState";

export const petRoutes = async (app: FastifyInstance) => {
  app.post("/pet", create);
  app.get("/pet", getPetByCityAndState);
};
