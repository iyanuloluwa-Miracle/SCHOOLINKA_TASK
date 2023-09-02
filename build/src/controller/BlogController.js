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
const Blogs_1 = require("../model/Blogs");
const BlogRepo_1 = require("../repository/BlogRepo");
const sequelize_1 = require("sequelize");
// import validate from "../helper/validate";
// import { createBlogSchema, updateBlogSchema } from "../schema/BlogSchema";
class BlogController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_blog = new Blogs_1.Blog();
                new_blog.title = req.body.title;
                new_blog.content = req.body.content;
                new_blog.author = req.body.author;
                yield new BlogRepo_1.BlogRepo().save(new_blog);
                res.status(201).json({
                    status: "Created!",
                    message: "Successfully created blog post!",
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params["id"]);
                yield new BlogRepo_1.BlogRepo().delete(id);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully deleted blog post!",
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    findById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params["id"]);
                const blogPost = yield new BlogRepo_1.BlogRepo().retrieveById(id);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched blog post by id!",
                    data: blogPost,
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_blog = yield new BlogRepo_1.BlogRepo().retrieveAll();
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully fetched all note data!",
                    data: new_blog,
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params["id"]);
                const updated_note = new Blogs_1.Blog();
                updated_note.id = id;
                updated_note.title = req.body.title;
                updated_note.content = req.body.content;
                updated_note.author = req.body.author;
                yield new BlogRepo_1.BlogRepo().update(updated_note);
                res.status(200).json({
                    status: "Ok!",
                    message: "Successfully updated blog post!",
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!",
                });
            }
        });
    }
    findAllPaginated(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const page = parseInt(req.query.page) || 1;
                const search = req.query.search || "";
                const pageSize = 5;
                // Calculate the offset based on the page number
                const offset = (page - 1) * pageSize;
                // Use Sequelize to fetch paginated and filtered data
                const { count, rows } = yield Blogs_1.Blog.findAndCountAll({
                    where: {
                        [sequelize_1.Op.or]: [
                            { title: { [sequelize_1.Op.iLike]: `%${search}%` } },
                            { content: { [sequelize_1.Op.iLike]: `%${search}%` } },
                            { author: { [sequelize_1.Op.iLike]: `%${search}%` } }, // Case-insensitive search by author
                        ],
                    },
                    offset,
                    limit: pageSize,
                });
                res.status(200).json({
                    status: "Ok",
                    message: "Successfully fetched paginated blog posts",
                    data: rows,
                    total: count,
                });
            }
            catch (error) {
                res.status(500).json({
                    status: "Internal Server Error",
                    message: "Failed to retrieve paginated blog posts",
                });
            }
        });
    }
}
exports.default = new BlogController();
