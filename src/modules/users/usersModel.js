import { Model, DataTypes } from "sequelize";

class UserModel extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: DataTypes.STRING,
        },
      },
      {
        sequelize,
        tableName: "users",
        modelName: "users",
      }
    );
  }
}

export default UserModel;
