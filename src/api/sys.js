import { get, post } from './http';

// 获取个股票信息
export const sysVisit = (stockCode) => {
	return post(`https://m.00315.com/wxapp/api/sys/visit/${stockCode}`);
}