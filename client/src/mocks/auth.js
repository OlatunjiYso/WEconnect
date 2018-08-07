export const testUser = {
  username: 'olatunji',
  password: 'olatunji',
  email: 'me@you.com',
  id: 2,
};

export const signupResponse = {
  status: 201,
  response: {
        email: 'me@you.com',
        username: 'olatunji',
        password: 'olatunji',
        id: 2
  }
};

export const signedInUser = {
  id: 2,
  username: 'johndoe',
  email: 'rert.com',
};

export const signinResponse = {
  status: 200,
  response: {
        email: 'rert.com',
        username: 'johndoe',
        password: 'doe@gmail.com',
        token: '2we34ert56tyu76uio90p23r54t6yu70p98iu765tr54e3',
        id: 2
  }
};
