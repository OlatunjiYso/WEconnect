module.exports = {
    roots: ['./client'],
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
          '<rootDir>/client/src/__mocks__/fileMock.js',
      '\\.(css|scss)$': '<rootDir>/client/src/__mocks__/styleMock.js'
    },
    setupFiles: ['./jestSetup.js'],
    snapshotSerializers: ['enzyme-to-json/serializer']
  };