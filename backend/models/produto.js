module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define('Produto', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nome_produto: { type: DataTypes.STRING(50), allowNull: false },
    valor_produto: { type: DataTypes.DECIMAL(10,2), allowNull: false },
    quantidade_estoque: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 }
  }, {
    tableName: 'produto',
    timestamps: false
  });

  Produto.associate = function(models) {
    Produto.hasMany(models.Compra, { foreignKey: 'produto_id' });
  };

  return Produto;
};