<template>
	<view class="qualificationUnit">
		<cu-custom bgColor="white" :isBack="true" ><block slot="content">资质单位</block></cu-custom>
		<view class="qltUnitBox">
			<view class="show-qlt-img" :style="{height: imgH(559, 775)}"><image src="/static/qlt_1.jpg" mode=""></image></view>
			<view class="show-qlt-img" :style="{height: imgH(560, 800)}"><image src="/static/qlt_2.jpg" mode=""></image></view>
			<view class="show-qlt-img" :style="{height: imgH(800, 600)}"><image src="/static/qlt_3.jpg" mode=""></image></view>
			<view class="show-qlt-img" :style="{height: imgH(1034, 1500)}"><image src="/static/qlt_4.jpg" mode=""></image></view>
			<view class="show-qlt-img" :style="{height: imgH(1065, 1398)}"><image src="/static/qlt_5.jpg" mode=""></image></view>
			<view class="show-qlt-img" :style="{height: imgH(1074, 1644)}"><image src="/static/qlt_6.jpg" mode=""></image></view>
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
			imgH(w, h) { // 670
				let sys = uni.getSystemInfoSync()
				let valH = ( 690 / w ) * ( sys.windowWidth / 750 * h ).toFixed(2)
				return valH + 'px'
			}
		}
	}
</script>

<style scoped lang="scss">
	.qltUnitBox {
		padding: 0 30upx;
		.show-qlt-img {
			height: auto;
			width: 100%;
			padding: 30upx 0;
			border-bottom: 1px solid #e5e5e5;
		}
	}
</style>
