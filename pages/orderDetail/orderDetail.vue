<template>
	<view class="orderDetail" :style="[{minHeight: pageMinH}]">
		<cu-custom :bgColor="navColor" :isBack="true" :isShowBorder="false" ><block slot="content"><text style="color: #FFF">订单详情</text></block></cu-custom>
		<view class="order-detail-content">
			<view class="detail-content-box">
				<view class="show-route-info">
					<view class="show-route-info-box">
						<view class="route-info-img"><image v-if="dataObj.activity" :src="dataObj.activity.logo" mode="aspectFill"></image></view>
						<view class="route-info-title">{{dataObj.activity.title || '--'}}</view>
					</view>
					<view class="show-route-time">
						<text>{{dataObj.activity.start_date || '--'}}</text>
						<text>{{dataObj.activity.week || '--'}}</text>
						<text>{{dataObj.activity.day_num || '--'}}天{{dataObj.activity.night_num || '--'}}晚</text>
					</view>
				</view>
				<view class="detail-info-box">
					<view class="item-info-box">
						<view class="item-info-title">出行人信息 <text style="font-size: 28rpx" v-if="dataObj.equ_room == 1">（需要同一间房）</text></view>
						<view class="item-tvl-info" v-for="(item, idx) in dataObj.apply_list" :key="idx">
							<view class="item-info">
								<view :style="[{width: dataObj.apply_list.length > 1? '150rpx': 'auto'}]" class="item-info-small-title">出行人 <text v-if="dataObj.apply_list.length > 1">({{idx+1}})</text>：</view>
								<view class="item-info-show">{{item.name || '--'}}</view>
							</view>
							<view class="item-info" v-if="item.tel">
								<view :style="[{width: dataObj.apply_list.length > 1? '150rpx': 'auto'}]" class="item-info-small-title">手机号：</view>
								<view class="item-info-show">{{item.tel || '--'}}</view>
							</view>
							<view class="item-info">
								<view :style="[{width: dataObj.apply_list.length > 1? '150rpx': 'auto'}]" class="item-info-small-title">身份证：</view>
								<view class="item-info-show">{{item.id_card || '--'}}</view>
							</view>
						</view>
					</view>
					<view class="item-info-box">
						<view class="item-info-title">订单信息</view>
						<view class="item-info">
							<view class="item-info-small-title">订单编号：</view>
							<view class="item-info-show">{{dataObj.plat_trans_no || '--'}}</view>
						</view>
						<view class="item-info">
							<view class="item-info-small-title">下单时间：</view>
							<view class="item-info-show">{{dataObj.payed_time || '--'}}</view>
						</view>
						<view class="item-info">
							<view class="item-info-small-title">支付方式：</view>
							<view class="item-info-show">{{dataObj.pay_type == 1?'微信支付': ''}}</view>
						</view>
					</view>
				</view>
				<view class="show-fee-intro"  v-if="dataObj.activity">
					<view class="item-fee-intro">
						<view class="item-fee-small-title">商品总额</view>
						<view class="item-fee-num">¥ {{dataObj.activity.pay_fee}} x {{dataObj.apply_list.length}}</view>
					</view>
					<view class="item-fee-intro">
						<view class="item-fee-small-title">港澳游小费</view>
						<view class="item-fee-num">+ ¥ {{dataObj.activity.service_fee}} x {{dataObj.apply_list.length}}</view>
					</view>
					<view class="item-fee-intro">
						<view class="item-fee-small-title">保险（赠送）</view>
						<view class="item-fee-num">+ ¥ 0/人 x{{dataObj.apply_list.length}}</view>
					</view>
					<view class="item-fee-intro" v-if="dataObj.attach_fee">
						<view class="item-fee-small-title">年龄附加费</view>
						<view class="item-fee-num">+ ¥ {{dataObj.attach_fee}}</view>
					</view>
				</view>
				<view class="rel-fee-price-num">
					<view class="rel-fee-price-txt">实付款：</view>
					<view class="rel-fee-price">¥{{dataObj.total_fee || '--'}}</view>
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
				navColor: '#E80214',//导航背景色
				isLoadErr: false, //页面加载出错
				dataObj: {}, //数据对象
				id: null, //订单id
			}
		},
		components: { loadErr },
		computed: {
			pageMinH() {
				let sys = uni.getSystemInfoSync()
				return sys.windowHeight + 'px'
			}
		},
		onLoad(opt) {
			this.id = opt.id
			this.getDetailData()
		},
		methods: {
			toRelaodData() {
				this.isLoadErr = false
				this.dataObj = {}
				this.getDetailData()
			},
			getDetailData() {
				uni.showLoading({
					title: '数据加载中',
					mask: true
				})
				this.$api.ajax({
					url: this.$config.getOrderDetail,
					data: {
						order_id: this.id
					}
				})
				.then((res) => {
					if(res.statusCode == 200 && res.data.code == 0) {
						this.dataObj = res.data.data
						setTimeout(() => {
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
			}
		}
	}
</script>

<style scoped lang="scss">
	.orderDetail {
		width: 100%;
		background-color: $main-color;
		.order-detail-content {
			padding: 20upx 40upx 60px;
			.detail-content-box {
				width: 100%;
				height: auto;
				background-color: $color-def;
				border-radius: 20upx;
				overflow: hidden;
			}
		}
	}
	.show-route-info {
		padding: 30upx;
		border-bottom: 1px dashed #D8DCE6;
		.show-route-info-box {
			display: flex;
			align-items: center;
			margin-bottom: 30upx;
			.route-info-img {
				width: 100upx;
				height: 100upx;
				background-color: $img-bg;
				border-radius: 8upx;
				margin-right: 20upx;
				overflow: hidden;
			}
			.route-info-title {
				flex: 1;
				overflow: hidden;
				font-size: 36upx;
				color: $color-black-1;
				font-weight: 800;
				@extend .ellipse2;
			}
		}
		.show-route-time {
			display: flex;
			font-size: 32upx;
			color: $color-black-2;
			text {
				line-height: 42upx;
				display: inline-block;
				&:not(:last-child) {
					margin-right: 40upx;
				}
			}
		}
	}
	.detail-info-box {
		border-bottom: 1px dashed #EFEFEF;
		.item-info-box {
			padding: 30upx;
			.item-info-title {
				font-size: 32upx;
				color: $color-black-2;
				font-weight: 600;
				margin-bottom: 20upx;
			}
			.item-tvl-info {
				&:not(:last-child) {
					margin-bottom: 20upx;
				}
			}
			.item-info {
				display: flex;
				align-items: center;
				&:not(:last-child) {
					margin-bottom: 10upx;
				}
				.item-info-small-title {
					font-size: 28upx;
					color: $color-grey;
					text-align: right;
				}
				.item-info-show {
					font-size: 28upx;
					color: $color-black-2;
				}
			}
		}
	}
	.show-fee-intro {
		padding: 30upx;
		border-bottom: 1px solid #EFEFEF;
		.item-fee-intro {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 10upx;
			.item-fee-small-title {
				font-size: 28upx;
				color: $color-grey;
			}
			.item-fee-num {
				font-size: 28upx;
				color: $color-black-2;
				font-weight: 600;
			}
		}
	}
	.rel-fee-price-num {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding: 30upx;
		.rel-fee-price-txt {
			font-size: 28upx;
			color: $color-grey;
		}
		.rel-fee-price {
			font-size: 40upx;
			color: #FF0014;
			font-weight: 800;
		}
	}
</style>
