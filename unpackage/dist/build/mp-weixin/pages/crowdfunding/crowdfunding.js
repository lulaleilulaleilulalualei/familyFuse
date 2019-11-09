(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/crowdfunding/crowdfunding"],{"0147":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=e("2f62");function n(t){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(i){a(t,i,e[i])})}return t}function a(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}var s=function(){return e.e("components/sharePoster").then(e.bind(null,"8706"))},r=function(){return e.e("pages/crowdfunding/supportSum").then(e.bind(null,"9917"))},u=function(){return e.e("components/loadErr").then(e.bind(null,"6530"))},c={data:function(){return{navColor:"rgba(255,255,255,0)",navTitle:0,isShowNavBorder:!1,isShowSupportBox:!1,isShowPorsterBox:!1,isLoadErr:!1,dataObj:{},lineObj:{},swiperArr:[],id:null,curIdx:0,viewId:"",albumIdx:0,albumImgs:[],videoTop:null,isPlayVideo:!1,isShowRouteList:!1,optRouteTxt:"展开",isShowNameList:!1,optApplyTxt:"展开",isShowFeeBox:!1,isShowSmallFee:!1,isAuth:!1,isShareStatus:!1}},components:{supportSum:r,showPosterBox:s,loadErr:u},onLoad:function(t){var i=this;this.id=t.crowd_id,this.isShareStatus=this.$isSharePage,this.$userInfo?this.isAuth=!0:this.$api.userLogin(function(t){1==t&&(i.isAuth=!0)}),this.getAlbumArr(),setTimeout(function(){i.getData()},10),this.isShareStatus&&this.toJumpOrderList(!1)},onHide:function(){this.isShowFeeBox=!1},methods:n({},(0,o.mapActions)(["toSaveSpotInfo","toGetActInfo","toJumpOrderList"]),{getAlbumArr:function(){var t=this;this.$api.ajax({url:this.$config.getImgs}).then(function(i){if(200==i.statusCode&&0==i.data.code){var e=i.data.data;t.albumImgs=e}else t.$api.warnNotice(i.data.message)}).catch(function(){t.$api.warnNotice("相册加载失败")})},swiperAlbumChange:function(t){this.albumIdx=t.detail.current},toPreviewAlbum:function(i){var e=this;t.previewImage({current:e.albumImgs[i],urls:e.albumImgs})},toPriviewCert:function(i){var e=this;t.previewImage({current:e.dataObj.img_list[i],urls:e.dataObj.img_list})},toJumpDayRoute:function(t){var i=this;this.isShowRouteList?this.viewId="route_".concat(t):(this.isShowRouteList=!0,setTimeout(function(){i.viewId="route_".concat(t)},200))},curSwiperChange:function(t){this.curIdx=t.detail.current},toShowSmallFee:function(){this.isShowSmallFee=!this.isShowSmallFee},toCloseSmallFee:function(){this.isShowSmallFee=!this.isShowSmallFee},toBackHome:function(){t.reLaunch({url:"/pages/index/index"})},getUserInfo:function(i){if("getUserInfo:ok"==i.detail.errMsg){t.showLoading({title:"授权登陆中...",mask:!0});var e=this;this.$api.userLogin(function(i){"1"==i&&(t.hideLoading(),t.showToast({title:"授权登录成功",icon:"success",mask:!0,success:function(){e.isAuth=!0}}))})}else this.$api.warnNotice("您已拒绝授权！"),this.isAuth=!1},actLineW:function(){var i=t.getSystemInfoSync(),e=i.windowWidth/750*670;return parseFloat(this.dataObj.have_fee)/parseFloat(this.dataObj.target_fee)*e+"px"},actLineLeft:function(){var i=t.getSystemInfoSync(),e=i.windowWidth/750*670,o=parseFloat(this.dataObj.have_fee)/parseFloat(this.dataObj.target_fee)*e,n=i.windowWidth/750*84;return o+n>=e&&(o=e-n),o+"px"},hadScale:function(){var t=parseFloat(this.dataObj.have_fee)/parseFloat(this.dataObj.target_fee)*100;return t.toFixed(2)},toRelaodData:function(){this.isLoadErr=!1,this.dataObj={},this.getData()},getData:function(){var i=this;t.showLoading({title:"数据加载中",mask:!0}),this.$api.ajax({url:this.$config.cfActDetail,data:{crowd_id:this.id}}).then(function(e){if(200==e.statusCode&&0==e.data.code){i.dataObj=e.data.data,i.lineObj=JSON.parse(e.data.data.activity.content),i.lineObj.day_title_list.map(function(t){t.DTitles=t.title.split(",")}),i.lineObj.day_content_list.map(function(t){t.content.map(function(t){t=t.replace(/\<img/gi,'<img style="max-width:100%;height:auto"')})});var o=[],n=1;i.lineObj.point_list.map(function(t,i){1==n?(o.push({}),o[o.length-1].firstPort=t,o[o.length-1].morePort=[],n++):2==n?(o[o.length-1].morePort.push(t),n++):3==n&&(o[o.length-1].morePort.push(t),n=1)}),i.swiperArr=o,setTimeout(function(){i.videoTop||i.queryMultipleNodes("#video",function(t){i.videoTop=t}),t.hideLoading()},500)}else t.hideLoading(),i.$api.warnNotice(e.data.message),i.isLoadErr=!0}).catch(function(e){t.hideLoading(),i.isLoadErr=!0})},toShowSharePoster:function(){this.isShowPorsterBox=!0},toClosePosterBox:function(t){this.isShowPorsterBox=!1},toApplyBox:function(){this.isShowFeeBox=!0},toJumpApply:function(){var i=this;this.toGetActInfo(this.dataObj.activity),t.navigateTo({url:"/pages/writeOrder/writeOrder?type=1&dear_id=".concat(i.dataObj.dear_id)})},toSupportSum:function(){0==this.dataObj.status&&(this.isShowSupportBox=!0)},toRefreshLoad:function(){this.isLoadErr=!1,this.dataObj={},this.getData()},toCloseSupportBox:function(t){this.isShowSupportBox=!1,t&&this.toRefreshLoad()},toCloseFeeBox:function(t){var i=t.target.dataset.sign;i&&(this.isShowFeeBox=!1)},toScroll:function(t){var i=t.detail.scrollTop;this.navColor="rgba(255,2555,255,".concat(i/400>1?1:i/400,")"),this.navTitle=i/400>1?1:i/400,this.isShowNavBorder=i>=400,this.videoTop&&this.videoPlayCon(i)},videoPlayCon:function(i){var e=t.getSystemInfoSync(),o=this.videoTop-(e.windowHeight-e.windowWidth/750*487);i-o>0&&(this.isPlayVideo=!0)},queryMultipleNodes:function(i,e){var o=t.createSelectorQuery().in(this);o.select(i).boundingClientRect(function(t){"function"==typeof e&&e(t.top)}).exec()},toJumpSpotIntro:function(i){this.toSaveSpotInfo(i),t.navigateTo({url:"/pages/spotShow/spotShow"})},toShowOptRoute:function(){this.isShowRouteList?(this.isShowRouteList=!1,this.optRouteTxt="展开"):(this.isShowRouteList=!0,this.optRouteTxt="收起")},toOptApplyList:function(){this.isShowNameList?(this.isShowNameList=!1,this.optApplyTxt="展开"):(this.isShowNameList=!0,this.optApplyTxt="收起")}}),onShareAppMessage:function(){var t=this;return{path:"/pages/crowdfunding/crowdfunding?crowd_id=".concat(t.id),title:"快来帮我助力姓氏文化之旅",imageUrl:t.$config.defaultUrl}}};i.default=c}).call(this,e("543d")["default"])},"01c8":function(t,i,e){"use strict";e.r(i);var o=e("2ca5"),n=e("7b31");for(var a in n)"default"!==a&&function(t){e.d(i,t,function(){return n[t]})}(a);e("11fc");var s=e("2877"),r=Object(s["a"])(n["default"],o["a"],o["b"],!1,null,"512ffaf2",null);i["default"]=r.exports},"11fc":function(t,i,e){"use strict";var o=e("5082"),n=e.n(o);n.a},"2ca5":function(t,i,e){"use strict";var o=function(){var t=this,i=t.$createElement,e=(t._self._c,t.actLineLeft()),o=t.actLineW();t.$mp.data=Object.assign({},{$root:{m0:e,m1:o}})},n=[];e.d(i,"a",function(){return o}),e.d(i,"b",function(){return n})},5082:function(t,i,e){},"7b31":function(t,i,e){"use strict";e.r(i);var o=e("0147"),n=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(i,t,function(){return o[t]})}(a);i["default"]=n.a},"9bbc":function(t,i,e){"use strict";(function(t){e("c5ea"),e("921b");o(e("66fd"));var i=o(e("01c8"));function o(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,e("543d")["createPage"])}},[["9bbc","common/runtime","common/vendor"]]]);