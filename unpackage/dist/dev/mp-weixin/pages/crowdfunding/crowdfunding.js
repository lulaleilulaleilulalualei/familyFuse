(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/crowdfunding/crowdfunding"],{

/***/ 77:
/*!*********************************************************************************!*\
  !*** F:/code/HK_utravel/main.js?{"page":"pages%2Fcrowdfunding%2Fcrowdfunding"} ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _crowdfunding = _interopRequireDefault(__webpack_require__(/*! ./pages/crowdfunding/crowdfunding.vue */ 78));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_crowdfunding.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 78:
/*!**************************************************************!*\
  !*** F:/code/HK_utravel/pages/crowdfunding/crowdfunding.vue ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _crowdfunding_vue_vue_type_template_id_2bdd92ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crowdfunding.vue?vue&type=template&id=2bdd92ec&scoped=true& */ 79);
/* harmony import */ var _crowdfunding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crowdfunding.vue?vue&type=script&lang=js& */ 81);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _crowdfunding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _crowdfunding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _crowdfunding_vue_vue_type_style_index_0_id_2bdd92ec_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crowdfunding.vue?vue&type=style&index=0&id=2bdd92ec&scoped=true&lang=scss& */ 83);
/* harmony import */ var _Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 14);






/* normalize component */

var component = Object(_Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _crowdfunding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _crowdfunding_vue_vue_type_template_id_2bdd92ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _crowdfunding_vue_vue_type_template_id_2bdd92ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2bdd92ec",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "code/HK_utravel/pages/crowdfunding/crowdfunding.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 79:
/*!*********************************************************************************************************!*\
  !*** F:/code/HK_utravel/pages/crowdfunding/crowdfunding.vue?vue&type=template&id=2bdd92ec&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_crowdfunding_vue_vue_type_template_id_2bdd92ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./crowdfunding.vue?vue&type=template&id=2bdd92ec&scoped=true& */ 80);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_crowdfunding_vue_vue_type_template_id_2bdd92ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_crowdfunding_vue_vue_type_template_id_2bdd92ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 80:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/code/HK_utravel/pages/crowdfunding/crowdfunding.vue?vue&type=template&id=2bdd92ec&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var m0 = _vm.actLineLeft()
  var m1 = _vm.actLineW()
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        m0: m0,
        m1: m1
      }
    }
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 81:
/*!***************************************************************************************!*\
  !*** F:/code/HK_utravel/pages/crowdfunding/crowdfunding.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_crowdfunding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./crowdfunding.vue?vue&type=script&lang=js& */ 82);
/* harmony import */ var _Tools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_crowdfunding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Tools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_crowdfunding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Tools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_crowdfunding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Tools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_crowdfunding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Tools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_crowdfunding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 82:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/code/HK_utravel/pages/crowdfunding/crowdfunding.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;


































































































































































































































var _vuex = __webpack_require__(/*! vuex */ 16);function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var showPosterBox = function showPosterBox() {return __webpack_require__.e(/*! import() | components/sharePoster */ "components/sharePoster").then(__webpack_require__.bind(null, /*! ../../components/sharePoster.vue */ 160));};var supportSum = function supportSum() {return __webpack_require__.e(/*! import() | pages/crowdfunding/supportSum */ "pages/crowdfunding/supportSum").then(__webpack_require__.bind(null, /*! ./supportSum.vue */ 167));};var loadErr = function loadErr() {return __webpack_require__.e(/*! import() | components/loadErr */ "components/loadErr").then(__webpack_require__.bind(null, /*! @/components/loadErr.vue */ 146));};var _default =

{
  data: function data() {
    return {
      navColor: 'rgba(255,255,255,0)', //导航背景色
      navTitle: 0, //导航标题
      isShowNavBorder: false, //是否显示border
      // isShowHotelBox: false, //酒店列表
      // isShowFoodsBox: false, //餐饮列表
      isShowSupportBox: false, //支持金额
      isShowPorsterBox: false, //分享海报

      isLoadErr: false,
      dataObj: {},
      lineObj: {}, //景点对象
      swiperArr: [], //swiper数组
      id: null, //众筹id
      curIdx: 0, //当前swiper idx
      viewId: '', //跳转到某天

      // 考察相册
      albumIdx: 0, //相册当前下标
      albumImgs: [], //相册数组
      videoTop: null, //视频top值
      isPlayVideo: false, //是否自动播放视频

      isShowRouteList: false, //
      optRouteTxt: '展开', //

      isShowNameList: false, //默认收起
      optApplyTxt: '展开',

      isShowFeeBox: false, //费用
      isShowSmallFee: false, //默认不展示看消费

      isAuth: false, //登录状态
      isShareStatus: false };

  },
  components: { supportSum: supportSum, showPosterBox: showPosterBox, loadErr: loadErr },
  onLoad: function onLoad(opt) {var _this = this;
    this.id = opt.crowd_id;
    this.isShareStatus = this.$isSharePage;
    if (!this.$userInfo) {//加载登录配置
      this.$api.userLogin(function (status) {
        if (status == 1) {
          _this.isAuth = true;
        }
      });
    } else {
      this.isAuth = true;
    }
    this.getAlbumArr();
    setTimeout(function () {
      _this.getData();
    }, 10);

    if (this.isShareStatus) {
      this.toJumpOrderList(false); //当从分享进入众筹页面的时候，取消直接到达订单列表页面
    }
  },
  onHide: function onHide() {
    this.isShowFeeBox = false; //关闭费用提示框
  },
  methods: _objectSpread({},
  (0, _vuex.mapActions)([
  'toSaveSpotInfo',
  'toGetActInfo',
  'toJumpOrderList']), {

    getAlbumArr: function getAlbumArr() {var _this2 = this;
      this.$api.ajax({
        url: this.$config.getImgs }).

      then(function (res) {
        if (res.statusCode == 200 && res.data.code == 0) {
          var arr = res.data.data;
          _this2.albumImgs = arr;
        } else {
          _this2.$api.warnNotice(res.data.message);
        }
      }).
      catch(function () {
        _this2.$api.warnNotice('相册加载失败');
      });
    },
    swiperAlbumChange: function swiperAlbumChange(e) {
      this.albumIdx = e.detail.current;
    },
    toPreviewAlbum: function toPreviewAlbum(idx) {
      var $this = this;
      uni.previewImage({
        current: $this.albumImgs[idx],
        urls: $this.albumImgs });

    },
    toPriviewCert: function toPriviewCert(idx) {//查看证书
      var $this = this;
      uni.previewImage({
        current: $this.dataObj.img_list[idx],
        urls: $this.dataObj.img_list });

    },
    toJumpDayRoute: function toJumpDayRoute(idx) {var _this3 = this; //跳转到某天线路
      if (!this.isShowRouteList) {
        this.isShowRouteList = true;
        setTimeout(function () {
          _this3.viewId = "route_".concat(idx);
        }, 200);
      } else {
        this.viewId = "route_".concat(idx);
      }
    },
    curSwiperChange: function curSwiperChange(e) {
      this.curIdx = e.detail.current;
    },
    toShowSmallFee: function toShowSmallFee() {//to查看消费
      this.isShowSmallFee = !this.isShowSmallFee;
    },
    toCloseSmallFee: function toCloseSmallFee() {//to关闭消费
      this.isShowSmallFee = !this.isShowSmallFee;
    },
    toBackHome: function toBackHome() {
      uni.reLaunch({
        url: '/pages/index/index' });

    },
    getUserInfo: function getUserInfo(e) {//按钮登录授权
      if (e.detail.errMsg == 'getUserInfo:ok') {
        uni.showLoading({
          title: '授权登陆中...',
          mask: true });

        var $this = this;
        this.$api.userLogin(function (status) {
          if (status == '1') {
            uni.hideLoading();
            uni.showToast({
              title: '授权登录成功',
              icon: 'success',
              mask: true,
              success: function success() {
                $this.isAuth = true;
              } });

          }
        });
      } else {
        this.$api.warnNotice('您已拒绝授权！');
        this.isAuth = false;
      }
    },
    actLineW: function actLineW() {//670
      var sys = uni.getSystemInfoSync();
      var w = sys.windowWidth / 750 * 670;
      return parseFloat(this.dataObj.have_fee) / parseFloat(this.dataObj.target_fee) * w + 'px';
    },
    actLineLeft: function actLineLeft() {//670
      var sys = uni.getSystemInfoSync();
      var w = sys.windowWidth / 750 * 670;
      var l = parseFloat(this.dataObj.have_fee) / parseFloat(this.dataObj.target_fee) * w; //当前进度的宽度
      var numW = sys.windowWidth / 750 * 84; //显示数据宽度
      if (l + numW >= w) {
        l = w - numW;
      }
      return l + 'px';
    },
    hadScale: function hadScale() {
      var val = parseFloat(this.dataObj.have_fee) / parseFloat(this.dataObj.target_fee) * 100;
      return val.toFixed(2);
    },
    toRelaodData: function toRelaodData() {
      this.isLoadErr = false;
      this.dataObj = {};
      this.getData();
    },
    getData: function getData() {var _this4 = this;
      uni.showLoading({
        title: '数据加载中',
        mask: true });

      this.$api.ajax({
        url: this.$config.cfActDetail,
        data: {
          crowd_id: this.id } }).


      then(function (res) {
        if (res.statusCode == 200 && res.data.code == 0) {
          _this4.dataObj = res.data.data;
          _this4.lineObj = JSON.parse(res.data.data.activity.content);
          _this4.lineObj.day_title_list.map(function (v) {
            v.DTitles = v.title.split(',');
          });
          _this4.lineObj.day_content_list.map(function (v) {
            v.content.map(function (val) {
              val = val.replace(/\<img/gi, '<img style="max-width:100%;height:auto"');
            });
          });
          var arr = [],type = 1;
          _this4.lineObj.point_list.map(function (v, i) {
            if (type == 1) {
              arr.push({});
              arr[arr.length - 1].firstPort = v;
              arr[arr.length - 1].morePort = [];
              type++;
            } else if (type == 2) {
              arr[arr.length - 1].morePort.push(v);
              type++;
            } else if (type == 3) {
              arr[arr.length - 1].morePort.push(v);
              type = 1;
            }
          });
          _this4.swiperArr = arr;
          setTimeout(function () {
            if (!_this4.videoTop) {
              _this4.queryMultipleNodes('#video', function (top) {
                _this4.videoTop = top;
              });
            }
            uni.hideLoading();
          }, 500);
        } else {
          uni.hideLoading();
          _this4.$api.warnNotice(res.data.message);
          _this4.isLoadErr = true;
        }
      }).
      catch(function (err) {
        uni.hideLoading();
        _this4.isLoadErr = true;
      });
    },
    toShowSharePoster: function toShowSharePoster() {//打开海报分享
      this.isShowPorsterBox = true;
    },
    toClosePosterBox: function toClosePosterBox(val) {//关闭海报分享
      this.isShowPorsterBox = false;
    },
    toApplyBox: function toApplyBox() {//跳转到报名页面
      this.isShowFeeBox = true;
    },
    toJumpApply: function toJumpApply() {
      var $this = this;
      this.toGetActInfo(this.dataObj.activity);
      uni.navigateTo({
        url: "/pages/writeOrder/writeOrder?type=1&dear_id=".concat($this.dataObj.dear_id) });

    },
    toSupportSum: function toSupportSum() {//支持金额
      if (this.dataObj.status == 0) {
        this.isShowSupportBox = true;
      }
    },
    toRefreshLoad: function toRefreshLoad() {
      this.isLoadErr = false;
      this.dataObj = {};
      this.getData();
    },
    toCloseSupportBox: function toCloseSupportBox(val) {//支持金额框
      this.isShowSupportBox = false;
      if (val) {
        this.toRefreshLoad();
      }
    },
    // toApplyActivity() { //报名活动

    // },
    toCloseFeeBox: function toCloseFeeBox(e) {
      var sign = e.target.dataset.sign;
      if (sign) {
        this.isShowFeeBox = false;
      }
    },
    toScroll: function toScroll(e) {
      var top = e.detail.scrollTop;
      this.navColor = "rgba(255,2555,255,".concat(top / 400 > 1 ? 1 : top / 400, ")");
      this.navTitle = top / 400 > 1 ? 1 : top / 400;
      if (top >= 400) {
        this.isShowNavBorder = true;
      } else {
        this.isShowNavBorder = false;
      }

      if (this.videoTop) {
        this.videoPlayCon(top);
      }
    },
    videoPlayCon: function videoPlayCon(val) {//视频播放控制
      var sys = uni.getSystemInfoSync();
      var top = this.videoTop - (sys.windowHeight - sys.windowWidth / 750 * 487);
      if (val - top > 0) {
        this.isPlayVideo = true;
      }
    },
    queryMultipleNodes: function queryMultipleNodes(id, callBack) {
      var query = uni.createSelectorQuery().in(this); //创建节点查询器 query
      query.select(id).boundingClientRect(function (data) {
        typeof callBack == 'function' && callBack(data.top);
      }).exec(); //这段代码的意思是选择Id=the-id的节点，获取节点位置信息的查询请求
    },
    // toShowHotelBox() { //酒店查看
    // 	this.isShowHotelBox = true
    // },
    // toCloseHotelBox(val) {//关闭酒店
    // 	this.isShowHotelBox = val
    // },
    // toShowFoodsBox() { //餐饮查看
    // 	this.isShowFoodsBox = true
    // },
    // toCloseFoodsBox(val) { //关闭餐饮
    // 	this.isShowFoodsBox = val
    // },
    toJumpSpotIntro: function toJumpSpotIntro(info) {//查看景点详情
      this.toSaveSpotInfo(info);
      uni.navigateTo({
        url: '/pages/spotShow/spotShow' });

    },
    toShowOptRoute: function toShowOptRoute() {
      if (!this.isShowRouteList) {
        this.isShowRouteList = true;
        this.optRouteTxt = '收起';
      } else {
        this.isShowRouteList = false;
        this.optRouteTxt = '展开';
      }
    },
    toOptApplyList: function toOptApplyList() {
      if (!this.isShowNameList) {
        this.isShowNameList = true;
        this.optApplyTxt = '收起';
      } else {
        this.isShowNameList = false;
        this.optApplyTxt = '展开';
      }
    } }),

  onShareAppMessage: function onShareAppMessage() {
    var $this = this;
    return {
      path: "/pages/crowdfunding/crowdfunding?crowd_id=".concat($this.id),
      title: '快来帮我助力姓氏文化之旅',
      imageUrl: $this.$config.defaultUrl };

  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 83:
/*!************************************************************************************************************************!*\
  !*** F:/code/HK_utravel/pages/crowdfunding/crowdfunding.vue?vue&type=style&index=0&id=2bdd92ec&scoped=true&lang=scss& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Tools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Tools_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_crowdfunding_vue_vue_type_style_index_0_id_2bdd92ec_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--8-oneOf-1-2!../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./crowdfunding.vue?vue&type=style&index=0&id=2bdd92ec&scoped=true&lang=scss& */ 84);
/* harmony import */ var _Tools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Tools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Tools_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_crowdfunding_vue_vue_type_style_index_0_id_2bdd92ec_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Tools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Tools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Tools_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_crowdfunding_vue_vue_type_style_index_0_id_2bdd92ec_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Tools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Tools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Tools_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_crowdfunding_vue_vue_type_style_index_0_id_2bdd92ec_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Tools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Tools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Tools_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_crowdfunding_vue_vue_type_style_index_0_id_2bdd92ec_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Tools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Tools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Tools_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_crowdfunding_vue_vue_type_style_index_0_id_2bdd92ec_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 84:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/code/HK_utravel/pages/crowdfunding/crowdfunding.vue?vue&type=style&index=0&id=2bdd92ec&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[77,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/crowdfunding/crowdfunding.js.map