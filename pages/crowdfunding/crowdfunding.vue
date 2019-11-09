<template>
	<view class="crowdfunding">
		<cu-custom :isShowBorder="isShowNavBorder" :bgColor="navColor" :isBack="!isShareStatus">
			<block slot="content"><text :style="{'opacity': navTitle}">助力报名</text></block>
		</cu-custom>
		<view class="contentBox">
			<scroll-view class="contentBoxScroll" :scroll-y="true" @scroll="toScroll" :scroll-into-view="viewId" :scroll-with-animation="true">
				<view class="joinBanner">
					<image lazy-load="true" :src="dataObj.activity.banner" mode="aspectFill"></image>
					<view class="to-show-init-info">
						<view class="show-init-head"><image :src="dataObj.avatar" mode="aspectFill"></image></view>
						<view class="show-init-info-box">
							<view class="show-init-name">
								<text>{{dataObj.nick_name || '--'}}</text>
								<!-- <view class="show-init-icon"><image src="/static/name_init.png" mode=""></image></view> -->
							</view>
							<view class="show-init-tel">快来帮我助力吧</view>
						</view>
					</view>
				</view>
				<view class="joinBox">
					<view class="cur-title">{{dataObj.activity.title || '--'}}</view>
					<view class="cur-progress">
						<view class="cur-progress-line">
							<view class="cur-progress-num" :style="{left: actLineLeft()}">{{dataObj.crowd_per || '0'}}%</view>
							<view class="cur-progress-act" :style="{width: actLineW()}"></view>
						</view>
						<view class="cur-progress-data">
							<view class="item-progress-data">
								<view class="item-data-title">目标金额</view>
								<view class="item-data-num">{{dataObj.target_fee || '0'}}元</view>
							</view>
							<view class="item-progress-data">
								<view class="item-data-title">已筹金额</view>
								<view class="item-data-num">{{dataObj.have_fee || '0'}}元</view>
							</view>
							<view class="item-progress-data">
								<view class="item-data-title">剩余时间</view>
								<view class="item-data-num">{{dataObj.days || '0'}}天</view>
							</view>
						</view>
					</view>
					<view class="cur-port-num">{{lineObj.point_title || '--'}}</view>
					<view class="cur-show-spot">
						<swiper class="cur-swiper-box" :autoplay="true" :interval="4000" :duration="800" @change="curSwiperChange">
							<swiper-item class="item-swiper-box" v-for="(item, index) in swiperArr" :key="index">
								<view class="show-spot-box">
									<view class="item-cur-spot first-cur-spot" @tap="toJumpSpotIntro(item.firstPort)">
										<image lazy-load="true" :src="item.firstPort.img" mode="aspectFill"></image>
										<view class="item-spot-buttom-box"></view>
										<view class="item-spot-buttom-txt">
											<view class="item-spot-title">{{item.firstPort.name}}</view>
											<view class="item-spot-desc">{{item.firstPort.desc}}</view>
										</view>
									</view>
									<view class="item-cur-in-box">
										<view class="item-cur-spot item-cur-in-spot" v-for="(val, idx) in item.morePort" :key="idx" @tap="toJumpSpotIntro(val)">
											<image lazy-load="true" :src="val.mImg" mode="aspectFill"></image>
											<view class="item-spot-buttom-box"></view>
											<view class="item-spot-buttom-txt">
												<view class="item-spot-title">{{val.name}}</view>
												<view class="item-spot-desc">{{val.desc}}</view>
											</view>
										</view>
									</view>
								</view>
							</swiper-item>
						</swiper>
						<view class="show-swiper-dot">
							<view :class="['item-show-dot', {'item-active-dot': curIdx == idx}]" v-for="(item, idx) in  swiperArr" :key="idx"></view>
						</view>
					</view>
					
					<view class="inspect-album">
						<view class="inspect-album-title">考察记录</view>
						<view class="show-inspect-album-video" id="video">
							<video v-if="isPlayVideo" :autoplay="isPlayVideo" src="http://images.jants.cn/hk_apply/111.mp4" controls></video>
							<template v-if="!isPlayVideo">
								<image src="http://images.jants.cn/hk_apply/111.mp4?spm=a2c4g.11186623.2.1.yjOb8V&x-oss-process=video/snapshot,t_7000,f_jpg,w_738,h_414,m_fast" mode=""></image>
								<view  class="video-play-icon"><text class="cuIcon-video lg"></text></view>
							</template>
						</view>
						<view class="show-inspect-album-imgs" v-if="albumImgs.length != 0">
							<swiper class="show-ablum-swiper" :autoplay="true" :interval="5000" :duration="800" @change="swiperAlbumChange">
								<swiper-item v-for="(item, idx) in albumImgs" :key="idx">
									<view class="item-show-img" @tap="toPreviewAlbum(idx)">
										<image lazy-load="true" :src="item+'!ys'" mode="aspectFill"></image>
									</view>
								</swiper-item>
							</swiper>
							<view class="show-swiper-dot">
								<view :class="['item-show-dot', {'item-active-dot': albumIdx == idx}]" v-for="(item, idx) in  albumImgs" :key="idx"></view>
							</view>
						</view>
					</view>
					
					<view class="to-show-hk-cert" v-if="dataObj.img_list.length != 0">
						<view class="hk-cert-title">香港公告</view>
						<view class="show-hk-cert-box">
							<view class="item-hk-cert" v-for="(item, idx) in dataObj.img_list" :key="idx" @tap="toPriviewCert(idx)">
								<image lazy-load="true" :src="item" mode="aspectFill"></image>
							</view>
						</view>
					</view>
					
					<view class="route-preview">
						<view class="route-preview-title">行程概览</view>
						<view class="route-hotel-foods">
							<view class="route-hfBox">
								<image src="/static/hotel_icon.png" mode="aspectFill"></image>
								<view class="route-hfBox-content">
									<view class="route-hfBox-content-top">住宿 / {{lineObj.hotel_num}}</view>
									<view class="route-hfBox-content-name">{{lineObj.hotel_info}}</view>
								</view>
							</view>
							<view class="route-hfBox">
								<image src="/static/foods_icon.png" mode="aspectFill"></image>
								<view class="route-hfBox-content">
									<view class="route-hfBox-content">
										<view class="route-hfBox-content-top">餐饮 / {{lineObj.eat_num}}</view>
										<view class="route-hfBox-content-name">{{lineObj.eat_info}}</view>
									</view>
								</view>
							</view>
						</view>
						<view class="route-list">
							<view class="item-route" v-for="(item, index) in lineObj.day_title_list" :key="index" @tap="toJumpDayRoute(index)">
								<view class="item-route-day">D{{index+1}}</view>
								<view class="itme-route-content">
									<view class="item-route-title"> 
										<template v-for="(val, idx) in item.DTitles">
											<view :key="idx" v-if="idx > 0" class="item-route-title-arrows"><image src="../../static/arrows_icon.png" mode=""></image></view>
											<view :key="idx" class="item-route-title-txt" >{{val}}</view>
										</template>
									</view>
									<view class="item-route-list">
										<view class="item-route-spot">{{item.desc}}</view>
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="route-content">
						<view class="route-content-box" :style="{height: isShowRouteList? 'auto': '600rpx'}">	
							<view class="item-day-content"  :id="'route_'+index" v-for="(item, index) in lineObj.day_content_list" :key="index">
								<view class="route-title-1">
									<text>{{item.day}}</text>
									<text>{{item.date}}</text>
								</view>
								<view class="route-rich-text" v-for="(val, idx) in item.content" :key="idx">
									<rich-text :nodes="val"></rich-text>
								</view>
							</view>
							
							<view class="item-route-notice" v-for="(item, idx) in lineObj.text_list" :key="idx">
								<view class="item-notice-title">{{item.title}}</view>
								<veiw class="item-notice-richText">
									<rich-text :nodes="item.img"></rich-text>
								</veiw>
							</view>
							
							<text :decode="true" class="route-notice-important">{{lineObj.note_text}}</text>
						</view>
						
						<view class="to-opt-apply-list" @tap="toShowOptRoute">
							<view :class="['to-opt-apply-txt', {'to-active-apply-list': isShowRouteList}]">{{optRouteTxt}}</view>
						</view>
					</view>
				</view>
			</scroll-view>
			
			<view class="apply-buttom-btn">
				<view class="to-home" v-if="isShareStatus" @tap="toBackHome">
					<view class="to-home-icon"><image src="/static/to_home_icon.png" mode=""></image></view>
					<view class="to-home-txt">首页</view>
				</view>
				<view class="to-init-funding" @tap="toApplyBox">我要报名</view>
				<view :class="['to-apply-btn', {'to-cfing-apply': dataObj.status == 0}, {'to-success-apply': dataObj.status == 1}, {'to-fail-apply': dataObj.status == 2}]" @tap="toSupportSum">
					{{dataObj.status == 0? '去支持（¥5元起）': dataObj.status == 1? '已助力成功': '助力失败'}}
				</view>
				
				<button v-if="!isAuth"  class="toAuthBtn" open-type="getUserInfo" lang="zh_CN" @getuserinfo="getUserInfo"></button>
			</view>
		</view>
		
		<!-- to报名弹框 -->
		<view class="to-apply-box" v-if="isShowFeeBox" data-sign="out" @click="toCloseFeeBox">
			<view class="apply-fee-box">
				<view class="apply-fee-title">费用说明</view>
				<view class="item-apply-fee">
					<view class="item-fee-title"><text>商品总额</text></view>
					<view class="item-fee-num">¥{{dataObj.activity.pay_fee}}</view>
				</view>
				<view class="item-apply-fee">
					<view class="item-fee-title" @click="toShowSmallFee">
						<text>港澳小费</text>
						<view class="item-fee-intro"><image src="/static/notice_icon.png" mode=""></image></view>
					</view>
					<view class="item-fee-num">¥{{dataObj.activity.service_fee}}</view>
				</view>
				<veiw class="to-show-small-fee" v-if="isShowSmallFee">
					<text @click="toCloseSmallFee">收小费是国际上旅游服务行业的惯例，旅行团导游、车船公司的司机们的主要一部分收入来源于客人付给的小费，港澳地区的小费标准一般为每人每天50元。</text>
				</veiw>
				<view class="apply-to-sure"  @click="toJumpApply">我知道了</view>
			</view>
		</view>
		
		<!-- <showHotelBox v-if="isShowHotelBox" @toCloseHotelBox="toCloseHotelBox"></showHotelBox> -->
		<!-- <showFoodsBox v-if="isShowFoodsBox" @toCloseFoodsBox="toCloseFoodsBox"></showFoodsBox> -->
		<supportSum v-if="isShowSupportBox" :_dataObj="dataObj" @toCloseSupportBox="toCloseSupportBox"></supportSum>
		
		<view class="to-share-wx" @tap="toShowSharePoster"><image src="/static/share_wx_btn.png" mode=""></image></view>
		<showPosterBox 
			:_isShowBox="isShowPorsterBox"
			:dear_id="dataObj.dear_id"
			@toClosePosterBox="toClosePosterBox"></showPosterBox>
		
		<loadErr v-if="isLoadErr" @toRelaodData="toRelaodData"></loadErr>
	</view>
</template>

<script>
	// import showHotelBox from '../joinStart/showHotelBox.vue'
	// import showFoodsBox from '../joinStart/showFoodsBox.vue'
	import showPosterBox from '../../components/sharePoster.vue'
	import supportSum from './supportSum.vue'
	import loadErr from '@/components/loadErr.vue'
	import { mapGetters , mapActions } from 'vuex';
	
	export default {
		data() {
			return {
				navColor: 'rgba(255,255,255,0)',//导航背景色
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
				albumImgs: [],//相册数组
				videoTop: null, //视频top值
				isPlayVideo: false, //是否自动播放视频
				
				isShowRouteList: false, //
				optRouteTxt: '展开', //
				
				isShowNameList: false, //默认收起
				optApplyTxt: '展开',
				
				isShowFeeBox: false, //费用
				isShowSmallFee: false, //默认不展示看消费
				
				isAuth: false, //登录状态
				isShareStatus: false
			}
		},
		components: { supportSum, showPosterBox, loadErr },
		onLoad(opt) {
			this.id = opt.crowd_id
			this.isShareStatus = this.$isSharePage
			if(!this.$userInfo) { //加载登录配置
				this.$api.userLogin((status) => {
					if(status == 1) {
						this.isAuth = true
					}
				})
			}else {
				this.isAuth = true
			}
			this.getAlbumArr()
			setTimeout(() => {
				this.getData()
			}, 10)
			
			if(this.isShareStatus) {
				this.toJumpOrderList(false) //当从分享进入众筹页面的时候，取消直接到达订单列表页面
			}
		},
		onHide() {
			this.isShowFeeBox = false //关闭费用提示框
		},
		methods: {
			...mapActions([
				'toSaveSpotInfo',
				'toGetActInfo',
				'toJumpOrderList'
			]),
			getAlbumArr() {
				this.$api.ajax({
					url: this.$config.getImgs
				})
				.then((res) => {
					if(res.statusCode == 200 && res.data.code == 0) {
						let arr = res.data.data
						this.albumImgs = arr
					}else {
						this.$api.warnNotice(res.data.message)
					}
				})
				.catch(() => {
					this.$api.warnNotice('相册加载失败')
				})
			},
			swiperAlbumChange(e) {
				this.albumIdx = e.detail.current
			},
			toPreviewAlbum(idx) {
				const $this = this
				uni.previewImage({
					current: $this.albumImgs[idx],
					urls: $this.albumImgs
				})
			},
			toPriviewCert(idx) { //查看证书
				const $this = this
				uni.previewImage({
					current: $this.dataObj.img_list[idx],
					urls: $this.dataObj.img_list
				})
			},
			toJumpDayRoute(idx) { //跳转到某天线路
				if(!this.isShowRouteList) {
					this.isShowRouteList = true
					setTimeout(() => {
						this.viewId = `route_${idx}`
					}, 200)
				}else {
					this.viewId = `route_${idx}`
				}
			},
			curSwiperChange(e) {
				this.curIdx = e.detail.current
			},
			toShowSmallFee() { //to查看消费
				this.isShowSmallFee = !this.isShowSmallFee
			},
			toCloseSmallFee() { //to关闭消费
				this.isShowSmallFee = !this.isShowSmallFee
			},
			toBackHome() {
				uni.reLaunch({
					url: '/pages/index/index'
				})
			},
			getUserInfo: function(e) { //按钮登录授权
			  if (e.detail.errMsg == 'getUserInfo:ok') {
			    uni.showLoading({
			      title: '授权登陆中...',
			      mask: true
			    })
			    const $this = this
			    this.$api.userLogin((status) => {
			      if (status == '1') {
			         uni.hideLoading()
			         uni.showToast({
			            title: '授权登录成功',
			            icon: 'success',
			            mask: true,
			            success: () => {
							$this.isAuth = true
			            }
			        })
			      }
			    })
			  }else {
			    this.$api.warnNotice('您已拒绝授权！')
			    this.isAuth = false
			  }
			},
			actLineW() { //670
				let sys = uni.getSystemInfoSync()
				let w = sys.windowWidth / 750 * 670
				return parseFloat(this.dataObj.have_fee) / parseFloat(this.dataObj.target_fee) * w + 'px'
			},
			actLineLeft() { //670
				let sys = uni.getSystemInfoSync()
				let w = sys.windowWidth / 750 * 670
				let l = parseFloat(this.dataObj.have_fee) / parseFloat(this.dataObj.target_fee) * w //当前进度的宽度
				let numW = sys.windowWidth / 750 * 84 //显示数据宽度
				if(l + numW >= w) {
					l = w - numW
				}
				return  l + 'px'
			},
			hadScale() {
				let val = parseFloat(this.dataObj.have_fee) / parseFloat(this.dataObj.target_fee) * 100
				return val.toFixed(2)
			},
			toRelaodData() {
				this.isLoadErr = false
				this.dataObj = {}
				this.getData()
			},
			getData() {
				uni.showLoading({
					title: '数据加载中',
					mask: true
				})
				this.$api.ajax({
					url: this.$config.cfActDetail,
					data: {
						crowd_id: this.id
					}
				})
				.then((res) => {
					if(res.statusCode == 200 && res.data.code == 0) {
						this.dataObj = res.data.data
						this.lineObj = JSON.parse(res.data.data.activity.content)
						this.lineObj.day_title_list.map(v => {
							v.DTitles = v.title.split(',')
						})
						this.lineObj.day_content_list.map(v => {
							v.content.map(val => {
								val = val.replace(/\<img/gi, '<img style="max-width:100%;height:auto"')
							})
						})
						let arr = [], type = 1
						this.lineObj.point_list.map((v, i) => {
							if(type == 1) {
								arr.push({})
								arr[arr.length-1].firstPort = v
								arr[arr.length-1].morePort = []
								type++
							}else if(type == 2) {
								arr[arr.length-1].morePort.push(v)
								type++
							}else if(type == 3) {
								arr[arr.length-1].morePort.push(v)
								type = 1
							}
						})
						this.swiperArr = arr
						setTimeout(() => {
							if(!this.videoTop) {
								this.queryMultipleNodes('#video', (top) => {
									this.videoTop = top
								})
							}
							uni.hideLoading();
						}, 500)
					}else {
						uni.hideLoading();
						this.$api.warnNotice(res.data.message)
						this.isLoadErr = true
					}
				})
				.catch((err) => {
					uni.hideLoading();
					this.isLoadErr = true
				})
			},
			toShowSharePoster() { //打开海报分享
				this.isShowPorsterBox = true
			},
			toClosePosterBox(val) { //关闭海报分享
				this.isShowPorsterBox = false
			},
			toApplyBox() { //跳转到报名页面
				this.isShowFeeBox = true
			},
			toJumpApply() {
				const $this = this
				this.toGetActInfo(this.dataObj.activity)
				uni.navigateTo({
					url: `/pages/writeOrder/writeOrder?type=1&dear_id=${$this.dataObj.dear_id}`
				})
			},
			toSupportSum() { //支持金额
				if(this.dataObj.status == 0) {
					this.isShowSupportBox = true
				}
			},
			toRefreshLoad() {
				this.isLoadErr = false
				this.dataObj = {}
				this.getData()
			},
			toCloseSupportBox(val) { //支持金额框
				this.isShowSupportBox = false
				if(val) {
					this.toRefreshLoad()
				}
			},
			// toApplyActivity() { //报名活动
				
			// },
			toCloseFeeBox(e) {
				let sign = e.target.dataset.sign
				if(sign) {
					this.isShowFeeBox = false
				}
			},
			toScroll (e) {
				let top = e.detail.scrollTop
				this.navColor = `rgba(255,2555,255,${ top / 400 > 1 ? 1 : top / 400 })`
				this.navTitle = top / 400 > 1 ? 1 : top / 400
				if(top >= 400) {
					this.isShowNavBorder = true
				}else {
					this.isShowNavBorder = false
				}
				
				if(this.videoTop) {
					this.videoPlayCon(top)
				}
			},
			videoPlayCon(val) { //视频播放控制
				let sys = uni.getSystemInfoSync()
				let top = this.videoTop - (sys.windowHeight - sys.windowWidth / 750 * 487)
				if(val - top > 0) {
					this.isPlayVideo = true
				}
			},
			queryMultipleNodes(id,callBack) {
				var query = uni.createSelectorQuery().in(this)//创建节点查询器 query
				query.select(id).boundingClientRect( data => {
					typeof callBack == 'function' && callBack(data.top)
				}).exec()//这段代码的意思是选择Id=the-id的节点，获取节点位置信息的查询请求
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
			toJumpSpotIntro(info) { //查看景点详情
				this.toSaveSpotInfo(info)
				uni.navigateTo({
					url: '/pages/spotShow/spotShow'
				})
			},
			toShowOptRoute() {
				if(!this.isShowRouteList) {
					this.isShowRouteList = true
					this.optRouteTxt = '收起'
				}else {
					this.isShowRouteList = false
					this.optRouteTxt = '展开'
				}
			},
			toOptApplyList() {
				if(!this.isShowNameList) {
					this.isShowNameList = true
					this.optApplyTxt = '收起'
				}else {
					this.isShowNameList = false
					this.optApplyTxt = '展开'
				}
			}
		},
		onShareAppMessage() {
			const $this = this
			return {
				path: `/pages/crowdfunding/crowdfunding?crowd_id=${$this.id}`,
				title: '快来帮我助力姓氏文化之旅',
				imageUrl: $this.$config.defaultUrl
			}
		}
	}
</script>

<style scoped lang="scss">
	.crowdfunding {
		width: 100%;
		height: 100%;
		position: relative;
		.contentBox {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 10;
			.contentBoxScroll {
				width: 100%;
				height: 100%;
			}
		}
	}
	.joinBanner {
		width: 100%;
		height: 860upx;
		background-color: $img-bg;
		position: relative;
		.to-show-init-info {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 220upx;
			background-image: linear-gradient(180deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.4) 100%);
			padding: 30upx 40upx 90upx 40upx;
			display: flex;
			align-items: center;
			.show-init-head {
				width: 100upx;
				height: 100upx;
				border-radius: 50%;
				overflow: hidden;
				background-color: $img-bg;
				margin-right: 30upx;
			}
			.show-init-info-box {
				.show-init-name {
					font-size: 40upx;
					color: $color-def;
					margin-bottom: 6upx;
					display: flex;
					align-items: flex-end;
					.show-init-icon {
						width: 160upx;
						height: 36upx;
						margin-left: 10upx;
					}
				}
				.show-init-tel {
					font-size: 28upx;
					color: $color-def;
				}
			}
		}
	}
	.apply-buttom-btn {
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 66;
		width: 100%;
		height: 100upx;
		display: flex;
		align-items: center;
		background-color: $color-def;
		border-top: 1px solid #efefef;
		.to-home {
			height: 100%;
			padding: 0 20upx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			border-right: 1px solid #efefef;
			.to-home-icon {
				width: 30upx;
				height: 30upx;
				margin-bottom: 6upx;
			}
			.to-home-txt {
				font-size: 16upx;
				color: $color-black-2;
			}
		}
		.to-init-funding {
			width: 260upx;
			height: 100%;
			line-height: 100upx;
			text-align: center;
			font-size: 28upx;
			color: $color-black-2;
		}
		.to-apply-btn {
			flex: 1;
			overflow: hidden;
			line-height: 100upx;
			text-align: center;
			font-size: 28upx;
		}
		.to-cfing-apply {
			background-color: $color-red;
			color: $color-def;
		}
		.to-success-apply {
			background-color: #67C23A;
			color: $color-def
		}
		.to-fail-apply {
			background-color: $img-bg;
			color: $color-black-2;
		}
	}
	.joinBox {
		width: 100%;
		height: auto;
		background-color: $color-def;
		border-radius: 60upx 0 0 0;
		position: relative;
		top: -60upx;
		padding: 30upx 40upx 100upx;
		.cur-title {
			font-size: 52upx;
			color: $color-black-1;
			font-weight: 800;
			margin-bottom: 40upx;
		}
		.cur-progress {
			margin-bottom: 40upx;
			&:after {
				content: '';
				display: block;
				width: 100%;
				height: 20upx;
				background-color: #F6F9FA;
				margin-top: 50upx;
			}
			.cur-progress-line {
				margin-bottom: 50upx;
				position: relative;
				width: 100%;
				overflow: hidden;
				height: 40upx;
				&:before {
					content: '';
					display: block;
					width: 100%;
					height: 6upx;
					background-color: #EFF5FF;
					border-radius: 3upx;
					overflow: hidden;
					position: absolute;
					top: 12upx;
					left: 0;
					z-index: 1;
				}
				.cur-progress-act {
					position: absolute;
					top: 12upx;
					left: 0;
					z-index: 10;
					width: 100upx;
					height: 6upx;
					background-image: linear-gradient(-90deg, #FF022C 50%, #FF9233 100%);
					border-radius: 3upx;
					overflow: hidden;
				}
				.cur-progress-num {
					position: absolute;
					top: 0;
					left: 100upx;
					z-index: 50;
					padding: 2upx 14upx;
					border: 1px solid $color-red;
					border-radius: 15upx;
					font-size: 20upx;
					color: $color-red;
					background-color: $color-def;
				}
			}
			.cur-progress-data {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 40upx;
				.item-progress-data {
					.item-data-title {
						font-size: 24upx;
						color: $color-grey;
						margin-bottom: 20upx;
					}
					.item-data-num {
						font-size: 32upx;
						color: $color-black-2;
						text-align: center;
					}
				}
			}
		}
		.cur-port-num {
			font-size: 32upx;
			color: $color-black-1;
			margin-bottom: 40upx;
		}
		.cur-show-spot {
			height: 430upx;
			width: 100%;
			overflow: hidden;
			padding-bottom: 30upx;
			margin-bottom: 40upx;
			position: relative;
			.cur-swiper-box {
				width: 100%;
				height: 100%;
				.item-swiper-box {
					width: 100%;
					height: 100%;
					.show-spot-box {
						display: flex;
						width: auto;
						height: 100%;
						.first-cur-spot {
							width: 400upx;
							height: 100%;
							margin-bottom: 0;
						}
						.item-cur-in-box {
							flex: 1;
							overflow: hidden;
							height: 100%;
							display: flex;
							flex-wrap: wrap;
							.item-cur-in-spot {
								margin-left: 10upx;
								&:first-child {
									margin-bottom: 20upx;
								}
							}
						}
					}
				}
				.item-cur-spot {
					display: inline-block;
					width: 250upx;
					height: 190upx;
					border-radius: 20upx;
					overflow: hidden;
					background-color: $img-bg;
					position: relative;
					.item-spot-buttom-box {
						position: absolute;
						bottom: 0;
						left: 0;
						z-index: 1;
						width: 100%;
						height: 96upx;
						background-image: linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.00) 100%);
					}
					.item-spot-buttom-txt {
						position: absolute;
						bottom: 0;
						left: 0;
						z-index: 10;
						width: 100%;
						height: auto;
						padding: 20upx;
						.item-spot-title {
							font-size: 24upx;
							color: $color-def;
							margin-bottom: 10upx;
							font-weight: 600;
						}
						.item-spot-desc {
							font-size: 24upx;
							color: $color-def;
							@extend .ellipse1;
						}
					}
				}
			}
			.show-swiper-dot {
				position: absolute;
				bottom: 0;
				left: 0;
				height: 10upx;
				width: 100%;
				display: flex;
				justify-content: center;
				.item-show-dot {
					width: 10upx;
					height: 10upx;
					border-radius: 6upx;
					overflow: hidden;
					background-color: #D8DCE6;
					transition: all 0.3s;
					&:not(:last-child) {
						margin-right: 10upx;
					}
				}
				.item-active-dot {
					width: 30upx;
					background-color: #FF0014;
				}
			}
		}
		.to-show-hk-cert {
			margin-bottom: 40upx;
			width: 100%;
			height: auto;
			.hk-cert-title {
				font-size: 48upx;
				color: $color-black-1;
				font-weight: 800;
				margin-bottom: 40upx;
			}
			.show-hk-cert-box {
				display: flex;
				justify-content: space-between;
				.item-hk-cert {
					width: 330upx;
					height: 400upx;
					// background-color: $img-bg;
					box-shadow: 0 10upx 20upx 0 rgba(0,0,0,0.03);
					image {
						border-radius: 12upx;
						overflow: hidden;
					}
				}
			}
		}
		.cur-desc {
			font-size: 32upx;
			color: $color-black-1;
			line-height: 56upx;
			margin-bottom: 40upx;
		}
		.route-preview {
			width: 100%;
			height: auto;
			margin-bottom: 40upx;
			.route-preview-title {
				font-size: 48upx;
				color: $color-black-1;
				font-weight: 800;
				margin-bottom: 40upx;
			}
			.route-hotel-foods {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 40upx;
				.route-hfBox {
					width: 330upx;
					height: 210upx;
					position: relative;
					.route-hfBox-content {
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						padding: 20upx;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						.route-hfBox-content-top {
							font-size: 28upx;
							color: $color-def;
						}
						.route-hfBox-content-name {
							font-size: 24upx;
							color: $color-def;
						}
					}
				}
			}
			.route-list {
				background: $color-def;
				box-shadow: 0 10upx 20upx 0 rgba(0,0,0,0.10);
				border-radius: 20upx;
				width: 100%;
				height: auto;
				padding: 0 30upx;
				.item-route {
					width: 100%;
					height: auto;
					display: flex;
					align-items: center;
					padding: 30upx 0;
					&:not(:last-child) {
						border-bottom: 1px solid #EFEFEF;
					}
					.item-route-day {
						width: 60upx;
						height: 60upx;
						line-height: 60upx;
						text-align: center;
						border-radius: 50%;
						background: #E6F1FC;
						font-size: 32upx;
						color: #0486FE;
						font-weight: 700;
						margin-right: 30upx;
					}
					.itme-route-content {
						.item-route-title {
							display: flex;
							align-items: center;
							margin-bottom: 20upx;
							.item-route-title-txt {
								font-size: 36upx;
								color: $color-black-2;
								font-weight: 600;
							}
							.item-route-title-arrows {
								width: 32upx;
								height: 32upx;
								margin: 0 20upx;
							}
						}
						.item-route-list {
							display: flex;
							align-items: center;
							.item-route-spot {
								display: flex;
								align-items: center;
								font-size: 24upx;
								color: $color-grey;
								&:not(:first-child) {
									&:before {
										content: '';
										display: block;
										border: 6upx solid #D8DCE6;
										border-left-color: transparent;
										border-top-color: transparent;
										margin: 0 20upx;
										transform: rotate(-45deg);
									}
								}
							}
						}
					}
				}
			}
		}
		.route-content {
			width: 100%;
			height: auto;
			margin-bottom: 60upx;	
			.route-content-box {
				overflow: hidden;
				height: 600upx;
			}
			.route-title-1 {
				font-size: 48upx;
				color: $color-black-1;
				font-weight: 800;
				margin-bottom: 40upx;
				display: flex;
				align-items: center;
				justify-content: space-between;
			}
			.route-rich-text {
				width: 100%;
				height: auto;
				overflow: hidden;
				margin-bottom: 40upx;
			}
		}
		.had-apply-box {
			.had-apply-title {
				font-size: 48upx;
				color: $color-black-1;
				font-weight: 800;
				margin-bottom: 40upx;
			}
			.to-show-name-list {
				display: flex;
				flex-wrap: wrap;
				height: 340upx;
				overflow: hidden;
				.item-name-box {
					height: auto;
					width: 100upx;
					margin-bottom: 20upx;
					&:not(:nth-child(5n)) {
						margin-right: 42upx;
					}
					.item-name-img {
						width: 100%;
						height: 100upx;
						border-radius: 50%;
						overflow: hidden;
						background-color: $img-bg;
						margin-bottom: 20upx;
					}
					.item-name-txt {
						font-size: 28upx;
						color: $color-black-1;
						width: 100%;
						text-align: center;
						@extend .ellipse1;
					}
				}
			}
		}
		.to-opt-apply-list {
			width: 100%;
			height: 80upx;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: $color-def;
			box-shadow: 0 10upx 30upx -10upx rgba(0, 0, 0, 0.05);
			.to-opt-apply-txt {
				display: flex;
				align-items: center;
				font-size: 28upx;
				color: $color-black-2;
				&:after {
					content: '';
					display: block;
					border: 8upx solid $img-bg;
					border-left-color: transparent;
					border-top-color: transparent;
					transform: rotate(45deg);
					position: relative;
					top: -4upx;
					margin-left: 10upx;
				}
			}
			.to-active-apply-list {
				&:after {
					transform: rotate(225deg);
					top: 4upx;
				}
			}
		}
	}
	.to-apply-box {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 300;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.6);
		display: flex;
		align-items: center;
		justify-content: center;
		.apply-fee-box {
			background-color: $color-def;
			border-radius: 20upx;
			padding: 50upx 60upx;
			max-width: 630upx;
			.apply-fee-title {
				font-size: 40upx;
				color: $color-black-1;
				font-weight: 700;
				text-align: center;
				margin-bottom: 60upx;
			}
			.item-apply-fee {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 30upx;
				.item-fee-title {
					display: flex;
					align-items: center;
					font-size: 28upx;
					color: $color-black-1;
					font-weight: 600;
					.item-fee-intro {
						width: 26upx;
						height: 26upx;
						border-radius: 50%;
						margin-left: 20upx;
					}
				}
				.item-fee-num {
					font-size: 28upx;
					color: #FF0014;
					font-weight: 600;
				}
			}
			.to-show-small-fee {
				font-size: 24upx;
				color: $color-black-2;
				line-height: 36upx;
				position: relative;
			}
			.apply-to-sure {
				width: 510upx;
				height: 88upx;
				background-color: $color-red;
				line-height: 88upx;
				text-align: center;
				font-size: 28upx;
				color: $color-def;
				margin-top: 60upx;
			}
		}
	}
	
	.item-route-notice {
		width: 100%;
		height: auto;
		.item-notice-title {
			margin-top: 80upx;
			margin-bottom: 40upx;
			font-size: 40upx;
			color: $color-black-2;
			font-weight: 600;
			display: flex;
			align-items: center;
			&:before {
				content: '';
				display: block;
				width: 12upx;
				height: 40upx;
				background-color: #FFDC00;
				border-radius: 24rpx;
				margin-right: 26upx;
			}
		}
		.item-notice-richText {
			width: 100%;
			height: auto;
			overflow: hidden;
		}
	}
	.route-notice-important {
		display: block;
		margin: 20upx 0;
		font-size: 32upx;
		font-weight: bold;
		color: $main-color;
		line-height: 44upx;
	}
	
	.inspect-album {
		margin-bottom: 40upx;
		width: 100%;
		height: auto;
		.inspect-album-title {
			font-size: 48upx;
			color: $color-black-1;
			font-weight: 800;
			margin-bottom: 40upx;
		}
		.show-inspect-album-video {
			width: 100%;
			height: 387upx;
			background-color: $color-black-1;
			margin-bottom: 20upx;
			position: relative;
			video {
				width: 100%;
				height: 100%;
			}
			.video-play-icon {
				position: absolute;
				top: 50%;
				left: 50%;
				z-index: 1;
				margin-left: -40upx;
				margin-top: -40upx;
				font-size: 72upx;
				color: $color-def;
			}
		}
		.show-inspect-album-imgs {
			width: 100%;
			height: 370upx;
			padding-bottom: 30upx;
			position: relative;
			.show-ablum-swiper {
				width: 100%;
				height: 340upx;
			}
			.item-show-img {
				width: 100%;
				height: 100%;
				border-radius: 12upx;
				overflow: hidden;
				background-color: $img-bg;
			}
			.show-swiper-dot {
				position: absolute;
				bottom: 0;
				left: 0;
				height: 10upx;
				width: 100%;
				display: flex;
				justify-content: center;
				.item-show-dot {
					width: 10upx;
					height: 10upx;
					border-radius: 6upx;
					overflow: hidden;
					background-color: #D8DCE6;
					transition: all 0.3s;
					&:not(:last-child) {
						margin-right: 10upx;
					}
				}
				.item-active-dot {
					width: 30upx;
					background-color: #FF0014;
				}
			}
		}
	}
</style>
