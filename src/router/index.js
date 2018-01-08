/**
 * Created by han on 2018/1/3.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Page1 from '../components/firstcomponent.vue'
import Page2 from '../components/secondcomponent.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes:[{
    name: 'page1',path: '/Page1', component: Page1
  },{
    name: 'page2',path: '/Page2', component: Page2
  }]
})

export default router;
