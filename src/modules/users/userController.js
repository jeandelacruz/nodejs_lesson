export class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  getAllUsers(req, res) {
    return res.json(this.userService.getAllUsers());
  }

  getUserById(req, res) {
    const userID = req.params.id;
    const user = this.userService.getUserById(parseInt(userID));
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    return res.json(user);
  }

  createUser(req, res) {
    const user = this.userService.createUser(req.body);
    return res.status(201).json(user);
  }

  updateUser(req, res) {
    const userID = req.params.id;
    const user = this.userService.updateUser(parseInt(userID), req.body);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    return res.json(user);
  }

  deleteUser(req, res) {
    const userID = req.params.id;
    const deleted = this.userService.deleteUser(parseInt(userID));
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
