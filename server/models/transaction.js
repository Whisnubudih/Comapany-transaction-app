'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.belongsTo(models.User,{foreignKey: "UserId"})
      Transaction.belongsTo(models.Item,{foreignKey: "ItemId"})
      Transaction.belongsTo(models.Company,{foreignKey: "CompanyId"})
      Transaction.hasMany(models.Report,{foreignKey: "TransactionId"})
    }
  }
  Transaction.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: "Name Required" },
      },
    },
    total: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: { msg: "total Required" },
      },
    },
    date: {
      allowNull: false,
      type: DataTypes.DATE,
      validate: {
        notNull: { msg: "date Required" },
      },
    },
    file: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: "file Required" },
      },
    },
    UserId: DataTypes.INTEGER,
    ItemId: DataTypes.INTEGER,
    CompanyId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};