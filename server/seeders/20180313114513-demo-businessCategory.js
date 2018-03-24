module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert(
      'BusinessCategories',
      [
        {
          id: 500,
          categoryId: 10,
          businessId: '500',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {}
    ),

  down: queryInterface =>
    queryInterface.bulkDelete('BusinessCategories', null, {})

};