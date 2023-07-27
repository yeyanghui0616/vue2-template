import request from '@/utils/request';

/**
 * @Description: 登录
 * @Author: yeyanghui
 */
export function login(data) {
	return request({
		url: '/api/login',
		method: 'post',
		data: JSON.stringify(data),
	});
}