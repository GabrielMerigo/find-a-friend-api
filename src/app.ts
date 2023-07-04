import fastifyCookie from "@fastify/cookie";
import fastify from "fastify";
import { petRoutes } from "./http/controllers/pet/routes";
import { userRoutes } from "./http/controllers/user/routes";

import { fastifyJwt } from "@fastify/jwt";
import { env } from "./env";

export const app = fastify();

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  cookie: {
    cookieName: "refreshToken",
    signed: false,
  },
  sign: {
    expiresIn: "10m",
  },
});

app.register(fastifyCookie);
app.register(petRoutes);
app.register(userRoutes, {
  prefix: "user",
});
