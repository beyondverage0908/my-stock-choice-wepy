import Vuex from '@wepy/x';

export default new Vuex.Store({
	state: {
		isShowHomeChart: true
	},
	mutations: {
		changeHomeChartVisible(state, payload) {
			state.isShowHomeChart = !!payload
		}
	},
	actions: {

	}
});
