import { z } from 'zod';

export const ProductSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  description: z.string().optional(),
  price: z.number().positive(),
  paymentLink: z.string().url(),
  images: z.array(z.object({
    url: z.string(),
    alt: z.string(),
    default: z.boolean(),
  })),
  category: z.object({
    id: z.string(),
    name: z.string(),
  }),
  hasLandingPage: z.boolean().default(false),
  landing: z.string().nullable().default(null),
  createdAt: z.string(),
	updatedAt: z.string(),
});

export const ProductCreateSchema = ProductSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
}).merge(z.object({
  category: z.string(),
  landing: z.string().nullable().default(null),
}))

export const ProductUpdateSchema = ProductCreateSchema.partial();
