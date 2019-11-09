<template>
	<view class="sharePoster" :style="{opacity: _isShowBox? 1: 0, 'z-index': _isShowBox? 8888: -1}">
		<template v-if="posterUrl != ''">
			<view class="show-poster-img" @click="toClosePosterBox">
				<view class="poster-img-box">
					<image :src="posterUrl" mode=""></image>
				</view>
			</view>
			<view class="poster-share">
				<view class="poster-share-btn">
					<view class="poster-share-icon"><image src="/static/wx_icon.png" mode=""></image></view>
					<view class="poster-share-txt">微信</view>
					
					<button  class="toAuthBtn" open-type="share"></button>
				</view>
				<view class="poster-share-btn" @tap="saveImg">
					<view class="poster-share-icon"><image src="/static/wx_circle.png" mode=""></image></view>
					<view class="poster-share-txt">朋友圈</view>
				</view>
			</view>
		</template>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				posterUrl: '', //海报地址
			}
		},
		props: {
			_isShowBox: {
				type: Boolean,
				default: false
			},
			dear_id: Number
		},
		watch: {
			_isShowBox(val) {
				if(val && this.posterUrl == '') {
					this.toGetPosterCode()
				}
			}
		},
		methods: {
			toClosePosterBox() {
				this.$emit('toClosePosterBox', false)
			},
			toGetPosterCode() {
				uni.showLoading({
					title: '海报加载中',
					mask: true
				})
				this.$api.ajax({
					url: this.$config.getPosterCode,
					data: {
						dear_id: this.dear_id
					}
				})
				.then((res) => {
					if(res.statusCode == 200 && res.data.code == 0) {
						this.posterUrl = res.data.data
						uni.hideLoading();
					}else {
						uni.hideLoading();
						this.$api.warnNotice(res.data.message)
						this.$emit('toClosePosterBox', false)
					}
				})
				.catch(() => {
					uni.hideLoading();
					this.$api.warnNotice('获取海报失败')
					this.$emit('toClosePosterBox', false)
				})
			},
			saveImg() {
				const $this = this
				uni.showModal({
					title: '',
					content: '由于当前小程序无法分享到朋友圈，是否将下载海报到本地相册',
					cancelColor: '#909399',
					confirmColor: '#FF0014',
					success: (res) => {
						if(res.confirm) {
							$this.saveImgMay()
						}
					}
				})
			},
			saveImgMay() {
				const $this = this
				uni.downloadFile({
				  url: $this.posterUrl,
				  success: function (res) {
				    uni.getSetting({
				      success(r) {
				        if (!r.authSetting['scope.writePhotosAlbum']) {
				          uni.authorize({
				            scope: 'scope.writePhotosAlbum',
				            success() {
				              uni.saveImageToPhotosAlbum({
				                filePath: res.tempFilePath,
				                success(result) {
									uni.showToast({
				                      title: '保存成功',
				                      icon: 'success',
									  success: () => {
										setTimeout(() => {
											$this.$emit('toClosePosterBox', false)
										}, 1500)
									  }
				                    })
				                }
				              })
				            },
							fail(err) {
								$this.$api.warnNotice('您已拒绝授权，如需重新获得该功能请删除小程序后重新下载')
							}
				          })
				        }else {
							uni.saveImageToPhotosAlbum({
							  filePath: res.tempFilePath,
							  success(result) {
								uni.showToast({
							        title: '保存成功',
							        icon: 'success',
									success: () => {
										setTimeout(() => {
											$this.$emit('toClosePosterBox', false)
										}, 1500)
									}
							    })
							  }
							})
						}
				      },
					  fail(err) {
						  console.log(err)
						 $this.$api.warnNotice('操作失败')
					  }
				    })
				  },
				  fail(err) {
					  console.log(err)
					  $this.$api.warnNotice('操作失败')
				  }
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.sharePoster {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.8);
		display: flex;
		flex-direction: column;
		transition: all 0.2s;
		.show-poster-img {
			flex: 1;
			padding: 0 70upx;
			display: flex;
			align-items: center;
			justify-content: center;
			.poster-img-box {
				width: 100%;
				height: 1000upx;
				border-radius: 20upx;
				overflow: hidden;
			}
		}
		.poster-share {
			height: 244upx;
			width: 100%;;
			transition: all 0.2 ease-out;
			background-color: $color-def;
			border-radius: 20upx 20upx 0 0;
			overflow: hidden;
			display: flex;
			align-items: center;
			justify-content: space-around;
			.poster-share-btn {
				width: 100upx;
				height: auto;
				position: relative;
				.poster-share-icon {
					width: 100upx;
					height: 100upx;
					border-radius: 50%;
					margin-bottom: 10upx;
				}
				.poster-share-txt {
					font-size: 24upx;
					color: $color-black-2;
					text-align: center;
				}
			}
		}
	}
</style>
