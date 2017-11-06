import Vue from 'vue'
import Vuex from 'vuex'

 Vue.use(Vuex)

 const debug=process.env.NODE_ENV !=='production'

 export default new Vuex.Store({
 	state:{
 		showUser:false,
 		
 	},
 	mutations:{
 		SHOW_TOPBUTTON(state,showObj){
 			
 			state.showUser=showObj.isShow
 		}
 	},


 
 
 	strict:debug,

     
 	
 })