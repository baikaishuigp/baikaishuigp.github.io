<template>
	<div class="context">
        <div class="loginForm">
            <form class="form-horizontal" role="form" action="/Login/SignIn">
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
                        <button type="submit" class="btn btn-primary btn-block" v-on:click="login" disabled="{{!isEnable}}">
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

export default{
	name:"Login",
	data(){
		return{
			loginStyle:{
				width:'500px',
				height:'500px',
				backgroundColor:'#ffe3e2',
				margin:'auto',
				textAlign:'center'
			}
		}
	},
	mounted:function(){
        this.$store.commit({
        	type:'SHOW_TOPBUTTON',
        	b:false
        })
	},
	methods:{
		login(){
			this.$router.push('/main')
			this.$store.commit({
				type:'SHOW_TOPBUTTON',
				b:true
			})

		}


	}

}
</script>