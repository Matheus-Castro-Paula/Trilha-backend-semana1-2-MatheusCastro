'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('produto', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      nome_produto: { type: Sequelize.STRING(50), allowNull: false },
      valor_produto: { type: Sequelize.DECIMAL(10,2), allowNull: false },
      quantidade_estoque: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('produto');
  }
};
