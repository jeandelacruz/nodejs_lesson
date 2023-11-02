export class UserService {
  constructor(userModel) {
    this.userModel = userModel;
  }

  getAllUsers() {
    return this.userModel.getAll();
  }

  getUserById(id) {
    return this.userModel.getById(id);
  }

  createUser(body) {
    return this.userModel.create(body);
  }

  updateUser(id, body) {
    return this.userModel.update(id, body);
  }

  deleteUser(id) {
    return this.userModel.delete(id);
  }
}
