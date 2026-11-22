import { z } from "zod";

export const projectEntity = z.object({
  id: z.string().uuid(),
  title: z.string().max(200),
  description: z.string().max(500).optional(),
  owner: z.string(),
  createdAt: z.date(),
  startedAt: z.date()
});

export const createProjectSchema = projectEntity.pick({
  title: true,
  description: true,
  owner: true
});

export const updateProjectSchema = projectEntity.partial().pick({
  title: true,
  description: true,
  owner: true,
  startedAt: true
});

export const projectResponseSchema = projectEntity

export type ProjectEntity = z.infer<typeof projectEntity>;
export type CreateProjectSchemaInput = z.infer<typeof createProjectSchema>;
export type UpdateProjectSchemaInput = z.infer<typeof updateProjectSchema>;
export type ProjectResponseSchemaInput = z.infer<typeof projectResponseSchema>;