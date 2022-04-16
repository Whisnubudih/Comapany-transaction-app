'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Report extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Report.belongsTo(models.User,{foreignKey: "UserId"})
      Report.belongsTo(models.Item,{foreignKey: "ItemId"})
      Report.belongsTo(models.Company,{foreignKey: "CompanyId"})
      Report.belongsTo(models.Transaction,{foreignKey: "TransactionId"})
    }
  }
  Report.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: "Name Required" },
      },
    },
    UserId: DataTypes.INTEGER,
    ItemId: DataTypes.INTEGER,
    CompanyId: DataTypes.INTEGER,
    TransactionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Report',
  });
  return Report;
};