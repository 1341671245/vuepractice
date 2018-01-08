import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Navi from './components/Navi/Navi.vue'
import router from './router/index'


//开启debug模式
Vue.config.debug = true;

//定义组件
/*import dashboard from './views/dashboard.vue'
import create from './views/create.vue'

//创建一个路由实例，并配置路由规则
const router = new VueRouter({
  mode: 'history',
  base:__dirname,
  routes: [
    {
      path: '/dashboard',
      component: dashboard
    },
    {
      path: '/create',
      component: create
    }
  ]
})
Vue.use(VueRouter);
Vue.use(VueResource);*/
Vue.use(ElementUI);

//启动
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
/*const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')*/

new Vue({
  el: '#app',
  router,
  render: h=> h(Navi)
})
