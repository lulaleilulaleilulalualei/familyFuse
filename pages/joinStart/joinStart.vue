<template>
	<view class="joinStart">
		<cu-custom :isShowBorder="isShowNavBorder" :bgColor="navColor" :isBack="!isShareStatus">
			<block slot="content"><text :style="{'opacity': navTitle}">参与发起</text></block>
		</cu-custom>
		<view class="contentBox">
			<scroll-view class="contentBoxScroll" :scroll-y="true" @scroll="toScroll" :scroll-into-view="viewId" :scroll-with-animation="true">
				<view class="joinBanner"><image lazy-load="true" :src="dataObj.banner" mode="aspectFill"></image></view>
				<view class="joinBox">
					<view class="cur-title">{{dataObj.title || '--'}}</view>
					<view class="cur-port-num">{{lineObj.point_title || '--'}}</view>
					<view class="cur-show-spot">
						<swiper class="cur-swiper-box" :autoplay="true" :interval="4000" :duration="800" @change="curSwiperChange">
							<swiper-item class="item-swiper-box" v-for="(item, index) in swiperArr" :key="index">
								<view class="show-spot-box">
									<view class="item-cur-spot first-cur-spot" @tap="toJumpSpotIntro(item.firstPort)">
										<image lazy-load="true" :src="item.firstPort.img" mode="aspectFill"></image>
										<view class="item-spot-buttom-box"></view>
										<view class="item-spot-buttom-txt">
											<view class="item-spot-title">{{item.firstPort.name || '--'}}</view>
											<view class="item-spot-desc">{{item.firstPort.desc || '--'}}</view>
										</view>
									</view>
									<view class="item-cur-in-box">
										<view class="item-cur-spot item-cur-in-spot" v-for="(val, idx) in item.morePort" :key="idx" @tap="toJumpSpotIntro(val)">
											<image lazy-load="true" :src="val.mImg" mode="aspectFill"></image>
											<view class="item-spot-buttom-box"></view>
											<view class="item-spot-buttom-txt">
												<view class="item-spot-title">{{val.name || '--'}}</view>
												<view class="item-spot-desc">{{val.desc || '--'}}</view>
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
							<view class="item-route" v-for="(item, index) in lineObj.day_title_list" :key="index"  @tap="toJumpDayRoute(index)">
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
						<view class="route-content-box">
							<view class="item-day-content" :id="'route_'+index" v-for="(item, index) in lineObj.day_content_list" :key="index">
								<view class="route-title-1">
									<text>{{item.day}}</text>
									<text>{{item.date}}</text>
								</view>
								<view class="route-rich-text" v-for="(val, idx) in item.content" :key="idx">
									<rich-text :nodes="val"></rich-text>
								</view>
								<!-- <view class="route-img"><image src="" mode="aspectFill"></image></view> -->
							</view>
							
							<view class="item-route-notice" v-for="(item, idx) in lineObj.text_list" :key="idx">
								<view class="item-notice-title">{{item.title}}</view>
								<veiw class="item-notice-richText">
									<rich-text :nodes="item.img"></rich-text>
								</veiw>
							</view>
							
							<text :decode="true" class="route-notice-important">{{lineObj.note_text}}</text>
						</view>
						
						<!-- <view class="to-opt-apply-list" @tap="toShowOptRoute">
							<view :class="['to-opt-apply-txt', {'to-active-apply-list': routeList}]">{{optRouteTxt}}</view>
						</view> -->
					</view>
				</view>
			</scroll-view>
			<view class="to-join-btn">
				<view @tap="toJoinInit">参与发起</view>
			</view>
		</view>
		
		<!-- <showHotelBox v-if="isShowHotelBox" @toCloseHotelBox="toCloseHotelBox"></showHotelBox> -->
		<!-- <showFoodsBox v-if="isShowFoodsBox" @toCloseFoodsBox="toCloseFoodsBox"></showFoodsBox> -->
		
		<!-- <view class="to-share-wx" @tap="toShowSharePoster"><image src="/static/share_wx_btn.png" mode=""></image></view> -->
		<!-- <showPosterBox :_isShowBox="isShowPorsterBox" @toClosePosterBox="toClosePosterBox"></showPosterBox> -->
		
		<loadErr v-if="isLoadErr" @toRelaodData="toRelaodData"></loadErr>
	</view>
</template>

<script>
	// import showHotelBox from './showHotelBox.vue'
	// import showFoodsBox from './showFoodsBox.vue'
	// import showPosterBox from '../../components/sharePoster.vue'
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
				// isShowPorsterBox: false, //分享海报
				
				// 考察相册
				albumIdx: 0, //相册当前下标
				albumImgs: [],//相册数组
				videoTop: null, //视频top值
				isPlayVideo: false, //是否自动播放视频
				
				isLoadErr: false,
				dataObj: {},
				lineObj: {}, //景点对象
				swiperArr: [], //swiper数组
				curIdx: 0, //当前swiper idx
				viewId: '', //跳转到某天
			}
		},
		components: { loadErr},
		onLoad() {
			this.getAlbumArr()
			this.getData()
		},
		methods: {
			...mapActions([
				'toSaveSpotInfo'
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
				this.viewId = `route_${idx}`
			},
			curSwiperChange(e) {
				this.curIdx = e.detail.current
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
					url: this.$config.joinActDetail,
					data: {
						no: this.$config.no
					}
				})
				.then((res) => {
					if(res.statusCode == 200 && res.data.code == 0) {
						this.dataObj = res.data.data
						this.lineObj = JSON.parse(res.data.data.content)
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
				.catch(() => {
					uni.hideLoading();
					this.isLoadErr = true
				})
			},
			// toShowSharePoster() { //打开海报分享
			// 	this.isShowPorsterBox = true
			// },
			// toClosePosterBox(val) { //关闭海报分享
			// 	this.isShowPorsterBox = false
			// },
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
				let top = this.videoTop - (sys.windowHeight - sys.windowWidth / 750 * 507)
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
			// toShowHotelBox() {
			// 	this.isShowHotelBox = true
			// },
			// toCloseHotelBox(val) {
			// 	this.isShowHotelBox = val
			// },
			// toShowFoodsBox() {
			// 	this.isShowFoodsBox = true
			// },
			// toCloseFoodsBox(val) {
			// 	this.isShowFoodsBox = val
			// },
			toJumpSpotIntro(info) {
				this.toSaveSpotInfo(info)
				uni.navigateTo({
					url: '/pages/spotShow/spotShow'
				})
			},
			toJoinInit() {
				const $this = this
				uni.navigateTo({
					url: '/pages/initName/initName?from=add'
				})
			},
			onShareAppMessage() {
				const $this = this
				return {
					path: `/pages/index/index`,
					title: $this.$config.defaultName,
					imageUrl: $this.$config.defaultUrl
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.joinStart {
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
	}
	.joinBox {
		width: 100%;
		height: auto;
		background-color: $color-def;
		border-radius: 60upx 0 0 0;
		position: relative;
		top: -60upx;
		padding: 30upx 40upx;
		.cur-title {
			font-size: 52upx;
			color: $color-black-1;
			font-weight: 800;
			margin-bottom: 40upx;
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
			padding-bottom: 100upx;
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
		
	}
	.to-join-btn {
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 99;
		width: 100%;
		height: auto;
		padding: 0 40upx 30upx;
		background-color: $color-def;
		view {
			width: 100%;
			height: 88upx;
			background-color: $main-color;
			line-height: 88upx;
			text-align: center;
			font-size: 28upx;
			color: $color-def;
			border-radius: 8upx;
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
