import { UserInterface } from "./usersInterface";

export class UserService extends UserInterface {
  constructor(models) {
    super();
    this.userModel = models.users;
    this.roleModel = models.roles;
  }

  async getAll() {
    return await this.userModel.findAll({
      attributes: {
        exclude: ["password"],
      },
      where: {
        status: true,
      },
      order: [["id", "ASC"]],
      include: {
        model: this.roleModel,
        attributes: {
          exclude: ["status", "created_at", "updated_at"],
        },
      },
    });
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
