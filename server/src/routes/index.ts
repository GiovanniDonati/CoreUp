import { Router } from "express";
import { projectRouter } from "../modules/project/project.route";

export const RootRoutes: Router = Router();

RootRoutes.use("/projects", projectRouter);

RootRoutes.get('/', (req, res) => {
  res.json({ message: 'Server is on!' });
});
