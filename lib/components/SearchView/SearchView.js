"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _AdvancedSearchForm = _interopRequireDefault(require("../components/AdvancedSearchForm/AdvancedSearchForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// import { Layout } from 'antd';
// import {
//   getRandomRecipe,
//   getFirstFiveRecipes,
//   getFiveRandomIngredients,
//   getRecipeChickenKyivById,
//
// } from "../selectors/selector"
var WrappedAdvancedSearchForm = _antd.Form.create()(_AdvancedSearchForm.default);

var Header = _antd.Layout.Header,
    Footer = _antd.Layout.Footer,
    Content = _antd.Layout.Content;

var SearchView = function SearchView() {
  return _react.default.createElement(_antd.Layout, null, _react.default.createElement(_antd.Layout, null, _react.default.createElement(Content, null, _react.default.createElement(WrappedAdvancedSearchForm, null)), _react.default.createElement(Content, null, _react.default.createElement("div", {
    className: "search-result-list"
  }, "Search Result List"))), _react.default.createElement(Footer, null, "footer"));
};

var _default = SearchView;
exports.default = _default;