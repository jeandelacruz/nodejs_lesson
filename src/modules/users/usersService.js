import { UserInterface } from "./usersInterface";

export class UserService extends UserInterface {
  constructor(userModel) {
    super();
    this.userModel = userModel;
  }

  async getAll() {
    return await this.userModel.findAll();
  }

  async getById(id) {
    return await this.userModel.findOne({ where: id });
  }

  async create(body) {
    return await this.userModel.create(body);
  }

  async update(id, body) {
    const user = await this.getById(id);
    if (user) {
      await user.update(body);
    }
    return user;
  }

  async delete(id) {
    const user = await this.getById(id);
    if (user) {
      await user.destroy();
    }
    return user;
  }
}
