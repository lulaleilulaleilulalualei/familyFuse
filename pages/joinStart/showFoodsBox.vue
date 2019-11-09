<template>
	<view class="show-foods-box" @click="toCloseOutBox">
		<view class="show-content-box">
			<scroll-view class="show-content-scroll" :scroll-y="true" >
				<view class="box-title">餐饮/2</view>
				
				<view class="item-foods-box" v-for="(item, idx) in 10" :key="idx">
					<view class="item-foods-img"><image src="" mode="aspectFill"></image></view>
					<view class="item-foods-info">
						<view class="item-foods-name">啦啦啦餐厅</view>
						<view class="item-foods-time">
							<view class="item-foods-time-1"><text>D1</text>午餐</view>
							<view class="item-foods-time-2">2019.06.06 周二</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toCloseOutBox(e) {
				this.$emit('toCloseFoodsBox', false)
			}
		}
	}
</script>

<style scoped lang="scss">
	.show-foods-box {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 700;
		background-color: rgba(0,0,0,0.8);
		.show-content-box {
			width: 100%;
			height: 100%;
			overflow: hidden;
			padding: 200upx 50upx 40upx;
			.show-content-scroll {
				width: 100%;
				height: 100%;
			}
		}
	}
	.box-title {
		font-size: 48upx;
		color: $color-def;
		margin-bottom: 60upx;
	}
	.item-foods-box {
		height: auto;
		width: 100%;
		display: flex;
		align-items: center;
		&:not(:last-child) {
			margin-bottom: 30upx;
		}
		.item-foods-img {
			width: 180upx;
			height: 180upx;
			background-color: $img-bg;
		}
		.item-foods-info {
			height: 180upx;
			flex: 1;
			overflow: hidden;
			background-color: $color-def;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding: 20upx;
			.item-foods-name {
				font-size: 36upx;
				color: $color-black-2;
				font-weight: 600;
			}
			.item-foods-time {
				display: flex;
				align-items: center;
				.item-foods-time-1 {
					font-size: 32upx;
					color: $color-red;
					font-weight: 600;
					margin-right: 30upx;
					text {
						font-size: 40upx;
					}
				}
				.item-foods-time-2 {
					font-size: 32upx;
					color: $color-black-2;
				}
			}
		}
	}
</style>
