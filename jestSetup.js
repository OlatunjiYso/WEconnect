import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import LocalStorageMock from './client/src/mocks/localStorage';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.React = React;
global.mount = mount;
global.mockStore = mockStore;
global.Provider = Provider;
global.middlewares = middlewares;
global.localStorage = new LocalStorageMock();