import React    from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, configure } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import TodaysDate from '~/TodaysDate';

import AddRecipeModal from './AddRecipeModal';

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

describe("Modal", () => {
  it("is visible at the right time", () => {

    const wrapper = shallow(<AddRecipeModal />);
    wrapper.setState({ visible: true });
	var modal = (wrapper.find('Modal'));
	expect(modal.props().visible).toEqual(true);  
  });
});