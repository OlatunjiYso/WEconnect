
export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING,
      unique: true
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    phone: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
  });

 User.associate = (models) => {
   User.hasMany(models.Business, { as: 'businesses', foreignKey: 'ownerId' });
   User.hasOne(models.Address, { as: 'address', foreignKey: 'userId' });
 };
  return User;
};