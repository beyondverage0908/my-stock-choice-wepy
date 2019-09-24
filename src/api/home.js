import { get } from './http';

// 获取个股票信息
export const getStockInfo = (stockCode = '') => {
    return get(`https://m.00315.com/wxapp/api/stocks/${stockCode}`);
}

// 搜索股票
export const getSearchStockInfo = (searchText = '') => {
    return get(`https://m.00315.com/wxapp/api/stocks?q=${searchText}`);
}

// 个股评级明细
export const getRatings = (stockCode) => {
    return get(`https://m.00315.com/wxapp/api/stocks/${stockCode}/ratings`)
}

// 个股ROE评级明细
export const getRoeratings = (stockCode) => {
    return get(`https://m.00315.com/wxapp/api/stocks/${stockCode}/roeratings`)
}

// 个股利润评级明细
export const getProfitRatings = (stockCode) => {
    return get(`https://m.00315.com/wxapp/api/stocks/${stockCode}/profitratings`)
}

