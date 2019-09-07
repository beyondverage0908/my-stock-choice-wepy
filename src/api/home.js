import { get } from './http';

// 获取个股票信息
export const getStockInfo = (stockCode = '') => {
    return get(`https://m.00315.com/wxapp/api/stocks/${stockCode}`);
}

// 搜索股票
export const getSearchStockInfo = (searchText = '') => {
    return get(`https://m.00315.com/wxapp/api/stocks?q=${searchText}`);
}
