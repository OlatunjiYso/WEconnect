export const fetchAllBusinessesResponse = {
  status: 200,
  response: {
    status: 200,
    businesses: [],
    pages: 0,
  }
};

export const fetchOneBusinessResponse = {
  status: 200,
  response: {
    business: { Reviews: [] }
  }
};

export const fetchMyBusinessesResponse = {
  status: 200,
  response: {
    businesses: []
  }
};

export const registerBusinessResponse = {
  status: 200,
  response: {
    business: []
  }
};

export const updateBusinessResponse = {
  status: 200,
  response: {
    business: []
  }
};

export const image = {
  url: 'https://api.cloudinary.com/v1_1/andelanigeria/image/upload',
  imageFile: {
    name: 'nbame'
  }
};

export const initiateBusinessRegResponse = {
  status: 200,
  response: {
    url: 'url'
  }
};

export const deleteBusinessResponse = {
  status: 200,
  response: {}
};