<template>
  <div>
    <header>
                <div>
                    <a href="./index.html">&lt;</a><input type="text" placeholder="搜索内容" v-model="searchval">
                </div>
    </header> 
     <div id="seefood">
        <div to='/' v-for="item in newlist" :key="item.id" class="list" >
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
         return{list:[{id:17,price:"29.90",detail:"海外直采 越南巴沙鱼柳（去皮） BAP认证 450g 2片/袋 原装进口",url:"http://127.0.0.1:3000/img/haixian/bashayuliu.jpg"},
          {id:18,price:"29.90",detail:"Clearwater/北极清水 加拿大北极贝切片 100g 15-20片 日料刺身 烧烤食材 海鲜水产 生鲜",url:"http://127.0.0.1:3000/img/haixian/beijibei.jpg"},
          {id:19,price:"69.90",detail:"海外直采 泰国活冻黑虎虾（大号） 400g 16-20只/盒 原装进口（新老包装随机发送）",url:"http://127.0.0.1:3000/img/haixian/heihuxia.jpg"},
          {id:20,price:"19.90",detail:"獐子岛 冷冻大连蚬子肉250g 火锅食材 花甲 花蛤 火锅食材 海鲜水产",url:"http://127.0.0.1:3000/img/haixian/huajia.jpg"},
          {id:21,price:"35.90",detail:"翔泰 冷冻无公害金鲳鱼 BAP认证 700g 2条 袋装 海鲜水产",url:"http://127.0.0.1:3000/img/haixian/jincangyu.jpg"},
          {id:22,price:"16.50",detail:"獐子岛 冷冻蒜蓉粉丝扇贝（MSC认证） 200g 6只 虾夷扇贝 海鲜水产",url:"http://127.0.0.1:3000/img/haixian/shanbei.jpg"},
          {id:23,price:"159.00",detail:"海鲜颂 鲜活刺身生蚝海蛎 梅岭牡蛎 冷水蚝 刺身生蚝2.5kg (约25-30个)",url:"http://127.0.0.1:3000/img/haixian/shenghao.jpg"},
          {id:24,price:"49.90",detail:"美威 智利原味三文鱼排（大西洋鲑） 240g/袋 4片装",url:"http://127.0.0.1:3000/img/haixian/sanwenyu.jpg"}  
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
    
    #seefood img{
        width:7rem;
        height: 7rem;
    }
    
    #seefood a{
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