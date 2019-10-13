import { get, post } from './http';

// 获取个股票信息
export const sysVisit = (stockCode) => {
	return post(`https://m.00315.com/wxapp/api/v2/sys/visit/${stockCode}`);
}

// 登录
export const login = (code) => {
	return post(`https://m.00315.com/wxapp/api/v2/sys/login?code=${code}`);
}