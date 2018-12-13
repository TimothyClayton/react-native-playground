import React from 'react'
import { Button } from 'react-native'
import ChooseColorPage from '../ChooseColorPage'
import { shallow, simulate } from 'enzyme'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Colors from '../../state/Colors';

Enzyme.configure({ adapter: new Adapter() });

it('Renders correctly', () => {
  const wrapper = shallow(
    <Button key={1} title={'BLUE'} color={'str'} onPress={ jest.fn() } />
    // <ChooseColorPage colorChanged={ jest.fn() } navigation={{ goBack: jest.fn() }} />
  )
  // wrapper.find(Button).simulate('click')
  expect(wrapper).toMatchSnapshot();
})

it('shows all the colors', () => {
  const wrapper = shallow(<ChooseColorPage />)
  console.log(wrapper)
  // expect()
})
