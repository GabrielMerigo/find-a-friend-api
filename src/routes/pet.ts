import { FastifyInstance } from "fastify";
import { z } from "zod";

export const petRoutes = async (app: FastifyInstance) => {
  app.post("/", (request, response) => {
    const petBodySchema = z.object({
      age: z.enum(["CUB", "MIDDLE_AGE", "OLD"]),
      name: z.string(),
      color: z.string(),
      small_size: z.enum(["SMALL", "MEDIUM", "BIG", "EXTRA_BIG"]),
      city: z.string(),
      energy_level: z.enum(["LOW", "MEDIUM", "HIGH"]),
      independencie_level: z.enum(["LOW", "MEDIUM", "HIGH"]),
      type: z.enum(["CAT", "DOG"]),
      organization_id: z.string(),
    });

    const petBodyRequest = petBodySchema.parse(request.body);
  });

  app.get("/:cityId", () => {});
};
