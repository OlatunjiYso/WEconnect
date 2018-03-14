module.exports = {
  up: queryInterface =>
     queryInterface.bulkInsert(
       'Businesses',
      [
        {
          id: 500,
          ownerId: 500,
          title: 'Jupiter',
          slogan: 'rulling all day',
          overview: 'business overview',
          email: 'Jupiter@andela.com',
          website: 'Jupiter.org',
          phone1: '08001111111',
          phone2: '08002222222',
          facebook: '',
          tweeter: '',
          image1: 'busiImage1',
          image2: 'busiImage2',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 502,
          ownerId: 501,
          title: 'Samsung',
          slogan: 'rule your world',
          overview: 'business overviews',
          email: 'samsung@andela.com',
          website: 'samsung.org',
          phone1: '0800144411',
          phone2: '080022333222',
          facebook: 'samfacebok',
          tweeter: 'samtweeter',
          image1: 'busiImage3',
          image2: 'busiImage4',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 504,
          ownerId: 500,
          title: 'Globals',
          slogan: 'global balls',
          overview: 'business overviewss',
          email: 'global@andela.com',
          website: 'global.org',
          phone1: '08000011111',
          phone2: '08002992222',
          facebook: 'faceglobal',
          tweeter: 'tweeterglobal',
          image1: 'busiImage5',
          image2: 'busiImage6',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {}
    ),

  down: queryInterface =>
     queryInterface.bulkDelete('Businesses', null, {})

  };