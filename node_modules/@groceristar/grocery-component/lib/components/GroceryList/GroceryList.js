"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _v = _interopRequireDefault(require("uuid/v1"));

var _List = _interopRequireDefault(require("../List/List"));

var _Item = _interopRequireDefault(require("./Item.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

//@TODO this file should be improved. Maybe splitted with structure.
// i don't know how exactly it should looks, but not like this right know
// because it's more looking like layout file, not like a list component that i want to see
// i want to see it similar to our DefaultList structure
// right now this component just cover our current case,
// but later i want to make it more extendable, so it can handle a different layouts that we'll need to have.
// @TODO i think this links should be separated, and also instead of having plain url here - i think it's better to have routes.
// details upon request
var ViewGroceryLink = function ViewGroceryLink(_ref) {
  var id = _ref.id,
      title = _ref.title;
  return _react.default.createElement(_reactRouterDom.Link, {
    to: '/grocery/' + id
  }, "View \"", title, "\" Template");
};

var ManageGroceryLink = function ManageGroceryLink(_ref2) {
  var id = _ref2.id,
      title = _ref2.title;
  return _react.default.createElement(_reactRouterDom.Link, {
    to: '/grocery/' + id
  }, "View \"", title, "\" Template");
}; //  ---- here is actually our GL list started.


var Wrapper = function Wrapper(_ref3) {
  var children = _ref3.children;
  return _react.default.createElement("ul", null, children);
}; // <Item
//   key={shortid.generate()}
//   department={item.department}
//   ingredients={item.ingredients}
// />


var RenderItem = function RenderItem(_ref4) {
  var data = _ref4.data,
      id = _ref4.id;
  return _react.default.createElement(_react.Fragment, null, "ID: ", data.id, "Name: ", data.name, _react.default.createElement("pre", null, data.departments), _react.default.createElement(ViewGroceryLink, {
    id: data.id,
    title: data.name
  }), _react.default.createElement("hr", null));
};

var GroceryList = function GroceryList(_ref5) {
  var items = _ref5.items;
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

var _default = GroceryList;
exports.default = _default;