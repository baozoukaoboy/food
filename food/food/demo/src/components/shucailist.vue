<template>
  <div>
    <header>
                <div>
                    <a href="./index.html">&lt;</a><input type="text" placeholder="搜索内容" v-model="searchval">
                </div>
    </header> 
     <div id="shucai">
        <div  v-for="item in newlist" :key="item.id" class="list" >
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
         return{ list:[{id:9,price:"8.80",detail:"自然之星 有机生菜 约250g 鹅仔菜 唛仔菜 莴仔菜 莴苣 火锅食材 新鲜蔬菜",url:"http://127.0.0.1:3000/img/shucai/baicai.jpg"},
          {id:10,price:"8.80",detail:"绿鲜知 圆白菜 包菜 卷心菜 约500g 火锅食材 新鲜蔬菜",url:"http://127.0.0.1:3000/img/shucai/juanxincai.jpg"},
          {id:11,price:"16.80",detail:"自然之星 宁夏有机菜心 约250g 菜薹 菜尖 火锅食材 新鲜蔬菜",url:"http://127.0.0.1:3000/img/shucai/kongxincai.jpg"},
          {id:12,price:"8.80",detail:"绿鲜知 上海青 小油菜 小青菜 约400g 火锅食材 新鲜蔬菜",url:"http://127.0.0.1:3000/img/shucai/xiaobaicai.jpg"},
          {id:13,price:"26.80",detail:"凡谷归真 西红柿 番茄 约1.25kg 新鲜蔬菜",url:"http://127.0.0.1:3000/img/shucai/xihongshi.jpg"},
          {id:14,price:"8.80",detail:"绿鲜知 西兰花 花椰菜 西蓝花 约300g 火锅食材 新鲜蔬菜",url:"http://127.0.0.1:3000/img/shucai/xilanhua.jpg"},
          {id:15,price:"23.80",detail:"绿鲜知 云南甜玉米 水果玉米 约2.5kg 6-9根 烧烤食材 新鲜蔬菜",url:"http://127.0.0.1:3000/img/shucai/yumi.jpg"},
          {id:16,price:"26.80",detail:"家美舒达 贝贝南瓜 板栗小南瓜 约1kg 新鲜蔬菜",url:"http://127.0.0.1:3000/img/shucai/nangua.jpg"}  
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
    
    #shucai img{
        width:7rem;
        height: 7rem;
    }
    
    #shucai a{
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
