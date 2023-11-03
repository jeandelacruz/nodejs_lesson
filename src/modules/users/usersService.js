import { UserInterface } from "./usersInterface";

export class UserService extends UserInterface {
  constructor(userModel) {
    super();
    this.userModel = userModel;
  }

  async getAll() {
    return await this.userModel.findAll();
  }

  getById(id) {
    //return this.userModel.getById(id);
  }

  create(body) {
    //return this.userModel.create(body);
  }

  update(id, body) {
    //return this.userModel.update(id, body);
  }

  delete(id) {
    //return this.userModel.delete(id);
  }
}
