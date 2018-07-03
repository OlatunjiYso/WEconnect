
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
      unique: false
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    
    about: {
      allowNull: false,
      type: DataTypes.TEXT
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
    state: {
      allowNull: true,
      type: DataTypes.STRING,
      unique: false
    },
    city: {
      allowNull: true,
      type: DataTypes.STRING,
      unique: false
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    phone: {
      allowNull: false,
      type: DataTypes.STRING,
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