import Vuex from '@wepy/x';

export default new Vuex.Store({
	state: {
		isShowHomeChart: true,
		loginCode: ''
	},
	mutations: {
		changeHomeChartVisible(state, payload) {
			state.isShowHomeChart = !!payload
		},
		changeLoginCode(state, payload) {
			state.loginCode = payload;
		}
	},
	actions: {

	}
});
