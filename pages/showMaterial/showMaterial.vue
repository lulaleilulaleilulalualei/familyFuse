<template>
	<view class="showMaterial">
		<cu-custom bgColor="white" :isBack="true" ><block slot="content">活动物料</block></cu-custom>
		<view class="to-show-material">
			<image src="/static/material_img.jpg" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		}
	}
</script>

<style scoped lang="scss">
	.to-show-material {
		width: 100%;
		height: 2996upx;
	}
</style>
