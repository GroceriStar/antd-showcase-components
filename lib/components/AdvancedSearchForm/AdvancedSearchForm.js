"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var asf_style = function asf_style(index, count) {
  var style = {
    display: index < count ? 'block' : 'none'
  };
  return style;
};

var AdvancedSearchForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AdvancedSearchForm, _React$Component);

  function AdvancedSearchForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AdvancedSearchForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AdvancedSearchForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      expand: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearch", function (e) {
      e.preventDefault();

      _this.props.form.validateFields(function (err, values) {
        console.log('Received values of form: ', values);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleReset", function () {
      _this.props.form.resetFields();
    });

    _defineProperty(_assertThisInitialized(_this), "toggle", function () {
      var expand = _this.state.expand;

      _this.setState({
        expand: !expand
      });
    });

    return _this;
  }

  _createClass(AdvancedSearchForm, [{
    key: "getFields",
    // To generate mock Form.Item
    value: function getFields() {
      var count = this.state.expand ? 10 : 6;
      var getFieldDecorator = this.props.form.getFieldDecorator; // const style = {
      //   display: i < count ? 'block' : 'none'
      // }

      var children = [];

      for (var i = 0; i < 10; i++) {
        children.push(_react.default.createElement(_antd.Col, {
          span: 8,
          key: i,
          style: asf_style(i, count)
        }, _react.default.createElement(_antd.Form.Item, {
          label: "Field ".concat(i)
        }, getFieldDecorator("field-".concat(i), {
          rules: [{
            required: true,
            message: 'Input something!'
          }]
        })(_react.default.createElement(_antd.Input, {
          placeholder: "placeholder"
        })))));
      }

      return children;
    }
  }, {
    key: "render",
    value: function render() {
      var iconType = this.state.expand ? 'up' : 'down';
      var styles = {
        col: {
          textAlign: 'right'
        },
        clear: {
          marginLeft: 8
        },
        collapse: {
          marginLeft: 8,
          fontSize: 12
        }
      };
      return _react.default.createElement(_antd.Form, {
        className: "ant-advanced-search-form",
        onSubmit: this.handleSearch
      }, _react.default.createElement(_antd.Row, {
        gutter: 24
      }, this.getFields()), _react.default.createElement(_antd.Row, null, _react.default.createElement(_antd.Col, {
        span: 24,
        style: styles.col
      }, _react.default.createElement(_antd.Button, {
        type: "primary",
        htmlType: "submit"
      }, "Search"), _react.default.createElement(_antd.Button, {
        style: styles.clear,
        onClick: this.handleReset
      }, "Clear"), _react.default.createElement("a", {
        style: styles.collapse,
        onClick: this.toggle
      }, "Collapse", _react.default.createElement(_antd.Icon, {
        type: iconType
      })))));
    }
  }]);

  return AdvancedSearchForm;
}(_react.default.Component);

var _default = AdvancedSearchForm;
exports.default = _default;