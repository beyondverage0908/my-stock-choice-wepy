"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  data: {
    inputText: ''
  },
  computed: {},
  created: function created() {
    console.log('created');
  },
  mounted: function mounted() {
    console.log('mounted');
  },
  methods: {
    onChangeInput: function onChangeInput(e) {
      console.log(e); // console.log(this.inputText);
    }
  }
}, {info: {"components":{"i-input":{"path":"../iview/dist/input/index"},"i-tag":{"path":"../iview/dist/tag/index"}},"on":{}}, handlers: {'7-146': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChangeInput($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"i-input":{"path":"../iview/dist/input/index"},"i-tag":{"path":"../iview/dist/tag/index"}},"on":{}}, handlers: {'7-146': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChangeInput($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"i-input":{"path":"../iview/dist/input/index"},"i-tag":{"path":"../iview/dist/tag/index"}},"on":{}}, handlers: {'7-146': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChangeInput($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"i-input":{"path":"../iview/dist/input/index"},"i-tag":{"path":"../iview/dist/tag/index"}},"on":{}}, handlers: {'7-146': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChangeInput($event)
      })();
    
  }}}, models: {} });