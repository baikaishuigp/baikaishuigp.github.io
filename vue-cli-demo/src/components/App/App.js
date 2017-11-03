import TopContent from '../TopContent/TopContent.vue';
import AppMain from './App.html';

export default{
  name: 'app',
  template:AppMain,
  mounted(){
  
   
  },
  components:{
 
  "top-content":TopContent
  },
  data(){
    return{
      styleObject1:{
        height:'40px',
      backgroundColor:'#353535',
      margin:0,
      padding:0


      },
      styleObject2:{
        height:'500px',
           margin:0,
      padding:0
      }
     
    }
  },
  methods:{
    windowResize(){
  
      this.styleObject2.height=document.body.clientHeight- parseInt(this.styleObject1.height)+"px";
    },
    
  }

}