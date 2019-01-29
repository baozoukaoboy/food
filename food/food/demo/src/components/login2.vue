<template>
     <div>
    <header class="mui-bar mui-bar-nav">
	<router-link to="/login" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></router-link>
			<h1 class="mui-title">登录</h1>
		</header>
		<div class="mui-content">
			<form id='login-form' class="mui-input-group">
				<div class="mui-input-row">
					<label>账号</label>
					<input id='account' type="text" name='uname' class="mui-input-clear mui-input" placeholder="请输入账号" v-model="unameval">
				</div>
				<div class="mui-input-row">
					<label>密码</label>
					<input id='password' type="password" name="upwd" class="mui-input-clear mui-input" placeholder="请输入密码" v-model="upwdval">
				</div>
			</form>
			<div class="mui-content-padded">
				<button id='login' type="button" class="mui-btn mui-btn-block mui-btn-primary" @click='btnSub'>登录</button>
			</div>
		</div>
        </div>
</template>
<script>
	import {Toast} from "mint-ui"
	export default{
		data(){
		return {
			unameval:"",
			upwdval:""
		}
	},
	methods:{
		btnSub(){
			var u = this.unameval;
			var p = this.upwdval;		
			this.$http.get("login2?uname="+u+"&upwd="+p).then(result=>{
				if(result.body.code ==1){
					sessionStorage.setItem("uname",u);
					Toast(result.body.msg)
					this.$router.push("/login");
				}else if(result.body.code == -1){
					Toast(result.body.msg);
				}
				})			
		}
	}
	}
</script>
<style>
			.area {
				margin: 20px auto 0px auto;
			}
			
			.mui-input-group {
				margin-top: 10px;
			}
			
			.mui-input-group:first-child {
				margin-top: 20px;
			}
			
			.mui-input-group label {
				width: 22%;
			}
			
			.mui-input-row label~input,
			.mui-input-row label~select,
			.mui-input-row label~textarea {
				width: 78%;
			}
			
			.mui-checkbox input[type=checkbox],
			.mui-radio input[type=radio] {
				top: 6px;
			}
			
			.mui-content-padded {
				margin-top: 25px;
			}
			
			.mui-btn {
				padding: 10px;
			}
			
			.link-area {
				display: block;
				margin-top: 25px;
				text-align: center;
			}
			
			.spliter {
				color: #bbb;
				padding: 0px 8px;
			}
			
			.oauth-area {
				position: absolute;
				bottom: 20px;
				left: 0px;
				text-align: center;
				width: 100%;
				padding: 0px;
				margin: 0px;
			}
			
			.oauth-area .oauth-btn {
				display: inline-block;
				width: 50px;
				height: 50px;
				background-size: 30px 30px;
				background-position: center center;
				background-repeat: no-repeat;
				margin: 0px 20px;
				/*-webkit-filter: grayscale(100%); */
				border: solid 1px #ddd;
				border-radius: 25px;
			}
			
			.oauth-area .oauth-btn:active {
				border: solid 1px #aaa;
			}
			
			.oauth-area .oauth-btn.disabled {
				background-color: #ddd;
			}
</style>
