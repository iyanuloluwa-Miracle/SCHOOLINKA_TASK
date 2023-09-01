import { z } from "zod";

// Validation schema for creating a blog post
export const createBlogSchema = z.object({
  body: z.object({
    title: z
      .string()
      .min(1, { message: "Title must be greater than 1 character!" }),
    content: z
      .string()
      .min(4, { message: "Content must be greater than 4 characters!" }),
    author: z
      .string()
      .min(1, { message: "Author name must be greater than 1 character!" }),
  }),
});

// Validation schema for updating a blog post
export const updateBlogSchema = z.object({
  params: z.object({ id: z.string() }),
  body: z.object({
    title: z
      .string()
      .min(1, { message: "Title must be greater than 1 character!" }),
    content: z
      .string()
      .min(4, { message: "Content must be greater than 4 characters!" }),
    author: z
      .string()
      .min(1, { message: "Author name must be greater than 1 character!" }),
  }).partial(),
});
