import { UserInterface } from "./usersInterface";

export class UserService extends UserInterface {
  constructor(models, passwordService) {
    super();
    this.userModel = models.users;
    this.roleModel = models.roles;
    this.passwordService = passwordService;
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
      if ("password" in body) {
        const hashPassword = await this.passwordService.hashPassword(
          body.password
        );
        body.password = hashPassword;
      }
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
