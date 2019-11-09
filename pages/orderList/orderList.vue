<template>
	<view class="orderList" :style="[{minHeight: pageMinH}]">
		<cu-custom bgColor="white" :isBack="true"><block slot="content">订单列表</block></cu-custom>
		<view class="order-list-content" v-if="dataArr.length != 0">
			<view class="offical-hot" @tap="toShowHotCall">
				<view class="offical-hot-title">官方订票热线</view>
				<view class="offical-hot-icon"><image src="/static/hot_call_icon.png" mode=""></image></view>
			</view>
			<view class="item-order-box" v-for="(item, idx) in dataArr" :key="item.order_id" @tap="toJumpOrderDetail(idx)">
				<view class="item-order-time">订单号：{{item.plat_trans_no}}</view>
				<view class="item-order-info">
					<view class="item-act-img"><image :src="item.activity.logo" mode="aspectFill"></image></view>
					<view class="item-act-info">
						<view class="item-act-title">{{item.activity.title}}</view>
						<view class="item-act-price-num">
							<view class="item-act-price">¥ {{item.target_fee}}</view>
							<!-- <view class="item-act-num">x {{item.apply_num}}</view> -->
						</view>
					</view>
				</view>
				<view class="item-order-data">
					<view class="item-order-status">
						<view class="item-order-small-title">状态</view>
						<view v-if="item.order_type == 0" class="item-success-status">报名成功</view>
						<view v-if="item.order_type == 1" :class="[{'item-cfing-status': item.status == 0}, {'item-success-status': item.status == 1}, {'item-complete-status': item.status == 2}]">
							{{item.status == 0?'助力中': item.status == 1? '助力成功': item.status == 2?'助力失败': ''}}
						</view>
					</view>
					<view class="item-order-status">
						<view class="item-order-small-title">人数</view>
						<view class="item-order-num">{{item.apply_num}}人</view>
					</view>
					<view class="item-order-status">
						<view class="item-order-small-title">出行日期</view>
						<view class="item-order-num">{{item.activity.start_date}}</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="order-blank-box" v-if="dataArr.length == 0">
			<view class="order-blank-img"><image src="../../static/noOrder.png" mode=""></image></view>
			<view class="order-blank-txt">还没有订单~</view>
		</view>
		
		<view v-if="isShowCallBox" class="to-show-call-hot" data-sign="out" @click="toCloseCallBox">
			<view class="show-call-box">
				<view class="show-call-title">官方订票热线</view>
				<view class="item-show-call" v-for="(item, index) in ticketArr" :key="index">
					<view class="item-small-call-title">{{item.name}}</view>
					<view class="item-call-num" @tap="toCallTel(item.tel)">{{item.tel}}</view>
				</view>
			</view>
		</view>
		
		<loadErr v-if="isLoadErr" @toRelaodData="toRelaodData"></loadErr>
	</view>
</template>

<script>
	import loadErr from '@/components/loadErr.vue'
	
	export default {
		data() {
			return {
				dataArr: [],
				ticketArr: [], //买票电话
				isLoadErr: false,
				isShowCallBox: false
			}
		},
		components: { loadErr },
		computed: {
			pageMinH() {
				let sys = uni.getSystemInfoSync()
				return sys.windowHeight + 'px'
			}
		},
		onLoad() {
			this.getOrderData()
		},
		methods: {
			toShowHotCall() {
				this.isShowCallBox = true
			},
			toCloseCallBox(e) {
				let sign = e.target.dataset.sign
				if(sign) {
					this.isShowCallBox = false
				}
			},
			toCallTel(tel) {
				uni.makePhoneCall({
					phoneNumber: tel
				})
			},
			toJumpOrderDetail(idx) {
				const $this = this
				if(this.dataArr[idx].order_type == 0) {
					uni.navigateTo({
						url: `/pages/orderDetail/orderDetail?id=${$this.dataArr[idx].order_id}`
					})
				}else {
					uni.navigateTo({
						url: `/pages/cfDetail/cfDetail?id=${$this.dataArr[idx].crowd_id}`
					})
				}
			},
			toRelaodData() {
				this.dataArr = []
				this.isLoaderr = false
				this.getOrderData()
			},
			getOrderData() {
				uni.showLoading({
					title: '数据加载中',
					mask: true
				})
				this.$api.ajax({
					url: this.$config.orderList
				})
				.then((res) => {
					if(res.statusCode == 200 && res.data.code == 0) {
						this.dataArr = res.data.data.order_list
						this.ticketArr = res.data.data.ticket_list
						setTimeout(() => {
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
			}
		}
	}
</script>

<style scoped lang="scss">
	.orderList {
		width: 100%;
		background-color: #F6F9FA;
		.offical-hot {
			padding: 30upx;
			border-radius: 20upx;
			background-color: $color-def;
			margin-bottom: 30upx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.offical-hot-title {
				font-size: 32upx;
				color: $color-black-2;
				font-weight: 700;
			}
			.offical-hot-icon {
				width: 42upx;
				height: 42upx;
			}
		}
	}
	.order-list-content {
		padding: 40upx;
		.item-order-box {
			background-color: $color-def;
			border-radius: 20upx;
			overflow: hidden;
			padding: 30upx;
			margin-bottom: 30upx;
			.item-order-time {
				font-size: 24upx;
				color: $color-black-2;
				margin-bottom: 30upx;
			}
			.item-order-info{
				display: flex;
				align-items: center;
				padding-bottom: 30upx;
				border-bottom: 1px solid #D8DCE6;
				.item-act-img {
					width: 138upx;
					height: 138upx;
					border-radius: 8upx;
					overflow: hidden;
					margin-right: 20upx;
					background-color: $img-bg;
				}
				.item-act-info {
					flex: 1;
					overflow: hidden;
					.item-act-title {
						font-size: 36upx;
						color: $color-black-1;
						font-weight: 700;
						margin-bottom: 10upx;
						@extend .ellipse2;
					}
					.item-act-price-num {
						display: flex;
						align-items: center;
						justify-content: space-between;
						.item-act-price {
							font-size: 28upx;
							color: $color-black-2;
							font-weight: 600;
							color: $color-red;
						}
						.item-act-num {
							font-size: 28upx;
							color: $color-grey;
						}
					}
				}
			}
			.item-order-data {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 40upx;
				margin-top: 30upx;
				.item-order-status {
					display: flex;
					flex-direction: column;
					justify-content: center;
					.item-order-small-title {
						font-size: 20upx;
						color: $color-grey;
						margin-bottom: 10upx;
						text-align: center;
					}
					.item-order-num {
						font-size: 24upx;
						color: $color-black-2;
						font-weight: 600;
						text-align: center;
					}
					.item-cfing-status {
						font-size: 24upx;
						color: $main-color;
						font-weight: 600;
						text-align: center;
					}
					.item-success-status {
						font-size: 24upx;
						color: #67C23A;
						font-weight: 600;
						text-align: center;
					}
					.item-complete-status {
						font-size: 24upx;
						color: $color-black-2;
						font-weight: 600;
						text-align: center;
					}
				}
			}
		}
	}
	.to-show-call-hot {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.6);
		display: flex;
		align-items: center;
		justify-content: center;
		.show-call-box {
			padding: 50upx 120upx 60upx;
			border-radius: 20upx;
			background-color: $color-def;
			.show-call-title {
				font-size: 40upx;
				color: $color-black-1;
				font-weight: 600;
				margin-bottom: 44upx;
				text-align: center;
			}
			.item-show-call {
				display: flex;
				align-items: center;
				&:not(:last-child) {
					margin-bottom: 40upx;
				}
				.item-small-call-title {
					font-size: 32upx;
					color: $color-black-1;
					font-weight: 600;
					margin-right: 80upx;
				}
				.item-call-num {
					font-size: 32upx;
					color: #0486FE;
					font-weight: 600;
					text-decoration: underline;
				}
			}
		}
	}
	.order-blank-box {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 99;
		background-color: $color-def;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.order-blank-img {
			width: 258upx;
			height: 282upx;
			margin-bottom: 40upx;
		}
		.order-blank-txt {
			color: $color-grey;
			font-size: 28upx;
		}
	}
</style>
