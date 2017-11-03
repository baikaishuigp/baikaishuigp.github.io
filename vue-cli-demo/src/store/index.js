import Vue from 'vue'
import Vuex from 'vuex'

 Vue.use(Vuex)

 const debug=process.env.NODE_ENV !=='production'

 export default new Vuex.Store({
 	state:{
 		showUser:false,
 		user:null
 	},
 	mutations:{
 		SHOW_TOPBUTTON(state,b){
 			console.log(b)
 			state.showUser=b
 		}
 	},


 
 
 	strict:debug,

     
 	
 })