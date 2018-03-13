module.exports = {
  up: queryInterface =>
     queryInterface.bulkInsert(
       'Users',
      [
        {
          id: 500,
          businessId: '500',
          userId: '500',
          country: 'Malasia',
          state: 'jonko',
          city: 'maleey',
          address: 'no 2, ffef, gkfk',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 502,
          userId: '500',
          country: 'giweey',
          state: 'fads',
          city: 'luiz',
          address: 'aa, bbbb, ccc',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 503,
          businessId: '502',
          country: 'USA',
          state: 'LOS',
          city: 'Cali',
          address: 'cali oooo',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {}
    ),

  down: queryInterface =>
     queryInterface.bulkDelete('Users', null, {})

  };