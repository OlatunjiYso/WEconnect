module.exports = {
  up: queryInterface =>
     queryInterface.bulkInsert(
       'Categories',
      [
        {
          categoryId: 10,
          categoryName: 'Technology',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 11,
          categoryName: 'Fashion',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          categoryId: 12,
          categoryName: 'Sport',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {}
    ),

  down: queryInterface =>
     queryInterface.bulkDelete('Categories', null, {})

  };
