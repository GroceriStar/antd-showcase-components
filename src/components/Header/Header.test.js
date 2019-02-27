import React    from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, configure } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import TodaysDate from '~/TodaysDate';

import Header from './HeaderRecipes';


// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("<TodaysDate /> component shallow only methods ", () => {
  it("renders without crashing", () => {

    const wrapper = shallow(<TodaysDate />);


    // expect(wrapper).toBe({});
    //this 2 lines below don't make a lot of sense

    // expect(wrapper).toBe(true)
    //   ReactDOM.render(<List />, div);
  });
});


describe("Header Menu", () => {
  it("has the correct props value", () => {

    const wrapper = shallow(<Header />);
    wrapper.setState({ current: 'test' });
	var menu = (wrapper.find('Menu'));
	expect(menu.props().selectedKeys).toEqual(["test"]);  
  });
});