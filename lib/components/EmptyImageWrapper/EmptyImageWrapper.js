"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkEmptyImage = exports.EmptyImageWrapper = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _reactRouterDom = require("react-router-dom");

var _reactImage = _interopRequireDefault(require("react-image"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var EmptyImageWrapper = function EmptyImageWrapper(image) {
  return _react.default.createElement(_reactImage.default, {
    src: image,
    unloader: _react.default.createElement(_antd.Empty, null)
  });
};

exports.EmptyImageWrapper = EmptyImageWrapper;

var LinkEmptyImage = function LinkEmptyImage(path, image) {
  return _react.default.createElement(_reactRouterDom.Link, {
    to: path
  }, _react.default.createElement("div", {
    className: "custom-image"
  }, EmptyImageWrapper(image)));
};

exports.LinkEmptyImage = LinkEmptyImage;