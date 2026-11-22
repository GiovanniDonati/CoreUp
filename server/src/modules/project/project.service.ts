import { CreateError } from "../../exceptions/create-error";
import { ErrorCode } from "../../exceptions/error-codes";
import { ProjectRepository } from "./project.repository";
import type { CreateProjectSchemaInput, UpdateProjectSchemaInput } from "./project.schema";

const projectNotFound = (id: string) =>
  new CreateError(ErrorCode.NOT_FOUND, { message: `Projeto ${id} não encontrado` });

export class ProjectService {
  private projectRepository: ProjectRepository;

  constructor() {
    this.projectRepository = new ProjectRepository();
  }

  createProject(data: CreateProjectSchemaInput) {
    return this.projectRepository.create(data);
  }

  listProjects() {
    return this.projectRepository.findAll();
  }

  async getProjectById(id: string) {
    const project = await this.projectRepository.findById(id);
    if (!project) throw projectNotFound(id);
    return project;
  }

  updateProject(id: string, data: UpdateProjectSchemaInput) {
    return this.projectRepository.update(id, data);
  }

  deleteProject(id: string) {
    return this.projectRepository.delete(id);
  }
}
