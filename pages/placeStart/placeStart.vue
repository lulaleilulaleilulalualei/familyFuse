<template>
	<view class="placeStart">
		<cu-custom bgColor="transparent" :isShowBorder="false" :isBack="true" ><block slot="content"></block></cu-custom>
		<view class="place-start-content">
			<view class="place-start-bg"><image src="/static/start_name_bg.jpg" mode=""></image></view>
			<view class="place-start-title">助力姓氏文旅融合平台上线</view>
			<view :class="['place-start-btn', {'place-active-btn': isStart}]" @tap="toStartPlace">{{isStart? '已启动': '启动'}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isStart: false, //是否启动
			}
		},
		onLoad() {
			this.getCurStatus()
		},
		methods: {
			getCurStatus() {
				uni.showLoading({
					title: '数据加载中',
					mask: true
				})
				this.$api.ajax({
					url: this.$config.getStartInfo
				})
				.then((res) => {
					if(res.statusCode == 200 && res.data.code == 0) {
						this.isStart = res.data.data == 1?true: false
						setTimeout(() => {
							uni.hideLoading();
						}, 200)
					}else {
						uni.hideLoading();
						this.$api.warnNotice(res.data.message)
					}
				})
				.catch(() => {
					uni.hideLoading();
					this.$api.warnNotice('获取数据失败')
				})
			},
			toStartPlace() {
				const $this = this
				if(!this.isStart) {
					this.$api.ajax({
						url: this.$config.toClickStart,
						method: 'PUT'
					})
					.then((res) => {
						if(res.statusCode == 200 && res.data.code == 0) {
							uni.showToast({
							    title: '启动成功',
							    icon: 'success',
							    success: () => {
							      setTimeout(() => {
									$this.isStart = true
							      }, 1500)
							    }
							})
						}else {
							uni.hideLoading();
							this.$api.warnNotice(res.data.message)
						}
					})
					.catch(() => {
						uni.hideLoading();
						this.$api.warnNotice('操作失败')
					})
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.placeStart {
		width: 100%;
		height: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
		.place-start-content {
			position: absolute;
			left: 0;
			top: 0;
			height: 100%;
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	}
	.place-start-title {
		font-size: 50upx;
		color: $color-def;
		font-weight: 800;
		margin-bottom: 60upx;
	}
	.place-start-btn {
		width: 200upx;
		height: 200upx;
		text-align: center;
		line-height: 200upx;
		font-size: 48upx;
		color: $color-def;
		background-color: $main-color;
		border-radius: 50%;
	}
	.place-active-btn {
		opacity: 0.7;
	}
	.place-start-bg {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		width: 100%;
		height: 100%;
	}
</style>
