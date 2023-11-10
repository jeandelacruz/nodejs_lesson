import { Router } from "express";
import { models } from "../../infrastructure/models";
import { UserService } from "./usersService";
import { UserPasswordService } from "./usersPasswordService";
import { UserController } from "./usersController";
import { isAuthenticated } from "../../middlewares/authenticationMiddleware";

class UserRouter {
  constructor() {
    this.router = Router();
    this.servicePassword = new UserPasswordService();
    this.service = new UserService(models, this.servicePassword);
    this.controller = new UserController(this.service);
  }

  init() {
    // Manera Global
    // this.router.use(isAuthenticated);
    return this.router
      .get("/", [isAuthenticated], (req, res) =>
        this.controller.getAllUsers(req, res)
      )
      .post("/", (req, res) => this.controller.createUser(req, res))
      .get("/:id", (req, res) => this.controller.getUserById(req, res))
      .patch("/:id", (req, res) => this.controller.updateUser(req, res))
      .delete("/:id", (req, res) => this.controller.deleteUser(req, res));
  }
}

export default new UserRouter();
