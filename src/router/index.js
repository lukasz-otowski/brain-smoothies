import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import addSmoothie from '@/components/addSmoothie'
import editSmoothie from '@/components/editSmoothie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
        path:'/add-smoothie',
        name:'addSmoothie',
        component:addSmoothie
    },{
        path:'/edit-smoothie/:smoothie_slug',
        name:'editSmoothie',
        component:editSmoothie
    }
  ]
})
