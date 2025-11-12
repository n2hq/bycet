import dotenv from 'dotenv'

import compression from "compression";
import express from "express";
import morgan from "morgan";

const envFileMap = {
  development: './env/.env.dev',
  test: './env/.env.test',
  production: './env/.env.prod'
}

let nodeEnv;


switch (process.env.NODE_ENV) {
  case 'development':
    nodeEnv = envFileMap.development
    break;
  case 'production':
    nodeEnv = envFileMap.production
    break;
  default:
    nodeEnv = envFileMap.test
}

dotenv.config({
  path: nodeEnv || './env/.env.prod'
})


// Short-circuit the type-checking of the built output.
const BUILD_PATH = "./build/server/index.js";
const DEVELOPMENT = process.env.NODE_ENV === "development";
const PORT = Number.parseInt(process.env.PORT || process.env.VITE_PORT || '3000');

const app = express();

app.use(compression());
app.disable("x-powered-by");

if (DEVELOPMENT) {
  console.log("Starting development server");
  const viteDevServer = await import("vite").then((vite) =>
    vite.createServer({
      server: { middlewareMode: true },
    }),
  );
  app.use(viteDevServer.middlewares);
  app.use(async (req, res, next) => {
    try {
      const source = await viteDevServer.ssrLoadModule("./server/app.ts");
      return await source.app(req, res, next);
    } catch (error) {
      if (typeof error === "object" && error instanceof Error) {
        viteDevServer.ssrFixStacktrace(error);
      }
      next(error);
    }
  });
} else {
  console.log(`Starting ${process.env.NODE_ENV} server`);
  app.use(
    "/assets",
    express.static("build/client/assets", { immutable: true, maxAge: "1y" }),
  );
  app.use(morgan("tiny"));
  app.use(express.static("build/client", { maxAge: "1h" }));
  app.use(await import(BUILD_PATH).then((mod) => mod.app));
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
