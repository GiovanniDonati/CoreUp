import type { Request, Response } from "express";
import {
  createProjectSchema,
  projectEntity,
  updateProjectSchema,
} from "./project.schema";
import { ProjectService } from "./project.service";

export class ProjectController {
  private projectService: ProjectService;

  constructor() {
    this.projectService = new ProjectService();
  }

  list = async (_req: Request, res: Response) => {
    const projects = await this.projectService.listProjects();
    res.json(projects);
  };

  create = async (req: Request, res: Response) => {
    const data = createProjectSchema.parse(req.body);
    const project = await this.projectService.createProject(data);
    res.status(201).json(project);
  };

  getById = async (req: Request, res: Response) => {
    const id = projectEntity.shape.id.parse(req.params.id);
    const project = await this.projectService.getProjectById(id);
    res.json(project);
  };

  update = async (req: Request, res: Response) => {
    const id = projectEntity.shape.id.parse(req.params.id);
    const data = updateProjectSchema.parse(req.body);
    const project = await this.projectService.updateProject(id, data);
    res.json(project);
  };

  remove = async (req: Request, res: Response) => {
    const id = projectEntity.shape.id.parse(req.params.id);
    await this.projectService.deleteProject(id);
    res.status(204).end();
  };
}
