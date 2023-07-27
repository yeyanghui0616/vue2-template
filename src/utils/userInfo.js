const USER_INFO = 'userInfo'

// 存储用户信息
function setUserInfo(data){
    sessionStorage.setItem(USER_INFO,JSON.stringify(data))
}

// 拿到用户信息
function getUserInfo(){
    return JSON.parse(sessionStorage.getItem(USER_INFO))?.data
}

// 拿到用户token
function getUserToken(){
    return JSON.parse(sessionStorage.getItem(USER_INFO))?.data.token
}

// 判断是否登陆 true 已登录  false 未登录
function isLogin(){
    return !!sessionStorage.getItem(USER_INFO)
}

export {
    setUserInfo,
    getUserInfo,
    isLogin,
    getUserToken,
}