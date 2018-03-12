
module.exports = {
  up: (queryInterface, Sequelize) =>
     queryInterface.createTable('User_Pics', {
      userId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      imgPath: {
        allowNull: false,
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
   queryInterface.dropTable('User_Pics')
};