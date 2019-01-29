<template>
    <div>
    <header class="mui-bar mui-bar-nav">
			<h1 class="mui-title">购物车</h1>
    </header>
	<div style="height:44px;"></div>
	<div id="cart">
            <div v-for="item in newinfo" class="list" :key="item.id">
            <div>       
            <img :src="item.img">
            </div>
            <div class="wenzi">
            <span>{{item.title}}</span><br>
            <span class="yanse">￥{{item.price}}</span>
            <div class="mui-numbox num" data-numbox-min='1' data-numbox-max='9'>
			<button class="mui-btn mui-btn-numbox-minus" type="button" @click="goodSub(item.pid)">-</button>
			<input id="test" class="mui-input-numbox" type="number" :value="item.val"/>
			<button class="mui-btn mui-btn-numbox-plus" type="button" @click="goodAdd(item.pid)">+</button>          
            </div>  
            </div>        
            </div>           
    </div>
    <div class="jiesuan">
    <span>合计：￥{{gettotal}}</span>
    <span @click="pay">去结算</span>
    </div>
    <nav class="mui-bar mui-bar-tab">
		      	<router-link class="mui-tab-item" to="/">
				    <span class="mui-icon mui-icon-home"></span>
				    <span class="mui-tab-label">首页</span>
			      </router-link>  
			      <a  class="mui-tab-item mui-active" href="#">
				    <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
            </span>
				    <span class="mui-tab-label">购物车</span>
			      </a>
		      	<router-link to='/news' class="mui-tab-item" href="#tabbar-with-contact">
				    <span class="mui-icon  mui-icon-chat">
            </span>
				    <span class="mui-tab-label">消息</span>
			      </router-link>
                <router-link to="/login" class="mui-tab-item  " href="#tabbar-with-chat">
				    <span class="mui-icon mui-icon-contact"></span>
				    <span class="mui-tab-label">会员</span>
			      </router-link>
	</nav> 
    </div>
</template>
<script>
   import {Toast} from "mint-ui"
   export default{
		data() {
			return {        
          newinfo:[],
		  }
		},
		methods:{
              pay(){
                  this.$router.push('/pay')
              },
              yanzheng(){
                 var name =  sessionStorage.getItem('uname')
                  console.log(name)
                  if(name==null){Toast('请先登录用户')
                  this.$router.push('/login2')
                  }
              },
			  goodAdd(id){              
                  for(var item of this.newinfo){
                      if(id==item.pid && item.val<=99){         
                          item.val++;
                          break
                      }                     
                  }                                               
              },
		      goodSub(id){
                 for(var item of this.newinfo){
                      if(id==item.pid && item.val>0){               
                          item.val--;
                          break
                      }                     
                  } 
                if(item.val==0){
                  var c = confirm('是否删除商品');
                  if(c == true){
                      var id = 'deleteCart?id='+id
                      console.log(id)
                      this.$http.get(id).then(result=>{
                          console.log(result.body.msg)
                        this.getlist();
                      })
                  }else if(c==false){return }
                }
                
            },
         getlist(){
             var id = sessionStorage.getItem('id')
            //  console.log(id)
             var newid = 'cart4?id='+id 
             this.$http.get(newid).then(result=>{
                 this.newinfo = result.body
                 //console.log(this.newinfo)
                 
             })   
            }	
            },
            created() {
                this.getlist();
                this.yanzheng()
            },
            computed:{
                gettotal:function(){
                    var sum = 0;
                    for (var item of  this.newinfo){
                        sum += item.price * item.val
                    }
                    return sum.toFixed(2);
                }
            }        
		}
</script>
<style scoped>
  p{
      
       font-size: 25px;
        margin-top:15rem;
        text-align: center;
  } 

  .list{
       display: flex;
   }
    
    #cart img{
        width:7rem;
        height: 7rem;
    }
    
    #cart a{
        text-decoration: none;
        color: black;
    }

   .wenzi{
       width: 70%;
   }

   .wenzi>:first-child{
       display: inline-block;
       margin-left: 5px;
       margin-top: 5px;
       overflow: hidden;
       height: 70px;
       font-size: 14px;
   }

   .yanse{
       display: inline-block;
       margin-top: 6px;
       color: red;
       font-weight: bold;
       font-size: 20px;  
   }
   .mui-numbox {
       margin-left:10px !important;
   }
   .jiesuan{
       position:fixed ;
       width:100%;
       bottom:50px;
       display:flex;
   }
   .jiesuan>:first-child{
       display:inline-block;
       width:70%;
       height:50px;
       text-align:center;
       line-height:50px;
       font-size:18px;
       background-color:#fff;
   }
   .jiesuan>:last-child{
       display:inline-block;
       width:30%;
       height:50px;
       line-height:50px;
       text-align:center;
       font-size:18px;
       background-color:red;
   }
</style>
