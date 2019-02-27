"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _enzyme = _interopRequireWildcard(require("enzyme"));

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _AddRecipeModal = _interopRequireDefault(require("./AddRecipeModal"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Setup enzyme's react adapter
(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});
describe("<AddRecipeModal /> component shallow only methods ", function () {
  it("is visible at the right time", function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_AddRecipeModal.default, null));
    wrapper.setState({
      visible: true
    });
    var modal = wrapper.find('Modal');
    expect(modal.props().visible).toEqual(true);
  });
}); //@TODO add move words to describe

describe("wrapper", function () {
  it("has correct initial state value for visible", function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_AddRecipeModal.default, {
      visible: true
    }));
    expect(wrapper.state().visible).toEqual(true);
  });
});