'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('compra', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      cliente_id: { type: Sequelize.INTEGER, allowNull: false, references: { model: 'cliente', key: 'id' }, onDelete: 'CASCADE' },
      produto_id: { type: Sequelize.INTEGER, allowNull: false, references: { model: 'produto', key: 'id' }, onDelete: 'CASCADE' },
      quantidade_comprada: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 1 },
      comprado_em: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('compra');
  }
};
