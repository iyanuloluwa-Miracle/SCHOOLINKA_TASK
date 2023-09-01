"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRepo = void 0;
const Blogs_1 = require("../model/Blogs");
class BlogRepo {
    save(blog) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Blogs_1.Blog.create({
                    title: blog.title,
                    content: blog.content,
                    author: blog.author,
                });
            }
            catch (error) {
                throw new Error("Failed to create Blog Post!");
            }
        });
    }
    update(blog) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const existingBlog = yield Blogs_1.Blog.findOne({
                    where: {
                        id: blog.id,
                    },
                });
                if (!existingBlog) {
                    throw new Error("Blog not found!");
                }
                existingBlog.title = blog.title;
                existingBlog.content = blog.content;
                existingBlog.author = blog.author;
                yield existingBlog.save();
            }
            catch (error) {
                throw new Error("Failed to update Blog!");
            }
        });
    }
    delete(blogId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const existingBlog = yield Blogs_1.Blog.findOne({
                    where: {
                        id: blogId,
                    },
                });
                if (!existingBlog) {
                    throw new Error("Blog not found!");
                }
                yield existingBlog.destroy();
            }
            catch (error) {
                throw new Error("Failed to delete Blog!");
            }
        });
    }
    retrieveById(blogId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const existingBlog = yield Blogs_1.Blog.findOne({
                    where: {
                        id: blogId,
                    },
                });
                if (!existingBlog) {
                    throw new Error("Blog not found!");
                }
                return existingBlog;
            }
            catch (error) {
                throw new Error("Failed to retrieve Blog!");
            }
        });
    }
    retrieveAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Blogs_1.Blog.findAll();
            }
            catch (error) {
                throw new Error("Failed to retrieve Blog!");
            }
        });
    }
}
exports.BlogRepo = BlogRepo;
