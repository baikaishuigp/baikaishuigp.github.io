
<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col-md-12" >
        <nav class="navbar navbar-default com-header" >
           <div class="container-fluid" >
              <div class="navbar-header">
                <a href="#">
                  <img src="./assets/logo.png">
                </a>
              </div>
              <div class="collapse navbar-collapse" v-if="showUser">
                 <ul class="nav navbar-nav navbar-right">
                    <li > <a>Link</a></li>
                 </ul>
             </div>
          </div>
        </nav>
      </div>
    </div>
    <div class="row" >
      <div class="col-md-12">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'app',
  mounted(){
  
  },
  data(){
    return{
    
    }
  },
  computed:{
    showUser:function(){
      return this.$store.state.showUser
    }


  },
  methods:{
    init(){
      this.styleObject2.height=document.body.clientHeight- parseInt(this.styleObject1.height)-parseInt(this.styleObject3.height)+"px";
    },
   
  }
}
</script>
<style>
.com-header{
      height:45px;
      background-color:#333333;
      border-width:0px;
}
  body{
  background-image:url('./assets/bglogin.png');

  }
</style>
