<template>
	<view class="showHotelBox" @click="toCloseOutBox">
		<view class="show-content-box">
			<scroll-view class="show-content-scroll" :scroll-y="true" >
				<view class="box-title">酒店/2</view>
				<view class="item-hotel-box" v-for="(item, idx) in 5" :key="idx">
					<view class="item-box-top">
						<view class="item-box-days">D1 ~ D3</view>
						<view class="item-box-date">2019.06.06-2019.06.09</view>
					</view>
					<view class="item-hotel-info">
						<view class="item-hotel-title">罗马大酒店</view>
						<view class="item-hotel-img"><image src="" mode="aspectFill"></image></view>
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
				this.$emit('toCloseHotelBox', false)
			}
		}
	}
</script>

<style scoped lang="scss">
	.showHotelBox {
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
	.item-hotel-box {
		width: 100%;
		height: auto;
		&:not(:last-child) {
			margin-bottom: 40upx;
		}
		.item-box-top {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 20upx 30upx;
			background: $color-red;
			.item-box-days {
				font-size: 40upx;
				color: $color-def;
				font-weight: 800;
			}
			.item-box-date {
				font-size: 32upx;
				color: $color-def;
			}
		}
		.item-hotel-info {
			padding: 20upx 30upx 30upx;
			background-color: $color-def;
			.item-hotel-title {
				font-size: 28upx;
				color: $color-black-2;
				margin-bottom: 20upx;
			}
			.item-hotel-img {
				width: 100%;
				height: 284upx;
				background-color: $img-bg;
			}
		}
	}
</style>
