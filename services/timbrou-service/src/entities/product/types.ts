import { z } from 'zod';
import { ProductCreateSchema, ProductSchema, ProductUpdateSchema } from './schemas';

export type TProduct = z.infer<typeof ProductSchema>;
export type TProductCreate = z.infer<typeof ProductCreateSchema>;
export type TProductUpdate = z.infer<typeof ProductUpdateSchema>;
