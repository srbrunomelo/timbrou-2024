import { z } from "zod";

export const CategorySchema = z.object({
	id: z.string(),
	name: z.string(),
	description: z.string().optional(),
	createdAt: z.string(),
	updatedAt: z.string(),
});

export const CategoryCreateSchema = CategorySchema.omit({
	id: true,
	createdAt: true,
	updatedAt: true,
});
export const CategoryUpdateSchema = CategorySchema.omit({
	id: true,
	createdAt: true,
	updatedAt: true,
});

export type TCategory = z.infer<typeof CategorySchema>;
export type TCategoryCreate = z.infer<typeof CategoryCreateSchema>;
export type TCategoryUpdate = z.infer<typeof CategoryUpdateSchema>;
