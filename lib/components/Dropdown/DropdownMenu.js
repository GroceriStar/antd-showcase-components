"use strict";

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var openNotification = function openNotification() {
  _antd.message.info("This is a normal message");
};

var style = {
  marginLeft: "6px"
};

var DropdownMenu = function DropdownMenu() {
  return _react.default.createElement(_antd.Menu, {
    onClick: function onClick() {
      return openNotification();
    }
  }, _react.default.createElement(_antd.Menu.Item, {
    key: "site-overview"
  }, _react.default.createElement(_antd.Icon, {
    type: "eye-o"
  }), _react.default.createElement("span", {
    style: style
  }, "Overview")), _react.default.createElement(_antd.Menu.Item, {
    key: "marketing"
  }, _react.default.createElement(_antd.Icon, {
    type: "area-chart"
  }), _react.default.createElement("span", {
    style: style
  }, "Marketing")), _react.default.createElement(_antd.Menu.Item, {
    key: "activity"
  }, _react.default.createElement(_antd.Icon, {
    type: "calendar"
  }), _react.default.createElement("span", {
    style: style
  }, "Activity")));
};