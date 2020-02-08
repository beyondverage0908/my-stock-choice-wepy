import store from '@/store'

// const baseUrl = 'https://m.00315.com/wxapp/api/v3'
const baseUrl = 'https://m.00315.com/wxapp/api'

function appendSessionIdToUrl(url) {
    let parseUrl = ''
    if (store.state.sessionId) {
        if (url && url.indexOf('?')) {
            const urlSplitList = url.split('?');
            urlSplitList.splice(1, 0, `;jsessionid=${store.state.sessionId || ''}`, '?');
            parseUrl = urlSplitList.join('')
        } else {
            parseUrl = url + ';jsessionid=' + (store.state.sessionId || '')
        }
    } else {
        parseUrl = url
    }
    parseUrl = appendCommonParamsToUrl(parseUrl)
	return baseUrl + parseUrl;
}
function appendCommonParamsToUrl(url) {
    let _url = null
    if (url && url.indexOf('?') > -1) {
        _url = url + '&originalId=gh_ef3ee46288ed'
    } else {
        _url = url + '?originalId=gh_ef3ee46288ed'
    }
    return _url
}

export const get = (url, query = {}) => {
    query._ts = new Date().getTime()
    return new Promise((resolve, reject) => {
        const request = {
        	method: 'GET',
            url: appendSessionIdToUrl(url),
            data: query || {},
        	success: (res) => {
        		resolve(res)
        	},
        	fail: (err) => {
        		reject(err);
        	}
        }
        wx.request(request)
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