'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Company.hasMany(models.Transaction,{foreignKey: "CompanyId"})
      Company.hasMany(models.Report,{foreignKey: "CompanyId"})
    }
  }
  Company.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: "Name Required" },
      },
    },
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};