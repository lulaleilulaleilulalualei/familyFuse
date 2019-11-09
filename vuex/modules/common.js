import *as types from '../types';

 const state = {
	actInfo: null,
	isToOrderList: false, //
	portInfo: null
 }

 const getters = {
	_actInfo: state => state.actInfo,
	_isToOrderList: state => state.isToOrderList,
	_portInfo: state => state.portInfo
 }

 const mutations  = {
 	[types.ACTIVITY_INFO](state, obj) {
 		state.actInfo = obj
 	},
	[types.TO_JUMP_ORDER_LIST](state, status) {
		state.isToOrderList = status
	},
	[types.TO_JUMP_SPOT_INFO](state, obj) {
		state.portInfo = obj
	}
 }

 const actions = {
 	toGetActInfo({commit}, obj) {
 		commit(types.ACTIVITY_INFO, obj)
 	},
	toJumpOrderList({commit}, status) {
 		commit(types.TO_JUMP_ORDER_LIST, status)
 	},
	toSaveSpotInfo({commit}, obj) {
		commit(types.TO_JUMP_SPOT_INFO, obj)
	}
 }

 export default {
	state,
    actions,
    getters,
    mutations
}