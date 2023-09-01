import { z } from "zod";

export const createBlogSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(1, { message: "Name must be greater than 1 characters!" }),
    description: z
      .string()
      .min(4, { message: "Description must be greater than 4 characters!" }),
  }),
});

export const updateBlogSchema = z.object({
  params: z.object({ id: z.string() }),
  body: z
    .object({
      name: z
        .string()
        .min(1, { message: "Name must be greater than 1 characters!" }),
      description: z
        .string()
        .min(4, { message: "Description must be greater than 4 characters!" }),
    })
    .partial(),
});
