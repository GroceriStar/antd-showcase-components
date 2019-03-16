import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow, configure, mount } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import AddRecipeModal from './AddRecipeModal'

// Setup enzyme's react adapter
configure({ adapter: new EnzymeAdapter() })

describe('<AddRecipeModal /> component shallow only methods ', () => {
  it('is visible at the right time', () => {
    const wrapper = shallow(<AddRecipeModal />)
    wrapper.setState({ visible: true })
	  var modal = (wrapper.find('Modal'))
	  expect(modal.props().visible).toEqual(true)
  })
})

// @TODO add move words to describe
describe('wrapper', () => {
  it('has correct initial state value for visible', () => {
    const wrapper = mount(<AddRecipeModal visible />)
    expect(wrapper.state().visible).toEqual(true)
  })
})
