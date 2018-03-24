module.exports = {
  up: queryInterface =>
     queryInterface.bulkInsert(
       'Reviews',
      [
        {
          id: 500,
          businessId: 500,
         description: 'JohnDoe dggwgwgwfgww',
        reviewerId: 500,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {}
    ),

  down: queryInterface =>
     queryInterface.bulkDelete('Reviews', null, {})

  };