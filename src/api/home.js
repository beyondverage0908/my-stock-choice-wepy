import { get, post, del } from './http';

// 获取默认个股票信息
export const getStockDefault = () => {
	return get(`https://m.00315.com/wxapp/api/v2/stocks/default`);
}

// 获取个股票信息
export const getStockInfo = (stockCode = '') => {
    return get(`https://m.00315.com/wxapp/api/v2/stocks/${stockCode}`);
}

// 搜索股票
export const getSearchStockInfo = (searchText = '') => {
    return get(`https://m.00315.com/wxapp/api/v2/stocks?q=${searchText}`);
}

// 个股评级明细
export const getRatings = (stockCode) => {
    return get(`https://m.00315.com/wxapp/api/v2/stocks/${stockCode}/ratings`)
}

// 个股ROE评级明细
export const getRoeratings = (stockCode) => {
    return get(`https://m.00315.com/wxapp/api/v2/stocks/${stockCode}/roeratings`)
}

// 个股利润评级明细
export const getProfitRatings = (stockCode) => {
    return get(`https://m.00315.com/wxapp/api/v2/stocks/${stockCode}/profitratings`)
}

// 添加个股
export const addToStocks = ({ zqdm, zqjc }) => {
	const data = {
		zqdm,
		zqjc
	}
	return post(`https://m.00315.com/wxapp/api/v2/user/stocks`, data)
}

// 移除个股
export const removeFromStocks = (stockCode) => {
	return del(`https://m.00315.com/wxapp/api/v2/user/stocks/${stockCode}`)
}

// 获取用户自选个股列表
export const getUserStocks = () => {
	return get(`https://m.00315.com/wxapp/api/v2/user/stocks`);
}


