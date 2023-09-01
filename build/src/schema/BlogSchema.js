"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogSchema = exports.createBlogSchema = void 0;
const zod_1 = require("zod");
// Validation schema for creating a blog post
exports.createBlogSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z
            .string()
            .min(1, { message: "Title must be greater than 1 character!" }),
        content: zod_1.z
            .string()
            .min(4, { message: "Content must be greater than 4 characters!" }),
        author: zod_1.z
            .string()
            .min(1, { message: "Author name must be greater than 1 character!" }),
    }),
});
// Validation schema for updating a blog post
exports.updateBlogSchema = zod_1.z.object({
    params: zod_1.z.object({ id: zod_1.z.string() }),
    body: zod_1.z.object({
        title: zod_1.z
            .string()
            .min(1, { message: "Title must be greater than 1 character!" }),
        content: zod_1.z
            .string()
            .min(4, { message: "Content must be greater than 4 characters!" }),
        author: zod_1.z
            .string()
            .min(1, { message: "Author name must be greater than 1 character!" }),
    }).partial(),
});
