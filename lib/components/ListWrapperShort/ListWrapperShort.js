"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var style = {} // marginBottom: 16
// @TODO add header, footer
// size = default middle small
;

var ListWrapperShort = function ListWrapperShort(data) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_antd.List, {
    size: size,
    header: _react.default.createElement("div", null, "Header"),
    footer: _react.default.createElement("div", null, "Footer"),
    bordered: true,
    dataSource: data,
    renderItem: function renderItem(item) {
      return _react.default.createElement(_antd.List.Item, null, item);
    }
  }));
};

var _default = ListWrapperShort;
exports.default = _default;