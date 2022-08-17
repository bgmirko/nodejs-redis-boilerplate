'use strict';
import { Model } from 'sequelize';

interface UserAttributes {
  firstName: string;
  lastName: string;
  email: string;
}

module.exports = (sequelize, DataTypes) => {
  class User extends Model<UserAttributes> implements UserAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     firstName: string;
     lastName: string;
     email: string;

    static associate(models) {
      // define association here
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};