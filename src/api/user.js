import request from '@/utils/request'

export function login(data) {
    return request({
        url: '/home/login',
        method: 'get',
        params: data
    })
}

export function getUserInfo() {
    return request({
        url: '',
        method: 'get'
    })
}