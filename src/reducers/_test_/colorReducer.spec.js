import reducer from '../ColorReducer'

describe('ColorChangeReducers', () => {
  it('Should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ colorName: 'RED' })
  }),

  it('Should handle COLOR_CHANGED', () => {
    expect(reducer(undefined, {
      type: 'COLOR_CHANGED', payload: { colorName: 'BLUE' }
    })).toEqual({ colorName: 'BLUE' })
  })
})
