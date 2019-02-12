"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inputHeader = {
  marginLeft: 15,
  minWidth: 130,
  maxWidth: 300
};
var suffixIconStyle = {
  color: 'rgba(0,0,0,.25)'
};
var buttonStyle = {
  marginLeft: 15,
  minWidth: 130
};

var DropdownMenu = function DropdownMenu(setColumns) {
  return _react.default.createElement(_antd.Menu, {
    onClick: setColumns
  }, _react.default.createElement(_antd.Menu.Item, {
    key: "1"
  }, "1"), _react.default.createElement(_antd.Menu.Item, {
    key: "2"
  }, "2"), _react.default.createElement(_antd.Menu.Item, {
    key: "3"
  }, "3"), _react.default.createElement(_antd.Menu.Item, {
    key: "4"
  }, "4"), _react.default.createElement(_antd.Menu.Item, {
    key: "5"
  }, "5"), _react.default.createElement(_antd.Menu.Item, {
    key: "6"
  }, "6"));
}; // yes it bad @TODO change the NAME


var DropdownMenu2 = function DropdownMenu2(setMargin) {
  return _react.default.createElement(_antd.Menu, {
    onClick: setMargin
  }, _react.default.createElement(_antd.Menu.Item, {
    key: "0"
  }, "0"), _react.default.createElement(_antd.Menu.Item, {
    key: "20"
  }, "20"), _react.default.createElement(_antd.Menu.Item, {
    key: "40"
  }, "40"), _react.default.createElement(_antd.Menu.Item, {
    key: "70"
  }, "70"));
}; // @TODO we have a long list of props here. it's confusing.


var Header = function Header(_ref) {
  var shuffle = _ref.shuffle,
      search = _ref.search,
      setColumns = _ref.setColumns,
      setMargin = _ref.setMargin,
      setHeight = _ref.setHeight,
      columns = _ref.columns,
      margin = _ref.margin;
  // @TODO convert to this approach. at least it less confusing
  // const { shuffle,
  // search,
  // setColumns,
  // setMargin,
  // setHeight,
  // columns,
  // margin } = this.props;
  return _react.default.createElement("div", {
    className: "header"
  }, _react.default.createElement(_antd.Button, {
    type: "primary",
    onClick: shuffle
  }, "Shuffle"), _react.default.createElement(_antd.Input, {
    style: inputHeader,
    suffix: _react.default.createElement(_antd.Icon, {
      type: "search",
      style: suffixIconStyle
    }),
    placeholder: "input search text",
    onChange: search
  }), _react.default.createElement(_antd.Dropdown, {
    trigger: ['click'],
    overlay: DropdownMenu(setColumns)
  }, _react.default.createElement(_antd.Button, {
    style: buttonStyle
  }, columns, " Columns ", _react.default.createElement(_antd.Icon, {
    type: "down"
  }))), _react.default.createElement(_antd.Dropdown, {
    trigger: ['click'],
    overlay: DropdownMenu2(setMargin)
  }, _react.default.createElement(_antd.Button, {
    style: buttonStyle
  }, margin, " px margin ", _react.default.createElement(_antd.Icon, {
    type: "down"
  }))));
};

var _default = Header;
exports.default = _default;