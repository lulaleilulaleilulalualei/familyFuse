<template>
	<view class="home">
		<cu-custom bgColor="white" :isShowBorder="false" :isBack="false"><block slot="content"></block></cu-custom>
		<view class="show-user-head" :style="{top: headTop}">
			<view class="show-user-head-img" @tap="toJumpOrderDetail" ><open-data type="userAvatarUrl"></open-data></view>
			<button v-if="!isAuth"  class="toAuthBtn" open-type="getUserInfo" lang="zh_CN" @getuserinfo="getUserInfo"></button>
			<!-- <view v-if="userInfo.originator == 1" @click.stop="toJumpPlaceStart" class="star-img-icon"><text class="cuIcon-favorfill lg"></text></view> -->
		</view>
		<view class="show-search" :style="{top: searchTop}" v-if="isScroll">
			<view class="search-box">
				<view class="home-search-icon"><image src="/static/search-icon.png" mode=""></image></view>
				<input class="home-to-search" type="text" :value="keywords" placeholder="搜索姓氏" confirm-type="go" @confirm="toSearchKeyword" placeholder-style="color: #909399;"/>
			</view>
		</view>
		<view class="home-content">
			<view class="main-content" @touchstart="touchstart" @touchmove="touchmove" :style="{transform: `translate3d(0,${slideVal}px,0)`}">
				<view class="content-top">
					<view class="content-title">
						<text>姓氏文化之旅</text>
						<!-- <view v-if="userInfo.originator == 1" @click.stop="toJumpPlaceStart" class="to-open-utravel">开启</view> -->
					</view>
					<view class="home-banner" @tap="toLookAlbum">
						<view class="home-banner-img"><image src="/static/home_banner.jpg" mode=""></image></view>
						<view class="hone-img-more">查看更多图片</view>
					</view>
				</view>
				
				<view class="show-name-list" :style="{height: listH}">
					<scroll-view v-if="dataList.length != 0" 
								class="name-list-scroll" 
								:scroll-y="isScroll" 
								@scrolltoupper="toScrollTop"
								@scroll="toScroll"
								:upper-threshold="10" 
								:scrolTop="scrollTop">
						<view class="name-list-content">
							<view class="item-name-box" v-for="(item, idx) in dataList" :key="item.dear_id" @tap="toJumpDetail(idx)">
								<view class="item-name-title" :style="{'color': item.background, 'background-color': hexToRgb(item.background)}">{{item.surname}}</view>
								<view class="item-name-desc">
									<view class="item-name-intro">{{item.surname}}氏宗亲</view>
									<view class="item-name-num">{{item.apply_num}} 人</view>
								</view>
							</view>
						</view>
						<noMore></noMore>
					</scroll-view>
					
					<view class="no-data-box" v-if="dataList.length == 0">
						<view class="noDataImg"><img src="/static/noData.png" alt=""></view>
						<view class="noDataText">还没有数据~</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="home-bottom">
			<view class="home-bottom-btn-out" :style="{width: !isScroll? '630upx': 0}">
				<view class="home-bottom-btn-in"  @tap="toJumpInitName">添加姓氏</view>
				<button v-if="!isAuth"  class="toAuthBtn" open-type="getUserInfo" lang="zh_CN" @getuserinfo="getUserInfo"></button>
			</view>
			<view class="home-add-btn" v-if="isScroll">
				<view class="home-add-btn-box" @tap="toJumpInitName"><text class="cuIcon-add lg"></text></view>
				<button v-if="!isAuth"  class="toAuthBtn" open-type="getUserInfo" lang="zh_CN" @getuserinfo="getUserInfo"></button>
			</view>
		</view>
		
		<loadErr v-if="isLoadErr" @toRelaodData="toRelaodData"></loadErr>
	</view>
</template>

<script>
	import Vue from 'vue'
	import loadErr from '@/components/loadErr.vue'
	import noMore from '@/components/noMore.vue'
	import { mapGetters , mapActions } from 'vuex';
	
	export default {
		data() {
			return {
				startY: 0,
				isScroll: false,
				scrollTop: 0,
				scrollVal: 0, //滚动值
				sysInfo: null, //系统值
				slideVal: 0, //滑动值
				
				// index: 1,
				// size: 10,
				keywords: '', //
				dataList: [],//数据列表
				isMore: true,
				isLoadErr: false,
				userInfo: null, //用户信息
				
				isAuth: false, //登录状态
			}
		},
		components: { loadErr, noMore },
		computed: {
			...mapGetters([
				'_isToOrderList'
			]),
			listH() { //搜索宽总高度100upx 导航高度 this.CustomBar
				let sys = uni.getSystemInfoSync()
				return  sys.windowHeight - sys.windowWidth / 750 * 100 - this.CustomBar + 'px'
			},
			headTop() {
				let sys = uni.getSystemInfoSync()
				return  sys.windowWidth / 750 * 10 + this.CustomBar + 'px'
			},
			searchTop() {
				return this.CustomBar + 'px'
			}
		},
		onLoad() {
			this.sysInfo = uni.getSystemInfoSync()
			if(!this.$userInfo) { //加载登录配置
				this.$api.userLogin((status) => {
					if(status == 1) {
						this.isAuth = true
						this.userInfo = this.$userInfo
					}
				})
			}else {
				this.isAuth = true
				this.userInfo = this.$userInfo
			}
			
			if(this.$isSharePage) {
				Vue.prototype.$isSharePage = false //恢复false
			}
			
			this.miniAppUpdate() //小程序出发更新
		},
		onShow() {
			// this.index = 1
			// this.isMore = true
			this.dataList = []
			this.scrollVal = 0
			this.keywords = ''
			
			if(this._isToOrderList) {
				this.toJumpOrderList(false)
				uni.navigateTo({
					url: '/pages/orderList/orderList'
				})
			}else {
				setTimeout(() => {
					this.getListData()
				},10)
			}
			
		},
		onHide() {
			this.keywords = ''
		},
		methods: {
			...mapActions([
				'toJumpOrderList'
			]),
			// toJumpPlaceStart() { //会场开幕
			// 	uni.navigateTo({
			// 		url: '/pages/placeStart/placeStart'
			// 	})
			// },
			toLookAlbum() { //查看相册
				uni.navigateTo({
					url: '/pages/openAlbum/openAlbum'
				})
			},
			toJumpInitName() { //到参与加入
				uni.navigateTo({
					url: '/pages/joinStart/joinStart'
				})
			},
			toJumpDetail(idx) { //报名详情
				const $this = this
				uni.navigateTo({
					url: `/pages/apply/apply?dear_id=${$this.dataList[idx].dear_id}`
				})
			},
			toSearchKeyword(e) {
				this.keywords = this.$api.trim(e.detail.value)
				this.dataList = []
				// this.index = 1
				this.getListData()
			},
			toRelaodData() {
				// this.index = 1
				this.isLoadErr = false
				// this.isMore = true
				this.dataList = []
				this.keywords = ''
				this.getListData()
			},
			// toLoadMore() {
			// 	if(this.isMore) {
			// 		this.getListData()
			// 	}
			// },
			getListData() { //获取列表数据
				uni.showLoading({
					title: '数据加载中',
					mask: true
				})
				this.$api.ajax({
					url: this.$config.clanList,
					data: {
						keywords: this.keywords
					}
				})
				.then((res) => {
					if(res.statusCode == 200 && res.data.code == 0) {
						let arr = res.data.data
						arr.map(v => {
							if(!v.background) v.background = '#FFDD71'
						})
						this.dataList = arr
						// if(arr.length < this.size) {
						// 	this.dataList = this.dataList.concat(arr)
						// 	this.isMore = false //没有更多了
						// }else {
						// 	this.dataList = this.dataList.concat(arr)
						// 	this.index++
						// }
						setTimeout(() => {
							uni.hideLoading();
						}, 200)
					}else {
						uni.hideLoading();
						this.isLoadErr = true
						this.$api.warnNotice(res.data.message)
					}
				})
				.catch(() => {
					uni.hideLoading();
					this.isLoadErr = true
					this.$api.warnNotice('列表加载失败')
				})
			},
			toJumpOrderDetail() {
				uni.navigateTo({
					url: '/pages/orderList/orderList'
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
							$this.userInfo = $this.$userInfo
			            }
			        })
			      }
			    })
			  }else {
			    this.$api.warnNotice('您已拒绝授权！')
			    this.isAuth = false
			  }
			},
			toScroll(e) {
				this.scrollVal = e.detail.scrollTop
			},
			touchstart(e) {
				this.startY = e.touches[0].pageY
			},
			touchmove(e) {
				if(!this.isScroll) {
					if(this.startY - e.touches[0].pageY > 50) { //向下滑动
						this.slideVal = - this.sysInfo.windowWidth / 750 * ( 500 -100 )
						this.isScroll = true
					}
				}else {
					if(this.scrollVal == 0) {
						if(e.touches[0].pageY - this.startY > 50) { //向下滑动
							this.slideVal = 0
							this.isScroll = false
							if(this.keywords != '') {
								this.keywords = ''
								this.dataList = []
								this.index = 1
								this.getListData()
							}
						}
					}else {
						return
					}
				}
			},
			toScrollTop() {
				this.slideVal = 0
				this.isScroll = false
				this.scrollTop = 0
				if(this.keywords != '') {
					this.keywords = ''
					this.dataList = []
					this.index = 1
					this.getListData()
				}
			},
			hexToRgb(hex) {
			    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex.split('#')[1]);
			    return result ? `rgba(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)},0.2)`: null;
			},
			miniAppUpdate: function() {
				const $this = this
			  const updateManager = uni.getUpdateManager()
			  updateManager.onUpdateReady(function () {
			    uni.showModal({
			      title: '更新提示',
			      content: '监测到小程序版本有更新，是否重启应用？',
			      confirmColor: '#FFDA4C',
			      success: function (res) {
			        if (res.confirm) {
			          // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
			          updateManager.applyUpdate()
			        }
			      }
			    })
			  })
			  updateManager.onUpdateFailed(function () {
			    // 新版本下载失败
			    $this.$api.warnNotice('新版本更新失败')
			  })
			}
		},
		onShareAppMessage() {
			const $this = this
			return {
				title: $this.$config.defaultName,
				imageUrl: $this.$config.defaultUrl
			}
		}
	}
</script>

<style scoped lang="scss">
	.home {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		position: relative;
		.home-content {
			flex: 1;
			overflow: hidden;
			background-color: $color-def;
		}
		.show-user-head {
			position: absolute;
			top: 0;
			right: 60upx;
			z-index: 500;
			width: 80upx;
			height: 80upx;
			.show-user-head-img {
				width: 100%;
				height: 100%;
				border-radius: 50%;
				overflow: hidden;
				background-color: $img-bg;
			}
			.star-img-icon {
				position: absolute;
				bottom: -10upx;
				right: -16upx;
				font-size: 46upx;
				color: $main-color;
			}
		}
		.show-search {
			width: 100%;
			height: auto;
			padding: 20upx 60upx 10upx;
			background-color: $color-def;
			position: absolute;
			left: 0;
			top: 0;
			z-index: 100;
			.search-box {
				display: flex;
				align-items: center;
				width: 520upx;
				height: 70upx;
				border-radius: 40upx;
				background: #F6F9FA;
				padding: 0 30upx;
				.home-search-icon {
					width: 32upx;
					height: 32upx;
					margin-right: 20upx;
				}
				.home-to-search {
					flex: 1;
					overflow: hidden;
					font-size: 28upx;
					color: $color-black-2;
				}
			}
		}
	}
	.home-bottom {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 148upx;
		z-index: 300;
		padding: 30upx 60upx;
		background-image: linear-gradient(180deg, rgba(255,255,255,0.00) 0%, #FFFFFF 100%);
		.home-bottom-btn-out {
			position: absolute;
			right: 60upx;
			bottom: 30upx;
			z-index: 1;
			width: 630upx;
			height: 88upx;
			overflow: hidden;
			background: $color-def;
			box-shadow: 0 10upx 20upx 0 rgba(166,166,166,0.50);
			border-radius: 8upx;
			transition: all 0.3s ease-out;
			.home-bottom-btn-in {
				width: 630upx;
				height: 88upx;
				text-align: center;
				line-height: 88upx;
				font-size: 28upx;
				color: $color-black-2;
				font-weight: 600;
			}
		}
		.home-add-btn {
			position: absolute;
			top: 30upx;
			right: 60upx;
			z-index: 10;
			width: 88upx;
			height: 88upx;
			background-color: $main-color;
			font-size: 56upx;
			color: $color-def;
			border-radius: 50%;
			box-shadow: 0 10upx 20upx 0 rgba(0,0,0,0.10);
			.home-add-btn-box {
				width: 100%;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	}
	.main-content {
		transition: all 0.3s ease-out;
		width: 100%;
		height: auto;
		position: relative;
		.content-top {
			padding: 20upx 60upx 0;
			.content-title {
				font-size: 56upx;
				color: $color-black-1;
				font-weight: 800;
				margin-bottom: 40upx;
				min-height: 80upx;
				display: flex;
				align-items: center;
				.to-open-utravel {
					padding: 4upx 16upx;
					border-radius: 8upx;
					background-color: $main-color;
					font-size: 28upx;
					color: $color-def;
					margin-left: 20upx;
					letter-spacing: 2upx;
				}
			}
			.home-banner {
				width: 100%;
				height: 360upx;
				box-shadow: 0 10upx 30upx 0 rgba(0,0,0,0.05);
				border-radius: 20upx;
				position: relative;
				.home-banner-img {
					width: 100%;
					height: 100%;
					border-radius: 20upx;
					overflow: hidden;
					background-color: $img-bg;
				}
				.hone-img-more {
					position: absolute;
					bottom: 0;
					right: 0;
					border-radius: 20upx 0 0 0;
					padding: 8upx 16upx;
					background-color: rgba(255,255,255,0.5);
					letter-spacing: 4upx;
					color: $color-black-1;
					font-size: 20upx;
				}
			}
		}
		.show-name-list {
			padding: 20upx 20upx 0;
			width: 100%;
			height: auto;
			.name-list-scroll {
				width: 100%;
				height: 100%;
				.name-list-content {
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;
					padding: 20upx 40upx 0;
				}
			}
			.item-name-box {
				width: 300upx;
				height: 358upx;
				background: $color-def;
				box-shadow: 0 10upx 30upx 0 rgba(0,0,0,0.05);
				border-radius: 20upx;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				margin-bottom: 30upx;
				.item-name-title {
					font-size: 50upx;
					line-height: 50upx;
					padding: 18upx 18upx;
					border-radius: 42upx;
					margin-bottom: 80upx;
				}
				.item-name-desc {
					width: 100%;
					height: auto;
					.item-name-intro {
						font-size: 28upx;
						color: $color-black-2;
						font-weight: 600;
						margin-bottom: 10upx;
						text-align: center;
					}
					.item-name-num {
						font-size: 24upx;
						color: #B7BAC1;
						text-align: center;
					}
				}
			}
		}
	}
</style>
