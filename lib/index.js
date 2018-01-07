'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Created by Chayan.Bhaisare on 01/05/2018.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var TimeTracker = function (_React$Component) {
  _inherits(TimeTracker, _React$Component);

  function TimeTracker(props) {
    _classCallCheck(this, TimeTracker);

    var _this = _possibleConstructorReturn(this, (TimeTracker.__proto__ || Object.getPrototypeOf(TimeTracker)).call(this, props));

    _this.start = 0;
    _this.end = 0;
    _this.total = 0;
    _this.onPause = _this.onPause.bind(_this);
    _this.onResume = _this.onResume.bind(_this);
    return _this;
  }

  _createClass(TimeTracker, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.pause != nextProps.pause) {
        console.log('nextProps.pause', nextProps.pause);
        if (nextProps.pause === true) {
          this.onPause();
        } else if (nextProps.pause === false) {
          this.onResume();
        }
      }
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.start = this.getCurrentTime();
      // console.warn(`[TimeTracker] starting time - `, this.start);
      // add event listeners
      document.addEventListener("pause", this.onPause, false);
      document.addEventListener("resume", this.onResume, false);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      // remove event listeners
      document.removeEventListener("pause", this.onPause, false);
      document.removeEventListener("resume", this.onResume, false);
      this.end = this.getCurrentTime();
      // console.warn(`[TimeTracker] end time - `, this.end);
      this.calculateDiff();
      if (this.props.onSave) {
        this.props.onSave(this.total);
      }
    }
  }, {
    key: 'onPause',
    value: function onPause() {
      this.end = this.getCurrentTime();
      // console.warn(`[TimeTracker] pausing time - `, this.end);
      this.calculateDiff();
      // console.warn(`[TimeTracker] pausing time TOTAL - `, this.total);
    }
  }, {
    key: 'onResume',
    value: function onResume() {
      this.start = this.getCurrentTime();
      // console.warn(`[TimeTracker] resuming time - `, this.start);
    }
  }, {
    key: 'calculateDiff',
    value: function calculateDiff() {
      this.total += this.end - this.start;
      // console.warn(`[TimeTracker] total time - `, this.total);
    }
  }, {
    key: 'getCurrentTime',
    value: function getCurrentTime() {
      if (typeof performance !== 'undefined') {
        return performance.now();
      }
      return Date.now();
    }
  }]);

  return TimeTracker;
}(_react2.default.Component);

exports.default = TimeTracker;