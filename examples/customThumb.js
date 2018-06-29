webpackJsonp([1],{

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(432);


/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rc_banner_anim__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rc_queue_anim__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rc_tween_one__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets_index_less__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__assets_thumb_less__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__assets_thumb_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__assets_thumb_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__assets_index_less__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__assets_index_less__);



// use jsx to render html, do not modify simple.html










var Element = __WEBPACK_IMPORTED_MODULE_3_rc_banner_anim__["a" /* default */].Element,
    Thumb = __WEBPACK_IMPORTED_MODULE_3_rc_banner_anim__["a" /* default */].Thumb;

var BgElement = Element.BgElement;

var Demo = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Demo, _React$Component);

  function Demo(props) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Demo);

    var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.call(this, props));

    _this.onMouseEnter = function () {
      _this.setState({
        enter: true
      });
    };

    _this.onMouseLeave = function () {
      _this.setState({
        enter: false
      });
    };

    _this.imgArray = ['https://os.alipayobjects.com/rmsportal/IhCNTqPpLeTNnwr.jpg', 'https://os.alipayobjects.com/rmsportal/uaQVvDrCwryVlbb.jpg'];
    _this.state = {
      enter: false
    };
    return _this;
  }

  Demo.prototype.render = function render() {
    var thumbChildren = this.imgArray.map(function (img, i) {
      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        'span',
        { key: i },
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('i', { style: { backgroundImage: 'url(' + img + ')' } })
      );
    });
    return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3_rc_banner_anim__["a" /* default */],
      { onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave },
      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        Element,
        { key: 'aaa',
          prefixCls: 'banner-user-elem'
        },
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(BgElement, {
          key: 'bg',
          className: 'bg',
          style: {
            backgroundImage: 'url(' + this.imgArray[0] + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }
        }),
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4_rc_queue_anim__["a" /* default */],
          { key: '1', name: 'QueueAnim' },
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
            'h1',
            { key: 'h1' },
            'Ant Motion Demo'
          ),
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
            'p',
            { key: 'p' },
            'Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_rc_tween_one__["b" /* default */],
          {
            animation: { y: 50, opacity: 0, type: 'from', delay: 200 },
            key: '2',
            name: 'TweenOne'
          },
          'Ant Motion Demo.Ant Motion Demo'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        Element,
        { key: 'bbb',
          prefixCls: 'banner-user-elem'
        },
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(BgElement, {
          key: 'bg',
          className: 'bg',
          style: {
            backgroundImage: 'url(' + this.imgArray[1] + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }
        }),
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4_rc_queue_anim__["a" /* default */],
          { key: '1', name: 'QueueAnim' },
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
            'h1',
            { key: 'h1' },
            'Ant Motion Demo'
          ),
          __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
            'p',
            { key: 'p' },
            'Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_rc_tween_one__["b" /* default */],
          {
            animation: { y: 50, opacity: 0, type: 'from', delay: 200 },
            key: '2',
            name: 'TweenOne'
          },
          'Ant Motion Demo.Ant Motion Demo'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        Thumb,
        { prefixCls: 'user-thumb', key: 'thumb', component: __WEBPACK_IMPORTED_MODULE_5_rc_tween_one__["b" /* default */],
          animation: { bottom: this.state.enter ? 0 : -70 }
        },
        thumbChildren
      )
    );
  };

  return Demo;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_7_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(Demo, null), document.getElementById('__react-content'));

/***/ }),

/***/ 433:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[431]);
//# sourceMappingURL=customThumb.js.map