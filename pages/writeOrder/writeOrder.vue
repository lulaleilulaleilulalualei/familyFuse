<template>
	<view class="writeOrder" :style="[{minHeight: pageMinH}]">
		<cu-custom bgColor="white" :isBack="true" ><block slot="content">填写订单</block></cu-custom>
		<view class="order-content">
			<form @submit="formSubmit">
			<view class="show-route-info">
				<view class="show-route-info-box">
					<view class="route-info-img"><image :src="actInfo.banner" mode="aspectFill"></image></view>
					<view class="route-info-title">{{actInfo.title}}</view>
				</view>
				<view class="show-route-time">
					<text>{{actInfo.start_date}}</text>
					<text>{{actInfo.week}}</text>
					<text>{{actInfo.day_num}}天{{actInfo.night_num}}晚</text>
				</view>
			</view>
			<view class="show-tvl-box">
				<view class="item-tvl-box" v-for="(item, idx) in tvlArr" :key="idx">
					<view class="item-tvl-title">
						<text>出行人 <text v-if="tvlArr.length > 1">{{idx+1}}</text></text>
						<text @tap="toDeleteTvl(idx)" v-if="idx > 0" class="cuIcon-delete lg"></text>
					</view>
					<view class="item-tvl-info">
						<view class="item-tvl-info-box">
							<view class="item-tvl-small-title">姓名</view>
							<view class="item-tvl-input"><input type="text" :name="item.name+'#'+idx"  placeholder="用于取得联系" placeholder-style="color: #909399;" /></view>
						</view>
					</view>
					<view class="item-tvl-info">
						<view class="item-tvl-info-box">
							<view class="item-tvl-small-title">身份证</view>
							<view class="item-tvl-input">
								<input type="idcard" :name="item.id_card+'#'+idx" 
									@focus="idCardFocus(idx)" 
									@blur="idCardGetVal"
									@confirm="idCardGetVal"
									placeholder="用于确认人员信息" placeholder-style="color: #909399;" />
							</view>
						</view>
						<view v-if="item.ageType == 0" class="item-tvl-idCard-notice">
							该身份证年龄在22周岁以下，需加收<text style="font-weight: 600;">￥{{item.addFee}}</text>亲少年附加服务费，具体请查看页面底部 费用说明>年龄附加费
						</view>
						<!-- <view v-if="item.ageType == 1" class="item-tvl-idCard-notice">
							该身份证年龄在22-25周岁，需加收<text style="font-weight: 600;">￥{{item.addFee}}</text>青年服务费，具体请查看页面底部 费用说明>年龄附加费
						</view> -->
						<view v-if="item.ageType == 3" class="item-tvl-idCard-notice">
							该身份证年龄超过70周岁，请线下联系平台报名，具体请查看页面底部 费用说明>年龄附加费
						</view>
					</view>
					<view class="item-tvl-info">
						<view class="item-tvl-info-box">
							<view class="item-tvl-small-title">手机号</view>
							<view class="item-tvl-input"><input type="number" :name="item.tel+'#'+idx" :value="userTel" placeholder="接收行程信息" placeholder-style="color: #909399;" /></view>
							<button class="getTelUser" v-if="idx == 0" open-type="getPhoneNumber" @getphonenumber="getUserTel">点击获取</button>
						</view>
					</view>
					<!-- <view class="item-tvl-info" v-if="idx == 0">
						<view class="item-tvl-small-title">验证码</view>
						<view class="item-tvl-input"><input type="text" :name="item.code+'#'+idx" /></view>
						<view :class="['to-send-color', {'send-active-code': isSendCode}]" @tap="toSendTelCode"><text>{{codeTxt}}</text></view>
					</view> -->
				</view>
				<view class="to-add-tvl" @tap="toAddTvl">
					<text class="cuIcon-add lg"></text>
					<view class="add-tvl-txt">添加出行人</view>
				</view>
			</view>
			<view class="to-select-switch" v-if="tvlArr.length > 1">
				<view class="select-switch-title"><text>是否需要同一间房</text></view>
				<switch class="red sm" :checked="equ_room" @change="bindRoomStatus" />
			</view>
			<view class="to-actor-switch">
				<view class="to-select-switch-box">
					<view class="select-switch-title" @tap="toShowActorIntro" style="flex: 1;overflow: hidden;">
						<text>是否是医生</text>
						<view class="isDoctorIntro"><image src="/static/notice_icon.png" mode=""></image></view>
					</view>
					<switch class="red sm" :checked="is_doctor" @change="bindDoctorStatus" />
				</view>
				<view v-if="isShowActorInfo" class="to-show-actor-intro" @tap="toCloseActorIntro">
					随团出行，为游客提供相关医疗救治服务，为本次活动各项提供医疗保障，26岁以上-50岁以上全科医生，
					有多年门诊治疗经验，熟悉相关的医学操作流程。较强的亲和力、服务意识和沟通能力、
					良好的医德医风及团队合作精神，身体健康、无疾病。兼职兼可。
					本次活动提供500元的兼职补贴，活动结束后凭有效医生证件联系组织方领取费用；
				</view>
			</view>
			<view class="show-insurance-info">
				<view class="show-insurance-title">
					<view class="show-insurance-icon"><image src="/static/insurance_icon.png" mode=""></image></view>
					<view class="show-insurance-title-txt">已赠送基础保险，保障出行安全</view>
				</view>
				<view class="show-insurance-intro" @tap="toJumpInsurance">
					<view class="show-insurance-info-box">
						<view class="show-insurance-name">
							<text>平安个人意外伤害保险</text>
							<view class="to-look-insurance"><image src="/static/notice_icon.png" mode=""></image></view>
						</view>
						<view class="show-insurance-function">紧急救援、医疗救助</view>
					</view>
					<view class="show-insurance-data"><text>¥ 50</text>/人 x {{tvlArr.length}}份</view>
				</view>
			</view>
			<view class="safe-company" @tap="toJumpQltUnit">
				<view class="safe-company-title">资质单位</view>
			</view>
			<view class="safe-company" @tap="toJumpMaterial">
				<view class="safe-company-title">活动物料</view>
			</view>
			<view class="safe-company" @tap="toLookOverAccidentPlan">
				<view class="safe-company-title">意外事故应急预案</view>
			</view>
			<view class="to-select-switch">
				<view class="select-switch-title" @tap="toLookOverContract" style="flex: 1;overflow: hidden;"><text>团队出境合同书</text></view>
				<checkbox class="round red" :checked="isAgreeContract" @click="toSelectAgreeContract"></checkbox>
			</view>
			<view class="to-select-content-switch">
				<view class="to-select-switch-box">
					<view class="select-switch-title" @tap="toLookAttention" style="flex: 1;overflow: hidden;display: flex;align-items: center;">
						<text>特别注意事项</text>
						<view class="show-attention-icon"><image src="/static/notice_icon.png" mode=""></image></view>
					</view>
					<checkbox class="round red" :checked="isAgreeAttention" @click="toSelectAgreeAttention"></checkbox>
				</view>
				<text v-if="isShowAttention" style="display: block;" class="to-show-actor-intro" @tap="toLookAttention">
					{{actContent.note_text}}
				</text>
			</view>
			<view class="show-fee-intro">
				<view class="show-fee-title">费用说明</view>
				<view class="item-fee-intro">
					<view class="item-fee-small-title">商品总额</view>
					<view class="item-fee-num">¥ {{actInfo.pay_fee}} x {{tvlArr.length}}</view>
				</view>
				<view class="item-fee-intro">
					<view class="item-fee-small-title">港澳小费</view>
					<view class="item-fee-num">+ ¥ {{actInfo.service_fee}} x {{tvlArr.length}}</view>
				</view>
				<view class="item-fee-intro">
					<view class="item-fee-small-title">保险（赠送）</view>
					<view class="item-fee-num">+ ¥ 0/人 x {{tvlArr.length}}</view>
				</view>
				<view class="item-fee-intro" style="display: block;">
					<view class="item-fee-small-title" style="align-self: flex-start;margin-right: 60rpx">年龄附加费</view>
					<view class="item-fee-small-title" style="font-size: 24rpx;line-height: 36rpx;margin-top: 40upx;">
						<view style="margin-bottom: 12rpx">本次活动指定年龄为22-70周岁</view>
						<view style="margin-bottom: 12rpx">亲少年附加服务费：本次活动未达指定年龄，且22周岁以下加收<text style="font-weight: 600;"> ￥850 </text>亲少年附加服务费</view>
						<!-- <view style="margin-bottom: 12rpx">青年附加服务费：本次活动未达指定年龄，且年龄在22-25周岁加收<text style="font-weight: 600;"> ￥350 </text>青年附加服务费</view> -->
						<view style="margin-bottom: 12rpx">70周岁以上，需在家人陪同下，并且提供健康证明，线下联系平台报名支付</view>
						<view>本次活动附加费解释权归官方所有！</view>
					</view>
				</view>
				<view class="item-fee-intro" v-if="countAgeYouthFee.fee != 0">
					<view class="item-fee-small-title">亲少年附加服务费</view>
					<view class="item-fee-num">+ ¥ {{countAgeYouthFee.fee}} x {{countAgeYouthFee.count}}</view>
				</view>
				<!-- <view class="item-fee-intro" v-if="countAgeYoungFee.fee != 0">
					<view class="item-fee-small-title">青年服务费</view>
					<view class="item-fee-num">+ ¥ {{countAgeYoungFee.fee}} x {{countAgeYoungFee.count}}</view>
				</view> -->
				<view class="rel-fee-price-num">
					<view class="rel-fee-price-txt">实付款：</view>
					<view class="rel-fee-price">¥ {{actInfo.relFee}}<text style="font-size: 28rpx;margin-left: 10rpx" v-if="subjoinFee != 0"> + {{subjoinFee}}</text></view>
				</view>
			</view>
			
			<view class="order-bottom">
				<view class="order-price">￥ {{actInfo.relFee}}<text style="font-size: 28rpx;margin-left: 10rpx" v-if="subjoinFee != 0"> + {{subjoinFee}}</text></view>
				<view class="order-opt-btn">
					<view class="order-consult-btn" @tap="toCallActPhone">
						<view class="order-consult-icon"><image src="/static/consult_icon.png" mode="aspectFill"></image></view>
						<view class="order-consult-txt">咨询</view>
					</view>
					<button class="order-to-apply" form-type="submit">提交订单</button>
				</view>
			</view>
			
			</form>
			<!-- 底部顶高 -->
			<view class="cu-tabbar-height"></view>
		</view>
	</view>
</template>

<script>
	import { mapGetters , mapActions } from 'vuex';
	
	export default {
		data() {
			return {
				isSendCode: false, //是否发送验证码
				codeTxt: '发送验证码',
				tvlArr: [{
					name: 'name',
					id_card: 'id_card',
					tel: 'tel',
					ageType: 2, //默认为2正常报名年龄
					addFee: 0
				}],
				userTel: '', //报名手机号
				fromType: null, //订单类型
				dear_id: null, //宗亲id
				actInfo: null, //活动信息
				actContent: null, //活动内容
				isShowActorInfo: false,
				equ_room: false, //是否是同一间房
				is_doctor: false, //是否是医生
				isAgreeContract: true, //是否同意合同
				isAgreeAttention: true, //特别注意事项
				isShowAttention: false, //是否显示事项
				
				optIdCardIdx: '', //是否检测完成，默认为检测完成
				isOverAge: false, //是否超龄
				countAgeYouthFee: {fee: 0, count: 0}, //22周岁以下服务费
				// countAgeYoungFee: {fee: 0, count: 0}, //青年服务费 
				subjoinFee: 0, //附件费
			}
		},
		computed: {
			...mapGetters([
				'_actInfo',
				'_isToOrderList'
			]),
			pageMinH() {
				let sys = uni.getSystemInfoSync()
				return sys.windowHeight + 'px'
			}
		},
		onLoad(opt) {
			this.fromType = opt.type
			this.dear_id = opt.dear_id
			if(this._actInfo) {
				this.actInfo = this._actInfo
				this.actContent = JSON.parse(this._actInfo.content)
				this.actInfo.relFee = this.$api.pointProblem(this.actInfo.pay_fee, this.actInfo.service_fee, 'add')
				this.toGetActInfo(null)
			}
		},
		onShow() {
			if(this._isToOrderList) {
				uni.reLaunch({
				    url: '/pages/index/index'
				});
			}
		},
		methods: {
			...mapActions([
				'toGetActInfo',
				'toJumpOrderList'
			]),
			idCardFocus(idx) {
				this.optIdCardIdx = idx
			},
			idCardGetVal(e) {
				let val = this.$api.trim(e.detail.value)
				if(val != '') {
					this.$api.ajax({
						url: this.$config.toCheckIdCard,
						data: {
							id_card: val
						}
					})
					.then((res) => {
						if(res.statusCode == 200) {
							if(res.data.code == 0) { //type = 0 22周岁以下 type = 1 22-25周岁 type=2 26-70正常报名年龄
								let data = res.data.data
								this.tvlArr.map((v, i) => {
									if(i == this.optIdCardIdx) {
										v.addFee = data.attach_fee
										v.ageType = data.type
									}
								})
							}else if(res.data.code == 10034){ //超过70周岁
								this.tvlArr[this.optIdCardIdx].ageType = 3
							}else {
								this.$api.warnNotice(res.data.message)
							}
							
							this.othFeeCount()
							this.optIdCardIdx = ''
						}else {
							this.$api.warnNotice('身份证错误，请重新操作')
						}
					})
					.catch((err) => {
						this.$api.warnNotice('身份证错误，请重新操作')
					})
				}
			},
			othFeeCount() { //其他费用计算
				// 每次失去焦点且调用接口成功后重新计算
				this.subjoinFee = 0
				this.countAgeYouthFee = {fee: 0, count: 0}
				// this.countAgeYoungFee = {fee: 0, count: 0},
				this.isOverAge = false
				
				this.tvlArr.map((v, i) => {
					if(v.ageType == 0) {
						this.countAgeYouthFee = {
							fee: v.addFee,
							count: this.countAgeYouthFee.count + 1
						}
						this.subjoinFee = this.$api.pointProblem(this.countAgeYouthFee.fee, this.subjoinFee, 'add')
					}else if(v.ageType == 3) {
						this.isOverAge = true
					}
				})
			},
			toSelectAgreeContract(e) { //同意合同
				this.isAgreeContract = !this.isAgreeContract
			},
			toLookAttention() { //查看特别注意事项
				this.isShowAttention = !this.isShowAttention
			},
			toSelectAgreeAttention(e) { //是否同意特别注意事项
				this.isAgreeAttention = !this.isAgreeAttention
			},
			toLookOverContract() { //查看合同
				const $this = this
				uni.showModal({
					content: '由于打开的文件过大，请确保网速正常的情况下打开',
					cancelColor: '#909399',
					confirmColor: '#E80214',
					success: (res) => {
						if(res.confirm) {
							uni.showLoading({
							  title: '文档打开中...'
							})
							uni.downloadFile({
							  url: 'https://images.jants.cn/hk_apply/ht.pdf',
							  success: function (res) {
							    const filePath = res.tempFilePath
							    uni.openDocument({
							      filePath: filePath,
								  fileType: "pdf",
							      success: function (res) {
									uni.hideLoading();
									console.log('打开文档成功')
							      },
								  fail: () => {
									  // console.log(err)
									  uni.hideLoading();
									 $this.$api.warnNotice('打开失败')
								  }
							    })
							  },
							  fail: (err) => {
								  // console.log(err)
							  	$this.$api.warnNotice('文档打开失败，加载超时')
							  }
							})
						}
					}
				})
				
			},
			toLookOverAccidentPlan() { //查看事故计划书
				const $this = this
				uni.showModal({
					content: '由于打开的文件过大，请确保网速正常的情况下打开',
					cancelColor: '#909399',
					confirmColor: '#E80214',
					success: (res) => {
						if(res.confirm) {
							uni.showLoading({
							  title: '文档打开中...'
							})
							uni.downloadFile({
							  url: 'https://images.jants.cn/hk_apply/lc.pptx',
							  success: function (res) {
							    const filePath = res.tempFilePath
							    uni.openDocument({
							      filePath: filePath,
								  fileType: "pptx",
							      success: function (res) {
									uni.hideLoading();
									console.log('打开文档成功')
							      },
								  fail: (err) => {
									  // console.log(err)
									  uni.hideLoading();
									 $this.$api.warnNotice('打开失败')
								  }
							    })
							  },
							  fail: (err) => {
								  // console.log(err)
								 $this.$api.warnNotice('文档打开失败，加载超时')
							  }
							})
						}
					}
				})
			},
			bindRoomStatus(e) {
				this.equ_room = e.detail.value
			},
			bindDoctorStatus(e) {
				this.is_doctor = e.detail.value
			},
			toCallActPhone() {
				uni.makePhoneCall({
					phoneNumber: '18692125808'
				})
			},
			toJumpMaterial() { //查看物料
				uni.navigateTo({
					url: '/pages/showMaterial/showMaterial'
				})
			},
			toJumpInsurance() { //查看保险
				uni.navigateTo({
					url: '/pages/insuranceIntro/insuranceIntro'
				})
			},
			toJumpQltUnit() { //查看资质单位
				uni.navigateTo({
					url: '/pages/qualificationUnit/qualificationUnit'
				})
			},
			toShowActorIntro() { //查看医生
				this.isShowActorInfo = !this.isShowActorInfo
			},
			toCloseActorIntro() { //关闭
				this.isShowActorInfo = !this.isShowActorInfo
			},
			getUserTel(e) {
				const $this = this
				this.$api.ajax({
					url: this.$config.getPhone,
					data: {
						session_key: this.$userInfo.session_key,
						encryptedData: e.detail.encryptedData,
						iv: e.detail.iv
					}
				})
				.then((res) => {
					if(res.statusCode == 200 && res.data.code == 0) {
						this.userTel = res.data.data.phoneNumber
					}else {
						this.api.warnNotice(res.data.message)	
					}
				})
				.catch(() => {
					this.api.warnNotice('操作失败')
				})
			},
			toAddTvl() {
				this.tvlArr.push({
					name: 'name',
					id_card: 'id_card',
					tel: 'tel',
					ageType: 2, //默认为2
					addFee: 0
				})
				let oneFee = this.$api.pointProblem(this.actInfo.pay_fee, this.actInfo.service_fee, 'add')
				this.actInfo.relFee = this.$api.pointProblem(oneFee, this.tvlArr.length, 'mul')
			},
			toDeleteTvl(idx) {
				this.tvlArr.splice(idx, 1)
				let oneFee = this.$api.pointProblem(this.actInfo.pay_fee, this.actInfo.service_fee, 'add')
				this.actInfo.relFee = this.$api.pointProblem(oneFee, this.tvlArr.length, 'mul')
				this.othFeeCount() //计算附加费用
			},
			formSubmit(e) {
				if(this.isOverAge) {
					this.$api.warnNotice('您有出行人超过70周岁，请线下联系平台报名')
					return false
				}else {
					let val = e.detail.value
					let keys = Object.keys(val), arr = []
					for(var i=0;i<keys.length;i++) {
						let idx = keys[i].split('#')[1], k= keys[i].split('#')[0]
						if(!arr[idx]) {
							arr[idx] = {}
							arr[idx][k] = val[keys[i]]
						}else {
							arr[idx][k] = val[keys[i]]
						}
					}
					
					let isOk = true
					arr.map((v, i) => {
						if(this.$api.trim(v.name) != '') {
							if(this.$api.inputTest(v.id_card, 'card')) {
								if(this.$api.inputTest(v.tel, 'tel')) {
									isOk = true
								}else {
									isOk = false
									return false
								}
							}else {
								isOk = false
								return false
							}
						}else {
							isOk = false
							this.$api.warnNotice('您还有姓名未填写')
							return false
						}
					})
					
					if(isOk) {
						if(this.isAgreeContract) {
							if(this.isAgreeAttention) {
								if(this.fromType == 1) {
									uni.showLoading({
									  title: '调用支付中...',
									  mask: true
									})
								}
								this.submitApi(arr)
							}else {
								this.$api.warnNotice('请查看并同意特别注意事项！')
							}
						}else {
							this.$api.warnNotice('请阅读并同意团队出境合同书！')
						}
					}
				}
			},
			submitApi(userList) {
				const $this = this
				this.$api.ajax({
					url: this.fromType == 1? this.$config.applyOrder: this.$config.cfActApply,
					method: "POST",
					data: {
						no: this.$config.no,
						dear_id: this.dear_id,
						is_doctor: this.is_doctor? 1: 0,
						equ_room: this.equ_room? 1: 0,
						attach_fee: this.subjoinFee, //附加费
						apply_list: userList
					}
				})
				.then((res) => {
					if(res.statusCode == 200 && res.data.code == 0) {
						if($this.fromType == 1) {
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
							        title: '支付成功',
							        icon: 'success',
							        success: () => {
							          setTimeout(() => {
										$this.toJumpOrderList(true)
							            uni.navigateTo({
							            	url: `/pages/orderDetail/orderDetail?id=${res.data.data.order_id}`
							            })
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
							uni.showToast({
							    title: '提交成功',
							    icon: 'success',
							    success: () => {
							      setTimeout(() => {
									$this.toJumpOrderList(true)
							        uni.navigateTo({
							        	url: `/pages/cfDetail/cfDetail?id=${res.data.data}`
							        })
							      }, 1500)
							    }
							})
						}
					}else {
						uni.hideLoading();
						this.$api.warnNotice(res.data.message)
					}
				})
				.catch(() => {
					uni.hideLoading();
					this.$api.warnNotice('提交失败')
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.writeOrder {
		width: 100%;
		background-color: #F6F9FA;
		.order-content {
			padding: 20upx 40upx;
			.show-route-info {
				padding: 30upx;
				border-radius: 20upx;
				background-color: $color-def;
				margin-bottom: 20upx;
				.show-route-info-box {
					display: flex;
					align-items: center;
					margin-bottom: 30upx;
					.route-info-img {
						width: 100upx;
						height: 100upx;
						background-color: $img-bg;
						border-radius: 8upx;
						margin-right: 20upx;
						overflow: hidden;
					}
					.route-info-title {
						flex: 1;
						overflow: hidden;
						font-size: 36upx;
						color: $color-black-1;
						font-weight: 800;
						@extend .ellipse2;
					}
				}
				.show-route-time {
					display: flex;
					font-size: 32upx;
					color: $color-black-2;
					text {
						line-height: 42upx;
						display: inline-block;
						&:not(:last-child) {
							margin-right: 40upx;
						}
					}
				}
			}
			.show-tvl-box {
				padding: 30upx 30upx 0;
				border-radius: 20upx;
				background-color: $color-def;
				margin-bottom: 20upx;
				.item-tvl-box {
					width: 100%;
					height: auto;
					&:not(:first-child) {
						margin-top: 30upx;
					}
					.item-tvl-title {
						font-size: 32upx;
						color: $color-black-1;
						margin-bottom: 20upx;
						font-weight: 600;
						display: flex;
						align-items: center;
						justify-content: space-between;
						.cuIcon-delete {
							font-size: 32upx;
							color: $color-red;
						}
					}
					.item-tvl-info {
						height: auto;
						width: 100%;
						border-bottom: 1px solid #E5E5E5;
						.item-tvl-info-box {
							display: flex;
							align-items: center;
							height: 100upx;
							width: 100%;
						}
						.item-tvl-idCard-notice {
							font-size: 24upx;
							color: $main-color;
							line-height: 36upx;
							padding-bottom: 10upx;
						}
						.item-tvl-small-title {
							width: 136upx;
							font-size: 28upx;
							color: $color-black-1;
						}
						.item-tvl-input {
							flex: 1;
							overflow: hidden;
							height: 70upx;
							input {
								display: block;
								width: 100%;
								height: 100%;
								font-size: 28upx;
								color: $color-black-1;
							}
						}
						.to-send-color {
							width: 150upx;
							height: 100%;
							display: flex;
							align-items: center;
							margin-left: 10upx;
							text {
								display: inline-block;
								width: 100%;
								text-align: right;
								border-left: 1px solid #E5E5E5;
								font-size: 24upx;
								color: #0486FE;
							}
						}
						.getTelUser {
							width: 160upx;
							height: 60upx;
							margin-left: 20upx;
							line-height: 60upx;
							font-size: 28upx;
							color: $color-black-1;
							background-color: $color-def;
							padding: 0;
						}
					}
				}
				.to-add-tvl {
					width: 100%;
					height: 100upx;
					display: flex;
					align-items: center;
					justify-content: center;
					.cuIcon-add {
						font-size: 48upx;
						color: #FF6665;
						margin-right: 20upx;
					}
					.add-tvl-txt {
						font-size: 28upx;
						color: $color-grey;
					}
				}
			}
			.to-select-content-switch {
				padding: 30upx;
				border-radius: 20upx;
				margin-bottom: 20upx;
				background-color: $color-def;
				.to-select-switch-box {
					display: flex;
					align-items: center;
					justify-content: space-between;
				}
				.select-switch-title {
					font-size: 32upx;
					color: $color-black-1;
					font-weight: 700;
					display: flex;
					align-items: center;
					.show-attention-icon {
						width: 30upx;
						height: 30upx;
						border-radius: 50%;
						margin-left: 20upx;
					}
				}
				.to-show-actor-intro {
					font-size: 24upx;
					color: $color-black-2;
					line-height: 36upx;
					margin-top: 20upx;
				}
			}
			.to-select-switch {
				padding: 30upx;
				border-radius: 20upx;
				overflow: hidden;
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 20upx;
				background-color: $color-def;
				.to-select-switch-box {
					display: flex;
					align-items: center;
					justify-content: space-between;
				}
				.select-switch-title {
					font-size: 32upx;
					color: $color-black-1;
					font-weight: 700;
					display: flex;
					align-items: center;
					.isDoctorIntro {
						width: 30upx;
						height: 30upx;
						border-radius: 50%;
						margin-left: 20upx;
					}
				}
			}
			.to-actor-switch {
				padding: 30upx;
				border-radius: 20upx;
				overflow: hidden;
				margin-bottom: 20upx;
				background-color: $color-def;
				.to-select-switch-box {
					display: flex;
					align-items: center;
					justify-content: space-between;
					.select-switch-title {
						font-size: 32upx;
						color: $color-black-1;
						font-weight: 700;
						display: flex;
						align-items: center;
						.isDoctorIntro {
							width: 30upx;
							height: 30upx;
							border-radius: 50%;
							margin-left: 20upx;
						}
					}
				}
				.to-show-actor-intro {
					font-size: 24upx;
					color: $color-black-2;
					line-height: 36upx;
					margin-top: 20upx;
				}
			}
			.show-insurance-info {
				margin-bottom: 20upx;
				border-radius: 20upx;
				overflow: hidden;
				.show-insurance-title {
					padding: 30upx;
					background-color: rgba(232, 2, 20, 0.6);
					width: 100%;
					display: flex;
					align-items: center;
					.show-insurance-icon {
						width: 40upx;
						height: 48upx;
						margin-right: 20upx;
					}
					.show-insurance-title-txt {
						font-size: 32upx;
						color: $color-def;
						font-weight: 700;
					}
				}
				.show-insurance-intro {
					padding: 30upx;
					background-color: $color-def;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.show-insurance-info-box {
						width: 400upx;
						.show-insurance-name {
							width: 100%;
							font-size: 28upx;
							color: $color-black-1;
							margin-bottom: 10upx;
							display: flex;
							align-items: center;
							@extend .ellipse2;
							.to-look-insurance {
								width: 30upx;
								height: 30upx;
								border-radius: 50%;
								margin-left: 20upx;
							}
						}
						.show-insurance-function {
							font-size: 24upx;
							color: $color-grey;
						}
					}
					.show-insurance-data {
						font-size: 28upx;
						color: $color-black-1;
						font-weight: 600;
						text {
							color: $color-red;
						}
					}
				}
			}
			.show-fee-intro {
				padding: 30upx;
				border-radius: 20upx;
				margin-bottom: 20upx;
				background-color: $color-def;
				.show-fee-title {
					font-size: 32upx;
					color: $color-black-1;
					font-weight: 700;
				}
				.item-fee-intro {
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 20upx 0;
					border-bottom: 1px solid #E5E5E5;
					.item-fee-small-title {
						// flex: 1;
						font-size: 28upx;
						color: $color-black-1;
					}
					.item-fee-num {
						font-size: 28upx;
						color: $color-black-1;
						font-weight: 600;
					}
				}
				.rel-fee-price-num {
					display: flex;
					align-items: center;
					justify-content: flex-end;
					padding-top: 20upx;
					.rel-fee-price-txt {
						font-size: 28upx;
						color: $color-grey;
					}
					.rel-fee-price {
						font-size: 40upx;
						color: #FF0014;
						font-weight: 800;
					}
				}
			}
			.safe-company {
				padding: 30upx;
				border-radius: 20upx;
				overflow: hidden;
				background-color: $color-def;
				margin-bottom: 20upx;
				.safe-company-title {
					font-size: 32upx;
					color: $color-black-1;
					font-weight: 700;
					display: flex;
					align-items: center;
					justify-content: space-between;
					&:after {
						content: '';
						display: block;
						width: 12upx;
						height: 12upx;
						border: 1px solid #E5E5E5;
						border-left-color: transparent;
						border-top-color: transparent;
						transform: rotate(-45deg);
						position: relative;
						left: -4upx;
					}
				}
			}
		}
		.order-bottom {
			position: fixed;
			bottom: 0;
			left: 0;
			z-index: 99;
			background-color: $color-def;
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;
			height: 100upx;
			padding: 6upx 40upx;
			border-top: 1px solid #efefef;
			.order-price {
				font-size: 40upx;
				color: $color-red;
				font-weight: 700;
			}
			.order-opt-btn {
				display: flex;
				align-items: center;
				position: relative;
				.order-consult-btn {
					display: flex;
					flex-direction: column;
					align-items: center;
					margin-right: 40upx;
					padding-left: 30upx;
					.order-consult-icon {
						width: 34upx;
						height: 44upx;
						margin-bottom: 4upx;
					}
					.order-consult-txt {
						font-size: 20upx;
						color: #4F4F4F;
					}
				}
				.order-to-apply {
					width: 192upx;
					height: 84upx;
					border-radius: 8upx;
					background-color: $main-color;
					text-align: center;
					line-height: 84upx;
					font-size: 28upx;
					color: $color-def;
				}
			}
		}
	}
</style>
