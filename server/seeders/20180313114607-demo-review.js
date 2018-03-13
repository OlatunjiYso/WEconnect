module.exports = {
  up: queryInterface =>
     queryInterface.bulkInsert(
       'Users',
      [
        {
          id: 500,
          businessId: 'user',
         description: 'JohnDoe dggwgwgwfgww',
        reviewerId: 500,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 500,
          businessId: 'user',
         description: 'JohnDoe dggwgwgwfgww',
        reviewerId: 500,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {}
    ),

  down: queryInterface =>
     queryInterface.bulkDelete('Users', null, {})

  };