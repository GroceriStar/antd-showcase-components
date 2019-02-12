"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListF = function ListF(_ref) {
  var items = _ref.items,
      children = _ref.children;

  if (items) {
    items.map(function (value) {
      return (// console.log(value)
        children(value)
      );
    });
  }
};

var _default = ListF;
exports.default = _default;