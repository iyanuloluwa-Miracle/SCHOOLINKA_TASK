import BaseRoutes from "./base/BaseRouter";
import BlogController from "../controller/BlogController";
import validate from "../helper/validate";
import { createBlogSchema, updateBlogSchema } from "../schema/BlogSchema";


class BlogRoutes extends BaseRoutes {
    public routes(): void {
      this.router.get("", BlogController.findAll);
      this.router.get("/:id", BlogController.findById);
      this.router.post("", validate(createBlogSchema), BlogController.create);
      this.router.patch("/:id", validate(updateBlogSchema), BlogController.update);
      this.router.delete("/:id", BlogController.delete);
      this.router.get("/paginated", BlogController.findAllPaginated);
    }
}


export default new BlogRoutes().router
  