"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reduxDevtools = require("redux-devtools");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Exported from redux-devtools
// import { createDevTools } from 'redux-devtools';
// import JSONTree from 'react-json-tree'
// If you're using Immutable.js: `npm i --save immutable`
// import { Map } from 'immutable'
// Inside a React component:
var json = {
  array: [1, 2, 3],
  bool: true,
  object: {
    foo: 'bar'
  } // immutable: Map({ key: 'value' })
  // <JSONTree data={json} />

};

var ReduxVersion = function ReduxVersion(data) {
  return _react.default.createElement(_reduxDevtools.JSONTree, {
    data: data
  });
};

var _default = ReduxVersion;
exports.default = _default;