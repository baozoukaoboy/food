<template>
  <div>
    <header>
                <div>
                    <a href="./index.html">&lt;</a><input type="text" placeholder="搜索内容" v-model="searchval">
                </div>
    </header> 
     <div id="lingshi">
        <div v-for="item in newlist" :key="item.id" class="list" >
            <div>       
            <img :src="item.url" @click=getDetail(item.id)>
            </div>
            <div class="wenzi">
            <span>{{item.detail}}</span><br>
            <span>￥{{item.price}}</span>
            </div>   
        </div>      
        </div>
  </div>
</template>
<script>
     export default{
        data(){
         return{list:[{id:25,price:"88.00",detail:"雀巢（Nestle）脆脆鲨 黑科技小钢琴威化定制套装1088g",url:"http://127.0.0.1:3000/img/lingshi/cuicuisha.jpg"},
          {id:26,price:"11.90",detail:"三只松鼠休闲零食膨化小吃方便面干脆面串烧味小贱拉面丸子85g/袋",url:"http://127.0.0.1:3000/img/lingshi/gancuimian.jpg"},
          {id:27,price:"118.00",detail:"碧东混搭营养坚果包 每日坚果 休闲零食 混合坚果 节日礼盒 肩扛大零食包 25g*30包",url:"http://127.0.0.1:3000/img/lingshi/jianguo.jpg"},
          {id:28,price:"19.90",detail:"卫龙 休闲零食 辣条 网红怀旧零食大礼包 办公室零食 亲嘴烧1250g/袋 约80片",url:"http://127.0.0.1:3000/img/lingshi/latiao.jpg"},
          {id:29,price:"18.90",detail:"乐事（Lay’s）无限薯片 休闲零食 104g*3组合装（原味+烤肉+番茄）百事食品",url:"http://127.0.0.1:3000/img/lingshi/leshi.jpg"},
          {id:30,price:"33.90",detail:"满199减120三只松鼠 夏威夷果160g 零食坚果炒货孕妇坚果每日坚果干果休闲零食办公室奶油味送开 160g",url:"http://127.0.0.1:3000/img/lingshi/lizi.jpg"},
          {id:31,price:"29.80",detail:"士力架 花生夹心巧克力（全家桶）糖果 巧克力 休闲零食 460g",url:"http://127.0.0.1:3000/img/lingshi/shilijia.jpg"},
          {id:32,price:"18.90",detail:"旺旺 雪饼仙贝京装零食大礼包 膨化食品 办公室休闲饼干 618g",url:"http://127.0.0.1:3000/img/lingshi/wangwang.jpg"},
          {id:33,price:"49.90",detail:"酷兮兮 休闲零食大礼包礼盒一整箱进口食品零食小吃好吃的送女友女生团购礼盒1500g",url:"http://127.0.0.1:3000/img/lingshi/lingshidalibao.jpg"}  
          ],
          searchval:''
          }
        },
        methods:{           
            getDetail(id){
                console.log(id)
                this.$router.push('/detail/'+id)
         
     }
        },
        computed:{
            newlist:function(){
               var _this = this
               var arr= [];
               for (var i=0;i<this.list.length;i++){
                   if(this.list[i].detail.search(this.searchval) != -1){
                    arr.push(this.list[i]);
                 }
               }return arr;
           }
        }
    }
</script>
<style scoped>
 header div{
        display: flex;
        width: 98%;
        border: 0;
        border-radius: 8px;
        margin-bottom: 8px;
        margin-top: 10px;
    }
    header div input{
    border:1px solid black !important; 
    border-radius: 8px !important; 
    text-align: center;
    }
    header a{
        width: 15%;
        margin-right: 5px;
        color: black;
        text-decoration: none;
        line-height: 35px;
        text-align: center;
        font-weight:bold;
        border:1px solid black;
        height:40px;
        border-radius:8px;
    } 
    
   .list{
       display: flex;
   }
    
    #lingshi img{
        width:7rem;
        height: 7rem;
    }
    
    #lingshi a{
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

   .wenzi>:last-child{
       display: inline-block;
       margin-top: 6px;
       color: red;
       font-weight: bold;
       font-size: 20px;  
   }
</style>