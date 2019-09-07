"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  data: {
    inputText: '',
    stock: null,
    stockList: [],
    startSearch: false
  },
  computed: {
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
  },
  created: function created() {
    console.log('created');
  },
  mounted: function mounted() {
    console.log('mounted');
  },
  methods: {
    onChangeInput: function onChangeInput(e) {
      var _this = this;

      console.log(this.inputText);
      this.startSearch = false;

      if (this.inputText) {
        this.getSearchStockInfo(this.inputText).then(function (res) {
          console.log(res);
          _this.stockList = res;
        });
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

      wx.request({
        url: "https://m.00315.com/wxapp/api/stocks/".concat(stockCode),
        success: function success(res) {
          if (res.data) {
            _this2.stock = res.data;

            var cat = _this2.getGraphColumnCategories(res.data);

            var profits = _this2.getGraphColumnNetProfit(res.data);

            var roes = _this2.getGraphColumnRoe(res.data);

            _this2.initColumnProfitChart(cat, profits);

            _this2.initColumnProfitRoe(cat, roes);
          }
        }
      });
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
        wx.request({
          url: "https://m.00315.com/wxapp/api/stocks?q=".concat(searchText || ''),
          success: function success(res) {
            if (res.data) {
              resolve(res.data);
            } else {
              reject();
            }
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
    console.log(this.stock.zqdm || '600519');
    var code = this.stock.zqdm || '600519';
    return {
      title: 'K2复盘助手',
      path: "/pages/home?code=".concat(code)
    };
  }
}, {info: {"components":{"i-input":{"path":"../iview/dist/input/index"},"ring":{"path":"../comps/home/ring"},"stock-base-info":{"path":"../comps/home/stock-base-info"},"statement":{"path":"../comps/home/statement"},"risk":{"path":"../comps/home/risk"},"indicator":{"path":"../comps/home/indicator"}},"on":{}}, handlers: {'7-0': {"input": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChangeInput($event)
      })();
    
  }},'7-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.handleSearch(item)
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "inputText",
      handler: function set ($v) {
      var _vm=this;
        _vm.inputText = $v;
      
    }
    }} });