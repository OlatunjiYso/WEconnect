module.exports = (sequelize, DataTypes) => {
  const BusinessCategory = sequelize.define('BusinessCategory', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    categoryId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    businessId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    }
  });
   BusinessCategory.associate = (models) => {
     BusinessCategory.belongsTo(models.Business, {
       as: 'business',
       foreignKey: 'businessId'
     });
     BusinessCategory.belongsTo(models.Category, {
      as: 'category',
      foreignKey: 'categoryId'
    });
   };
  return BusinessCategory;
};