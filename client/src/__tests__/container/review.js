import React from 'react';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import ConnectedReviewForm, { ReviewForm } from '../../containers/review_form';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


let props;
const setup = () => {
  props = {
    businessId: 0,
    userData: {
      user: {
        id: 0
      }
    },
    reviewData: {
      awaitingResponse: false,
      response: {},
      reviewErrors: {},
      reviews: [],
      editingIndex: null
    },
    getAllReviews: jest.fn(() => Promise.resolve()),
    postReview: jest.fn(() => Promise.resolve()),
    deleteReview: jest.fn(() => Promise.resolve()),
    updateReview: jest.fn(() => Promise.resolve()),
    makeEditable: jest.fn(),
  };
  return shallow(<ReviewForm {...props} />);
}

let wrapper = setup();
const action = wrapper.instance();
describe('componentDidMount()', () => {
  it('should call componentDidMount()', () => {
    const didMount = jest.spyOn(wrapper.instance(), 'componentDidMount');
    action.componentDidMount();
    expect(didMount).toBeCalled();
  });
});

describe('handleSubmit', () => {
  const fakeEvent = { preventDefault: () => ({}) };
  it('should submit search information', () => {
    const handleSubmit = jest.spyOn(wrapper.instance(), 'handleSubmit');
    action.handleSubmit(fakeEvent);
    expect(handleSubmit).toBeCalled();
  });
})

describe('handleChange', () => {
  const fakeEvent = {
    target: {
      name: 'message',
      value: 'yes'
    },
    preventDefault: () => ({})
  };
  const handleChange = jest.spyOn(wrapper.instance(), 'handleChange');
  action.handleChange(fakeEvent);
  expect(handleChange).toBeCalled();
  expect(action.state.message).toEqual('yes');
});




describe('All reviews', () => {
  it('it should render the component successfully', () => {
    const store = mockStore({
      reviewReducer: {
        awaitingResponse: false,
        response: {},
        reviewErrors: {},
        reviews: [],
        editingIndex: null
      },
      authReducers: {
        signupErrors: {},
        signinErrors: {},
        awaitingResponse: false,
        user: null,
        response: {}
      }
    });
    wrapper = shallow(<ConnectedReviewForm store={store} />);
    expect(wrapper.length).toBe(1);
  });
});
