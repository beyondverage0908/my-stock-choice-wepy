export const get = (url, query) => {
    return new Promise((resolve, reject) => {
        wx.request({
            method: 'GET',
            url: url,
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
            url: url,
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
            url: url,
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
            url: url,
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