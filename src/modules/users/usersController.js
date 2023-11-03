export class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  async getAllUsers(req, res) {
    return res.json(await this.userService.getAll());
  }

  async getUserById(req, res) {
    const userID = req.params.id;
    const user = await this.userService.getById(parseInt(userID));
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    return res.json(user);
  }

  async createUser(req, res) {
    const user = await this.userService.create(req.body);
    return res.status(201).json(user);
  }

  async updateUser(req, res) {
    const userID = req.params.id;
    const user = await this.userService.update(parseInt(userID), req.body);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    return res.json(user);
  }

  async deleteUser(req, res) {
    const userID = req.params.id;
    const deleted = await this.userService.delete(parseInt(userID));
    if (!deleted) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    return res.status(204).send("");
  }
}

/**
 * export { UserController }
 * import { UserController } from './userController.js'
 * -------------------------
 * export default UserController
 * import UserC from './userController.js'
 *
 * const userController = new UserC();
 * -------------------------
 * export default new UserController
 * import UserController from './userController.js'
 *
 * UserController.createUser();
 */
