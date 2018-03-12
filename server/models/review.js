export default (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
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
    message: {
      allowNull: false,
      type: DataTypes.STRING
    },
    reviwerName: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
  });
  Review.associate = (models) => {
    Review.belongsTo(models.Business, { foreignKey: 'businessId' });
  };
  return Review;
};