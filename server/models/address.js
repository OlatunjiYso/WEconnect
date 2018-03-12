
export default (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    businessId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING
    }
  });
  Address.associate = (models) => {
    Address.belongsTo(models.Business, { foreignKey: 'businessId' });
  };
  return Address;
};