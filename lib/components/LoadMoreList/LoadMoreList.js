"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _lodash = _interopRequireDefault(require("lodash"));

var _reqwest = _interopRequireDefault(require("reqwest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var count = 3;
var fakeDataUrl = "https://randomuser.me/api/?results=".concat(count, "&inc=name,gender,email,nat&noinfo");

var LoadMoreList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LoadMoreList, _React$Component);

  function LoadMoreList() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, LoadMoreList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LoadMoreList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      initLoading: true,
      loading: false,
      data: [],
      list: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getData", function (callback) {
      (0, _reqwest.default)({
        url: fakeDataUrl,
        type: 'json',
        method: 'get',
        contentType: 'application/json',
        success: function success(res) {
          callback(res);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onLoadMore", function () {
      _this.setState({
        loading: true,
        list: _this.state.data.concat(_toConsumableArray(new Array(count)).map(function () {
          return {
            loading: true,
            name: {}
          };
        }))
      });

      _this.getData(function (res) {
        var data = _this.state.data.concat(res.results);

        _this.setState({
          data: data,
          list: data,
          loading: false
        }, function () {
          // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
          // In real scene, you can using public method of react-virtualized:
          // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
          window.dispatchEvent(new Event('resize'));
        });
      });
    });

    return _this;
  }

  _createClass(LoadMoreList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.getData(function (res) {
        _this2.setState({
          initLoading: false,
          data: res.results,
          list: res.results
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          initLoading = _this$state.initLoading,
          loading = _this$state.loading,
          list = _this$state.list;
      var loadMore = !initLoading && !loading ? _react.default.createElement("div", {
        style: {
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px'
        }
      }, _react.default.createElement(_antd.Button, {
        onClick: this.onLoadMore
      }, "loading more")) : null;
      return _react.default.createElement(_antd.List, {
        className: "demo-loadmore-list",
        loading: initLoading,
        itemLayout: "horizontal",
        loadMore: loadMore,
        dataSource: list,
        renderItem: function renderItem(item) {
          return _react.default.createElement(_antd.List.Item, {
            actions: [_react.default.createElement("a", null, "edit"), _react.default.createElement("a", null, "more")]
          }, _react.default.createElement(_antd.Skeleton, {
            avatar: true,
            title: false,
            loading: item.loading,
            active: true
          }, _react.default.createElement(_antd.List.Item.Meta, {
            avatar: _react.default.createElement(_antd.Avatar, {
              src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            }),
            title: _react.default.createElement("a", {
              href: "https://ant.design"
            }, item.name.last),
            description: "Ant Design, a design language for background applications, is refined by Ant UED Team"
          }), _react.default.createElement("div", null, "content")));
        }
      });
    }
  }]);

  return LoadMoreList;
}(_react.default.Component);

var _default = LoadMoreList; // ReactDOM.render(<LoadMoreList />, mountNode);

exports.default = _default;