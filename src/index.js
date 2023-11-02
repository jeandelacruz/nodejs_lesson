import { ExpressConfig } from "./config/expressConfig";
import { UserRouter } from "./modules/users/userRouter";

const express = new ExpressConfig();

const userRouter = new UserRouter();
express.setRouters(userRouter.routers());

express.listen();
