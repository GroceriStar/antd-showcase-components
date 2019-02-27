"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _enzyme = _interopRequireWildcard(require("enzyme"));

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _TableWrapper = _interopRequireDefault(require("./TableWrapper"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Setup enzyme's react adapter
(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});
var columns = [// {
// title: 'ID',
// dataIndex: 'id',
// },
{
  title: 'Title',
  dataIndex: 'title'
}, {
  title: 'Directions',
  dataIndex: 'directions'
}, {
  title: 'Ingredients',
  dataIndex: 'ingredients'
}, {
  title: 'Prep Time',
  dataIndex: 'prep_time'
}, {
  title: 'Total Time',
  dataIndex: 'total_time'
}, {
  title: 'Yield',
  dataIndex: 'recipe_yield'
}, {
  title: 'URL',
  dataIndex: 'url'
}]; // describe("xxx", () => {
//   it("xxx", () => {
//
//
//   });
// });