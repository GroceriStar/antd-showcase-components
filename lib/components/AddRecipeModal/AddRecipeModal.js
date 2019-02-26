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

// import AddRecipe from './AddRecipe'
// const AddRecipeModal = ({ visible }) => {
var AddRecipeModal =
/*#__PURE__*/
function (_Component) {
  _inherits(AddRecipeModal, _Component);

  function AddRecipeModal(props) {
    var _this;

    _classCallCheck(this, AddRecipeModal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AddRecipeModal).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleOk", function (e) {
      console.log(e);

      _this.setState({
        visible: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCancel", function (e) {
      console.log(e);

      _this.setState({
        visible: false
      });
    });

    _this.state = {
      visible: false // this.props.visible // yeah it's bad @TODO change this

    };
    _this.handleOk = _this.handleOk.bind(_assertThisInitialized(_this));
    _this.handleCancel = _this.handleCancel.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AddRecipeModal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState(function (state, props) {
        return {
          visible: props.visible
        };
      });
    } // state = {
    //   // current: 'app',
    //
    // }

  }, {
    key: "render",
    value: function render() {
      // console.log(this.props.visible)
      console.log(this.state); // this.setState({
      //   visible: this.props.visible
      // })

      var _this$props = this.props,
          title = _this$props.title,
          isVisible = _this$props.isVisible,
          handleOk = _this$props.handleOk,
          handleCancel = _this$props.handleCancel; // <Modal
      //   title={title}
      //   visible={isVisible}
      //   onOk={handleOk}
      //   onCancel={handleCancel}
      //   footer={[
      //     <Button key="back" size="large" onClick={handleCancel}>
      //       Cancel
      //     </Button>
      //   ]}
      // >
      // <hr />
      //   { /* <AddRecipe handleOk={handleOk} /> */}
      //
      // </Modal>

      return _react.default.createElement(_antd.Modal, {
        title: "Add Recipe",
        visible: this.state.visible,
        onOk: this.handleOk,
        onCancel: this.handleCancel,
        footer: [_react.default.createElement(_antd.Button, {
          key: "back",
          size: "large",
          onClick: this.handleCancel
        }, "Cancel")]
      }, _react.default.createElement("hr", null));
    }
  }]);

  return AddRecipeModal;
}(_react.Component);

var _default = AddRecipeModal;
exports.default = _default;