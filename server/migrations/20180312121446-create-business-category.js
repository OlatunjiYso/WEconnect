module.exports = {
  up: (queryInterface, Sequelize) =>
   queryInterface.createTable('BusinessCategories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Categories',
            key: 'categoryId'
        },
      },
      businessId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Businesses',
            key: 'id'
        },
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
     queryInterface.dropTable('BusinessCategories')
};