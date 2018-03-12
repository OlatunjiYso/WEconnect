
export default (sequelize, DataTypes) => {
  const Business = sequelize.define('Business', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    slogan: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  });
    Business.associate = (models) => {
      Business.belongsTo(models.User, { foreignKey: 'userId' });
      Business.hasMany(models.Review, { foreignKey: 'businessId' });
      Business.hasOne(models.BusinessPic, { foreignKey: 'businessId' });
      Business.hasOne(models.Address, { foreignKey: 'businessId' });
      Business.hasOne(models.About, { foreignKey: 'businessId' });
      Business.hasOne(models.Hotline, { foreignKey: 'businessId' });
      Business.hasOne(models.Email, { foreignKey: 'businessId' });
      Business.hasOne(models.AboutCeo, { foreignKey: 'businessId' });
    };
  return Business;
};