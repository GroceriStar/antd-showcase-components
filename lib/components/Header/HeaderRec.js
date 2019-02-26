"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _reactRouterDom = require("react-router-dom");

var _AddRecipeModal = _interopRequireDefault(require("../AddRecipeModal/AddRecipeModal"));

var _HeaderDropdown = _interopRequireDefault(require("../Dropdown/HeaderDropdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

// import { getRandomRecipe } from './../../selectors'
var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      current: 'app',
      visible: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      console.log('click ', e);

      _this.setState({
        current: e.key
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleReload", function (e) {
      console.log('click ', e);
      console.log(getRandomRecipe()); // reloading data
      // this.setState({
      //   data: []
      // })
    });

    _defineProperty(_assertThisInitialized(_this), "showModal", function () {
      console.log('click bithc');

      _this.setState({
        visible: true
      });
    });

    return _this;
  }

  _createClass(Header, [{
    key: "render",
    // handleOk = e => {
    //   console.log(e)
    //   this.setState({
    //     visible: false
    //   })
    // }
    //
    // handleCancel = e => {
    //   console.log(e)
    //   this.setState({
    //     visible: false
    //   })
    // }
    value: function render() {
      console.log(this.state.visible);
      return _react.default.createElement(_antd.Menu, {
        onClick: this.handleClick,
        selectedKeys: [this.state.current],
        mode: "horizontal"
      }, _react.default.createElement(_antd.Menu.Item, {
        key: "get-data"
      }, _react.default.createElement("div", {
        onClick: this.reloadData
      }, _react.default.createElement(_antd.Icon, {
        type: "reload"
      }))), _react.default.createElement(_antd.Menu.Item, {
        key: "app"
      }, _react.default.createElement(_antd.Icon, {
        type: "appstore"
      }), "Recipe List", _react.default.createElement(_reactRouterDom.Link, {
        to: "/recipelist"
      })), _react.default.createElement(_antd.Menu.Item, {
        key: "add"
      }, _react.default.createElement(_antd.Icon, {
        type: "appstore"
      }), "Add Recipe", _react.default.createElement(_reactRouterDom.Link, {
        to: "/addrecipe"
      })), _react.default.createElement(_antd.Menu.Item, {
        key: "alipay"
      }, _react.default.createElement("div", {
        onClick: this.showModal
      }, _react.default.createElement(_antd.Icon, {
        type: "plus-square"
      }), "Add Recipe Modal"), _react.default.createElement(_AddRecipeModal.default, {
        visible: this.state.visible
      })), _react.default.createElement(_antd.Menu.Item, {
        key: "search"
      }, _react.default.createElement(_antd.Icon, {
        type: "search"
      }), "Search", _react.default.createElement(_reactRouterDom.Link, {
        to: "/s"
      })), _react.default.createElement(_antd.Menu.Item, {
        key: "search2"
      }, _react.default.createElement(_antd.Icon, {
        type: "search"
      }), "Search", _react.default.createElement(_reactRouterDom.Link, {
        to: "/s2"
      })), _react.default.createElement(_antd.Menu.Item, {
        key: "dropdead"
      }, _react.default.createElement(_antd.Icon, {
        type: "ellipsis"
      }), _react.default.createElement(_HeaderDropdown.default, null)));
    }
  }]);

  return Header;
}(_react.Component);

var _default = Header;
exports.default = _default;