module.exports = {
  up: queryInterface =>
     queryInterface.bulkInsert(
       'Addresses',
      [
        {
          id: 500,
          businessId: '500',
          state: 'jonko',
          city: 'luiz',
          streetAddress: 'no 2, ffef, gkfk',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 502,
          businessId: '502',
          state: 'jonko',
          city: 'luiz',
          streetAddress: 'no 2, ffef, gkfk',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 501,
          businessId: '501',
          state: 'fads',
          city: 'luiz',
          streetAddress: 'aa, bbbb, ccc',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {}
    ),

  down: queryInterface =>
     queryInterface.bulkDelete('Addresses', null, {})

  };