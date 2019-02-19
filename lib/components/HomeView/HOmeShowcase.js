"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Header = _interopRequireDefault(require("./../components/Header/Header"));

var _Cell = _interopRequireDefault(require("./../components/Cell/Cell"));

var _mauerwerk = require("mauerwerk");

var _lodash = _interopRequireDefault(require("lodash"));

var _RecipeTable = _interopRequireDefault(require("./../components/Recipe/RecipeTable"));

require("antd/dist/antd.css");

require("./../styles.css");

var _selector = require("./../selectors/selector");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// getGroceryCollection
var HomeRecipeView =
/*#__PURE__*/
function (_Component) {
  _inherits(HomeRecipeView, _Component);

  function HomeRecipeView() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, HomeRecipeView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HomeRecipeView)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      //Did we need it here? i think we didn use all data from this method
      data: [],
      columns: 2,
      margin: 70,
      filter: "",
      height: true
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "search", function (e) {
      return _this.setState({
        filter: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "shuffle", function () {
      return _this.setState(function (state) {
        return {
          data: _lodash.default.shuffle(state.data)
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setColumns", function (e) {
      return _this.setState({
        columns: parseInt(e.key, 10)
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setMargin", function (e) {
      return _this.setState({
        margin: parseInt(e.key, 10)
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setHeight", function (e) {
      return _this.setState({
        height: e
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "grocery", []);

    return _this;
  }

  _createClass(HomeRecipeView, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return (0, _selector.getFirstFiveRecipes)();

              case 3:
                response = _context.sent;
                this.setState({
                  data: response.data
                });
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.error("Can't connect to Database");

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }() //@TODO move this stuff to header

  }, {
    key: "render",
    // this will be a new version

    /*
        <Cell {...data}
        maximized={maximized}
        toggle={toggle}
        id={this.getId(data.name)}
      >
           <InsideLayout id={id} name={name} toggle={toggle}  />
       </Cell>
       */
    value: function render() {
      // console.log( getGroceryCollection() )
      // console.log( getRandomRecipe() )
      var data = this.state.data; // it's a bad way, but at least it make our Grid setup less over confusing.
      // so i'm checking

      var cellHeight = 200; // nobody knows but i assume it's 200px...
      // @TODO cover this later. right now it's not important. details upon request
      // if( this.state.height ){
      //   cellHeight = data[0].height
      // }
      // const cellHeight =

      return _react.default.createElement("div", {
        className: "main"
      }, _react.default.createElement(_Header.default, _extends({}, this.state, {
        search: this.search,
        shuffle: this.shuffle,
        setColumns: this.setColumns,
        setMargin: this.setMargin,
        setHeight: this.setHeight
      })), _react.default.createElement(_mauerwerk.Grid, {
        className: "grid" // Arbitrary data, should contain keys, possibly heights, etc.
        ,
        data: data // Key accessor, instructs grid on how to fet individual keys from the data set
        ,
        keys: function keys(d) {
          return d.key;
        } // Can be a fixed value or an individual data accessor
        // heights={this.state.height ? d => d.height : 200}
        ,
        heights: cellHeight // Number of columns
        ,
        columns: this.state.columns // Space between elements
        ,
        margin: this.state.margin // Removes the possibility to scroll away from a maximized element
        ,
        lockScroll: true // Delay when active elements (blown up) are minimized again
        ,
        closeDelay: 400
      }, function (data, open, toggle) {
        //console.log(data.recipe) ;
        return _react.default.createElement(_Cell.default, _extends({}, data, {
          open: open,
          toggle: toggle,
          id: data.key,
          name: data.recipe.title,
          type: "recipe"
        }));
      }), _react.default.createElement("hr", null), _react.default.createElement(_RecipeTable.default, {
        data: data
      }));
    }
  }]);

  return HomeRecipeView;
}(_react.Component);

var _default = HomeRecipeView;
exports.default = _default;