"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

//
// {recipe.id}
// <br />
// {recipe.title}
// <br />
// {recipe.directions}
//
// <br />
//
// {recipe.ingredients}
// <IngredientList items={recipe.ingredients} />
//
// <br />
// {recipe.prep_time}
// <br />
// {recipe.total_time}
// <br />
// {recipe.recipe_yield}
// <br />
// {recipe.url}
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
}]; //
// const data = [{
//   key: '1',
//   name: 'John Brown',
//   age: 32,
//   address: 'New York No. 1 Lake Park',
// }, {
//   key: '2',
//   name: 'Jim Green',
//   age: 42,
//   address: 'London No. 1 Lake Park',
// }, {
//   key: '3',
//   name: 'Joe Black',
//   age: 32,
//   address: 'Sidney No. 1 Lake Park',
// }];
//@TODO maybe later we should use {...data} for settings like size, etc

var TableWrapper = function TableWrapper(_ref) {
  var data = _ref.data;
  return _react.default.createElement(_antd.Table, {
    columns: columns,
    dataSource: data,
    size: "small"
  });
};

var _default = TableWrapper;
exports.default = _default;