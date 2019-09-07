"use strict";

var _core = _interopRequireDefault(require('../../vendor.js')(0));

var _x = require('../../vendor.js')(4);

var _store = _interopRequireDefault(require('../../store/index.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_core["default"].component({
  store: _store["default"],
  props: {
    stock: {
      type: Object,
      "default": null
    }
  },
  data: function data() {
    return {
      modalVisible: false
    };
  },
  methods: _objectSpread({}, (0, _x.mapMutations)(['changeHomeChartVisible']), {
    onHandleRank: function onHandleRank() {
      this.modalVisible = true;
      this.changeHomeChartVisible(false);
    },
    handleCloseOk: function handleCloseOk() {
      this.modalVisible = false;
      this.changeHomeChartVisible(true);
    }
  })
}, {info: {"components":{"i-modal":{"path":"../../iview/dist/modal/index"}},"on":{"14-1":["ok"]}}, handlers: {'14-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHandleRank($event)
      })();
    
  }},'14-1': {"ok": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.handleCloseOk($event)
      })();
    
  }}}, models: {} });