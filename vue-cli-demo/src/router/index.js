import Vue from 'vue'
import Router from 'vue-router'

import Login from '../components/LoginContent.vue'
import MainContent from '../components/MainContent'
import ThreeView from '../components/leftView/ThreeView'
import MainView1 from '../components/MainView/MainView1'
import DataView from '../components/leftView/DataView'
import MainView2 from '../components/MainView/MainView2'

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
    	component:MainContent,
      children:[
      {
        path:'ThreeView',
        name:'ThreeView',
        components:{
          leftView:ThreeView,
          mainView:MainView1
        },
        children:[
          {
            path:'aaa',
            name:'aaa',
            components:{
              leftView:DataView,
          mainView:MainView2
            }
          }



        ]





      },
      {
        path:'DataManager',
        name:'DataManager',
        components:{
          leftView:DataView,
          mainView:MainView2
        }
      }

      ]
    },
    {
    	path:'*',
    	redirect:'/'
    }
  ],
  beforeEach(to,from,next){
       if (this.$store.state.user!=null) {
       	
       }
  },
})
