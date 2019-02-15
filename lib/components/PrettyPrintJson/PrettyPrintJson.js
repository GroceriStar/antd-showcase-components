"use strict";

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// we can also add highlight.js and make it better.
// https://stackoverflow.com/a/35340052
var PrettyPrintJson =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PrettyPrintJson, _React$Component);

  function PrettyPrintJson() {
    _classCallCheck(this, PrettyPrintJson);

    return _possibleConstructorReturn(this, _getPrototypeOf(PrettyPrintJson).apply(this, arguments));
  }

  _createClass(PrettyPrintJson, [{
    key: "render",
    value: function render() {
      // data could be a prop for example
      var data = this.props.data;
      return _react.default.createElement("div", null, _react.default.createElement("pre", null, JSON.stringify(data, null, 2)));
    }
  }]);

  return PrettyPrintJson;
}(_react.default.Component); // Usage:
// <PrettyPrintJson data={data} />


var JsonDump =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(JsonDump, _React$Component2);

  function JsonDump() {
    _classCallCheck(this, JsonDump);

    return _possibleConstructorReturn(this, _getPrototypeOf(JsonDump).apply(this, arguments));
  }

  _createClass(JsonDump, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("pre", null, JSON.stringify(this.props.children, null, 4));
    }
  }]);

  return JsonDump;
}(_react.default.Component); // Usage:
// <JsonDump>{someVar}</JsonDump>


_defineProperty(JsonDump, "propTypes", {
  children: _react.default.PropTypes.any
});