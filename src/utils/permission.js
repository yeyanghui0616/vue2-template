import router from '@/router'
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' // 进度条样式
import getPageTitle from '@/utils/getPageTitle' 

NProgress.configure({ showSpinner: false }) // 进度条配置

const whiteList = ['/login'] // 白名单列表

router.beforeEach((to, from, next) => {
    // 进度条开始
    NProgress.start()

    // 设置页面标题
    document.title = getPageTitle(to.meta.title)

    const hasToken = true

    if (hasToken) {
        if (to.path === '/login') {
            // 如果要去登陆页面，就放行
            next({ path: '/' })
            // 进度条结束
            NProgress.done()
        } else {
            next()
        }
    } else {
            if (whiteList.indexOf(to.path) !== -1) {
                // 如果在白名单里,就放行
            next()
            } else {
                // 如果不在白名单里,就重定向到登录页面
                next(`/login`)
                NProgress.done()
            }
    }
})

router.afterEach(() => {
  // 进度条结束
  NProgress.done()
})
