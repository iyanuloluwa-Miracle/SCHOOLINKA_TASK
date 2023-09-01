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
        name: Blog.name,
        description: Blog.description,
      });
    } catch (error) {
      throw new Error("Failed to create Blog Post!");
    }
  }
  async update(note: Note): Promise<void> {
    try {
      const new_note = await Note.findOne({
        where: {
          id: note.id,
        },
      });
      if (!new_note) {
        throw new Error("Note not found!");
      }
      new_note.name = note.name;
      new_note.description = note.description;

      await new_note.save();
    } catch (error) {
      throw new Error("Failed to create note!");
    }
  }
  async delete(noteId: number): Promise<void> {
    try {
      const new_note = await Note.findOne({
        where: {
          id: noteId,
        },
      });
      if (!new_note) {
        throw new Error("Note not found!");
      }

      await new_note.destroy();
    } catch (error) {
      throw new Error("Failed to create note!");
    }
  }
  async retrieveById(noteId: number): Promise<Note> {
    try {
      const new_note = await Note.findOne({
        where: {
          id: noteId,
        },
      });
      if (!new_note) {
        throw new Error("Note not found!");
      }
      return new_note;
    } catch (error) {
      throw new Error("Failed to create note!");
    }
  }
  async retrieveAll(): Promise<Note[]> {
    try {
     return await Note.findAll();
    } catch (error) {
      throw new Error("Failed to create note!");
    }
  }
  
}
