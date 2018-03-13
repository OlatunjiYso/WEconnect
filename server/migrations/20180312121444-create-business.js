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
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      slogan: {
        allowNull: false,
        type: Sequelize.STRING
      },
      overview: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      website: {
        allowNull: false,
        type: Sequelize.STRING
      },
      phone1: {
        allowNull: false,
        type: Sequelize.STRING
      },
      phone2: {
        allowNull: true,
        type: Sequelize.STRING
      },
      facebook: {
        allowNull: true,
        type: Sequelize.STRING
      },
      tweeter: {
        allowNull: true,
        type: Sequelize.STRING
      },
      image1: {
        allowNull: false,
        type: Sequelize.STRING
      },
      image2: {
        allowNull: true,
        type: Sequelize.STRING
      },
      image3: {
        allowNull: true,
        type: Sequelize.STRING
      },
      image4: {
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