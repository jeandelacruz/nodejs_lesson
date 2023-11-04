import "dotenv/config";
import "./infrastructure/models";
import { ExpressConfig } from "./config/expressConfig";
import { UserRouter } from "./modules/users/usersRouter";
import { RoleRouter } from "./modules/roles/rolesRouter";

const express = new ExpressConfig();

const userRouter = new UserRouter();
const roleRouter = new RoleRouter();
express.setRouters(userRouter.routers());
express.setRouters(roleRouter.routers());

express.listen();
