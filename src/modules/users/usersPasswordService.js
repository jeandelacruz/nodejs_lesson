import { UserPasswordInterface } from "./usersInterface";
import { genSalt, hash } from "bcryptjs";
import config from "../../config/authConfig";

export class UserPasswordService extends UserPasswordInterface {
  async hashPassword(password) {
    const salt = await genSalt(config.rounds);
    return await hash(password, salt);
  }
}
