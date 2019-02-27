import React    from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, configure } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Header from './HeaderRecipes';

// Setup enzyme's react adapter
configure({ adapter: new EnzymeAdapter() });


describe("Header Menu", () => {
  it("has the correct props value", () => {

    const wrapper = shallow(<Header />);
    wrapper.setState({ current: 'test' });
	var menu = (wrapper.find('Menu'));
	expect(menu.props().selectedKeys).toEqual(["test"]);
  });
});
