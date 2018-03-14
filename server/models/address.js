
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
    country: {
      allowNull: false,
      type: DataTypes.STRING
    },
    state: {
      allowNull: false,
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    streetAddress: {
      type: DataTypes.STRING
    },
  });
  Address.associate = (models) => {
    Address.belongsTo(models.Business, {
       foreignKey: 'businessId',
       onDelete: 'CASCADE'
       });
  };
  return Address;
};