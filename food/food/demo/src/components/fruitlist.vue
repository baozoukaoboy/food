<template>
  <div>
    <header>
                <div>
                    <a href="./index.html">&lt;</a><input type="text" placeholder="搜索内容" v-model="searchval">
                </div>
    </header> 
     <div id="fruit">
        <div v-for="item in newlist" :key="item.id" class="list" ><!--改了这里-->
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
         return{list:[{id:1,price:"84.00",detail:"恰见乡愁 赣南脐橙10斤 精品大果70mm-80mm 橙子 新鲜水 果 10斤装精品果",url:"http://127.0.0.1:3000/img/fruit/orange.jpg"},
          {id:2,price:"39.90",detail:"烟台红富士苹果 12个 净重2.6kg以上 单果190-240g 一二级混装 自营水果",url:"http://127.0.0.1:3000/img/fruit/apple.jpg"},
          {id:3,price:"23.90",detail:"西州蜜哈密瓜 1粒装 单果1.5kg以上 新鲜水果",url:"http://127.0.0.1:3000/img/fruit/hamigua.jpg"},
          {id:4,price:"29.80",detail:"精品琯溪蜜柚 红心柚子2粒 1.8kg-2.5kg 新鲜水果 新老包装随机发货",url:"http://127.0.0.1:3000/img/fruit/miyou.jpg"},
          {id:5,price:"23.90",detail:"国产红提 1kg装 新鲜水果",url:"http://127.0.0.1:3000/img/fruit/putao.jpg"},
          {id:6,price:"25.90",detail:"山东沾化冬枣 1kg装 单果约16-22g（新鲜水果）",url:"http://127.0.0.1:3000/img/fruit/zao.jpg"},
          {id:7,price:"39.90",detail:"越南进口红心火龙果 4个装 单果约330-420g 新鲜水果",url:"http://127.0.0.1:3000/img/fruit/huolongguo.jpg"},
          {id:8,price:"19.90",detail:"爱奇果 陕西眉县 徐香绿心猕猴桃 12个 单果80-95g 新鲜水果",url:"http://127.0.0.1:3000/img/fruit/qiyiguo.jpg"}  
          ],
          searchval:''
          }
        },
        methods:{
            getDetail(id){
                //console.log(id)
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
    
    #fruit img{
        width:7rem;
        height: 7rem;
    }
    
    #fruit a{
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
