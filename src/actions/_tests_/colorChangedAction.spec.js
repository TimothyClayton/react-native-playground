// import * as colorChangeActions from '../ColorChangedAction';

// describe('ColorChangeActions', () => {
//   it('should create an action to set the color', () => {
//     const colorName = { colorName: "BLUE" };
//     const expectedAction = {
//       type: 'COLOR_CHANGED',
//       payload: colorName
//     }
//     expect(colorChangeActions.colorChanged(colorName)).toEqual(expectedAction)
//   })
// })

import configureStore from 'redux-mock-store' //ES6 modules
// const { configureStore } = require('redux-mock-store') //CommonJS
import * as colorChangeActions from '../ColorChangedAction'

const middlewares = []
const mockStore = configureStore(middlewares)

const initialState = {}
const store = mockStore(initialState)

beforeEach(() => {
  store.clearActions();
})

afterEach(() => {
  expect(store.getActions()).toMatchSnapshot()
})

it('Dispatches colorChanged action', () => {
  const colorName = { colorName: "BLUE" };
  store.dispatch(colorChangeActions.colorChanged(colorName))
})
