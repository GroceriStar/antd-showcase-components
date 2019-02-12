"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _v = _interopRequireDefault(require("uuid/v1"));

var _List = _interopRequireDefault(require("../List/List"));

var _Item = _interopRequireDefault(require("./Item.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// right now this component just cover our current case,
// but later i want to make it more extendable, so it can handle a different layouts that we'll need to have.
// <Item
//   key={uuidv1()}
//   department={item.department}
//   ingredients={item.ingredients}
// />
var Wrapper = function Wrapper(_ref) {
  var children = _ref.children;
  return _react.default.createElement("ul", null, children);
};

var RenderItem = function RenderItem(_ref2) {
  var data = _ref2.data,
      id = _ref2.id;
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_Item.default, {
    key: id,
    department: data.department,
    ingredients: data.ingredients
  }));
};

var DepartmentList = function DepartmentList(_ref3) {
  var items = _ref3.items;
  return _react.default.createElement(Wrapper, null, _react.default.createElement(_List.default, {
    items: items
  }, function (data) {
    return _react.default.createElement(RenderItem, {
      data: data,
      key: (0, _v.default)(),
      id: (0, _v.default)()
    });
  }));
};

var _default = DepartmentList;
exports.default = _default;