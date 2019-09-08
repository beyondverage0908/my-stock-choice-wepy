"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

var _home = require('../api/home.js');

var _x = require('../vendor.js')(4);

var _store = _interopRequireDefault(require('../store/index.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_core["default"].page({
  store: _store["default"],
  data: {
    hazyCount: 0,
    inputText: '',
    stock: null,
    stockList: [],
    startSearch: false,
    yearProfits: [],
    yearRoes: []
  },
  computed: _objectSpread({}, (0, _x.mapState)(['isShowHomeChart']), {
    rankRatio: function rankRatio() {
      if (!this.stock) {
        return 0;
      }

      return this.stock.rank / this.stock.total * 100;
    },
    hasGraph: function hasGraph() {
      if (!this.stock) {
        return false;
      }

      return this.stock.growings.length > 0;
    },
    hasRisk: function hasRisk() {
      if (!this.stock) {
        return false;
      }

      return this.stock.risks.length > 0;
    }
  }),
  methods: {
    onHazyDeal: function onHazyDeal() {
      console.log('hit');
      this.hazyCount++;
    },
    gotoChartArea: function gotoChartArea() {
      wx.navigateTo({
        url: './chart-demo?chart=xx'
      });
    },
    onChangeInput: function onChangeInput(e) {
      var _this = this;

      console.log(this.inputText);
      this.startSearch = false;

      if (this.inputText) {
        this.getSearchStockInfo(this.inputText).then(function (res) {
          _this.stockList = res;
        });
      } else {
        this.stockList = [];
      }
    },
    // 点击搜索
    handleSearch: function handleSearch(search) {
      this.startSearch = true;
      this.inputText = '';
      this.getStockInfo(search.zqdm);
    },
    initColumnProfitChart: function initColumnProfitChart(categorys, mainData) {
      if (!categorys || !categorys.length || !mainData || !mainData.length) return;

      var wxCharts = require('../comps/wxcharts/wxcharts.js');

      var windowWidth = 320;

      try {
        var res = wx.getSystemInfoSync();
        windowWidth = res.windowWidth;
      } catch (e) {
        console.error('getSystemInfoSync failed!');
      }

      new wxCharts({
        canvasId: 'columnCanvas-1',
        type: 'column',
        animation: true,
        categories: categorys,
        series: [{
          name: '净利润',
          data: mainData
        }],
        yAxis: {
          title: '净利润',
          format: function format(val) {
            return val + '万';
          }
        },
        xAxis: {
          disableGrid: true,
          type: 'calibration'
        },
        width: 320,
        height: 180
      });
    },
    initColumnProfitRoe: function initColumnProfitRoe(categorys, mainData) {
      if (!categorys || !categorys.length || !mainData || !mainData.length) return;

      var wxCharts = require('../comps/wxcharts/wxcharts.js');

      var windowWidth = 320;

      try {
        var res = wx.getSystemInfoSync();
        windowWidth = res.windowWidth;
      } catch (e) {
        console.error('getSystemInfoSync failed!');
      }

      new wxCharts({
        canvasId: 'columnCanvas-2',
        type: 'column',
        animation: true,
        categories: categorys,
        series: [{
          name: '净资产收益率',
          data: mainData,
          color: '#a6d94a'
        }],
        yAxis: {
          title: '净资产收益率',
          format: function format(val) {
            return val + '%';
          }
        },
        xAxis: {
          disableGrid: true,
          type: 'calibration'
        },
        width: 320,
        height: 180
      });
    },
    getStockInfo: function getStockInfo(stockCode) {
      var _this2 = this;

      (0, _home.getStockInfo)(stockCode).then(function (res) {
        if (res.data) {
          _this2.stock = res.data; // const cat = this.getGraphColumnCategories(res.data);
          // const profits = this.getGraphColumnNetProfit(res.data);
          // const roes = this.getGraphColumnRoe(res.data);
          // this.initColumnProfitChart(cat, profits);
          // this.initColumnProfitRoe(cat, roes);

          _this2.yearProfits = _this2.getYearProfitList(res.data);
          _this2.yearRoes = _this2.getYearRoeList(res.data);
        }
      });
    },
    getYearProfitList: function getYearProfitList(stock) {
      var profits = [];
      stock.growings.forEach(function (item) {
        profits.push({
          year: "".concat(item.year),
          profit: item.netProfit
        });
      });
      return profits;
    },
    getYearRoeList: function getYearRoeList(stock) {
      var roes = [];
      stock.growings.forEach(function (item) {
        roes.push({
          year: "".concat(item.year),
          roe: item.roe
        });
      });
      return roes;
    },
    getGraphColumnCategories: function getGraphColumnCategories(stock) {
      var categories = [];
      stock.growings.forEach(function (item) {
        categories.push(item.year);
      });
      return categories;
    },
    getGraphColumnNetProfit: function getGraphColumnNetProfit(stock) {
      var profits = [];
      stock.growings.forEach(function (item) {
        profits.push(item.netProfit);
      });
      return profits;
    },
    getGraphColumnRoe: function getGraphColumnRoe(stock) {
      var roes = [];
      stock.growings.forEach(function (item) {
        roes.push(item.roe);
      });
      return roes;
    },
    getSearchStockInfo: function getSearchStockInfo(searchText) {
      return new Promise(function (resolve, reject) {
        (0, _home.getSearchStockInfo)(searchText).then(function (res) {
          if (res.data) {
            resolve(res.data);
          } else {
            reject();
          }
        });
      });
    }
  },
  onReady: function onReady() {
    console.log('ready');
  },
  onLoad: function onLoad(options) {
    var code = options['code'] || '600519';
    this.getStockInfo(code);
  },
  onShareAppMessage: function onShareAppMessage() {
    var code = this.stock.zqdm || '600519';
    return {
      title: 'K2复盘助手',
      path: "/pages/home?code=".concat(code)
    };
  }
}, {info: {"components":{"i-input":{"path":"../iview/dist/input/index"},"ring":{"path":"../comps/home/ring"},"stock-base-info":{"path":"../comps/home/stock-base-info"},"statement":{"path":"../comps/home/statement"},"risk":{"path":"../comps/home/risk"},"indicator":{"path":"../comps/home/indicator"},"toolbar":{"path":"../comps/home/toolbar"},"column-profit":{"path":"../comps/charts/column-profit"},"column-roe":{"path":"../comps/charts/column-roe"}},"on":{}}, handlers: {'7-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChangeInput($event)
      })();
    
  }},'7-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onHazyDeal($event)
      })();
    
  }},'7-2': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.handleSearch(item)
      })();
    
  }},'7-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.gotoChartArea($event)
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputText",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputText = $v;
      
    }
    }} });