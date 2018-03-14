
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
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    website: {
      allowNull: true,
      type: DataTypes.STRING,
      unique: true
    },
    phone1: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    phone2: {
      allowNull: true,
      type: DataTypes.STRING,
      unique: true
    },
    facebook: {
      allowNull: true,
      type: DataTypes.STRING,
      unique: true
    },
    tweeter: {
      allowNull: true,
      type: DataTypes.STRING,
      unique: true
    },
    image1: {
      allowNull: true,
      type: DataTypes.STRING,
      unique: true
    },
    image2: {
      allowNull: true,
      type: DataTypes.STRING,
      unique: true
    },
    image3: {
      allowNull: true,
      type: DataTypes.STRING,
      unique: true
    },
    image4: {
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
      Business.hasMany(models.Category, {
        through: 'BusinessCategory',
        foreignKey: 'businessId'
      });
      Business.hasMany(models.Review, {
         foreignKey: 'businessId'
         });
      Business.hasOne(models.Address, {
         foreignKey: 'businessId'
        });
    };
  return Business;
};