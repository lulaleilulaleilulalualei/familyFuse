<template>
	<view class="cfDetail">
		<cu-custom bgColor="white" :isBack="true"><block slot="content">订单详情</block></cu-custom>
		<view class="cf-detail-box">
			<view class="show-act-info">
				<view class="show-act-img"><image v-if="dataObj.activity" :src="dataObj.activity.logo" mode="aspectFill"></image></view>
				<view class="show-act-info-box">
					<view class="act-info-title">{{dataObj.activity.title || ''}}</view>
					<view class="act-info-notice">时间截止后未能筹满，概不退款，需自己补足</view>
					<view class="act-info-price">¥ {{dataObj.target_fee || '--'}}</view>
				</view>
			</view>
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
			<view class="to-opt-cf-btn">
				<view class="to-self-cf" @tap="toSelfPay">自己补款</view>
				<view :class="['to-share-friends', {'cf-had-end': dataObj.days <= 0 || dataObj.status == 2}]">
					<template v-if="dataObj.status == 0 && dataObj.days > 0">
						<text>邀请好友支持</text>
						<button  class="toAuthBtn" open-type="share"></button>
					</template>
					<template v-else-if="dataObj.status == 1">
						<text>助力已完成</text>
					</template>
					<template v-else-if="dataObj.days <= 0 || dataObj.status == 2">
						<text>助力已结束</text>
					</template>
				</view>
			</view>
			<view class="item-info-box">
				<view class="item-info-title">出行人信息<text style="font-size: 28rpx" v-if="dataObj.equ_room == 1">（需要同一间房）</text></view>
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
			<view class="support-record">
				<view class="support-record-title">支持记录</view>
				<view class="support-record-box" :style="{'min-height': dataObj.support_list.length != 0? 'auto': '160px'}">
					<template v-if="dataObj.support_list.length != 0">
						<view class="item-support-record" v-for="(item, idx) in dataObj.support_list" :key="idx">
							<view class="item-support-info">
								<view class="itemsupport-head"><image :src="item.avatar" mode="aspectFill"></image></view>
								<view class="item-support-info-box">
									<view class="item-support-title">{{item.nick_name || '--'}}</view>
									<view class="item-support-time">{{item.confirm_time || '--'}}</view>
								</view>
							</view>
							<view class="item-support-sum">支持了¥{{item.crowd_fee || '--'}}元</view>
						</view>
					</template>
					
					<view class="no-data-box" v-if="dataObj.support_list.length == 0">
						<view class="noDataImg" style="width: 100px;height: 110px"><img src="/static/noData.png" alt=""></view>
						<view class="noDataText">还没有支持纪录~</view>
					</view>
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
				isLoadErr: false, //页面加载出错
				dataObj: {}, //数据对象
				id: null
			}
		},
		components: { loadErr },
		onLoad(opt) {
			this.id = opt.id
			this.getDetailData()
		},
		methods: {
			actLineW() { //670
				let sys = uni.getSystemInfoSync()
				let w = sys.windowWidth / 750 * 670
				return parseFloat(this.dataObj.have_fee) / parseFloat(this.dataObj.target_fee) * w + 'px' //当前进度的宽度
			},
			actLineLeft() { //670
				let sys = uni.getSystemInfoSync()
				let w = sys.windowWidth / 750 * 670
				let l = parseFloat(this.dataObj.have_fee) / parseFloat(this.dataObj.target_fee) * w //当前进度的宽度
				let numW = sys.windowWidth / 750 * 80 //显示数据宽度
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
				this.getDetailData()
			},
			getDetailData() {
				uni.showLoading({
					title: '数据加载中',
					mask: true
				})
				this.$api.ajax({
					url: this.$config.cfOrderDetail,
					data: {
						crowd_id: this.id
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
			},
			toSelfPay() { //自己补款
				if(this.dataObj.status == 1) {
					this.$api.warnNotice('您已助力成功~')
					return
				}else if(this.dataObj.days <= 0 || this.dataObj.status == 2) {
					this.$api.warnNotice('助力结束~')
					return
				}
			
				uni.showLoading({
				  title: '调用支付中...',
				  mask: true
				})
				const $this = this
				this.$api.ajax({
					url: this.$config.cfSupportPay,
					method: 'POST',
					data: {
						crowd_id: this.id,
						crowd_fee: parseFloat(this.dataObj.target_fee) - parseFloat(this.dataObj.have_fee)
					}
				})
				.then((res) => {
					if(res.statusCode == 200 && res.data.code == 0) {
						uni.hideLoading();
						uni.requestPayment({
						  'timeStamp': res.data.data.timeStamp || res.data.data.timestamp,
						  'nonceStr': res.data.data.nonceStr,
						  'package': res.data.data.package,
						  'signType': res.data.data.signType,
						  'paySign': res.data.data.paySign,
						  success: (r) => {
						    if (r.errMsg == 'requestPayment:ok') {
						    uni.showToast({
						        title: '支持成功',
						        icon: 'success',
						        success: () => {
						          setTimeout(() => {
									  // 刷新当前页面数据
									$this.isLoadErr = false
									$this.dataObj = {}
									$this.getDetailData()
						          }, 1500)
						        }
						      })
						    }
						  },
						  fail: (err) => {
						    this.$api.warnNotice('支付失败')
						  }
						})
					}else {
						uni.hideLoading();
						this.api.warnNotice(res.data.message)	
					}
				})
				.catch(() => {
					uni.hideLoading();
					this.api.warnNotice('操作失败')
				})
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
	
	.cf-detail-box {
		padding: 30upx 40upx;
	}
	.show-act-info {
		display: flex;
		align-items: center;
		margin-bottom: 40upx;
		.show-act-img {
			width: 204upx;
			height: 204upx;
			background-color: $img-bg;
			border-radius: 8upx;
			overflow: hidden;
			margin-right: 20upx;
		}
		.show-act-info-box {
			flex: 1;
			overflow: hidden;
			height: 204upx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.act-info-title {
				font-size: 32upx;
				color: $color-black-1;
				font-weight: 800;
				@extend .ellipse2;
			}
			.act-info-notice {
				font-size: 20upx;
				color: $color-grey;
			}
			.act-info-price {
				font-size: 56upx;
				color: $color-red;
				font-weight: 800;
				line-height: 56upx;
			}
		}
	}
	.cur-progress {
		width: 100%;
		
		margin-bottom: 60upx;
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
				width: 0;
				height: 6upx;
				background-image: linear-gradient(-90deg, #FF022C 50%, #FF9233 100%);
				border-radius: 3upx;
				overflow: hidden;
			}
			.cur-progress-num {
				position: absolute;
				top: 0;
				left: 0;
				z-index: 50;
				width: 80upx;
				height: 30upx;
				line-height: 30upx;
				text-align: center;
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
	.to-opt-cf-btn {
		width: 100%;
		height: 88upx;
		display: flex;
		justify-content: space-between;
		margin-bottom: 60upx;
		.to-self-cf {
			width: 270upx;
			height: 100%;
			line-height: 88upx;
			text-align: center;
			border: 1px solid $main-color;
			border-radius: 8upx;
			overflow: hidden;
			font-size: 28upx;
			color: $main-color;
		}
		.to-share-friends {
			width: 380upx;
			height: 100%;
			text-align: center;
			line-height: 88upx;
			font-size: 28upx;
			color: $color-def;
			border-radius: 8upx;
			background-color: $main-color;
			position: relative;
		}
		.cf-had-end {
			background-color: $img-bg;
		}
	}
	.item-info-box {
		width: 100%;
		height: auto;
		margin-bottom: 60upx;
		.item-info-title {
			font-size: 36upx;
			color: $main-color;
			font-weight: 600;
			margin-bottom: 40upx;
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
	.support-record {
		width: 100%;
		height: auto;
		.support-record-title {
			font-size: 36upx;
			color: $main-color;
			font-weight: 600;
			margin-bottom: 40upx;
		}
		.support-record-box {
			position: relative;
		}
		.item-support-record {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 30upx;
			.item-support-info {
				flex: 1;
				overflow: hidden;
				display: flex;
				align-items: center;
				.itemsupport-head {
					width: 70upx;
					height: 70upx;
					border-radius: 50%;
					background-color: $img-bg;
					overflow: hidden;
					margin-right: 20upx;
				}
				.item-support-info-box {
					flex: 1;
					overflow: hidden;
					.item-support-title {
						width: 100%;
						font-size: 28upx;
						color: $color-black-1;
						margin-bottom: 2upx;
						font-weight: 600;
						@extend .ellipse1;
					}
					.item-support-time {
						font-size: 20upx;
						color: $color-black-1;
					}
				}
			}
			.item-support-sum {
				font-size: 28upx;
				color: $color-black-1;
				margin-left: 20upx;
			}
		}
	}
</style>
