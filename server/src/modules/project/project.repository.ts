import { prisma } from "../../config/prisma";
import type { Project } from "../../generated/prisma";
import {
  type CreateProjectSchemaInput,
  type ProjectEntity,
  type UpdateProjectSchemaInput,
} from "./project.schema";

export class ProjectRepository {
  async create(data: CreateProjectSchemaInput): Promise<ProjectEntity> {
    const project = await prisma.project.create({
      data: {
        ...data,
        startedAt: new Date(),
      },
    });

    return this.toEntity(project);
  }

  async findById(id: string): Promise<ProjectEntity | null> {
    const project = await prisma.project.findUnique({ where: { id } });
    return project ? this.toEntity(project) : null;
  }

  async findAll(): Promise<ProjectEntity[]> {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: "desc" },
    });

    return projects.map((project) => this.toEntity(project));
  }

  async update(id: string, data: UpdateProjectSchemaInput): Promise<ProjectEntity> {
    const project = await prisma.project.update({ where: { id }, data });
    return this.toEntity(project);
  }

  async delete(id: string): Promise<void> {
    await prisma.project.delete({ where: { id } });
  }

  private toEntity(project: Project): ProjectEntity {
    return {
      ...project,
      description: project.description ?? undefined,
    };
  }
}
