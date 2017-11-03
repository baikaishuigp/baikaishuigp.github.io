import Vue from 'vue'
import Router from 'vue-router'

import Login from '../components/LoginContent.vue'
import MainContent from '../components/MainContent'

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
    	path:'/main',
    	name:'main',
    	component:MainContent
    },{
    	path:'*',
    	redirect:'/'
    }
  ],
  beforeEach(to,from,next){
       if (this.$store.state.user!=null) {
       	
       }
  },
})
