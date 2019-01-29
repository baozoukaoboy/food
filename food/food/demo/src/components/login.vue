<template>
    <div style="s">
<div class="head">
    <img src="../img/loginlogo.jpg" alt=""><router-link to="/login2" v-show="isShow">登录/注册</router-link>
    <div v-show="islogin" v-model='name'>欢迎登录，{{name}} &nbsp;<span @click="loginout">注销</span></div>
</div>
<div class="list">
    <ul>
        <li><a href="#"><img src="../img/login/daifu.png" alt=""><span>代付款</span></a></li>
        <li><a href="#"><img src="../img/login/daishou.png" alt=""><span>待收货</span></a></li>
        <li><a href="#"><img src="../img/login/pingjia.png" alt=""><span>待评价</span></a></li>
        <li><a href="#"><img src="../img/login/tuihuan.png" alt=""><span style="margin-left:-5px;">退换/售后</span></a></li>
        <li><a href="#"><img src="../img/login/dingdan.png" alt=""><span style="margin-left:-3px;">我的订单</span></a></li>
    </ul>
    <nav class="mui-bar mui-bar-tab">
		      	<router-link class="mui-tab-item" to="/">
				    <span class="mui-icon mui-icon-home"></span>
				    <span class="mui-tab-label">首页</span>
			      </router-link>  
			      <router-link to="/cart" class="mui-tab-item" href="#tabbar-with-contact">
				    <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
            </span>
				    <span class="mui-tab-label">购物车</span>
			      </router-link>
		      	<router-link to='/news' class="mui-tab-item" href="#tabbar-with-contact">
				    <span class="mui-icon  mui-icon-chat">
            </span>
				    <span class="mui-tab-label">消息</span>
			      </router-link>
            <a class="mui-tab-item  mui-active" href="#tabbar-with-chat">
				    <span class="mui-icon mui-icon-contact"></span>
				    <span class="mui-tab-label">会员</span>
			      </a>
	       </nav> 
</div>

<p v-show="isShow">您还未登录喔~</p>
</div>
</template>
<script>
    export default{
        data(){
            return{
                isShow:true,
                islogin:false,
                name:''
            }
        },
        methods:{
            loginout(){
                sessionStorage.clear();
                this.$router.push('/login2')
            }
        }
        ,
        mounted() {   
                var name = sessionStorage.getItem('uname')
                if(name){this.isShow = false
                        this.islogin = true
                        console.log(this.islogin)
                }   
                console.log(name)
                this.name = name
                console.log(this.name)
        }     

    }
</script>
<style scoped>
   
    .head{
        display: flex;
        height:80;
        background-color: crimson
    }

    .head img{
        display: inline-block;
        width:50px;
        height: 50px;
        border-radius:50%;
        padding: 5px;
        margin-left:5%;
        margin-top:5%
    } 
    .head a{
        line-height: 5rem;
         margin-left: 10px; 
         color: aliceblue  
    }
    .head div{
        line-height: 5rem;
         margin-left: 10px; 
         color: aliceblue  
    }
    .list ul{
        display: flex;
        overflow: hidden;
        padding-left: 15px;
    }
    .list ul li{
        width: 20%;
        height: 80px;
        list-style: none;
        justify-content:space-between;
    }
    .list ul li a img{
        width:40px;
        height:40px; 
    }
    .list ul li a span{
        display: block;
        font-size: 12px;
    }

    p{
        font-size: 25px;
        margin-left: 28%;
        margin-top:5rem;
    }
</style>
