'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.hasMany(models.Transaction,{foreignKey: "ItemId"})
      Item.hasMany(models.Report,{foreignKey: "ItemId"})
    }
  }
  Item.init({
    name:{
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: { msg: "Name Required" },
      },
    },
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};