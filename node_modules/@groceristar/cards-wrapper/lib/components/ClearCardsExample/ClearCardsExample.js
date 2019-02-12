"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _index = require("./index");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var ClearCardsExample = function ClearCardsExample() {
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement("br", null), _react.default.createElement("hr", null), _react.default.createElement(_index.RecipeCard1, {
    title: "Card title"
  }, _react.default.createElement("hr", null), _react.default.createElement("hr", null), _react.default.createElement("hr", null), _react.default.createElement("hr", null)), _react.default.createElement("br", null), _react.default.createElement(_index.RecipeCard2, {
    title: "Card title"
  }, _react.default.createElement("hr", null), _react.default.createElement("hr", null), _react.default.createElement("hr", null)), _react.default.createElement("br", null), _react.default.createElement(_index.RecipeCard3, {
    title: "Card title",
    description: "This is the description"
  }), _react.default.createElement("br", null), _react.default.createElement(_index.RecipeCard4, null), _react.default.createElement("br", null), _react.default.createElement(_index.RecipeCard5, null), _react.default.createElement("br", null));
};

var _default = ClearCardsExample;
exports.default = _default;