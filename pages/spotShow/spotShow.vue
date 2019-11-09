<template>
	<view class="spotShow">
		<cu-custom bgColor="white" :isBack="true"><block slot="content"></block></cu-custom>
		<view class="spot-show-img"><image :src="dataObj.img" mode="aspectFill"></image></view>
		<view class="spot-text-box">
			<view class="spot-title">{{dataObj.name}}</view>
			<view class="spot-small-txt" v-if="dataObj.ename">{{dataObj.ename}}</view>
			<text :decode="true" class="spot-desc"><text>地点简介：</text> {{dataObj.desc}}</text>
		</view>
		
	</view>
</template>

<script>
	import { mapGetters , mapActions } from 'vuex';
	
	export default {
		data() {
			return {
				isLoadErr: false,
				dataObj: {},
			}
		},
		computed: {
			...mapGetters([
				'_portInfo'
			])
		},
		onLoad() {
			this.dataObj = this._portInfo
			this.toSaveSpotInfo(null)
		},
		methods: {
			...mapActions([
				'toSaveSpotInfo'
			])
		}
	}
</script>

<style scoped lang="scss">
	.spot-show-img {
		width: 100%;
		height: 500upx;
		background-color: $img-bg;
	}
	.spot-text-box {
		padding: 60upx 30upx 30upx;
		.spot-title {
			font-size: 50upx;
			color: $color-black-2;
			font-weight: 700;
		}
		.spot-small-txt {
			font-size: 26upx;
			color: $color-black-2;
		}
		.spot-desc {
			display: block;
			margin-top: 40upx;
			font-size: 28upx;
			color: $color-black-1;
			line-height: 40upx;
			text {
				font-weight: 700;
			}
		}
	}
</style>
