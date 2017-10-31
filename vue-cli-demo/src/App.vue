<template>
  <div id="app" class="container-fluid">
    <div class="row" v-bind:style="styleObject1">
      <div class="col-md-12" >
     <top-content></top-content>
      </div>
    </div>
    <div class="row" v-bind:style="styleObject2">
      <div class="col-md-12">
        <router-view/>
      </div>
    </div>
    <div class="row" v-bind:style="styleObject3">
      <div class="col-md-12">
     <bottom-content></bottom-content>
      </div>
    </div>
  </div>
</template>
<script>
import BottomContent from './components/BottomContent/BottomContent.vue';
import TopContent from './components/TopContent/TopContent.vue';

export default{
  name: 'app',
  mounted(){
    this.init();
  },
  components:{
  "bottom-content":BottomContent,
  "top-content":TopContent
  },
  data(){
    return{
      styleObject1:{
        height:'100px',
      backgroundColor:'#e2e2e2'
      },
      styleObject2:{
        height:'0px'
      },
      styleObject3:{
        height:"100px",
        backgroundColor:'#e2e2e2'
      }
    }
  },
  methods:{
    init(){
      this.styleObject2.height=document.body.clientHeight- parseInt(this.styleObject1.height)-parseInt(this.styleObject3.height)+"px";
    },
    
  }
}
</script>
