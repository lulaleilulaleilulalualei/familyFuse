<!-- 发起姓氏 -->
<template>
	<view class="initName">
		<cu-custom bgColor="white" :isShowBorder="false" :isBack="true"><block slot="content"></block></cu-custom>
		<form class="contentBoxForm" @submit="formSubmit">
		<!-- <view class="contentBox"> -->
			<scroll-view class="contentBoxScroll" :scroll-y="true" >
				<view class="init-name-box">
					<view class="init-title">发起我的姓氏</view>
					<view class="init-desc">我们将根据您填写的内容创建您的姓氏宗亲</view>
					<view class="item-init-info" style="margin-bottom: 100rpx">
						<view class="item-init-title">姓氏</view>
						<view class="item-init-inp">
							<input type="text" placeholder="请填写您的姓氏" :disabled="fromType == 'edit'" :value="nameXing" name="nameXing" placeholder-style="color: #909399;" />
						</view>
					</view>
					
					<view class="item-init-head">
						<view class="item-init-upload-img" @tap="toUploadImg(999)">
							<image :src="userImg? userImg :'/static/oth_icon.png'" mode=""></image>
							<view class="item-to-upload-head">上传</view>
						</view>
					</view>
					<view class="item-init-info">
						<view class="item-init-title">姓氏发起人</view>
						<view class="item-init-inp">
							<input type="text" placeholder="请填写发起人姓名" :value="userName" name="userName"  placeholder-style="color: #909399;" />
							<view class="item-init-duty">
								<!-- <input type="text" placeholder="职务" :value="userDuty" name="userDuty" placeholder-style="color: #909399;"/> -->
								<picker @change="bindPickerChange" @click="toSelectPicker(999)" :value="jobIdx" :range="jobsArr" range-key="job">
								    <view :class="['picker-box', {'select-picker-box': jobIdx !== null}]">
								      {{jobIdx !== null? jobsArr[jobIdx].job: '职位'}}
								    </view>
								</picker>
							</view>
						</view>
					</view>
					<view class="item-init-info">
						<view class="item-init-title">联系电话</view>
						<view class="item-init-inp">
							<input type="number" placeholder="请填写发起人联系电话" :value="userTel" name="userTel"  placeholder-style="color: #909399;" />
						</view>
					</view>
					<view class="item-init-info">
						<view class="item-init-title">身份证</view>
						<view class="item-init-inp">
							<input type="idcard" placeholder="请填写发起人身份证" :value="userCard" name="userCard" placeholder-style="color: #909399;" />
						</view>
					</view>
					<template v-if="union_list .length != 0">
						<view class="item-oth-init-box" v-for="(item, idx) in union_list " :key="idx">
							<view class="item-init-head">
								<view class="item-init-upload-img" @tap="toUploadImg(idx)">
									<image :src="item.union_img? item.union_img :'/static/oth_icon.png'" mode=""></image>
									<view class="item-to-upload-head">上传</view>
								</view>
								<text class="cuIcon-delete lg" @tap="toDeleteOthInit(idx)"></text>
							</view>
							<view class="item-init-info" >
								<view class="item-init-title">
									<view class="item-init-title-txt">
										发起人姓名<text>({{idx+2}})</text>
									</view>
								</view>
								<view class="item-init-inp">
									<input type="text" placeholder="请填写发起人姓名" :value="item.union_name" :name="`${item.union$name}#${idx}`"  placeholder-style="color: #909399;" />
									<view class="item-init-duty">
										<!-- <input type="text" placeholder="职务" :value="item.union$duty" :name="`${item.union_duty}#${idx}`" placeholder-style="color: #909399;"/> -->
										<picker @change="bindPickerChange" @click="toSelectPicker(idx)" :value="item.union_idx" :range="jobsArr" range-key="job">
										    <view :class="['picker-box', {'select-picker-box': item.union_idx !== null}]">
										      {{item.union_idx !== null? jobsArr[item.union_idx].job: '职位'}}
										    </view>
										</picker>
									</view>
								</view>
							</view>
							<view class="item-init-info">
								<view class="item-init-title">
									<view class="item-init-title-txt">发起人电话<text>({{idx+2}})</text></view>
								</view>
								<view class="item-init-inp">
									<input type="number" placeholder="请填写发起人电话" :value="item.union_tel" :name="`${item.union$tel}#${idx}`"  placeholder-style="color: #909399;" />
								</view>
							</view>
							<view class="item-init-info">
								<view class="item-init-title">发起人身份证<text>({{idx+2}})</text></view>
								<view class="item-init-inp">
									<input type="idcard" placeholder="请填写发起人身份证" :value="item.union_idCard" :name="`${item.union$idCard}#${idx}`" placeholder-style="color: #909399;" />
								</view>
							</view>
						</view>
					</template>
					<view class="to-add-oth-init" @tap="toAddOthInit">
						<view class="to-add-oth-icon"><image src="../../static/add_initName.png" mode=""></image></view>
						<view class="to-add-oth-text">添加发起人</view>
					</view>
				
				</view>
			</scroll-view>
		<!-- </view> -->
		<view class="to-complete-btn">
			<button form-type="submit">完成</button>
		</view>
		</form>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nameXing: '',//姓
				userName: '',
				userDuty: '',//职称
				userTel: '', //联系电话
				userCard: '', //身份证
				userInfo: null, //用户信息
				userImg: '', //用户头像
				
				union_list : [], //联合发起人
				fromType: '', //操作页面
				id: '', //宗亲id
				jobsArr: [],
				jobIdx: null, //职位id
				
				typeIdx: '', //职位类型idx
			}
		},
		onLoad(opt) {
			this.fromType = opt.from
			if(opt.from == 'edit') {
				if(opt.id) {
					this.id = opt.id
				}
			}
			this.userInfo = this.$userInfo
			this.getJobs()
		},
		methods: {
			toAddOthInit() { //添加联合发起人
				this.union_list.push({
					union$name: 'union$name',
					union$duty: 'union$duty',
					union$tel: 'union$tel',
					union$idCard: 'union$idCard',
					'union_idx': null, //职位选择idx
					'union_img': '', //微信头像
					'union_name': '',
					'union_duty': '',
					'union_tel': '',
					'union_idCard': ''
				})
			},
			bindPickerChange(e) {
				let val = e.detail.value
				if(this.typeIdx == 999) {
					this.jobIdx = val
					this.userDuty = this.jobsArr[val].id
					this.typeIdx = ''
				}else {
					this.union_list.map((v, i) => {
						if(i == this.typeIdx) {
							v.union_idx = val
							v.union_duty = this.jobsArr[val].id
							this.typeIdx = ''
						}
					})
				}
			},
			toSelectPicker(idx) {
				this.typeIdx = idx
			},
			toUploadImg(idx) { //上传头像
				const $this = this
				uni.chooseImage({
					count: 1,
					sourceType: ['album'],
				    success: (chooseImageRes) => {
						uni.showLoading({
							title: '图片上传中',
							mask: true
						})
				        const tempFilePaths = chooseImageRes.tempFilePaths;
				        uni.uploadFile({
				            url: $this.$config.uploadImg, //仅为示例，非真实的接口地址
				            filePath: tempFilePaths[0],
				            name: 'file',
				            success: (res) => {
								let data = JSON.parse(res.data)
								if(data.code == 0) {
									if(idx == 999) {
										this.userImg = data.data
									}else {
										$this.union_list.map((v, i) => {
											if(idx == i) {
												v.union_img = data.data
											}
										})
									}
									uni.hideLoading();
								}else {
									uni.hideLoading();
									$this.$api.warnNotice(res.data.message)
								}
				            },
							fail: (err) => {
								uni.hideLoading();
								$this.$api.warnNotice('图片上传失败')
							}
				        });
				    },
					fail: (err) => {
						$this.$api.warnNotice('已取消上传')
					}
				});
			},
			toDeleteOthInit(idx) {
				this.union_list .splice(idx, 1)
			},
			getStartInfo() {
				const $this = this
				this.$api.ajax({
					url: this.$config.toGetStartInfo,
					data: {
						dear_id: this.id
					}
				})
				.then((res) => {
					if(res.statusCode == 200 && res.data.code == 0) {
						let data = res.data.data
						this.nameXing = data.surname
						this.userName = data.creator.split(' | ')[0]
						// this.userDuty = data.creator.split(' | ')[1] || ''
						if(data.creator.split(' | ')[1]) {
							this.jobsArr.map((v, i) => {
								if(data.creator.split(' | ')[1] == v.job) {
									this.userDuty = v.id
									this.jobIdx = i
								}
							})
						}
						this.userImg = data.avatar || ''
						
						this.userTel = data.tel
						this.userCard = data.id_card
						let union_json = JSON.parse(data.union_json)
						if(union_json) {
							union_json.map(v => {
								this.union_list.push({
									union$name: 'union$name',
									union$duty: 'union$duty',
									union$tel: 'union$tel',
									union$idCard: 'union$idCard',
									'union_idx': getUnionIdx(v), //职位选择idx
									'union_img': v.union_img || '', //微信头像
									'union_name': v.union_name.split(' | ')[0],
									'union_duty': getUnionDuty(v) || '',
									'union_tel': v.union_tel,
									'union_idCard': v.union_idCard || ''
								})
							})
							
							function getUnionIdx(v) {
								let vl = v.union_name.split(' | ')[1]
								if(vl) {
									let idx = ''
									$this.jobsArr.map((v, i) => {
										if(vl == v.job) {
											idx = i
										}
									})
									return idx
								}else {
									return null
								}
							}
							function getUnionDuty(v) {
								let vl = v.union_name.split(' | ')[1]
								if(vl) {
									let val = ''
									$this.jobsArr.map((v, i) => {
										if(vl == v.job) {
											val = v.id
										}
									})
									return val
								}else {
									return ''
								}
							}
						}
						
					}else {
						this.$api.warnNotice(res.data.message)
					}
				})
				.catch((err) => {
					console.log(err)
					this.$api.warnNotice('信息加载失败')
				})
			},
			compare(property){
			    return function(a,b){
			        var value1 = a[property];
			        var value2 = b[property];
			        return value1 - value2;
			    }
			},
			formSubmit(e) {
				let val = e.detail.value, isOk = true
				// let arr = []
				let keys = Object.keys(val)
				for(var i=0;i<keys.length;i++) {
					if(keys[i].split('$')[0] == 'union') {
						let idx = keys[i].split('#')[1], k= keys[i].split('#')[0]
						this.union_list[idx][`${k.split('$')[0]}_${k.split('$')[1]}`] = val[keys[i]]
					}
				}
				if(this.$api.trim(val.nameXing) != '') {
					if(this.userImg == '') {
						this.$api.warnNotice('您还有头像没有上传')
						return
					}
					
					if(this.$api.trim(val.userName) != '') {
						if(this.$api.inputTest(val.userTel, 'tel')) {
							if(this.$api.inputTest(val.userCard, 'card')) {

								if(this.union_list.length != 0) {
									for(let a=0;a<this.union_list.length;a++) {
										let v = this.union_list[a]
									// }
									// this.union_list.map((v, i) => {
										if(this.$api.trim(v.union_name) != '') {
											if(v.union_duty != '') {
												if(this.$api.inputTest(v.union_tel, 'tel')) {
													if(this.$api.inputTest(v.union_idCard, 'card')) {
														// if(this.fromType == 'add') {
															
														// }else {
														// 	isOk = true
														// }
														if(v.union_img != '') {
															isOk = true
														}else {
															isOk = false
															this.$api.warnNotice('您还有头像没有上传')
															return
														}
														
													}else {
														isOk = false
														return
													}
												}else {
													isOk = false
													return
												}
											}else {
												isOk = false
												this.$api.warnNotice('您还有职位没有选择')
												return
											}
										}else {
											isOk = false
											this.$api.warnNotice('您还有联合发起人姓名未填写')
											return
										}
									}
								}
	
								if(isOk) {
									let arr = []
									this.union_list.map((v, i) => {
										arr.push({
											'union_img': v.union_img,
											'union_name': v.union_name,
											'union_duty': v.union_duty,
											'union_tel': v.union_tel,
											"union_idCard": v.union_idCard
										})
									})
									arr.push({
										'union_img': this.userImg,
										'union_name': val.userName,
										'union_duty': this.userDuty,
										'union_tel': val.userTel,
										"union_idCard": val.userCard
									})
									arr.sort(this.compare('union_duty'))
									arr.map((v, i) => {
										this.jobsArr.map(val => {
											if(val.id == v.union_duty) {
												v.union_name = `${v.union_name} | ${val.job}`
											}
										})
									})
									val.userName = arr[0].union_name
									val.userTel = arr[0].union_tel
									val.avatar = arr[0].union_img
									val.userCard = arr[0].union_idCard
									val.union_list = arr.slice(1)
									this.toApplyInfo(val)
								}
							}
						}
					}else {
						this.$api.warnNotice('姓名不能为空')
					}
				}else {
					this.$api.warnNotice('姓氏不能为空')
				}
			},
			toApplyInfo(val) {
				let data = {
					creator: val.userName,
					tel: val.userTel,
					id_card: val.userCard,
					avatar: val.avatar || '', //头像
					union_list: val.union_list || []
				}
				if(this.fromType == 'add') {
					data.surname = val.nameXing
				}else {
					data.dear_id = this.id
				}
				
				// console.log(data)
				const $this = this
				this.$api.ajax({
					url: this.fromType == 'add'? this.$config.createDear: this.$config.updateStartInfo,
					method: this.fromType == 'add'? "POST": "PUT",
					data: data
				})
				.then((res) => {
					if(res.statusCode == 200 && res.data.code == 0) {
						uni.showToast({
							title: '操作成功',
							icon: 'success',
							mask: true,
							success: () => {
								// this.$api.userLogin((status) => {})
								setTimeout(() => {
									if($this.fromType == 'add') {
										uni.navigateTo({
											url: `/pages/apply/apply?dear_id=${res.data.data}&from=startName`
										})
									}else {
										uni.navigateBack({
											delta: 1
										})
									}
								}, 1500)
							}
						})
					}else {
						this.$api.warnNotice(res.data.message)
					}
				})
				.catch(() => {
					this.$api.warnNotice('提交失败')
				})
			},
			getJobs() { //获取职称
				this.$api.ajax({
					url: this.$config.getJobs
				})
				.then((res) => {
					if(res.statusCode == 200 && res.data.code == 0) {
						// console.log(res.data.data)
						this.jobsArr = res.data.data
						if(this.fromType == 'edit') {
							this.getStartInfo() //获取数据
						}
					}else {
						this.$api.warnNotice(res.data.message)
					}
				})
				.catch(() => {
					this.$api.warnNotice('获取职称失败，请检查网络')
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.initName {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		.contentBoxForm {
			flex: 1;
			overflow: hidden;
			padding-bottom: 120upx;
			.contentBoxScroll {
				width: 100%;
				height: 100%
			}
		}
	}
	.item-oth-init-box {
		margin-top: 100upx
	}
	.init-name-box {
		padding: 20upx 60upx 0;
		.init-title {
			font-size: 52upx;
			color: $color-black-2;
			font-weight: 800;
		}
		.init-desc {
			font-size: 24upx;
			color: $color-grey;
			margin-bottom: 60upx;
		}
		.item-init-head {
			display: flex;
			margin-bottom: 60upx;
			align-items: center;
			justify-content: space-between;
			.item-init-upload-img {
				width: 100upx;
				height: 100upx;
				border-radius: 50%;
				overflow: hidden;
				position: relative;
				.item-to-upload-head {
					position: absolute;
					left: 0;
					bottom: 0;
					z-index: 1;
					height: 40upx;
					width: 100%;
					background-color: rgba(0,0,0,0.6);
					text-align: center;
					line-height: 40upx;
					color: $color-def;
					font-size: 18upx;
					letter-spacing: 2upx;
				}
			}
			.cuIcon-delete {
				font-size: 36upx;
				color: $color-red;
			}
		}
		
		.item-init-info {
			width: 100%;
			height: auto;
			border-bottom: 1px solid #EFEFEF;
			margin-bottom: 60upx;
			.item-init-title {
				font-size: 28upx;
				color: $color-black-2;
				font-weight: 600;
				margin-bottom: 10upx;
			}
			.item-init-inp {
				height: 100upx;
				width: 100%;
				padding: 20upx 0;
				display: flex;
				.item-init-duty {
					height: 100%;
					width: 220upx;
					border-left: 1px solid #EFEFEF;
					picker {
						width: 100%;
						height: 100%;
					}
					.picker-box {
						width: 100%;
						height: 100%;
						text-align: center;
						line-height: 60upx;
						font-size: 28upx;
						color: $color-grey;
					}
					.select-picker-box {
						color: $color-black-2;
					}
				}
				input {
					flex: 1;
					overflow: hidden;
					display: block;
					width: 100%;
					height: 100%;
					font-size: 32upx;
					color: $color-black-2;
				}
				.item-init-oth-txt-1 {
					display: block;
					flex: 1;
					height: 100%;
					padding: 0 10upx;
					font-size: 32upx;
					color: $color-grey;
					line-height: 62upx;
				}
				.item-init-oth-txt-2 {
					display: block;
					height: 100%;
					width: 200upx;
					font-size: 32upx;
					color: $color-grey;
					line-height: 62upx;
					text-align: center;
				}
			}
		}
	}
	.to-add-oth-init {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 30upx 0 60upx 0;
		.to-add-oth-icon {
			width: 40upx;
			height: 40upx;
			border-radius: 50%;
			margin-right: 20upx;
		}
		.to-add-oth-text {
			font-size: 28upx;
			color: $color-black-1;
		}
	}
	.to-complete-btn {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: auto;
		padding: 0 60upx 30upx;
		background-color: $color-def;
		button {
			background-color: $color-red;
			width: 100%;
			height: 88upx;
			text-align: center;
			line-height: 88upx;
			border-radius: 4upx;
			font-size: 28upx;
			color: $color-def;
		}
	}
</style>
