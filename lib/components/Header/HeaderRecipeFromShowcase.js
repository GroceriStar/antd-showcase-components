"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @TODO we have a long list of props here. it's confusing.
var inputStyle = {
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
var spanStyle = {
  marginLeft: 15
};
var switchStyle = {
  marginLeft: 15
};

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
    style: inputStyle,
    suffix: _react.default.createElement(_antd.Icon, {
      type: "search",
      style: suffixIconStyle
    }),
    placeholder: "input search text",
    onChange: search
  }), _react.default.createElement(_antd.Dropdown, {
    trigger: ['click'],
    overlay: _react.default.createElement(_antd.Menu, {
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
    }, "6"))
  }, _react.default.createElement(_antd.Button, {
    style: buttonStyle
  }, columns, " Columns ", _react.default.createElement(_antd.Icon, {
    type: "down"
  }))), _react.default.createElement(_antd.Dropdown, {
    trigger: ['click'],
    overlay: _react.default.createElement(_antd.Menu, {
      onClick: setMargin
    }, _react.default.createElement(_antd.Menu.Item, {
      key: "0"
    }, "0"), _react.default.createElement(_antd.Menu.Item, {
      key: "20"
    }, "20"), _react.default.createElement(_antd.Menu.Item, {
      key: "40"
    }, "40"), _react.default.createElement(_antd.Menu.Item, {
      key: "70"
    }, "70"))
  }, _react.default.createElement(_antd.Button, {
    style: buttonStyle
  }, margin, " px margin ", _react.default.createElement(_antd.Icon, {
    type: "down"
  }))), _react.default.createElement("span", {
    style: spanStyle
  }, "Individual height"), _react.default.createElement(_antd.Switch, {
    style: switchStyle,
    defaultChecked: true,
    onChange: setHeight
  }), _react.default.createElement("span", {
    style: spanStyle
  }), _react.default.createElement(_antd.Button, {
    type: "primary"
  }, _react.default.createElement(_reactRouterDom.Link, {
    to: "/groceries"
  }, "View collection without fanciness")));
};

var _default = Header;
exports.default = _default;