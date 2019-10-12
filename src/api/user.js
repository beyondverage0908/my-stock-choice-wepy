import { get, post } from './http';

// 获取用户自选个股列表
export const getUserStocks = () => {
	return get(`https://m.00315.com/wxapp/api/user/stocks`);
}