"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRouter_1 = __importDefault(require("./base/BaseRouter"));
const BlogController_1 = __importDefault(require("../controller/BlogController"));
const validate_1 = __importDefault(require("../helper/validate"));
const BlogSchema_1 = require("../schema/BlogSchema");
class BlogRoutes extends BaseRouter_1.default {
    routes() {
        this.router.get("", BlogController_1.default.findAll);
        this.router.get("/:id", BlogController_1.default.findById);
        this.router.post("", (0, validate_1.default)(BlogSchema_1.createBlogSchema), BlogController_1.default.create);
        this.router.patch("/:id", (0, validate_1.default)(BlogSchema_1.updateBlogSchema), BlogController_1.default.update);
        this.router.delete("/:id", BlogController_1.default.delete);
    }
}
exports.default = new BlogRoutes().router;
