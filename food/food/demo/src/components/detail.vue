<template>
    <div class="detail">   
	<div @click=back class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left back"></div>
	<h1 class="mui-title"></h1>
    <mt-swipe  :auto="4000" height:150 class='swipe'>
        <mt-swipe-item v-for="item in infolist" :key="item.id">
           <img :src="item.img_url" />
        </mt-swipe-item>
    </mt-swipe>
    <h4>{{info.title}}</h4>
    <div class="yuanjia">原价：￥{{info.old}}</div><div class="xianjia">现价：￥{{info.now}}</div>
    <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
	<button class="mui-btn mui-btn-numbox-minus" type="button" @click="goodSub">-</button>
	<input id="test" class="mui-input-numbox" type="number" value="1" v-model="val" />
	<button class="mui-btn mui-btn-numbox-plus" type="button" @click="goodAdd">+</button>
	</div><br><br>
    <button id="btn1" @click="getcount(info.id)" v-show="isshow">加入购物车</button><button id="btn2" >立刻购买</button>
    <h3>详情</h3>
    <div class="imgdetail"><img :src="info.imgdetail"></div>
    </div>
</template>

<script>
import {Toast} from "mint-ui"
import swiper from "./sub/swiper.vue";
export default{
    data(){
      return {
      imglist:[],
      val:1,
      info:{},
      infolist:[],
      isshow:true
      }  //创建data属性保存数据
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        getlist(){
            var id =this.$route.params.id;
            this.$http.get('detail?id='+id).then(result=>{             
                this.info = result.body;
                /*console.log(this.info);*/
            })	
            },
            getimglist(){
            var id =this.$route.params.id;
            this.$http.get('detail?id='+id).then(result=>{             
                this.infolist = result.body.imglist;
                //console.log(this.infolist);
            })
            },
        goodAdd(){
				 if(this.val<=998){
           this.val++;
				 }
			},
		goodSub(){
				 if(this.val>1){
          this.val--;
				 }
            },
        getImageList(){
				  this.$http.get("imagelist").then(result=>{
                          this.imglist = result.body;
                          })},
        getcount(id){
            var count = this.val
            //console.log(id)
            var newid = 'cart?id='+id       
            //console.log(newid)    
            this.$http.get(newid).then(result=>{
                if(result.body.code == 1){
                    console.log(result.body.msg)
                  var url = 'check?id='+id
             this.$http.get(url).then(result=>{               
               if(result.body.code==0){
                    Toast(result.body.msg)     
                    var newid2 ='cart2?id='+id
                    //console.log(id)
                    this.$http.get(newid2).then(result=>{
                        var a = result.body
                        console.log(a)
                       var pid = a.pid,
                           title = a.title,
                           price = a.price,
                           img = a.img,
                           val = this.val
                       var newid3 = 'cart3?pid='+pid+'&title='+title+'&price='+price+'&img='+img+'&val='+val
                       this.$http.get(newid3).then(result=>{
                           //console.log(result.body.msg)
                           sessionStorage.setItem('id',id)
                           //console.log(id)
                       })    
                    })
					console.log(result.body.msg)
				}else if(result.body.code==1){Toast(result.body.msg)}              
                })}else{
                    //console.log(2)
                    Toast(result.body.msg)
                }
            })		                
         }
        },                                               	   
    created() {
        //console.log(this.$route.params.id)
       this.getlist();
       this.getimglist();
    },
    components:{
			"swiper-box":swiper
		}
    }
</script>

<style scoped>
.back{
    position:fixed;
    z-index:10;
    left:10px;
    top:10px;
}
.imgdetail{
    width: 100%;
}

.imgdetail img{
    width: 100%;
}

h3{
    display: inline-block;
    margin-top: 3rem;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    width: 100%;
    height: 3rem;
    text-align: center;
    line-height: 45px;
}
.detail .mint-swipe{
    height:220px;   
  }
  .detail .mint-swipe img{
    width:100%;
    height:100%;
  }

.yuanjia{
        color: blue;
        font-weight: bold;
    }

    .xianjia{
        color: red;
        font-weight: bold;
        margin-bottom: 2rem;
    }
    #shuliang{margin-bottom: 2rem;
            font-weight: bold;
        }
    #shuliang span{
        display: inline-block;
        border: 1px solid black;
        width: 2rem;
        text-align: center;
    }
    #shuliang input{
        display: inline-block;
        vertical-align: top;
        width: 25px;
        text-align: center;
    }
    #btn1{
        background-color: red;
        margin-left:10px;
    }
    #btn2{
        background-color:orange;
        margin-left:1px;
    }
    #btn1,#btn2{
        color: #fff;
        border-radius: 8px;
        font-size: 15px;
    }
    .mui-numbox{
        margin-left:1rem;
    }
</style>
