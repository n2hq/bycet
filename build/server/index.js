import { createRequestHandler } from "@react-router/express";
import express from "express";
const app = express();
app.use(
  createRequestHandler({
    build: () => import("./assets/server-build-BxarC1QK.js"),
    getLoadContext() {
      return {
        VALUE_FROM_EXPRESS: "Hello from Express"
      };
    }
  })
);
export {
  app
};
