import store from '@/store';

const baseUrl = 'https://m.00315.com/wxapp/api/v3';

function appendSessionIdToUrl(url) {
	let parseUrl = ''
	if (url && url.indexOf('?')) {
		const urlSplitList = url.split('?');
		urlSplitList.splice(1, 0, `;jsessionid=${store.state.sessionId || ''}`, '?');
		parseUrl = urlSplitList.join('')
	} else {
		parseUrl = url + ';jsessionid=' + (store.state.sessionId || '')
	}
	return baseUrl + parseUrl;
}

export const get = (url, query = {}) => {
	query._ts = new Date().getTime()
    return new Promise((resolve, reject) => {
        wx.request({
            method: 'GET',
            url: appendSessionIdToUrl(url),
			data: query || {},
            success: (res) => {
                resolve(res)
            },
            fail: (err) => {
                reject(err);
            }
        })
    });
};

export const post = (url, params) => { 
    return new Promise((resolve, reject) => {
        wx.request({
            method: 'POST',
			url: appendSessionIdToUrl(url),
			data: params || {},
            success: (res) => {
                resolve(res)
            },
            fail: (err) => {
                reject(err);
            }
        })
    });
};

export const del = (url, params) => {
    return new Promise((resolve, reject) => {
        wx.request({
            method: 'DELETE',
			url: appendSessionIdToUrl(url),
			data: params || {},
            success: (res) => {
                resolve(res)
            },
            fail: (err) => {
                reject(err);
            }
        })
    });
};

export const put = (url, params) => {
    return new Promise((resolve, reject) => {
        wx.request({
            method: 'PUT',
			url: appendSessionIdToUrl(url),
			data: params || {},
            success: (res) => {
                resolve(res)
            },
            fail: (err) => {
                reject(err);
            }
        })
    });
}