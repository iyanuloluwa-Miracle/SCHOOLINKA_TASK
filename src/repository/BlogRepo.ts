import { Blog } from "../model/Blogs";

interface INoteRepo {
  save(blog: Blog): Promise<void>;
  update(blog: Blog): Promise<void>;
  delete(blogId: number): Promise<void>;
  retrieveById(blogId: number): Promise<Blog>;
  retrieveAll(): Promise<Blog[]>;
  
}

export class BlogRepo implements INoteRepo {
  async save(blog: Blog): Promise<void> {
    try {
      await Blog.create({
        title: blog.title,
        content: blog.content,
        author: blog.author,
      });
    } catch (error) {
      throw new Error("Failed to create Blog Post!");
    }
  }

  async update(blog: Blog): Promise<void> {
    try {
      const existingBlog = await Blog.findOne({
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

      await existingBlog.save();
    } catch (error) {
      throw new Error("Failed to update Blog!");
    }
  }

  async delete(blogId: number): Promise<void> {
    try {
      const existingBlog = await Blog.findOne({
        where: {
          id: blogId,
        },
      });
      if (!existingBlog) {
        throw new Error("Blog not found!");
      }

      await existingBlog.destroy();
    } catch (error) {
      throw new Error("Failed to delete Blog!");
    }
  }

  async retrieveById(blogId: number): Promise<Blog> {
    try {
      const existingBlog = await Blog.findOne({
        where: {
          id: blogId,
        },
      });
      if (!existingBlog) {
        throw new Error("Blog not found!");
      }
      return existingBlog;
    } catch (error) {
      throw new Error("Failed to retrieve Blog!");
    }
  }

  async retrieveAll(): Promise<Blog[]> {
    try {
      return await Blog.findAll();
    } catch (error) {
      throw new Error("Failed to retrieve Blog!");
    }
  }
}
