<template>
    <div  class="app-homeContainer">
      <header class="mui-bar mui-bar-nav">
			<h1 class="mui-title">食品商城</h1>
      </header>
      <div style="height:44px;"></div>
      <!--轮播图    2：-->
      <mt-swipe  :auto="4000" height:150>
        <mt-swipe-item v-for="item in list" :key="item.id">
           <img :src="item.url" />
        </mt-swipe-item>
      </mt-swipe>
      <!--六宫格    3：-->
 	        <ul class="mui-table-view mui-grid-view mui-grid-9">
		        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		             <router-link to="/fruitlist">
                 <img src="../img/logo/shuiguo.png" />
		             <div class="mui-media-body">水果</div>         
                 </router-link>
            </li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">              
                 <router-link to="/shucailist">
                 <img src="../img/logo/shucai.png" />
                 <div class="mui-media-body">蔬菜</div>  
                 </router-link>                            
            </li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="/seefoodlist">
		              <img src="../img/logo/haixian.png" />
		              <div class="mui-media-body">海鲜</div>
                  </router-link>
            </li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" >
                  <router-link to="/lingshilist">
		              <img src="../img/logo/lingshilogo.png" />
		              <div class="mui-media-body">零食</div>
                  </router-link>
            </li>		      
		        </ul>
            <div class="mui-card">
				<div class="cardkuang">
          <img src="../img/fresh.jpg" style="width:100%;height:100%" @click=jump>
        </div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>今日最新鲜</p>
						<p style="color: #333;">最新鲜的海鲜尽在这里，今天特价，三文鱼！￥49.90/4片，扇贝！16.50元500g！</p>
					</div>
				</div>			
			</div>  
      <div class="mui-card">
				<div class="cardkuang" @click=jump2>
          <img src="../img/lingshi.jpg" style="width:100%;height:100%" alt="">
          <img src="../img/lingshi2.jpg" style="width:100%;height:100%" alt="">
        </div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>今日最便宜</p>
						<p style="color: #333;">仅需49.9元，全部零食带回家</p>
					</div>
				</div>			
			</div>  
      <div style="height:50px;"></div>
        <nav class="mui-bar mui-bar-tab">
		      	<a class="mui-tab-item mui-active" href="#">
				    <span class="mui-icon mui-icon-home"></span>
				    <span class="mui-tab-label">首页</span>
			      </a>  
			      <router-link to="/cart" class="mui-tab-item" href="#tabbar-with-contact">
				    <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
            
            </span>
				    <span class="mui-tab-label">购物车</span>
			      </router-link>
		      	<router-link  to="/news" class="mui-tab-item" href="#tabbar-with-contact">
				    <span class="mui-icon  mui-icon-chat">
            </span>
				    <span class="mui-tab-label">消息</span>
			      </router-link>
            <router-link  to='/login' class="mui-tab-item" href="#tabbar-with-chat">
				    <span class="mui-icon mui-icon-contact"></span>
				    <span class="mui-tab-label">会员</span>
			      </router-link>
	       </nav>   
   </div>
</template>

<script>
  export default {
    data(){
      return {list:[{id:1,url:"http://127.0.0.1:3000/img/banner/banner1.jpg"},
                    {id:2,url:"http://127.0.0.1:3000/img/banner/banner2.jpg"},
                    {id:3,url:"http://127.0.0.1:3000/img/banner/banner3.jpg"},
                    {id:4,url:"http://127.0.0.1:3000/img/banner/banner4.jpg"},
      ]}  //创建data属性保存数据
    },
    methods:{ 
      jump(){
        this.$router.push('/seefoodlist')
      },
      jump2(){
            this.$router.push('/detail/'+33)        
     }
    },
    created(){
    
    }
  }
</script>
<style scoped>
  /*图片轮播设置高度*/
  .app-homeContainer .mint-swipe{
    height:220px;   
  }
  .app-homeContainer .mint-swipe img{
    width:100%;
    height:100%;
  }

  /*调整六宫格  */
  .app-homeContainer .mui-grid-view.mui-grid-9{
    background:#fff;
    border:0;
    display:flex;   
  }
  .app-homeContainer .mui-grid-view.mui-grid-9 img{
    width:50px;
    height:50px;
  }

  .app-homeContainer .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
    font-size:13px;
  }

.mui-bar-tab{
  margin-top: px;
  position: fixed;
}

.mui-card-header .mui-card-media{
  height:40vw;
}

.cardkuang{
  width:90%;
  height:90%;
  border: 1px solid #ccc;
  margin-left: 6%;
  margin-top:5%
}


</style>