import "dotenv/config";
import { ExpressConfig } from "./config/expressConfig";
import { UserRouter } from "./modules/users/usersRouter";
import { RoleRouter } from "./modules/roles/rolesRouter";
import { AuthRouter } from "./modules/auth/authRouter";

const express = new ExpressConfig();

const userRouter = new UserRouter();
const roleRouter = new RoleRouter();
const authRouter = new AuthRouter();
express.setRouters(userRouter.routers());
express.setRouters(roleRouter.routers());
express.setRouters(authRouter.routers());

express.listen();
