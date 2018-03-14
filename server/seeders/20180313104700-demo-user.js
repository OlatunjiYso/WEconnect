module.exports = {
  up: queryInterface =>
     queryInterface.bulkInsert(
       'Users',
      [
        {
          id: 500,
          role: 'user',
          username: 'John Doe',
          password: 'JohnDoe',
          image: 'my_image1',
          email: 'JohnDoe@andela.com',
          phone: '08011111111',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 501,
          role: 'businessOwner',
          username: 'Johnny',
          password: 'Johnny',
          image: 'my_image2',
          email: 'johnny@andela.com',
          phone: '0802222222',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 502,
          role: 'user',
          username: 'sunny',
          password: 'sunny',
          image: 'my_image3',
          email: 'sunny@andela.com',
          phone: '08033333333',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {}
    ),

  down: queryInterface =>
     queryInterface.bulkDelete('Users', null, {})

  };