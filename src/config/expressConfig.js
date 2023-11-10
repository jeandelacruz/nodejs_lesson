import express from "express";
import bodyParser from "body-parser";
import routers from "../infrastructure/routers";

export class ExpressConfig {
  constructor() {
    this.port = process.env.PORT;
    this.app = express();
    this._setMiddleware();
    this._setRouters();
  }

  _setMiddleware() {
    this.app.use(bodyParser.json());
  }

  _setRouters() {
    routers(this.app);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Express running on ${this.port}`);
    });
  }
}
