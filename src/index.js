import "dotenv/config";
import "./utils/models";
import { ExpressConfig } from "./config/expressConfig";
import { UserRouter } from "./modules/users/usersRouter";

const express = new ExpressConfig();

const userRouter = new UserRouter();
express.setRouters(userRouter.routers());

express.listen();
