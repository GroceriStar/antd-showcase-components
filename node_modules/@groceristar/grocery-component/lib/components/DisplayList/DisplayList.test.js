"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = _interopRequireWildcard(require("enzyme"));

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _DisplayList = _interopRequireDefault(require("./DisplayList"));

var _synon = _interopRequireDefault(require("synon"));

var _chickenKyiv = _interopRequireDefault(require("@groceristar/groceristar-fetch/chickenKyiv"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_enzyme.default.configure({
  adapter: new _enzymeAdapterReact.default()
}); // describe("<DisplayList /> component shallow only methods ", () => {
//   it("renders without crashing", () => {
//     const recipe = data.getRecipe()[0];
//     // const wrapper = shallow(<DisplayList />);
//     const wrapper = shallow(<DisplayList data={recipe.ingredients} />);
//     expect(wrapper.contains(<ul></ul>)).toBe(true);
//     // expect;
//   });
// });
// count child elements


describe("<DisplayList /> count child elements", function () {
  it("renders li elements and compare their count", function () {
    var recipe = _chickenKyiv.default.getRecipe()[0];

    var lenght = recipe.ingredients.lenght;
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_DisplayList.default, {
      data: recipe.ingredients
    }));
    expect(wrapper.find(li)).to.have.lengthOf(lenght);
  });
});
describe("<DisplayList /> find class or property", function () {
  it("find class", function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_DisplayList.default, null));
    expect(wrapper.hasClass("ingredient")).toBe(true);
  });
}); // !!!!!

describe("<DisplayList />  click event ", function () {
  it("", function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_DisplayList.default, null));
    wrapper.find("checkbox").simulate("change");
  });
});
describe("<DisplayList />  find child ", function () {
  it("", function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_DisplayList.default, null));
    expect(wrapper.contains(_react.default.createElement("ul", {
      class: "ingredient list short"
    }))).to.equal(true);
  });
});
describe("<DisplayList /> check if component have componentDidMount", function () {
  it("", function () {
    sinon.spy(_DisplayList.default.prototype, "componentDidMount");
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_DisplayList.default, null));
    expect(Foo.prototype.componentDidMount).to.have.property("data", 1);
  }); // expect
});
describe("for <DisplayList /> we're showing different between shallow and mount", function () {
  it("render as child or not", function () {
    var recipe1 = _chickenKyiv.default.getRecipe()[0];

    var ingredients1 = recipe1.ingredients;
    var wrapper = (0, _enzyme.mount)(_react.default.createElement("div", null, _react.default.createElement(_DisplayList.default, {
      data: ingredients1
    })));
    wrapper.debug(); // this code generate a build issue
    // const wrapper = shallow(<DisplayList data={ingredients1} />);
    // wrapper.debug();
    // const wrapper = shallow(
    //   <div>
    //     <DisplayList data={ingredients1} />
    //   </div>
    // );
    //
    // wrapper.debug();
  });
  it("", function () {
    it("renders a DisplayList with id class and find it", function () {
      var wrapper = (0, _enzyme.mount)(_react.default.createElement("div", null, _react.default.createElement(_DisplayList.default, {
        id: "find-me"
      })));
      expect(wrapper.find("#find-me").length).toBe(1);
    });
  });
});
describe("<DisplayList /> set props or update state", function () {
  it("allows us to set props", function () {
    var recipe1 = _chickenKyiv.default.getRecipe()[0];

    var recipe2 = _chickenKyiv.default.getRecipe()[1];

    var ingredients1 = recipe1.ingredients;
    var ingredients2 = recipe2.ingredients; // const lenght = recipe.ingredients.lenght;

    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_DisplayList.default, {
      data: ingredients1
    }));
    expect(wrapper.props().data).to.equal({
      ingredients1: ingredients1
    });
    wrapper.setProps({
      data: ingredients2
    });
    expect(wrapper.props().data).to.equal(ingredients2);
  });
  it("set state", function () {
    var recipe1 = _chickenKyiv.default.getRecipe()[0];

    var ingredients1 = recipe1.ingredients;
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_DisplayList.default, null));
    wrapper.setState({
      data: ingredients1
    });
  });
});