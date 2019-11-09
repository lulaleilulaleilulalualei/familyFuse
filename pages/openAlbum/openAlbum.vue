<template>
	<view class="openAlbum">
		<cu-custom bgColor="white" :isBack="true"><block slot="content">考察记录</block></cu-custom>
		<view class="to-show-video">
			<video v-if="!loadErr" id="video" src="http://images.jants.cn/hk_apply/111.mp4" controls autoplay="true"></video>
		</view>
		<view class="contetn-box">
			<view class="item-show-img" v-for="(item, idx) in imgArr" :key="idx" @tap="toPreviewImg(idx)">
				<image :src="item+'!ys'" mode="aspectFill"></image>
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
				imgArr: [], //图片数组
				isLoadErr: false
			}
		},
		components: { loadErr },
		onLoad() {
			this.getImgsArr()
		},
		methods: {
			toPreviewImg(idx) {
				const $this = this
				uni.previewImage({
					current: $this.imgArr[idx],
					urls: $this.imgArr
				})
			},
			toRelaodData() {
				this.imgArr = []
				this.isLoadErr = false
				this.getImgsArr()
			},
			getImgsArr() {
				uni.showLoading({
					title: '数据加载中',
					mask: true
				})
				this.$api.ajax({
					url: this.$config.getImgs
				})
				.then((res) => {
					if(res.statusCode == 200 && res.data.code == 0) {
						let arr = res.data.data
						this.imgArr = arr
						setTimeout(() => {
							uni.hideLoading();
						}, 200)
					}else {
						this.isLoadErr = true
						this.$api.warnNotice(res.data.message)
					}
				})
				.catch(() => {
					this.isLoadErr = true
					this.$api.warnNotice('照片加载失败')
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.to-show-video {
		width: 100%;
		height: 432upx;
		background-color: $color-black-1;
		margin-bottom: 40upx;
	}
	#video {
		width: 100%;
		height: 100%;
	}
	.contetn-box {
		padding: 0 30upx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		.item-show-img {
			width: 335upx;
			height: 240upx;
			border-radius: 12upx;
			box-shadow: 0 10upx 30upx 0 rgba(0,0,0,0.05);
			margin-bottom: 20upx;
			background-color: $img-bg;
			image {
				width: 335upx;
				height: 240upx;
				border-radius: 12upx;
				overflow: hidden;
			}
		}
	}
</style>
