export default (sequelize, DataTypes) => {
  const UserPic = sequelize.define('UserPic', {
    userId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    img_path: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    }
  });
  UserPic.associate = (models) => {
    UserPic.belongsTo(models.Business, { as: 'user', foreignKey: 'userId' });
  };
  return UserPic;
};