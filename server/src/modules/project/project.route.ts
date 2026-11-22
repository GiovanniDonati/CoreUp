import { Router } from "express";
import { ProjectController } from "./project.controller";

const controller = new ProjectController();

export const projectRouter = Router();

projectRouter.get("/", controller.list);
projectRouter.post("/", controller.create);
projectRouter.get("/:id", controller.getById);
projectRouter.patch("/:id", controller.update);
projectRouter.delete("/:id", controller.remove);
