'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Transaction,{foreignKey: "UserId"})
      User.hasMany(models.Report,{foreignKey: "UserId"})
    }
  }
  User.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: "Name Required" },
      },
    },
    email:{
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: { msg: "ID EMPLOYEE already exist" },
      validate: {
        notNull: { msg: "ID EMPLOYEE Required" },
        notEmpty: { msg: "ID EMPLOYEE cannot be empty" },
      },
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: "Password Required" },
        notEmpty: { msg: "Password cannot be empty" },
      },
    },
  }, {
    sequelize,
    hooks: {
      beforeCreate: (instance, options) => {

        let salt = bcrypt.genSaltSync(8);
        let hash = bcrypt.hashSync(instance.password, salt);

        instance.password = hash
      }
    },
    modelName: 'User',
  });
  return User;
};