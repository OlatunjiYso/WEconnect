
export default (sequelize, DataTypes) => {
  const Business = sequelize.define('Business', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    ownerId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    slogan: {
      allowNull: false,
      type: DataTypes.STRING
    },
    overview: {
      allowNull: false,
      type: DataTypes.STRING
    },
    category: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    location: {
      allowNull: true,
      type: DataTypes.STRING,
      unique: true
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    phone: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    whatsapp: {
      allowNull: true,
      type: DataTypes.STRING,
      unique: true
    },
    facebook: {
      allowNull: true,
      type: DataTypes.STRING,
      unique: true
    },
    twitter: {
      allowNull: true,
      type: DataTypes.STRING,
      unique: true
    },
    image: {
      allowNull: true,
      type: DataTypes.STRING,
      unique: true
    },
  });
    Business.associate = (models) => {
      Business.belongsTo(models.User, {
         foreignKey: 'ownerId',
         onDelete: 'CASCADE'
         });
      Business.hasMany(models.Review, {
         foreignKey: 'businessId'
         });
    };
  return Business;
};