module.exports = {
  up: queryInterface =>
     queryInterface.bulkInsert(
       'Addresses',
      [
        {
          id: 500,
          businessId: '500',
          country: 'Malasia',
          state: 'jonko',
          city: 'maleey',
          streetAddress: 'no 2, ffef, gkfk',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 502,
          businessId: '500',
          country: 'giweey',
          state: 'fads',
          city: 'luiz',
          streetAddress: 'aa, bbbb, ccc',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 503,
          businessId: '502',
          country: 'USA',
          state: 'LOS',
          city: 'Cali',
          streetAddress: 'cali oooo',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {}
    ),

  down: queryInterface =>
     queryInterface.bulkDelete('Addresses', null, {})

  };