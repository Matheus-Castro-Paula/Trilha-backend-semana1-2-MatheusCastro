module.exports = (sequelize, DataTypes) => {
  const Compra = sequelize.define('Compra', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    cliente_id: { type: DataTypes.INTEGER, allowNull: false },
    produto_id: { type: DataTypes.INTEGER, allowNull: false },
    quantidade_comprada: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
    comprado_em: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
  }, {
    tableName: 'compra',
    timestamps: false
  });

  Compra.associate = function(models) {
    Compra.belongsTo(models.Cliente, { foreignKey: 'cliente_id', onDelete: 'CASCADE' });
    Compra.belongsTo(models.Produto, { foreignKey: 'produto_id', onDelete: 'CASCADE' });
  };

  return Compra;
};