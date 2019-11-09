<template>
	<view class="supportSum" data-sign="out" @click="toCloseSupportBox">
		<view class="support-sum-box">
			<view class="show-sum-box">
				<view class="show-activity-info">
					<view class="show-act-img"><image :src="_dataObj.activity.logo" mode="aspectFill"></image></view>
					<view class="show-act-info-box">
						<view class="show-act-title">{{_dataObj.activity.title}}</view>
						<view class="show-act-destination">距离目标 ¥{{_dataObj.target_fee}} 元</view>
					</view>
				</view>
				<view class="show-select-sum">
					<view :class="['item-show-sum', {'item-active-sum': item == selectSum}]" v-for="(item, idx) in _dataObj.fee_section" :key="idx" @click.stop="toSelectSum(idx)">
						<text>{{item}}元</text>
					</view>
				</view>
			</view>
			<view class="to-support-btn" @click="toSupport">支持</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				selectSum: 0
			}
		},
		props: {
			_dataObj: {
				type: Object
			}
		},
		methods: {
			toCloseSupportBox(e) {
				let sign = e.target.dataset.sign
				if(sign) {
					this.$emit('toCloseSupportBox', false)
				}
			},
			toSelectSum(idx) {
				this._dataObj.fee_section.map((v, i) => {
					if(idx == i) {
						this.selectSum = v
					}
				})
			},
			toSupport() {
				if(this.selectSum == 0) {
					this.$api.warnNotice('请选择支持金额')
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
						crowd_id: this._dataObj.crowd_id,
						crowd_fee: this.selectSum
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
						            $this.$emit('toCloseSupportBox', true)
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
		}
	}
</script>

<style scoped lang="scss">
	.supportSum {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 700;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.7);
		.support-sum-box {
			position: absolute;
			left: 0;
			bottom: 0;
			background: $color-def;
			border-radius: 20upx 20upx 0 0;
			overflow: hidden;
		}
	}
	.show-sum-box {
		padding: 60upx 40upx;
		background-color: $color-def;
		.show-activity-info {
			display: flex;
			align-items: center;
			margin-bottom: 60upx;
			.show-act-img {
				width: 134upx;
				height: 134upx;
				background-color: $img-bg;
				margin-right: 30upx;
				border-radius: 12upx;
				overflow: hidden;
			}
			.show-act-info-box {
				height: 134upx;
				flex: 1;
				overflow: hidden;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.show-act-title {
					font-size: 28upx;
					color: $color-black-2;
					font-weight: 700;
					@extend .ellipse2;
				}
				.show-act-destination {
					font-size: 24upx;
					color: $color-grey;
				}
			}
		}
		.show-select-sum {
			width: 100%;
			height: auto;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.item-show-sum {
				width: 210upx;
				height: 136upx;
				background: #F6F7FA;
				border-radius: 12upx;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 36upx;
				color: $color-grey;
				&:first-child {
					margin-bottom: 20upx;
				}
			}
			.item-active-sum {
				background-color: $main-color;
				color: $color-def;
			}
		}
	}
	.to-support-btn {
		width: 100%;
		height: 100upx;
		text-align: center;
		line-height: 100upx;
		background-color: $main-color;
		font-size: 28upx;
		color: $color-def;
	}
</style>
