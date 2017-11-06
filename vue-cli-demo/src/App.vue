
<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col-md-12" >
        <nav class="navbar navbar-default" >
           <div class="container-fluid" >
              <div class="navbar-header">
               
                  <router-link :to="{ path: '/' }"> <img src="./assets/logo.png"></router-link>
                 
               
              </div>
              <div class="collapse navbar-collapse" >
                 <ul class="nav navbar-nav navbar-right" v-show="showUser">

                    <li class="btn btn-default navbar-btn" >数据管理</li>
                    <li class="btn btn-default navbar-btn">三维展示</li>
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
    aa:true
    }
  },
  computed:{
    showUser:function(){
    
      return this.$store.state.showUser
    }


  },
  methods:{
    init(){
    // this.styleObject2.height=document.body.clientHeight- parseInt(this.styleObject1.height)-parseInt(this.styleObject3.height)+"px";
    },
   
  }
}
</script>
<style>

/*登录页样式*/
html {
    height: 100%;
}

body {
    height: 100%;
    background-color: #202022;
}
.navbar {
    border: 0;
    margin-bottom: 0;
}

    .navbar .container-fluid {
        height: 50px;
        line-height: 50px;
        background-color: #333333;
    }

        .navbar .container-fluid a {
            padding: 0px;
            margin: 0;
            height: 50px;
            line-height: 50px;
        }

</style>
