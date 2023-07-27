import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入tailwindcss
import "./assets/tailwindcss.css"

// 引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引入权限控制文件
import '@/utils/permission'

Vue.use(ElementUI);

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret,faArrowUpFromBracket, faRotateRight } from '@fortawesome/free-solid-svg-icons'
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faUserSecret,faSquarePlus,faArrowUpFromBracket,faRotateRight)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
