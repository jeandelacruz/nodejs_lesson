import { models } from "../../infrastructure/models";
import { AuthService } from "./authService";
import { UserPasswordService } from "../users/usersPasswordService";
import { UserService } from "../users/usersService";
import { AuthController } from "./authController";

export class AuthRouter {
  constructor() {
    this.model = models.users;
    this.servicePassword = new UserPasswordService();
    this.serviceUser = new UserService(models, this.servicePassword);
    this.service = new AuthService(
      this.model,
      this.servicePassword,
      this.serviceUser
    );
    this.controller = new AuthController(this.service);
  }

  routers() {
    return [
      {
        path: "/auth/signin",
        method: "post",
        handler: (req, res) => this.controller.login(req, res),
      },
      {
        path: "/auth/signup",
        method: "post",
        handler: (req, res) => this.controller.register(req, res),
      },
    ];
  }
}
