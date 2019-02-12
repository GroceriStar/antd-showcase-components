"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var ItemCard = function ItemCard(item) {
  return _react.default.createElement(_antd.List.Item, {
    key: item.id
  }, _react.default.createElement(_antd.Card, {
    hoverable: true,
    className: "card",
    actions: [_react.default.createElement("a", null, "\u64CD\u4F5C\u4E00"), _react.default.createElement("a", null, "\u64CD\u4F5C\u4E8C")]
  }, _react.default.createElement(_antd.Card.Meta, {
    avatar: _react.default.createElement("img", {
      alt: "",
      className: "cardAvatar",
      src: item.avatar
    }),
    title: _react.default.createElement("a", null, item.title),
    description: _react.default.createElement("h2", null, item.description)
  })));
};

var ItemCardEmpty = function ItemCardEmpty() {
  return _react.default.createElement(_antd.List.Item, null, _react.default.createElement(_antd.Button, {
    type: "dashed",
    className: "newButton"
  }, _react.default.createElement(_antd.Icon, {
    type: "plus"
  }), " Add new"));
};

var _renderItem = function renderItem(item) {
  // can be replaced with <ItemCard />
  return item ? ItemCard(item) : ItemCardEmpty;
};

var gridStyles = {
  gutter: 24,
  lg: 3,
  md: 2,
  sm: 1,
  xs: 1
};

var ListWrapper = function ListWrapper(list) {
  return _react.default.createElement(_antd.List, {
    rowKey: "id",
    grid: gridStyles,
    dataSource: [''].concat(_toConsumableArray(list)),
    renderItem: function renderItem(item) {
      return _renderItem(item);
    }
  });
};

var _default = ListWrapper;
exports.default = _default;