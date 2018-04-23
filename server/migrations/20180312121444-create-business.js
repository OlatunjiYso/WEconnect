module.exports = {
  up: (queryInterface, Sequelize) =>
     queryInterface.createTable('Businesses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ownerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      slogan: {
        allowNull: false,
        type: Sequelize.STRING
      },
      heading1: {
        allowNull: false,
        type: Sequelize.STRING
      },
      heading2: {
        allowNull: true,
        type: Sequelize.STRING
      },
      heading3: {
        allowNull: true,
        type: Sequelize.STRING
      },
      body1: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      body2: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      body3: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      category: {
        allowNull: false,
        type: Sequelize.STRING
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING
      },
      whatsapp: {
        allowNull: true,
        type: Sequelize.STRING
      },
      facebook: {
        allowNull: true,
        type: Sequelize.STRING
      },
      twitter: {
        allowNull: true,
        type: Sequelize.STRING
      },
      instagram: {
        allowNull: true,
        type: Sequelize.STRING
      },
      image: {
        allowNull: true,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }),
  down: queryInterface =>
     queryInterface.dropTable('Businesses')
};