import { FastifyInstance } from "fastify";
import { create } from "./create";
import { getByCharacteristics } from "./getByCharacteristics";
import { getById } from "./getById";
import { getByCityAndState } from "./getPetByCityAndState";

export const petRoutes = async (app: FastifyInstance) => {
  app.post("/pet", create);
  app.get("/pet/location", getByCityAndState);
  app.get("/pet/characteristics", getByCharacteristics);
  app.get("/pet/:id", getById);
};
