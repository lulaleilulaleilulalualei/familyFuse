(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/writeOrder/writeOrder"],{

/***/ 61:
/*!*****************************************************************************!*\
  !*** F:/code/HK_utravel/main.js?{"page":"pages%2FwriteOrder%2FwriteOrder"} ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _writeOrder = _interopRequireDefault(__webpack_require__(/*! ./pages/writeOrder/writeOrder.vue */ 62));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_writeOrder.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 62:
/*!**********************************************************!*\
  !*** F:/code/HK_utravel/pages/writeOrder/writeOrder.vue ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _writeOrder_vue_vue_type_template_id_033e2868_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./writeOrder.vue?vue&type=template&id=033e2868&scoped=true& */ 63);
/* harmony import */ var _writeOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./writeOrder.vue?vue&type=script&lang=js& */ 65);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _writeOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _writeOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _writeOrder_vue_vue_type_style_index_0_id_033e2868_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./writeOrder.vue?vue&type=style&index=0&id=033e2868&scoped=true&lang=scss& */ 67);
/* harmony import */ var _Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 14);






/* normalize component */

var component = Object(_Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _writeOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _writeOrder_vue_vue_type_template_id_033e2868_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _writeOrder_vue_vue_type_template_id_033e2868_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "033e2868",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "code/HK_utravel/pages/writeOrder/writeOrder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 63:
/*!*****************************************************************************************************!*\
  !*** F:/code/HK_utravel/pages/writeOrder/writeOrder.vue?vue&type=template&id=033e2868&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeOrder_vue_vue_type_template_id_033e2868_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./writeOrder.vue?vue&type=template&id=033e2868&scoped=true& */ 64);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeOrder_vue_vue_type_template_id_033e2868_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeOrder_vue_vue_type_template_id_033e2868_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 64:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/code/HK_utravel/pages/writeOrder/writeOrder.vue?vue&type=template&id=033e2868&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 65:
/*!***********************************************************************************!*\
  !*** F:/code/HK_utravel/pages/writeOrder/writeOrder.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./writeOrder.vue?vue&type=script&lang=js& */ 66);
/* harmony import */ var _Tools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Tools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Tools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Tools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Tools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 66:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/code/HK_utravel/pages/writeOrder/writeOrder.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;























































































































































































var _vuex = __webpack_require__(/*! vuex */ 16);function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =

{
  data: function data() {
    return {
      isSendCode: false, //是否发送验证码
      codeTxt: '发送验证码',
      tvlArr: [{
        name: 'name',
        id_card: 'id_card',
        tel: 'tel',
        ageType: 2, //默认为2正常报名年龄
        addFee: 0 }],

      userTel: '', //报名手机号
      fromType: null, //订单类型
      dear_id: null, //宗亲id
      actInfo: null, //活动信息
      actContent: null, //活动内容
      isShowActorInfo: false,
      equ_room: false, //是否是同一间房
      is_doctor: false, //是否是医生
      isAgreeContract: true, //是否同意合同
      isAgreeAttention: true, //特别注意事项
      isShowAttention: false, //是否显示事项

      optIdCardIdx: '', //是否检测完成，默认为检测完成
      isOverAge: false, //是否超龄
      countAgeYouthFee: { fee: 0, count: 0 }, //22周岁以下服务费
      // countAgeYoungFee: {fee: 0, count: 0}, //青年服务费 
      subjoinFee: 0 //附件费
    };
  },
  computed: _objectSpread({},
  (0, _vuex.mapGetters)([
  '_actInfo',
  '_isToOrderList']), {

    pageMinH: function pageMinH() {
      var sys = uni.getSystemInfoSync();
      return sys.windowHeight + 'px';
    } }),

  onLoad: function onLoad(opt) {
    this.fromType = opt.type;
    this.dear_id = opt.dear_id;
    if (this._actInfo) {
      this.actInfo = this._actInfo;
      this.actContent = JSON.parse(this._actInfo.content);
      this.actInfo.relFee = this.$api.pointProblem(this.actInfo.pay_fee, this.actInfo.service_fee, 'add');
      this.toGetActInfo(null);
    }
  },
  onShow: function onShow() {
    if (this._isToOrderList) {
      uni.reLaunch({
        url: '/pages/index/index' });

    }
  },
  methods: _objectSpread({},
  (0, _vuex.mapActions)([
  'toGetActInfo',
  'toJumpOrderList']), {

    idCardFocus: function idCardFocus(idx) {
      this.optIdCardIdx = idx;
    },
    idCardGetVal: function idCardGetVal(e) {var _this = this;
      var val = this.$api.trim(e.detail.value);
      if (val != '') {
        this.$api.ajax({
          url: this.$config.toCheckIdCard,
          data: {
            id_card: val } }).


        then(function (res) {
          if (res.statusCode == 200) {
            if (res.data.code == 0) {//type = 0 22周岁以下 type = 1 22-25周岁 type=2 26-70正常报名年龄
              var data = res.data.data;
              _this.tvlArr.map(function (v, i) {
                if (i == _this.optIdCardIdx) {
                  v.addFee = data.attach_fee;
                  v.ageType = data.type;
                }
              });
            } else if (res.data.code == 10034) {//超过70周岁
              _this.tvlArr[_this.optIdCardIdx].ageType = 3;
            } else {
              _this.$api.warnNotice(res.data.message);
            }

            _this.othFeeCount();
            _this.optIdCardIdx = '';
          } else {
            _this.$api.warnNotice('身份证错误，请重新操作');
          }
        }).
        catch(function (err) {
          _this.$api.warnNotice('身份证错误，请重新操作');
        });
      }
    },
    othFeeCount: function othFeeCount() {var _this2 = this; //其他费用计算
      // 每次失去焦点且调用接口成功后重新计算
      this.subjoinFee = 0;
      this.countAgeYouthFee = { fee: 0, count: 0
        // this.countAgeYoungFee = {fee: 0, count: 0},
      };this.isOverAge = false;

      this.tvlArr.map(function (v, i) {
        if (v.ageType == 0) {
          _this2.countAgeYouthFee = {
            fee: v.addFee,
            count: _this2.countAgeYouthFee.count + 1 };

          _this2.subjoinFee = _this2.$api.pointProblem(_this2.countAgeYouthFee.fee, _this2.subjoinFee, 'add');
        } else if (v.ageType == 3) {
          _this2.isOverAge = true;
        }
      });
    },
    toSelectAgreeContract: function toSelectAgreeContract(e) {//同意合同
      this.isAgreeContract = !this.isAgreeContract;
    },
    toLookAttention: function toLookAttention() {//查看特别注意事项
      this.isShowAttention = !this.isShowAttention;
    },
    toSelectAgreeAttention: function toSelectAgreeAttention(e) {//是否同意特别注意事项
      this.isAgreeAttention = !this.isAgreeAttention;
    },
    toLookOverContract: function toLookOverContract() {//查看合同
      var $this = this;
      uni.showModal({
        content: '由于打开的文件过大，请确保网速正常的情况下打开',
        cancelColor: '#909399',
        confirmColor: '#E80214',
        success: function success(res) {
          if (res.confirm) {
            uni.showLoading({
              title: '文档打开中...' });

            uni.downloadFile({
              url: 'https://images.jants.cn/hk_apply/ht.pdf',
              success: function success(res) {
                var filePath = res.tempFilePath;
                uni.openDocument({
                  filePath: filePath,
                  fileType: "pdf",
                  success: function success(res) {
                    uni.hideLoading();
                    console.log('打开文档成功');
                  },
                  fail: function fail() {
                    // console.log(err)
                    uni.hideLoading();
                    $this.$api.warnNotice('打开失败');
                  } });

              },
              fail: function fail(err) {
                // console.log(err)
                $this.$api.warnNotice('文档打开失败，加载超时');
              } });

          }
        } });


    },
    toLookOverAccidentPlan: function toLookOverAccidentPlan() {//查看事故计划书
      var $this = this;
      uni.showModal({
        content: '由于打开的文件过大，请确保网速正常的情况下打开',
        cancelColor: '#909399',
        confirmColor: '#E80214',
        success: function success(res) {
          if (res.confirm) {
            uni.showLoading({
              title: '文档打开中...' });

            uni.downloadFile({
              url: 'https://images.jants.cn/hk_apply/lc.pptx',
              success: function success(res) {
                var filePath = res.tempFilePath;
                uni.openDocument({
                  filePath: filePath,
                  fileType: "pptx",
                  success: function success(res) {
                    uni.hideLoading();
                    console.log('打开文档成功');
                  },
                  fail: function fail(err) {
                    // console.log(err)
                    uni.hideLoading();
                    $this.$api.warnNotice('打开失败');
                  } });

              },
              fail: function fail(err) {
                // console.log(err)
                $this.$api.warnNotice('文档打开失败，加载超时');
              } });

          }
        } });

    },
    bindRoomStatus: function bindRoomStatus(e) {
      this.equ_room = e.detail.value;
    },
    bindDoctorStatus: function bindDoctorStatus(e) {
      this.is_doctor = e.detail.value;
    },
    toCallActPhone: function toCallActPhone() {
      uni.makePhoneCall({
        phoneNumber: '18692125808' });

    },
    toJumpMaterial: function toJumpMaterial() {//查看物料
      uni.navigateTo({
        url: '/pages/showMaterial/showMaterial' });

    },
    toJumpInsurance: function toJumpInsurance() {//查看保险
      uni.navigateTo({
        url: '/pages/insuranceIntro/insuranceIntro' });

    },
    toJumpQltUnit: function toJumpQltUnit() {//查看资质单位
      uni.navigateTo({
        url: '/pages/qualificationUnit/qualificationUnit' });

    },
    toShowActorIntro: function toShowActorIntro() {//查看医生
      this.isShowActorInfo = !this.isShowActorInfo;
    },
    toCloseActorIntro: function toCloseActorIntro() {//关闭
      this.isShowActorInfo = !this.isShowActorInfo;
    },
    getUserTel: function getUserTel(e) {var _this3 = this;
      var $this = this;
      this.$api.ajax({
        url: this.$config.getPhone,
        data: {
          session_key: this.$userInfo.session_key,
          encryptedData: e.detail.encryptedData,
          iv: e.detail.iv } }).


      then(function (res) {
        if (res.statusCode == 200 && res.data.code == 0) {
          _this3.userTel = res.data.data.phoneNumber;
        } else {
          _this3.api.warnNotice(res.data.message);
        }
      }).
      catch(function () {
        _this3.api.warnNotice('操作失败');
      });
    },
    toAddTvl: function toAddTvl() {
      this.tvlArr.push({
        name: 'name',
        id_card: 'id_card',
        tel: 'tel',
        ageType: 2, //默认为2
        addFee: 0 });

      var oneFee = this.$api.pointProblem(this.actInfo.pay_fee, this.actInfo.service_fee, 'add');
      this.actInfo.relFee = this.$api.pointProblem(oneFee, this.tvlArr.length, 'mul');
    },
    toDeleteTvl: function toDeleteTvl(idx) {
      this.tvlArr.splice(idx, 1);
      var oneFee = this.$api.pointProblem(this.actInfo.pay_fee, this.actInfo.service_fee, 'add');
      this.actInfo.relFee = this.$api.pointProblem(oneFee, this.tvlArr.length, 'mul');
      this.othFeeCount(); //计算附加费用
    },
    formSubmit: function formSubmit(e) {var _this4 = this;
      if (this.isOverAge) {
        this.$api.warnNotice('您有出行人超过70周岁，请线下联系平台报名');
        return false;
      } else {
        var val = e.detail.value;
        var keys = Object.keys(val),arr = [];
        for (var i = 0; i < keys.length; i++) {
          var idx = keys[i].split('#')[1],k = keys[i].split('#')[0];
          if (!arr[idx]) {
            arr[idx] = {};
            arr[idx][k] = val[keys[i]];
          } else {
            arr[idx][k] = val[keys[i]];
          }
        }

        var isOk = true;
        arr.map(function (v, i) {
          if (_this4.$api.trim(v.name) != '') {
            if (_this4.$api.inputTest(v.id_card, 'card')) {
              if (_this4.$api.inputTest(v.tel, 'tel')) {
                isOk = true;
              } else {
                isOk = false;
                return false;
              }
            } else {
              isOk = false;
              return false;
            }
          } else {
            isOk = false;
            _this4.$api.warnNotice('您还有姓名未填写');
            return false;
          }
        });

        if (isOk) {
          if (this.isAgreeContract) {
            if (this.isAgreeAttention) {
              if (this.fromType == 1) {
                uni.showLoading({
                  title: '调用支付中...',
                  mask: true });

              }
              this.submitApi(arr);
            } else {
              this.$api.warnNotice('请查看并同意特别注意事项！');
            }
          } else {
            this.$api.warnNotice('请阅读并同意团队出境合同书！');
          }
        }
      }
    },
    submitApi: function submitApi(userList) {var _this5 = this;
      var $this = this;
      this.$api.ajax({
        url: this.fromType == 1 ? this.$config.applyOrder : this.$config.cfActApply,
        method: "POST",
        data: {
          no: this.$config.no,
          dear_id: this.dear_id,
          is_doctor: this.is_doctor ? 1 : 0,
          equ_room: this.equ_room ? 1 : 0,
          attach_fee: this.subjoinFee, //附加费
          apply_list: userList } }).


      then(function (res) {
        if (res.statusCode == 200 && res.data.code == 0) {
          if ($this.fromType == 1) {
            uni.hideLoading();
            uni.requestPayment({
              'timeStamp': res.data.data.timeStamp || res.data.data.timestamp,
              'nonceStr': res.data.data.nonceStr,
              'package': res.data.data.package,
              'signType': res.data.data.signType,
              'paySign': res.data.data.paySign,
              success: function success(r) {
                if (r.errMsg == 'requestPayment:ok') {
                  uni.showToast({
                    title: '支付成功',
                    icon: 'success',
                    success: function success() {
                      setTimeout(function () {
                        $this.toJumpOrderList(true);
                        uni.navigateTo({
                          url: "/pages/orderDetail/orderDetail?id=".concat(res.data.data.order_id) });

                      }, 1500);
                    } });

                }
              },
              fail: function fail(err) {
                _this5.$api.warnNotice('支付失败');
              } });

          } else {
            uni.showToast({
              title: '提交成功',
              icon: 'success',
              success: function success() {
                setTimeout(function () {
                  $this.toJumpOrderList(true);
                  uni.navigateTo({
                    url: "/pages/cfDetail/cfDetail?id=".concat(res.data.data) });

                }, 1500);
              } });

          }
        } else {
          uni.hideLoading();
          _this5.$api.warnNotice(res.data.message);
        }
      }).
      catch(function () {
        uni.hideLoading();
        _this5.$api.warnNotice('提交失败');
      });
    } }) };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 67:
/*!********************************************************************************************************************!*\
  !*** F:/code/HK_utravel/pages/writeOrder/writeOrder.vue?vue&type=style&index=0&id=033e2868&scoped=true&lang=scss& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Tools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Tools_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeOrder_vue_vue_type_style_index_0_id_033e2868_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--8-oneOf-1-2!../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../Tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./writeOrder.vue?vue&type=style&index=0&id=033e2868&scoped=true&lang=scss& */ 68);
/* harmony import */ var _Tools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Tools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Tools_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeOrder_vue_vue_type_style_index_0_id_033e2868_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Tools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Tools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Tools_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeOrder_vue_vue_type_style_index_0_id_033e2868_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Tools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Tools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Tools_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeOrder_vue_vue_type_style_index_0_id_033e2868_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Tools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Tools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Tools_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeOrder_vue_vue_type_style_index_0_id_033e2868_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Tools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Tools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Tools_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Tools_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_writeOrder_vue_vue_type_style_index_0_id_033e2868_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 68:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/code/HK_utravel/pages/writeOrder/writeOrder.vue?vue&type=style&index=0&id=033e2868&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[61,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/writeOrder/writeOrder.js.map