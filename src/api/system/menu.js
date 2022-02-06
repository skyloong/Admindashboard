import request from '@/utils/request'

export function getNavs() {
    return request({
        url: '/Menus/GetMenusForUser',
        method: 'get',
    })
}

export function getMenus() {
    return request({
        url: '/Menus/Index',
        method: 'get',
    })
}