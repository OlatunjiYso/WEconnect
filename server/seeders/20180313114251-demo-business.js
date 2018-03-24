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
          category: 'fashion',
          email: 'Jupiter@andela.com',
          website: 'Jupiter.org',
          phone: '08001111111',
          whatsapp: '0800188111',
          facebook: '',
          twitter: '',
          image: 'busiImage1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 501,
          ownerId: 501,
          title: 'Pluto',
          slogan: 'rulling all day long',
          overview: 'business overview overviews',
          category: 'food',
          email: 'pliuto@andela.com',
          website: 'pluto.org',
          phone: '080033232111',
          whatsapp: '08065765677',
          facebook: 'hjfgvdgjfgd',
          twitter: 'egegegegerg',
          image: 'busiImage51',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 502,
          ownerId: 501,
          title: 'Plutoww',
          slogan: 'ruwlling all day long',
          overview: 'wwbusiness overview overviews',
          category: 'tech',
          email: 'wpliuto@andela.com',
          website: 'wpluto.org',
          phone: 'w080033232111',
          whatsapp: 'w08065765677',
          facebook: 'whjfgvdgjfgd',
          twitter: 'wegegegegerg',
          image: 'wbusiImage51',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {}
    ),

  down: queryInterface =>
     queryInterface.bulkDelete('Businesses', null, {})

  };