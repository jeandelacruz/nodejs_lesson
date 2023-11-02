import express from "express";
import bodyParser from "body-parser";

export class ExpressConfig {
  constructor() {
    this.port = 3000;
    this.app = express();
    this._setMiddleware();
  }

  _setMiddleware() {
    this.app.use(bodyParser.json());
  }

  setRouters(routes) {
    routes.forEach((route) => {
      this.app[route.method](route.path, route.handler);
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Express running on ${this.port}`);
    });
  }
}
