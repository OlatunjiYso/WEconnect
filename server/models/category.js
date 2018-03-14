
export default (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    CategoryId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    categoryName: {
      allowNull: false,
      type: DataTypes.STRING
    }
  });
  Category.associate = (models) => {
    Category.hasMany(models.Business, {
      as: 'businesses',
      through: 'BusinessCategory',
      foreignKey: 'categoryId'
    });
  };
  return Category;
};