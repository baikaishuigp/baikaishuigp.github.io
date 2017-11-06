<template >
	<div class="container-fluid">
		<div class="row" >
			
			<div class="col-xs-3 col-md-3"  >
				<div style=" height:600px; background-color:#e6e2e1">
				<router-view name="leftView"></router-view>
				</div>
			</div>
			<div class="col-xs-9 col-md-9" >
				<div style="height:600px; background-color:#e2e2e4">
					<router-view name="mainView"></router-view>
				</div>
			</div>
		</div>
		
	</div>
</template>
 
 <script type="text/javascript">
 	export default{

 mounted:function(){
    this.$store.commit({
     type:'SHOW_TOPBUTTON',
     isShow:true
 })
 		},
 		methods:{

 			
 		}
 	}
 </script>