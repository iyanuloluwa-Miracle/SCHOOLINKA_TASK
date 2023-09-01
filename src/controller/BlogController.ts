import { Request, Response } from "express";
import { Blog } from "../model/Blogs";
import { BlogRepo } from "../repository/BlogRepo";
// import validate from "../helper/validate";
// import { createBlogSchema, updateBlogSchema } from "../schema/BlogSchema";

class BlogController {
  async create(req: Request, res: Response) {
    try {
      const new_blog = new Blog();
      new_blog.title = req.body.title;
      new_blog.content = req.body.content;
      new_blog.author = req.body.author;

      await new BlogRepo().save(new_blog);

      res.status(201).json({
        status: "Created!",
        message: "Successfully created blog post!",
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = parseInt(req.params["id"]);
      await new BlogRepo().delete(id);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully deleted blog post!",
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params["id"]);
      const blogPost = await new BlogRepo().retrieveById(id);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully fetched blog post by id!",
        data: blogPost,
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const new_blog = await new BlogRepo().retrieveAll();

      res.status(200).json({
        status: "Ok!",
        message: "Successfully fetched all note data!",
        data: new_blog,
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = parseInt(req.params["id"]);
      const updated_note = new Blog();

      updated_note.id = id;
      updated_note.title = req.body.title;
      updated_note.content = req.body.content;
      updated_note.author = req.body.author;

      await new BlogRepo().update(updated_note);

      res.status(200).json({
        status: "Ok!",
        message: "Successfully updated blog post!",
      });
    } catch (err) {
      res.status(500).json({
        status: "Internal Server Error!",
        message: "Internal Server Error!",
      });
    }
  }
}

export default new BlogController();
