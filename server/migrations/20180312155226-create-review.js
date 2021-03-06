module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      businessId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Businesses',
          key: 'id'
        }
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      reviewerName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      reviewerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATEONLY
      }
    }),
  down: queryInterface =>
    queryInterface.dropTable('Reviews')
};