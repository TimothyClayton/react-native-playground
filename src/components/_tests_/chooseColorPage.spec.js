import React from 'react'
import { Button } from 'react-native'
import { ChooseColorPage } from '../ChooseColorPage'
import { shallow, simulate } from 'enzyme'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { COLORS } from '../../state/Colors';

Enzyme.configure({ adapter: new Adapter() });

it('Renders correctly', () => {
  const wrapper = shallow(
    <ChooseColorPage colorChanged={ jest.fn() } navigation={{ goBack: jest.fn() }} />
  )
  expect(wrapper).toMatchSnapshot();
})

it('shows all the colors', () => {
  const wrapper = shallow(
    <ChooseColorPage colorChanged={ jest.fn() } navigation={{ goBack: jest.fn() }} />
  )

  const buttons = wrapper.find(Button)
  expect(buttons.length).toBe(Object.keys(COLORS).length)
})

it('calls the appropriate functions', () => {
  const mockColorChanged = jest.fn()
  const mockGoBack = jest.fn()

  const wrapper = shallow(
    <ChooseColorPage colorChanged={ mockColorChanged } navigation={{ goBack: mockGoBack }} />
  )

  wrapper.find(Button).first().props().onPress()
  const colorName = Object.values(COLORS)[0].name

  expect(mockColorChanged).toHaveBeenCalledWith({colorName})
  expect(mockGoBack).toHaveBeenCalled()
})
