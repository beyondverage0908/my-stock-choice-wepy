"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _x = _interopRequireDefault(require('../vendor.js')(4));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = new _x["default"].Store({
  state: {
    isShowHomeChart: true
  },
  mutations: {
    changeHomeChartVisible: function changeHomeChartVisible(state, payload) {
      state.isShowHomeChart = !!payload;
    }
  },
  actions: {}
});

exports["default"] = _default;