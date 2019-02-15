"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var HeaderDropdown = function HeaderDropdown() {
  return _react.default.createElement(_antd.Dropdown, {
    trigger: ["click"],
    overlay: DropdownMenu
  }, _react.default.createElement(_antd.Icon, {
    className: "card-action-content",
    type: "ellipsis"
  }));
};

var _default = HeaderDropdown;
exports.default = _default;