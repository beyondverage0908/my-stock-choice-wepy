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
    },
    initColumnChart: function initColumnChart() {
      var wxCharts = require('../comps/wxcharts/wxcharts.js');

      var windowWidth = 320;

      try {
        var res = wx.getSystemInfoSync();
        windowWidth = res.windowWidth;
      } catch (e) {
        console.error('getSystemInfoSync failed!');
      }

      new wxCharts({
        canvasId: 'columnCanvas',
        type: 'column',
        animation: true,
        categories: ['2012', '2013', '2014', '2015', '2016'],
        series: [{
          name: '成交量1',
          data: [15, 20, 45, 37, 4]
        }],
        yAxis: {
          format: function format(val) {
            return val + '万';
          }
        },
        xAxis: {
          disableGrid: true,
          type: 'calibration'
        },
        width: windowWidth,
        height: 180
      });
    }
  },
  onReady: function onReady() {
    this.initColumnChart();
  }
}, {info: {"components":{"i-input":{"path":"../iview/dist/input/index"},"i-tag":{"path":"../iview/dist/tag/index"},"ring":{"path":"../comps/home/ring"},"stock-base-info":{"path":"../comps/home/stock-base-info"},"statement":{"path":"../comps/home/statement"},"risk":{"path":"../comps/home/risk"},"indicator":{"path":"../comps/home/indicator"}},"on":{}}, handlers: {'7-28': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChangeInput($event)
      })();
    
  }}}, models: {} }, {info: {"components":{"i-input":{"path":"../iview/dist/input/index"},"i-tag":{"path":"../iview/dist/tag/index"},"ring":{"path":"../comps/home/ring"},"stock-base-info":{"path":"../comps/home/stock-base-info"},"statement":{"path":"../comps/home/statement"},"risk":{"path":"../comps/home/risk"},"indicator":{"path":"../comps/home/indicator"}},"on":{}}, handlers: {'7-28': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChangeInput($event)
      })();
    
  }}}, models: {} });