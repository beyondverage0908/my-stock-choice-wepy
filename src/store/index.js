import Vuex from '@wepy/x';

export default new Vuex.Store({
	state: {
		isShowHomeChart: true,
		loginCode: '',
		sysPv: ''
	},
	mutations: {
		changeHomeChartVisible(state, payload) {
			state.isShowHomeChart = !!payload
		},
		changeLoginCode(state, payload) {
			state.loginCode = payload;
		},
		changeSysPv(state, payload) {
			state.sysPv = payload || 0;
		}
	},
	actions: {

	}
});
