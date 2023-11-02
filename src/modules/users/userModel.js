import { UserModelInterface } from "./userModelInterface";

export class UserModel extends UserModelInterface {
  constructor() {
    super();
    this.users = [];
  }

  getAll() {
    return this.users;
  }

  getById(id) {
    return this.users.find((u) => u.id === id);
  }

  create(body) {
    const user = {
      id: this.users.length + 1, // simulación para el autoincrementable
      name: body.name,
    };
    this.users.push(user);
    return user;
  }

  update(id, body) {
    const user = this.getById(id);
    if (user) {
      user.name = body.name;
    }
    return user;
  }

  delete(id) {
    const index = this.users.findIndex((u) => u.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
    return index !== -1;
  }
}
