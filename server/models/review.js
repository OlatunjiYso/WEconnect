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
    description: {
      allowNull: false,
      type: DataTypes.STRING
    },
    reviwerId: {
      allowNull: false,
      type: DataTypes.STRING
    },
  });
  Review.associate = (models) => {
    Review.belongsTo(models.Business, {
      foreignKey: 'businessId',
      onDelete: 'CASCADE'
    });
  };
  return Review;
};