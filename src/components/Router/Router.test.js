import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow, configure } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import TodaysDate from '~/TodaysDate'

import Router from './Router'

// we need to test here is all of views connected well.
// Example: if i'll decide to change name or path to HomeView - we need to be notified about it

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() })

describe('<TodaysDate /> component shallow only methods ', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<TodaysDate />)

    // expect(wrapper).toBe({});
    // this 2 lines below don't make a lot of sense

    // expect(wrapper).toBe(true)
    //   ReactDOM.render(<List />, div);
  })
})
