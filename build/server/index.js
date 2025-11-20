import { createRequestHandler } from "@react-router/express";
import express from "express";
const app = express();
app.use(
  createRequestHandler({
    build: () => import("./assets/server-build-Bd81-I27.js"),
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
