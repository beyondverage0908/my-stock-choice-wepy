import Vuex from '@wepy/x';

export default new Vuex.Store({
	state: {
		isShowHomeChart: true,
		loginCode: '',
		sysPv: '',
		sessionId: '',
		stockAdded: {
			zqdm: '',
			hasAdded: false
		}
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
		},
		changeSessionId(state, payload) {
			state.sessionId = payload;
		},
		changeStockAdded(state, payload) {
			if (payload.isNew || state.stockAdded.zqdm === payload.zqdm) {
				state.stockAdded = payload;
			}
		}
	},
	actions: {

	}
});
