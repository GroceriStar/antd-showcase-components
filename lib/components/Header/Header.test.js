"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _enzyme = _interopRequireWildcard(require("enzyme"));

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _HeaderRecipes = _interopRequireDefault(require("./HeaderRecipes"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Setup enzyme's react adapter
(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});
describe("Header Menu", function () {
  it("has the correct props value", function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_HeaderRecipes.default, null));
    wrapper.setState({
      current: 'test'
    });
    var menu = wrapper.find('Menu');
    expect(menu.props().selectedKeys).toEqual(["test"]);
  });
});