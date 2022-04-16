'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      ItemId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Items',
          key: 'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      CompanyId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Companies',
          key: 'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      TransactionId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Transactions',
          key: 'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Reports');
  }
};