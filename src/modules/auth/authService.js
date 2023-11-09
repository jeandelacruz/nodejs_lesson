import { AuthInterface } from "./authInterface";

export class AuthService extends AuthInterface {
  constructor(userModel) {
    super();
    this.userModel = userModel;
  }

  async _getByUsername(username) {
    return await this.userModel.findOne({ where: { username } });
  }

  async signIn(body) {
    const { username, password } = body;
    const user = await this._getByUsername(username);
    console.log(user);
    if (user) {
    }
    return user;
  }

  signUp(body) {}

  refreshToken(body) {}

  resetPassword(body) {}
}
