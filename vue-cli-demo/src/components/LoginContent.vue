    <template>
      <div class="context">
        <div class="loginForm">
            <form class="form-horizontal" >
                <div class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon">
                            <i class="icon icon-user"></i>
                        </span>
                        <input type="text" class="form-control" v-model="user" placeholder="用户名">
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon">
                            <i class="icon icon-lock"></i>
                        </span>
                        <input type="password" class="form-control" v-model="pwd" placeholder="密码">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-xs-2"></div>
                    <div class="col-xs-10">
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" id="isRemember" class="checkboxCss" v-on:click="toggleCheckBok">
                                记住密码
                            </label>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="btnLogin">
                        <button class="btn btn-primary btn-block" v-on:click="login" v-bind:display="!isEnable">
                            <i class="icon icon-signin" v-show="!isLoggingIn"></i>
                            <i class="icon icon-spin icon-spinner-indicator" v-show="isLoggingIn"></i>
                        登录</button>
                    </div>
                </div>
                <div class="form-group">
                    <div class="formError" v-show="errorShow">
                        <div class="alert alert-danger-inverse text-center" v-text="errorInfo"></div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import  cooks from "../assets/cooks.js"
export default{
 name:"Login",
 data(){
  return{
    user:"",
    pwd:"",
    isLoggingIn:false,
    errorShow:false,
    errorInfo:"",
    isEnable:true,
    toggleCheck:false

}
},
computed:{
  



},
mounted:function(){
    this.$store.commit({
     type:'SHOW_TOPBUTTON',
     isShow:false
 })
       
    var userInfo=cooks.getCookie("userInfo")
    if(userInfo!=null){
        this.user=userInfo.user
        this.pwd=userInfo.pwd
        this.toggleCheck=true
    }

},
methods:{

  login(e){
    e.preventDefault()
    var me=this;
    if( me.user==""){
       me.errorShow=true
       me.errorInfo="用户名不能为空"
       return
   }
   if(me.pwd==""){
     me.errorShow=true
     me.errorInfo="密码不能为空"
     return
 }
 if(me.user=='admin'&&me.pwd=='123456'){
    if(me.toggleCheck){
      
   
       cooks.setCookie("userInfo","...",1000000)

   }
   me.$router.push('/main')
 
   return
} 

me.errorShow=true
me.errorInfo="用户名或密码不正确"


},
toggleCheckBok(){
    this.toggleCheck=!this.toggleCheck
},


}

}
</script>
<style type="text/css">





.context {
    background-image: url(bg_login.png);
    width: 702px;
    height: 710px;
    margin: auto;
}

.loginForm {
    background-image: url(form_bg.png);
    background-position-y: -320px;
    background-repeat: no-repeat;
    height: 547px;
    width: 297px;
    margin: auto;
    position: relative;
}

.loginForm form {
    position: absolute;
    top: 300px;
    margin: auto auto;
}

.loginForm form .input-group {
    width: 230px;
    left: 40px;
}

.checkboxCss {
    border: 2px solid transparent;
    -moz-box-shadow: inset 0 1px, inset 1px 0, inset -1px 0, inset 0 -1px;
    -webkit-box-shadow: inset 0 1px, inset 1px 0, inset -1px 0, inset 0 -1px;
    box-shadow: inset 0 1px, inset 1px 0, inset -1px 0, inset 0 -1px;
    background-color: #fff;
    -moz-background-clip: content-box;
    -webkit-background-clip: content-box;
    background-clip: content-box;
    color: #d0d0d5;
}

.btnLogin {
    width: 220px;
    margin-left: 45px;
}

.formError > div {
    width: 220px;
    height: 30px;
    padding: 0px;
    margin-left: 45px;
    line-height: 30px;
}





</style>