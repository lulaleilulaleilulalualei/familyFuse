<template>
	<view class="insuranceIntro" :style="[{minHeight: pageMinH}]">
		<cu-custom bgColor="white" :isBack="true"><block slot="content">保险说明</block></cu-custom>
		<!-- 第一页 -->
		<view class="content-box">
		<view class="item-content-box">
			<view class="ins-intro-title-1">中国平安财产保险股份有限公司</view>
			<view class="ins-intro-title-2">平安个人意外伤害保险（B 款）条款</view>
			<view class="ins-intro-title-3">备案号：（平安财险）（备-普通意外保险）【2018】（主)）011 号</view>
			<view class="item-content-title">总则</view>
			<view class="item-content-txt">
				<text class="small-title">第一条</text> 
				本保险合同由保险条款、投保单、保险单、保险凭证以及批单等组成。凡涉及本保险合同的约定，均应采用书面形式。
			</view>
			<view class="item-content-txt">
				<text class="small-title">第二条</text>
				本保险合同的被保险人应为六十五周岁以下、身体健康、能正常工作或正常生活的自然人。
			</view>
			<view class="item-content-txt">
				<text class="small-title">第三条</text>
				本保险合同的投保人应为具有完全民事行为能力的被保险人本人、对被保险人有保险利益的其他人。
			</view>
			<view class="item-content-txt">
				<text class="small-title">第四条</text>
				本保险合同的受益人包括：
			</view>
			<view class="item-content-txt">
				（一）身故保险金受益人
			</view>
			<view class="item-content-txt">
				订立本保险合同时，被保险人或投保人可指定一人或数人为身故保险金受益人。身故保险金受益人为数人时，应确定其受益顺序和受益份额；未确定受益份额的，各身故保险金受益人按照相等份额享有受益权。投保人指定受益人时须经被保险人同意。
			</view>
			<view class="item-content-txt">
				被保险人死亡后，有下列情形之一的，保险金作为被保险人的遗产，由保险人依照《中华人民共和国继承法》的规定履行给付保险金的义务：
			</view>
			<view class="item-content-txt">
				1．没有指定受益人，或者受益人指定不明无法确定的；
			</view>
			<view class="item-content-txt">
				2．受益人先于被保险人死亡，没有其他受益人的；
			</view>
			<view class="item-content-txt">
				3．受益人依法丧失受益权或者放弃受益权，没有其他受益人的。
			</view>
			<view class="item-content-txt">
				受益人与被保险人在同一事件中死亡，且不能确定死亡先后顺序的，推定受益人死亡在先。
			</view>
			<view class="item-content-txt">
				被保险人或投保人可以变更身故保险金受益人，但需书面通知保险人，由保险人在本保险合同上批注。<text class="to-sign-text">对因身故保险金受益人变更发生的法律纠纷，保险人不承担任何责任。</text>
			</view>
			<view class="item-content-txt">
				投保人指定或变更身故保险金受益人的，应经被保险人书面同意。被保险人为无民事行为能力人或限制民事行为能力人的，应由其监护人指定或变更身故保险金受益人。
			</view>
			<view class="item-content-txt">
				（二）伤残、医疗、误工津贴、住院护理津贴保险金受益人
			</view>
			<view class="item-content-txt">
				除另有约定外，本保险合同的伤残、医疗、误工津贴、住院护理津贴保险金的受益人为被保险人本人。
			</view>
			<view class="item-content-title">保险责任</view>
			<view class="item-content-txt">
				<text class="small-title">第五条</text> 
				在保险期间内，被保险人因遭受意外伤害事故导致身故、伤残、医疗费用支出或住院治疗的，保险人依照下列约定给付保险金。
			</view>
		</view>
		<!-- 第二页 -->
		<view class="item-content-box">
			<view class="item-content-txt">
				<text class="to-sign-text">（一）身故保险责任</text> 
			</view>
			<view class="item-content-txt">
				在保险期间内，被保险人遭受意外伤害事故，并自事故发生之日起 180 日内因该事故身故的，保险人按意外伤害保险金额给付身故保险金，<text class="to-sign-text">对该被保险人的保险责任终止</text>。
			</view>
			<view class="item-content-txt">
				被保险人因遭受意外伤害事故且自该事故发生日起下落不明，后经人民法院宣告死亡的，保险人按意外伤害保险金额给付身故保险金。<text class="to-sign-text">但若被保险人被宣告死亡后生还的，保险金受领人应于知道或应当知道被保险人生还后 30 日内退还保险人给付的身故保险金。</text>
			</view>
			<view class="item-content-txt">
				<text class="to-sign-text">被保险人身故前保险人已给付第（二）款约定的伤残保险金的，身故保险金应扣除已给付的保险金。</text>
			</view>
			<view class="item-content-txt">
				<text class="to-sign-text">（二）伤残保险责任</text>
			</view>
			<view class="item-content-txt">
				在保险期间内，被保险人遭受意外伤害事故，并自该事故发生之日起 180 日内因该事故造成《人身保险伤残评定标准及代码》（标准编号为 JR/T0083—2013，下简称《伤残评定标准》）所列伤残之一的，<text class="to-sign-text">保险人按该表所列给付比例乘以意外伤害保险金额给付伤残保险金</text>。如第 180 日治疗仍未结束的，按当日的身体情况进行伤残鉴定，并据此给付伤残保险金。
			</view>
			<view class="item-content-txt">
				1．当同一保险事故造成两处或两处以上伤残时，应首先对各处伤残程度分别进行评定，如果几处伤残等级不同，以最重的伤残等级作为最终的评定结论；如果两处或两处以上伤残等级相同，伤残等级在原评定基础上最多晋升一级，最高晋升至第一级。同一部位和性质的伤残，不应采用《伤残评定标准》条文两条以上或者同一条文两次以上进行评定。
			</view>
			<view class="item-content-txt">
				<text class="to-sign-text">2．被保险人如在本次意外伤害事故之前已有伤残，保险人按合并后的伤残程度在《伤残评定标准》中所对应的给付比例给付伤残保险金，但应扣除原有伤残程度在《伤残评定标准》所对应的伤残保险金。</text>
			</view>
			<view class="item-content-txt">
				<text class="to-sign-text">在保险期间内，前述第（一）、（二）款下的保险金累计给付金额以保险单载明的意外伤害保险金额为限。</text>
			</view>
			<view class="item-content-txt">
				<text class="to-sign-text">（三）医疗保险责任</text>
			</view>
			<view class="item-content-txt">
				在保险期间内，被保险人遭受意外伤害事故，并在符合本条款第二十七条释义的医院（以下简称“释义医院”）进行治疗，<text class="to-sign-text">保险人就被保险人自事故发生之日起 180 日内实 际支出的按照当地社会医疗保险主管部门规定可报销的、必要的、合理的医疗费用超过人民币 100 元的部分给付医疗保险金</text>。
			</view>
			<view class="item-content-txt">
				被保险人无论一次或多次遭受意外伤害事故，保险人均按上述规定分别给付医疗保险金，<text class="to-sign-text">但累计给付金额以被保险人的意外伤害医疗保险金额为限，累计给付金额达到意外伤害医疗保险金额时，对被保险人保险责任终止</text>。
			</view>
			<view class="item-content-txt">
				<text class="to-sign-text">被保险人如果已从其他途径获得补偿，则保险人只承担合理医疗费用剩余部分的保险责任。</text>
			</view>
			<view class="item-content-txt">
				<text class="to-sign-text">（四）误工津贴保险金</text>
			</view>
			<view class="item-content-txt">
				在保险期间内，被保险人遭受意外伤害事故，并自事故发生之日起 180 日内因该事故在释义医院住院治疗，保险人就被保险人的合理住院天数，按照保险单载明的误工津贴日额给付“误工津贴保险金”。
			</view>
			<view class="item-content-txt">
				<text class="to-sign-text">被保险人因意外伤害事故一次住院治疗的，保险人给付误工津贴保险金天数以60 天为限</text>；被保险人因同一原因间歇性住院，前次出院与后次入院日期间隔未超过 90 天（含 90 天）的，视为一次住院治疗。
			</view>
		</view>
		<!-- 第三页 -->
		<view class="item-content-box">
			<view class="item-content-txt">
				<text class="to-sign-text">被保险人无论一次或多次遭受意外伤害事故进行住院治疗，保险人均按上述规定分别给付误工津贴保险金，但对被保险人累计给付天数以 90 天为限。</text>
			</view>
			<view class="item-content-txt">
				<text class="to-sign-text">（五）住院护理津贴保险金</text>
			</view>
			<view class="item-content-txt">
				在保险期间内，被保险人遭受意外伤害事故，并自事故发生之日起 180 日内因该事故在释义医院住院治疗，经医师诊断被保险人必须实施特级或一级护理的，保险人就被保险人接受护理的合理天数，按照保险单载明的住院护理津贴日额给付“住院护理津贴保险金”。
			</view>
			<view class="item-content-txt">
				<text class="to-sign-text">被保险人因意外伤害事故一次住院治疗的，保险人给付住院护理津贴保险金天数以 60 天为限</text>；被保险人因同一原因间歇性住院，前次出院与后次入院日期间隔未超过90 天（含 90 天）的，视为一次住院治疗。
			</view>
			<view class="item-content-txt">
				<text class="to-sign-text">被保险人无论一次或多次遭受意外伤害事故进行住院治疗，保险人均按上述规 定分别给付住院护理津贴保险金，但对被保险人累计给付天数以 90 天为限。</text>
			</view>
			<view class="item-content-title">责任免除</view>
			<view class="item-content-txt">
				<text class="to-sign-text">第六条 因下列原因造成被保险人身故、伤残、医疗费用支出或住院治疗的，保险人不承担给付保险金责任：</text>
			</view>
			<view class="item-content-txt">
				<text class="to-sign-text">（一）投保人的故意行为；</text>
			</view>
			<view class="item-content-txt">
				<text class="to-sign-text">（二）被保险人自致伤害或自杀，但被保险人自杀时为无民事行为能力人的除外；</text>
			</view>
			<view class="item-content-txt">
				<text class="to-sign-text">（三）因被保险人挑衅或故意行为而导致的打斗、被袭击或被谋杀；</text>
			</view>
			<view class="item-content-txt">
				<text class="to-sign-text">（四）被保险人妊娠、流产、分娩、疾病、药物过敏、中暑、猝死；</text>
			</view>
			<view class="item-content-txt">
				<text class="to-sign-text">（五）被保险人接受整容手术及其他内、外科手术；</text>
			</view>
			<view class="item-content-txt">
				<text class="to-sign-text">（六）被保险人未遵医嘱，私自服用、涂用、注射药物；</text>
			</view>
			<view class="item-content-txt">
				<text class="to-sign-text">（七）核爆炸、核辐射或核污染；</text>
			</view>
			<view class="item-content-txt">
				<text class="to-sign-text">（八）恐怖袭击；</text>
			</view>
			<view class="item-content-txt">
				<text class="to-sign-text">（九）被保险人犯罪或拒捕；</text>
			</view>
			<view class="item-content-txt">
				<text class="to-sign-text">（十）被保险人从事高风险运动或参加职业或半职业体育运动。</text>
			</view>
			<view class="item-content-txt">
				<text class="to-sign-text">第七条 被保险人在下列期间遭受伤害导致身故、伤残、医疗费用支出或住院治疗的，保险人也不承担给付保险金责任：</text>
			</view>
			<view class="item-content-txt">
				<text class="to-sign-text">（一）战争、军事行动、暴动或武装叛乱期间；</text>
			</view>
			<view class="item-content-txt">
				<text class="to-sign-text">（二）被保险人醉酒或受毒品、管制药物的影响期间；</text>
			</view>
			<view class="item-content-txt">
				<text class="to-sign-text">（三）被保险人酒后驾车、无有效驾驶证驾驶或驾驶无有效行驶证的机动车期间。</text>
			</view>
			<view class="item-content-txt">
				<text class="to-sign-text">第八条 下列费用，保险人不承担给付保险金责任：</text>
			</view>
			<view class="item-content-txt">
				<text class="to-sign-text">（一）保险单签发地社会医疗保险或其他公费医疗管理部门规定的自费项目和药品费用；</text>
			</view>
		</view>
		<!-- 第四页 -->
		<view class="item-content-box">
			<view class="item-content-txt">
				<text class="to-sign-text">（二）因椎间盘膨出和突出造成被保险人支出的医疗费用；</text>
			</view>
			<view class="item-content-txt">
				<text class="to-sign-text">（三）营养费、康复费、辅助器具费、整容费、美容费、修复手术费、牙齿整形费、牙齿修复费、镶牙费、护理费、交通费、伙食费、误工费、丧葬费。</text>
			</view>
			<view class="item-content-title">保险金额和保险费</view>
			<view class="item-content-txt">
				<text class="small-title">第九条</text> 
				保险金额是保险人承担给付保险金责任的最高限额。
			</view>
			<view class="item-content-txt">
				本保险合同的保险金额分为意外伤害保险金额、意外伤害医疗保险金额、误工津贴保险金额、住院护理津贴保险金额，由投保人、保险人双方约定，并在保险单中载明。
			</view>
			<view class="item-content-txt">
				投保人应该按照合同约定向保险人交纳保险费。
			</view>
			<view class="item-content-title">保险期间</view>
			<view class="item-content-txt">
				<text class="small-title">第十条</text> 
				本保险合同保险期间由保险人和投保人协商确定，以保险单载明的起讫时间为准。
			</view>
			<view class="item-content-title">保险人义务</view>
			<view class="item-content-txt">
				<text class="small-title">第十一条</text> 
				本保险合同成立后，保险人应当及时向投保人签发保险单或其他保险凭证。
			</view>
			<view class="item-content-txt">
				<text class="small-title">第十二条</text> 
				保险人按照第二十一条的约定，认为被保险人提供的有关索赔的证明和资料不完整的，应当及时一次性通知投保人、被保险人补充提供。
			</view>
			<view class="item-content-txt">
				<text class="small-title">第十三条</text> 
				保险人收到被保险人的给付保险金的请求后，应当及时作出是否属于保险责任的核定；情形复杂的，保险人将在确定是否属于保险责任的基本材料收集齐全后，尽快做出核定。
			</view>
			<view class="item-content-txt">
				保险人应当将核定结果通知被保险人；对属于保险责任的，在与被保险人达成给付保险金的协议后十日内，履行赔偿保险金义务。保险合同对给付保险金的期限有约定的，保险人应当按照约定履行给付保险金的义务。保险人依照前款约定作出核定后，对不属于保险责任的，应当自作出核定之日起三日内向被保险人发出拒绝给付保险金通知书，并说明理由。
			</view>
			<view class="item-content-txt">
				<text class="small-title">第十四条</text> 
				保险人自收到给付保险金的请求和有关证明、资料之日起六十日内，对其给付的数额不能确定的，应当根据已有证明和资料可以确定的数额先予支付；保险人最终确定给付的数额后，应当支付相应的差额。
			</view>
			<view class="item-content-txt">
				<text class="small-title">第十五条</text> 
				投保人符合保险法规定的退还保险费相关要求的，保险人应当按照保险法相关规定退还未满期净保费。
			</view>
			<view class="item-content-title">投保人、被保险人义务</view>
			<view class="item-content-txt">
				<text class="small-title">第十六条</text> 
				除另有约定外，投保人应当在保险合同成立时交清保险费。
			</view>
			<view class="item-content-txt">
				<text class="small-title">第十七条</text> 
				订立保险合同，保险人就被保险人的有关情况提出询问的，投保人应当如实告知。
			</view>
		</view>
		<!-- 第五页 -->
		<view class="item-content-box">
			<view class="item-content-txt">
				<text class="to-sign-text">投保人故意或者因重大过失未履行前款规定的义务，足以影响保险人决定是否同意承保或者提高保险费率的，保险人有权解除本保险合同。</text>
			</view>
			<view class="item-content-txt">
				前款规定的合同解除权，自保险人知道有解除事由之日起，超过三十日不行使而消灭。自合同成立之日起超过二年的，保险人不得解除合同；发生保险事故的，保险人应当承担给付保险金责任。
			</view>
			<view class="item-content-txt">
				<text class="to-sign-text">投保人故意不履行如实告知义务的，保险人对于合同解除前发生的保险事故，不承担给付保险金责任，并不退还保险费。</text>
			</view>
			<view class="item-content-txt">
				<text class="to-sign-text">投保人因重大过失未履行如实告知义务，对保险事故的发生有严重影响的，保险人对于合同解除前发生的保险事故，不承担给付保险金责任，但应当退还保险费。</text>
			</view>
			<view class="item-content-txt">
				投保人因重大过失未履行如实告知义务，对保险事故的发生有严重影响的，保险人对于合同解除前发生的保险事故，不承担给付保险金责任，但应当退还保险费。
			</view>
			<view class="item-content-txt">
				<text class="small-title">第十八条</text>
				被保险人变更职业或工种时，投保人或被保险人应在 10 日内以书面形式通知保险人。
			</view>
			<view class="item-content-txt">
				<text class="to-sign-text">被保险人所变更的职业或工种依照保险人职业分类在拒保范围内的，保险人在接到通知后有权解除本保险合同，并按照接到通知的日期计算并退还原职业或工种所对应的未满期净保费。被保险人未按本条约定通知保险人，若发生保险事故，保险人不承担给付保险金的责任。</text>
			</view>
			<view class="item-content-txt">
				<text class="to-sign-text">
					被保险人所变更的职业或工种依照保险人职业分类危险程度增加但仍可承保或在拒保范围内但保险人认定可以继续承保的，保险人自接到通知之日起，按其差额增收保险费。被保险人未按本条约定通知保险人，若发生保险事故，保险人按其原交保险费与新职业或工种所对应的保险费的比例计算并给付保险金。
				</text>
			</view>
			<view class="item-content-txt">
				被保险人所变更的职业或工种依照保险人职业分类危险程度降低的，保险人自接到通知之日起，按其差额退还未满期净保费。
			</view>
			<view class="item-content-txt">
				<text class="small-title">第十九条</text>
				投保人住所或通讯地址变更时，应及时以书面形式通知保险人。投保人未通知的，保险人按本保险合同所载的最后住所或通讯地址发送的有关通知，均视为已发送给投保人。
			</view>
			<view class="item-content-txt">
				<text class="small-title">第二十条</text>
				投保人、被保险人或者保险金受益人知道保险事故发生后，应当在 48 小时内及时通知保险人。<text class="to-sign-text">故意或者因重大过失未及时通知，致使保险事故的性质、原因 、 损失程度等难以确定的，保险人对无法确定的部分，不承担给付保险金责任</text> ，但保险人通过其他途径已经及时知道或者应当及时知道保险事故发生的除外。
			</view>
			<view class="item-content-txt">
				上述约定，不包括因不可抗力而导致的迟延。
			</view>
			<view class="item-content-title">保险金申请与给付</view>
			<view class="item-content-txt">
				<text class="small-title">第二十一条</text>
				保险金申请人向保险人申请给付保险金时，应提交以下材料。<text class="to-sign-text">保险金申请人因特殊原因不能提供以下材料的，应提供其他合法有效的材料。保险金申请人未能提供有关材料，导致保险人无法核实该申请的真实性的，保险人对无法核实部分不承担给付保险金的责任</text>。
			</view>
			<view class="item-content-txt">（一）身故保险金申请</view>
		</view>
		<!-- 第六页 -->
		<view class="item-content-box">
			<view class="item-content-txt">
				1．保险金给付申请书；
			</view>
			<view class="item-content-txt">
				2．保险单原件；
			</view>
			<view class="item-content-txt">
				3．保险金申请人的身份证明；
			</view>
			<view class="item-content-txt">
				4．公安部门或医疗机构出具的被保险人死亡证明书；若被保险人为宣告死亡，保险金申请人应提供人民法院出具的宣告死亡证明文件；若为境外出险，需提供事故发生地使领馆出具的的包含死亡原因的书面证明材料；
			</view>
			<view class="item-content-txt">
				5．被保险人的户籍注销证明；
			</view>
			<view class="item-content-txt">
				6．保险金申请人所能提供的与确认保险事故的性质、原因、损失程度等有关的其他证明和资料；
			</view>
			<view class="item-content-txt">
				7．若保险金申请人委托他人申请的，还应提供授权委托书原件、委托人和受托人的身份证明等相关证明文件。
			</view>
			<view class="item-content-txt">
				除提交上述材料外，保险金申请人申请身故保险金时，为确定事故原因，保险人有权要求由司法鉴定机构对事故原因进行鉴定，如进行尸体检验等。
			</view>
			<view class="item-content-txt">
				（二）伤残保险金申请
			</view>
			<view class="item-content-txt">
				1．保险金给付申请书；
			</view>
			<view class="item-content-txt">
				2．保险单原件；
			</view>
			<view class="item-content-txt">
				3．被保险人身份证明；
			</view>
			<view class="item-content-txt">
				4．二级以上（含二级）或保险人认可的医疗机构或司法鉴定机构出具的伤残鉴定诊断书；
			</view>
			<view class="item-content-txt">
				5．保险金申请人所能提供的与确认保险事故的性质、原因、损失程度等有关的其他证明和资料；
			</view>
			<view class="item-content-txt">
				6．若保险金申请人委托他人申请的，还应提供授权委托书原件、委托人和受托人的身份证明等相关证明文件。
			</view>
			<view class="item-content-txt">
				（三）医疗保险金申请
			</view>
			<view class="item-content-txt">1. 保险金给付申请书；</view>
			<view class="item-content-txt">2. 保险单原件；</view>
			<view class="item-content-txt">3. 被保险人身份证明；</view>
			<view class="item-content-txt">4. 释义医院出具的医疗证明和医疗费用原始凭证；</view>
			<view class="item-content-txt">5. 保险金申请人所能提供的与确认保险事故的性质、原因、伤害程度等有关的其他证明和资料；</view>
			<view class="item-content-txt">6. 若保险金申请人委托他人申请的，还应提供授权委托书原件、委托人和受托人的身份证明等相关证明文件。</view>
			<view class="item-content-txt">（四）误工津贴保险金及住院护理津贴保险金申请</view>
			<view class="item-content-txt">1. 保险金给付申请书；</view>
			<view class="item-content-txt">2. 保险单原件；</view>
		</view>
		<!-- 第七页 -->
		<view class="item-content-box">
			<view class="item-content-txt">
				3. 被保险人身份证明；
			</view>
			<view class="item-content-txt">
				4. 释义医院出具的病历和住院证明；
			</view>
			<view class="item-content-txt">
				5. 保险金申请人所能提供的与确认保险事故的性质、原因、伤害程度等有关的其他证明和资料；
			</view>
			<view class="item-content-txt">
				6. 若保险金申请人委托他人申请的，还应提供授权委托书原件、委托人和受托人的身份证明等相关证明文件。
			</view>
			<view class="item-content-txt">
				<text class="small-title">第二十二条</text>
				保险金申请人向保险人请求给付保险金的诉讼时效期间为二年，自其知道或者应当知道保险事故发生之日起计算。
			</view>
			<view class="item-content-title">争议处理和法律适用</view>
			<view class="item-content-txt">
				<text class="small-title">第二十三条</text>
				因履行本保险合同发生的争议，由当事人协商解决。协商不成的，提交保险单载明的仲裁机构仲裁；保险单未载明仲裁机构或者争议发生后未达成仲裁协议的，依法向人民法院起诉。
			</view>
			<view class="item-content-txt">
				<text class="small-title">第二十四条</text>
				与本保险合同有关的以及履行本保险合同产生的一切争议处理适用中华人民共和国法律（不包括港澳台地区法律）。
			</view>
			<view class="item-content-title">其他事项</view>
			<view class="item-content-txt">
				<text class="small-title">第二十五条</text>
				投保人和保险人可以协商变更合同内容。
			</view>
			<view class="item-content-txt">
				变更保险合同的，应当由保险人在保险单或者其他保险凭证上批注或附贴批单，或者投保人和保险人订立变更的书面协议。
			</view>
			<view class="item-content-txt">
				<text class="small-title">第二十六条</text>
				在本保险合同成立后，投保人可以书面形式通知保险人解除合同，但保险人已根据本保险合同约定给付保险金的除外。
			</view>
			<view class="item-content-txt">
				投保人解除本保险合同时，应提供下列证明文件和资料：
			</view>
			<view class="item-content-txt">
				（一）保险合同解除申请书；
			</view>
			<view class="item-content-txt">
				（二）保险单原件；
			</view>
			<view class="item-content-txt">
				（三）保险费交付凭证；
			</view>
			<view class="item-content-txt">
				（四）投保人身份证明。
			</view>
			<view class="item-content-txt">
				投保人要求解除本保险合同，自保险人接到保险合同解除申请书之时起，本保险合同
				的效力终止。保险人收到上述证明文件和资料之日起 30 日内退还保险单的未满期净保费。
			</view>
			<view class="item-content-title">释义</view>
			<view class="item-content-txt">
				<text class="small-title">第二十七条</text>
			</view>
			<view class="item-content-txt">
				【周岁】以法定身份证明文件中记载的出生日期为基础计算的实足年龄。
			</view>
			<view class="item-content-txt">
				【保险人】指与投保人签订本保险合同的中国平安财产保险股份有限公司。
			</view>
		</view>
		<!-- 第八页 -->
		<view class="item-content-box">
			<view class="item-content-txt">
				【意外伤害】指以外来的、突发的、非本意的和非疾病的客观事件为直接且单独的原因致使身体受到的伤害。
			</view>
			<view class="item-content-txt">
				【医院】指保险人与投保人约定的定点医院，未约定定点医院的，则指经中华人民共和国卫生部门评审确定的二级或二级以上的公立医院，但不包括主要作为诊所、康复、护理、休养、静养、戒酒、戒毒等或类似的医疗机构。该医院必须具有符合国家有关医院管理规则设置标准的医疗设备，且全天二十四小时有合格医师及护士驻院提供医疗及护理服务。
			</view>
			<view class="item-content-txt">
				【人身保险伤残评定标准及代码】 《人身保险伤残评定标准及代码》（JR/T 0083—2013）是由中国保险监督管理委员会发布（保监发[2014]6 号）并经国家标准化委员会备案的中华人民共和国金融行业标准。
			</view>
			<view class="item-content-txt">
				【住院】指被保险人入住医院之正式病房进行治疗，并正式办理入出院手续，不包括家庭病床或其它非正式病房、挂床住院或入住门诊观察室。
			</view>
			<view class="item-content-txt">
				【醉酒】指血液中的酒精含量大于或者等于 80mg/100mL。
			</view>
			<view class="item-content-txt">
				【酒后驾车】指车辆驾驶人员在其血液中的酒精含量大于或者等于 20mg/100mL 时的驾驶行为。
			</view>
			<view class="item-content-txt">
				【无有效驾驶证】被保险人存在下列情形之一者：
			</view>
			<view class="item-content-txt">
				（1）无驾驶证，驾驶证被依法扣留、暂扣、吊销、注销；
			</view>
			<view class="item-content-txt">
				（2）驾驶的机动车与驾驶证载明的准驾车型不符；
			</view>
			<view class="item-content-txt">
				（3）实习期内驾驶公共汽车、营运客车或者执行任务的警车、载有危险物品的机动车或牵引挂车的机动车；
			</view>
			<view class="item-content-txt">
				（4）使用各种专用机械车、特种车的人员无国家有关部门核发的有效操作证、许可证书或其他必备证书，驾驶出租机动车或营业性机动车无交通运输管理部门核发的许可证书或其他必备证书。
			</view>
			<view class="item-content-txt">
				【无有效行驶证】指下列情形之一：
			</view>
			<view class="item-content-txt">
				（1）机动车行驶证、号牌被注销的；
			</view>
			<view class="item-content-txt">
				（2）未按规定检验或检验不合格。
			</view>
			<view class="item-content-txt">
				【辅助器具费】指购买、安装或修理假肢、矫形器、假眼、假牙和配置轮椅等辅助器具的费用。
			</view>
			<view class="item-content-txt">
				【未满期净保费】未满期净保费＝保险费×[1－（保险单已经过天数/保险期间天数）] ×（1－35%）。经过天数不足一天的按一天计算。
			</view>
			<view class="item-content-txt">【不可抗力】指不能预见、不能避免并不能克服的客观情况。</view>
			<view class="item-content-txt">【保险金申请人】指受益人或被保险人的继承人或依法享有保险金请求权的其他自然人。</view>
			<view class="item-content-txt">
				【高风险运动】指比一般常规性的运动风险等级更高、更容易发生人身伤害的运动， 在进行此类运动前需有充分的心理准备和行动上的准备，必须具备一般人不具备的相关知 识和技能或者必须在接受专业人士提供的培训或训练之后方能掌握。被保险人进行此类运动时须具备相关防护措施或设施，以避免发生损失或减轻损失，包括但不限于潜水，滑水滑雪，滑冰，驾驶或乘坐滑翔翼、滑翔伞，跳伞，攀岩运动，探险活动，武术比赛，摔跤比赛，柔道，空手道，跆拳道，马术，拳击，特技表演，驾驶卡丁车，赛马，赛车，各种 车辆表演，蹦极。
			</view>
		</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		computed: {
			pageMinH() {
				let sys = uni.getSystemInfoSync()
				return sys.windowHeight + 'px'
			}
		}
	}
</script>

<style scoped lang="scss">
	.small-title {
		font-weight: 800;
		margin-right: 20upx;
	}
	.to-sign-text {
		font-weight: 800;
	}
	.insuranceIntro {
		width: 100%;
		background-color: #F6F9FA;
		.content-box {
			padding: 30upx;
		}
		.item-content-box {
			width: 100%;
			height: auto;
			padding: 80upx 30upx 60upx;
			background-color: #fff;
			&:not(:last-child) {
				margin-bottom: 40upx;
			}
			.ins-intro-title-1 {
				font-size: 36upx;
				color: #000;
				font-weight: 800;
				text-align: center;
				margin-bottom: 20upx;
			}
			.ins-intro-title-2 {
				font-size: 36upx;
				color: #000;
				font-weight: 800;
				text-align: center;
				margin-bottom: 20upx;
			}
			.ins-intro-title-3 {
				font-size: 28upx;
				color: #000;
				font-weight: 800;
				text-align: center;
			}
			.item-content-title {
				font-size: 32upx;
				color: #000;
				font-weight: 800;
				text-align: center;
				margin-top: 60upx;
				margin-bottom: 20upx;
			}
			.item-content-txt {
				font-size: 28upx;
				color: #000;
				line-height: 40upx;
				margin-bottom: 20upx;
				letter-spacing: 2upx;
				text-indent: 56upx;
			}
		}
	}
</style>
