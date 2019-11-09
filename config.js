// const host = "https://hk.api.bcwcar.com"
const host = "https://hk.api.jants.cn"
// const host = "http://192.168.199.150"

const config = {
	host,
	no: 'HK_APPLY_001',
	defaultName: '姓氏文化之旅',
	defaultUrl: '/static/def_share.jpg',
	login: `${host}/app/login`, //登录
	uploadImg: `${host}/dear/avatar/upload`, //上传头像
	getPhone: `${host}/app/phone`,
	clanList: `${host}/dear/page`, //宗亲列表
	createDear: `${host}/dear/create`, //创建宗亲
	getOrderDetail: `${host}/activity/order/details`, //订单详情
	cfOrderDetail: `${host}/activity/crowd/order`, //众筹详情
	applyOrder: `${host}/activity/apply/submit`, //提交订单
	joinActDetail: `${host}/activity/details`, //参与发起活动详情
	applyActDetail: `${host}/activity/apply/details`, //报名活动详情
	cfActDetail: `${host}/activity/crowd/details`, //众筹详情
	cfActApply: `${host}/activity/crowd/create`, //众筹提交订单
	cfSupportPay: `${host}/activity/support/submit`, //众筹支持支付
	orderList: `${host}/activity/order/list`, //订单列表
	getStartInfo: `${host}/dear/rite/info`, //发起信息
	toClickStart: `${host}/dear/rite/start`, //开启仪式
	toCheckIdCard: `${host}/activity/surcharge`, //查询身份证
	toGetStartInfo: `${host}/dear/find`, //获取发起人信息
	updateStartInfo: `${host}/dear/update`, //修改发起人信息
	getJobs: `${host}/dear/jobs`, //获取职称
	getImgs: `${host}/picture/list`, //获取图片数组
	getPosterCode: `${host}/app/code`, //获取海报图片
}

module.exports = config