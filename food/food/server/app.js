//app.js
//1:加载模块
const express = require("express");
const pool  = require("./pool");
//2:创建express对象
var app = express();
//服务器node.js 允许跨域访问配置项
//2.1:引入跨域模块   
const cors = require("cors");
//2.2:配置允许哪个程序跨域访问 脚手架   11:16
app.use(cors({
  origin:[
    "http://127.0.0.1:8080","http://localhost:8080"],
  credentials:true
}))

//3:指定静态目录
//服务器指定目录 绝对路径 出错
app.use(express.static(__dirname+"/public"));

//4:绑定监听端口
app.listen(3000);

app.get("/detail",(req,res)=>{
  var id = req.query.id;
  //console.log(id)
  var obj =
   [{id:id,pid:1,title:"恰见乡愁 赣南脐橙10斤 精品大果70mm-80mm 橙子 新鲜水 果 10斤装精品果",now:84.00,old:100.00,imgdetail:"http://127.0.0.1:3000/img/detailimg/orange.png",
   imglist:[
    {id:1,img_url:"http://127.0.0.1:3000/img/detailsw/orange/1.jpg"},
    {id:2,img_url:"http://127.0.0.1:3000/img/detailsw/orange/2.jpg"},
    {id:3,img_url:"http://127.0.0.1:3000/img/detailsw/orange/3.jpg"},
    {id:4,img_url:"http://127.0.0.1:3000/img/detailsw/orange/4.jpg"}]},
   {id:id,pid:2,title:"烟台红富士苹果 12个 净重2.6kg以上 单果190-240g 一二级混装 自营水果",now:39.90,old:50.00,imgdetail:"http://127.0.0.1:3000/img/detailimg/apple.png",
   imglist:[
   {id:1,img_url:"http://127.0.0.1:3000/img/detailsw/apple/1.jpg"},
   {id:2,img_url:"http://127.0.0.1:3000/img/detailsw/apple/2.jpg"},
   {id:3,img_url:"http://127.0.0.1:3000/img/detailsw/apple/3.jpg"},
   {id:4,img_url:"http://127.0.0.1:3000/img/detailsw/apple/4.jpg"}]},
   {id:id,pid:3,title:"西州蜜哈密瓜 1粒装 单果1.5kg以上 新鲜水果",now:23.90,old:40.00,imgdetail:"http://127.0.0.1:3000/img/detailimg/hamigua.png",
   imglist:[
   {id:1,img_url:"http://127.0.0.1:3000/img/detailsw/hamigua/1.jpg"},
   {id:2,img_url:"http://127.0.0.1:3000/img/detailsw/hamigua/2.jpg"},
   {id:3,img_url:"http://127.0.0.1:3000/img/detailsw/hamigua/3.jpg"},
   {id:4,img_url:"http://127.0.0.1:3000/img/detailsw/hamigua/4.jpg"}]},
   {id:id,pid:4,title:"精品琯溪蜜柚 红心柚子2粒 1.8kg-2.5kg 新鲜水果 新老包装随机发货",now:29.80,old:35.00,imgdetail:"http://127.0.0.1:3000/img/detailimg/miyou.png",
   imglist:[
   {id:1,img_url:"http://127.0.0.1:3000/img/detailsw/miyou/1.jpg"},
   {id:2,img_url:"http://127.0.0.1:3000/img/detailsw/miyou/2.jpg"},
   {id:3,img_url:"http://127.0.0.1:3000/img/detailsw/miyou/3.jpg"},
   {id:4,img_url:"http://127.0.0.1:3000/img/detailsw/miyou/4.jpg"}]},
   {id:id,pid:5,title:"国产红提 1kg装 新鲜水果",now:23.90,old:30.00,imgdetail:"http://127.0.0.1:3000/img/detailimg/tizi.png",
   imglist:[
   {id:1,img_url:"http://127.0.0.1:3000/img/detailsw/tizi/1.jpg"},
   {id:2,img_url:"http://127.0.0.1:3000/img/detailsw/tizi/2.jpg"},
   {id:3,img_url:"http://127.0.0.1:3000/img/detailsw/tizi/3.jpg"},
   {id:4,img_url:"http://127.0.0.1:3000/img/detailsw/tizi/4.jpg"}]},
   {id:id,pid:6,title:"山东沾化冬枣 1kg装 单果约16-22g（新鲜水果）",now:25.90,old:34.00,imgdetail:"http://127.0.0.1:3000/img/detailimg/dongzao.png",
   imglist:[
   {id:1,img_url:"http://127.0.0.1:3000/img/detailsw/dongzao/1.jpg"},
   {id:2,img_url:"http://127.0.0.1:3000/img/detailsw/dongzao/2.jpg"},
   {id:3,img_url:"http://127.0.0.1:3000/img/detailsw/dongzao/3.jpg"},
   {id:4,img_url:"http://127.0.0.1:3000/img/detailsw/dongzao/4.jpg"}]},
   {id:id,pid:7,title:"越南进口红心火龙果 4个装 单果约330-420g 新鲜水果",now:39.90,old:43.00,imgdetail:"http://127.0.0.1:3000/img/detailimg/huolongguo.png",
   imglist:[
   {id:1,img_url:"http://127.0.0.1:3000/img/detailsw/huolongguo/1.jpg"},
   {id:2,img_url:"http://127.0.0.1:3000/img/detailsw/huolongguo/2.jpg"},
   {id:3,img_url:"http://127.0.0.1:3000/img/detailsw/huolongguo/3.jpg"},
   {id:4,img_url:"http://127.0.0.1:3000/img/detailsw/huolongguo/4.jpg"}]},
   {id:id,pid:8,title:"爱奇果 陕西眉县 徐香绿心猕猴桃 12个 单果80-95g 新鲜水果",now:19.90,old:23.00,imgdetail:"http://127.0.0.1:3000/img/detailimg/qiyiguo.png",
   imglist:[
   {id:1,img_url:"http://127.0.0.1:3000/img/detailsw/qiyiguo/1.jpg"},
   {id:2,img_url:"http://127.0.0.1:3000/img/detailsw/qiyiguo/2.jpg"},
   {id:3,img_url:"http://127.0.0.1:3000/img/detailsw/qiyiguo/3.jpg"},
   {id:4,img_url:"http://127.0.0.1:3000/img/detailsw/qiyiguo/4.jpg"}]},
   {id:id,pid:9,title:"自然之星 有机生菜 约250g 鹅仔菜 唛仔菜 莴仔菜 莴苣 火锅食材 新鲜蔬菜",now:8.80,old:11.00,imgdetail:"http://127.0.0.1:3000/img/detailimg/shengcai.png",
   imglist:[
   {id:1,img_url:"http://127.0.0.1:3000/img/detailsw/shengcai/1.jpg"},
   {id:2,img_url:"http://127.0.0.1:3000/img/detailsw/shengcai/2.jpg"}
   ]},
   {id:id,pid:10,title:"绿鲜知 圆白菜 包菜 卷心菜 约500g 火锅食材 新鲜蔬菜",now:8.80,old:13.00,imgdetail:"http://127.0.0.1:3000/img/detailimg/juanxincai.png",
   imglist:[
   {id:1,img_url:"http://127.0.0.1:3000/img/detailsw/juanxincai/1.jpg"},
   {id:2,img_url:"http://127.0.0.1:3000/img/detailsw/juanxincai/2.jpg"}
   ]},
   {id:id,pid:11,title:"自然之星 宁夏有机菜心 约250g 菜薹 菜尖 火锅食材 新鲜蔬菜",now:16.80,old:25.80,imgdetail:"http://127.0.0.1:3000/img/detailimg/caixin.png",
   imglist:[
   {id:1,img_url:"http://127.0.0.1:3000/img/detailsw/caixin/1.jpg"},
   {id:2,img_url:"http://127.0.0.1:3000/img/detailsw/caixin/2.jpg"},
   {id:3,img_url:"http://127.0.0.1:3000/img/detailsw/caixin/3.jpg"}
   ]},
   {id:id,pid:12,title:"绿鲜知 上海青 小油菜 小青菜 约400g 火锅食材 新鲜蔬菜",now:19.90,old:23.00,imgdetail:"http://127.0.0.1:3000/img/detailimg/xiaoqingcai.png",
   imglist:[
   {id:1,img_url:"http://127.0.0.1:3000/img/detailsw/xiaoqingcai/1.jpg"},
   {id:2,img_url:"http://127.0.0.1:3000/img/detailsw/xiaoqingcai/2.jpg"}
   ]},
   {id:id,pid:13,title:"凡谷归真 西红柿 番茄 约1.25kg 新鲜蔬菜",now:19.90,old:23.00,imgdetail:"http://127.0.0.1:3000/img/detailimg/xihongshi.png",
   imglist:[
   {id:1,img_url:"http://127.0.0.1:3000/img/detailsw/xihongshi/1.jpg"},
   {id:2,img_url:"http://127.0.0.1:3000/img/detailsw/xihongshi/2.jpg"},
   {id:3,img_url:"http://127.0.0.1:3000/img/detailsw/xihongshi/3.jpg"}
   ]},
   {id:id,pid:14,title:"绿鲜知 西兰花 花椰菜 西蓝花 约300g 火锅食材 新鲜蔬菜",now:8.80,old:12.00,imgdetail:"http://127.0.0.1:3000/img/detailimg/xilanhua.png",
   imglist:[
   {id:1,img_url:"http://127.0.0.1:3000/img/detailsw/xilanhua/1.jpg"},
   {id:2,img_url:"http://127.0.0.1:3000/img/detailsw/xilanhua/2.jpg"},
   {id:3,img_url:"http://127.0.0.1:3000/img/detailsw/xilanhua/3.jpg"}
   ]},
   {id:id,pid:15,title:"绿鲜知 云南甜玉米 水果玉米 约2.5kg 6-9根 烧烤食材 新鲜蔬菜",now:23.80,old:30.00,imgdetail:"http://127.0.0.1:3000/img/detailimg/yumi.png",
   imglist:[
   {id:1,img_url:"http://127.0.0.1:3000/img/detailsw/yumi/1.jpg"},
   {id:2,img_url:"http://127.0.0.1:3000/img/detailsw/yumi/2.jpg"},
   {id:3,img_url:"http://127.0.0.1:3000/img/detailsw/yumi/3.jpg"}
   ]},
   {id:id,pid:16,title:"爱奇果 陕西眉县 徐香绿心猕猴桃 12个 单果80-95g 新鲜水果",now:19.90,old:23.00,imgdetail:"http://127.0.0.1:3000/img/detailimg/nangua.png",
   imglist:[
   {id:1,img_url:"http://127.0.0.1:3000/img/detailsw/nangua/1.jpg"},
   {id:2,img_url:"http://127.0.0.1:3000/img/detailsw/nangua/2.jpg"},
    ]},
    {id:id,pid:17,title:"海外直采 越南巴沙鱼柳（去皮） BAP认证 450g 2片/袋 原装进口",now:29.90,old:33.00,imgdetail:"http://127.0.0.1:3000/img/detailimg/yuliu.png",
    imglist:[
    {id:1,img_url:"http://127.0.0.1:3000/img/detailsw/yuliu/1.jpg"},
    {id:2,img_url:"http://127.0.0.1:3000/img/detailsw/yuliu/2.jpg"},
    {id:3,img_url:"http://127.0.0.1:3000/img/detailsw/yuliu/3.jpg"}
    ]},
    {id:id,pid:18,title:"Clearwater/北极清水 加拿大北极贝切片 100g 15-20片 日料刺身 烧烤食材 海鲜水产 生鲜",now:29.90,old:35.00,imgdetail:"http://127.0.0.1:3000/img/detailimg/beijibei.png",
    imglist:[
    {id:1,img_url:"http://127.0.0.1:3000/img/detailsw/beijibei/1.jpg"},
    {id:2,img_url:"http://127.0.0.1:3000/img/detailsw/beijibei/2.jpg"},
    {id:3,img_url:"http://127.0.0.1:3000/img/detailsw/beijibei/3.jpg"},
    ]},
    {id:id,pid:19,title:"海外直采 泰国活冻黑虎虾（大号） 400g 16-20只/盒 原装进口（新老包装随机发送）",now:69.90,old:80.00,imgdetail:"http://127.0.0.1:3000/img/detailimg/huxia.png",
    imglist:[
    {id:1,img_url:"http://127.0.0.1:3000/img/detailsw/heihuxia/1.jpg"},
    {id:2,img_url:"http://127.0.0.1:3000/img/detailsw/heihuxia/2.jpg"},
    {id:3,img_url:"http://127.0.0.1:3000/img/detailsw/heihuxia/3.jpg"}
    ]},
    {id:id,pid:20,title:"獐子岛 冷冻大连蚬子肉250g 火锅食材 花甲 花蛤 火锅食材 海鲜水产",now:19.90,old:22.50,imgdetail:"http://127.0.0.1:3000/img/detailimg/huajia.png",
    imglist:[
    {id:1,img_url:"http://127.0.0.1:3000/img/detailsw/huajia/1.jpg"},
    {id:2,img_url:"http://127.0.0.1:3000/img/detailsw/huajia/2.jpg"},
    {id:3,img_url:"http://127.0.0.1:3000/img/detailsw/huajia/3.jpg"}
    ]},
    {id:id,pid:21,title:"翔泰 冷冻无公害金鲳鱼 BAP认证 700g 2条 袋装 海鲜水产",now:35.90,old:47.00,imgdetail:"http://127.0.0.1:3000/img/detailimg/jinchangyu.png",
    imglist:[
    {id:1,img_url:"http://127.0.0.1:3000/img/detailsw/jinchangyu/1.jpg"},
    {id:2,img_url:"http://127.0.0.1:3000/img/detailsw/jinchangyu/2.jpg"},
    {id:3,img_url:"http://127.0.0.1:3000/img/detailsw/jinchangyu/3.jpg"},
    ]},
    {id:id,pid:22,title:"獐子岛 冷冻蒜蓉粉丝扇贝（MSC认证） 200g 6只 虾夷扇贝 海鲜水产",now:16.50,old:28.00,imgdetail:"http://127.0.0.1:3000/img/detailimg/shanbei.png",
    imglist:[
    {id:1,img_url:"http://127.0.0.1:3000/img/detailsw/shanbei/1.jpg"},
    {id:2,img_url:"http://127.0.0.1:3000/img/detailsw/shanbei/2.jpg"},
    {id:3,img_url:"http://127.0.0.1:3000/img/detailsw/shanbei/3.jpg"},
    ]},
    {id:id,pid:23,title:"海鲜颂 鲜活刺身生蚝海蛎 梅岭牡蛎 冷水蚝 刺身生蚝2.5kg (约25-30个)",now:159.00,old:180.00,imgdetail:"http://127.0.0.1:3000/img/detailimg/shenghao.png",
    imglist:[
    {id:1,img_url:"http://127.0.0.1:3000/img/detailsw/shenghao/1.jpg"},
    {id:2,img_url:"http://127.0.0.1:3000/img/detailsw/shenghao/2.jpg"},
    {id:3,img_url:"http://127.0.0.1:3000/img/detailsw/shenghao/3.jpg"},
    ]},
    {id:id,pid:24,title:"美威 智利原味三文鱼排（大西洋鲑） 240g/袋 4片装",now:49.90,old:53.00,imgdetail:"http://127.0.0.1:3000/img/detailimg/sanwenyu.png",
    imglist:[
    {id:1,img_url:"http://127.0.0.1:3000/img/detailsw/sanwenyu/1.jpg"},
    {id:2,img_url:"http://127.0.0.1:3000/img/detailsw/sanwenyu/2.jpg"},
    {id:3,img_url:"http://127.0.0.1:3000/img/detailsw/sanwenyu/3.jpg"},
    ]}, 
    {id:id,pid:25,title:"雀巢（Nestle）脆脆鲨 黑科技小钢琴威化定制套装1088g",now:88.00,old:99.00,imgdetail:"http://127.0.0.1:3000/img/detailimg/cuicuisha.png",
    imglist:[
    {id:1,img_url:"http://127.0.0.1:3000/img/detailsw/cuicuisha/1.jpg"},
    {id:2,img_url:"http://127.0.0.1:3000/img/detailsw/cuicuisha/2.jpg"}
    ]}, 
    {id:id,pid:26,title:"三只松鼠休闲零食膨化小吃方便面干脆面串烧味小贱拉面丸子85g/袋",now:11.90,old:15.00,imgdetail:"http://127.0.0.1:3000/img/detailimg/gancuimian.png",
    imglist:[
    {id:1,img_url:"http://127.0.0.1:3000/img/detailsw/gancuimian/1.jpg"},
    {id:2,img_url:"http://127.0.0.1:3000/img/detailsw/gancuimian/2.jpg"},
    {id:3,img_url:"http://127.0.0.1:3000/img/detailsw/gancuimian/3.jpg"},
    ]}, 
    {id:id,pid:27,title:"碧东混搭营养坚果包 每日坚果 休闲零食 混合坚果 节日礼盒 肩扛大零食包 25g*30包",now:118.00,old:138.00,imgdetail:"http://127.0.0.1:3000/img/detailimg/jianguo.png",
    imglist:[
    {id:1,img_url:"http://127.0.0.1:3000/img/detailsw/jianguo/1.jpg"},
    {id:2,img_url:"http://127.0.0.1:3000/img/detailsw/jianguo/2.jpg"},
    {id:3,img_url:"http://127.0.0.1:3000/img/detailsw/jianguo/3.jpg"},
    ]}, 
    {id:id,pid:28,title:"卫龙 休闲零食 辣条 网红怀旧零食大礼包 办公室零食 亲嘴烧1250g/袋 约80片",now:19.90,old:24.00,imgdetail:"http://127.0.0.1:3000/img/detailimg/latiao.png",
    imglist:[
    {id:1,img_url:"http://127.0.0.1:3000/img/detailsw/latiao/1.jpg"},
    {id:2,img_url:"http://127.0.0.1:3000/img/detailsw/latiao/2.jpg"},
    {id:3,img_url:"http://127.0.0.1:3000/img/detailsw/latiao/3.jpg"},
    ]}, 
    {id:id,pid:29,title:"乐事（Lay’s）无限薯片 休闲零食 104g*3组合装（原味+烤肉+番茄）百事食品",now:18.90,old:25.00,imgdetail:"http://127.0.0.1:3000/img/detailimg/leshi.png",
    imglist:[
    {id:1,img_url:"http://127.0.0.1:3000/img/detailsw/leshi/1.jpg"},
    {id:2,img_url:"http://127.0.0.1:3000/img/detailsw/leshi/2.jpg"}
    ]}, 
    {id:id,pid:30,title:"满199减120三只松鼠 夏威夷果160g 零食坚果炒货孕妇坚果每日坚果干果休闲零食办公室奶油味送开 160g",now:33.90,old:48.00,imgdetail:"http://127.0.0.1:3000/img/detailimg/xiaweiyiguo.png",
    imglist:[
    {id:1,img_url:"http://127.0.0.1:3000/img/detailsw/xiaweiyiguo/1.jpg"},
    {id:2,img_url:"http://127.0.0.1:3000/img/detailsw/xiaweiyiguo/2.jpg"},
    {id:3,img_url:"http://127.0.0.1:3000/img/detailsw/xiaweiyiguo/3.jpg"},
    ]}, 
    {id:id,pid:31,title:"士力架 花生夹心巧克力（全家桶）糖果 巧克力 休闲零食 460g",now:29.80,old:35.00,imgdetail:"http://127.0.0.1:3000/img/detailimg/shilijia.png",
    imglist:[
    {id:1,img_url:"http://127.0.0.1:3000/img/detailsw/shilijia/1.jpg"},
    {id:2,img_url:"http://127.0.0.1:3000/img/detailsw/shilijia/2.jpg"},
    {id:3,img_url:"http://127.0.0.1:3000/img/detailsw/shilijia/3.jpg"},
    ]}, 
    {id:id,pid:32,title:"旺旺 雪饼仙贝京装零食大礼包 膨化食品 办公室休闲饼干 618g",now:18.90,old:23.70,imgdetail:"http://127.0.0.1:3000/img/detailimg/wangwang.png",
    imglist:[
    {id:1,img_url:"http://127.0.0.1:3000/img/detailsw/wangwang/1.jpg"},
    {id:2,img_url:"http://127.0.0.1:3000/img/detailsw/wangwang/2.jpg"},
    {id:3,img_url:"http://127.0.0.1:3000/img/detailsw/wangwang/3.jpg"},
    ]}, 
    {id:id,pid:33,title:"酷兮兮 休闲零食大礼包礼盒一整箱进口食品零食小吃好吃的送女友女生团购礼盒1500g",now:49.90,old:60.00,imgdetail:"http://127.0.0.1:3000/img/detailimg/dazahui.png",
    imglist:[
    {id:1,img_url:"http://127.0.0.1:3000/img/detailsw/dazahui/1.jpg"},
    {id:2,img_url:"http://127.0.0.1:3000/img/detailsw/dazahui/2.jpg"},
    ]}];  
   for(var i=0;i<obj.length;i++){    
    if(id == obj[i].pid){
      res.send(obj[i]);}
   } 
}); 

app.get('/login2',(req,res)=>{
  var uname = req.query.uname
  var upwd = req.query.upwd
  var userlist = [{uid:1,name:'test01',pwd:'123456'},
          {uid:2,name:'test02',pwd:'123456'},{uid:3,name:'test03',pwd:'123456'}]

  for(var item of userlist){
  // for (var i=0;i<userlist.length;i++){
    // var u = userlist[i]
    //console.log(item)
    if(uname === item.name && upwd === item.pwd){
      // console.log(1)
      return res.send({code:1,msg:'登录成功'})}
    }
  
  for(var item of userlist){
      // for (var i=0;i<userlist.length;i++){
        // var u = userlist[i]
        //console.log(item)
        if(uname !== item.name && upwd !== item.pwd){
          // console.log(1)
          return res.send({code:-1,msg:'登录失败'})}
        }
  

  })
/*
app.get("/addCart",(req,res)=>{
  //1:参数  商品id 商品数量
    //1.1：获取参数
    var pid = req.query.pid;
    var count = req.query.count;
    //1.2: 创建正则表达式验证  一定做
    //所有用户参数都需要验证 js第一次 node.js第二次
    //安全 
    var reg = /^[0-9]{1,}$/;     //正则表达式
    if(!reg.test(pid)){          //如果参数验证失败
      res.send({code:-1,msg:"商品编号参数有误"});
      return;               //输出错误信息并停止
    }
    if(!reg.test(count)){
      res.send({code:-2,msg:"商品数量参数有误"});
      return;               //输出错误信息并停止
    }
    //1.3: 如果验证失败返回
    //2:连接数据库
    //3:返回成功值
    res.send({code:1,msg:"添加成功"});
})*/


app.get('/cart',(req,res)=>{
     var id = req.query.id
    //  console.log(id)
     var obj =
   [{pid:1},{pid:2},{pid:3},{pid:4},{pid:5},{pid:6},{pid:7},{pid:8},{pid:9},{pid:10},{pid:11},{pid:12},{pid:13},{pid:14},{pid:15},{pid:16},{pid:17},{pid:18},{pid:19},{pid:20},{pid:21},{pid:22},{pid:23},{pid:24},{pid:25},{pid:26},{pid:27},{pid:28},{pid:29},{pid:30},{pid:31},{pid:32},{pid:33}]
   
   for(var i=0;i<obj.length;i++){    
    if(obj[i].pid==id){
       return res.send({code:1,msg:"存在这个商品"});
      }
   } 

   for(var i=0;i<obj.length;i++){    
    if(obj[i].pid!==id){
       return res.send({code:0,msg:"不存在这个商品"})
      }
   } 
       
})

app.get('/cart2',(req,res)=>{
  var id = req.query.id;
  //console.log(id)
  var obj =
   [{pid:1,title:"恰见乡愁 赣南脐橙10斤 精品大果70mm-80mm 橙子 新鲜水 果 10斤装精品果",price:84.00,
   img:"http://127.0.0.1:3000/img/detailsw/orange/1.jpg"},
   {pid:2,title:"烟台红富士苹果 12个 净重2.6kg以上 单果190-240g 一二级混装 自营水果",price:39.90,
   img:"http://127.0.0.1:3000/img/detailsw/apple/1.jpg"},
   {pid:3,title:"西州蜜哈密瓜 1粒装 单果1.5kg以上 新鲜水果",price:23.90,old:40.00,
   img:"http://127.0.0.1:3000/img/detailsw/hamigua/1.jpg"},
   {pid:4,title:"精品琯溪蜜柚 红心柚子2粒 1.8kg-2.5kg 新鲜水果 新老包装随机发货",price:29.80,
   img:"http://127.0.0.1:3000/img/detailsw/miyou/1.jpg"},
   {pid:5,title:"国产红提 1kg装 新鲜水果",price:23.90,
   img:"http://127.0.0.1:3000/img/detailsw/tizi/1.jpg"},
   {pid:6,title:"山东沾化冬枣 1kg装 单果约16-22g（新鲜水果）",price:25.90,
   img:"http://127.0.0.1:3000/img/detailsw/dongzao/1.jpg"},
   {pid:7,title:"越南进口红心火龙果 4个装 单果约330-420g 新鲜水果",price:39.90,
   img:"http://127.0.0.1:3000/img/detailsw/huolongguo/1.jpg"},
   {pid:8,title:"爱奇果 陕西眉县 徐香绿心猕猴桃 12个 单果80-95g 新鲜水果",price:19.90,
   img:"http://127.0.0.1:3000/img/detailsw/qiyiguo/1.jpg"},
   {pid:9,title:"自然之星 有机生菜 约250g 鹅仔菜 唛仔菜 莴仔菜 莴苣 火锅食材 新鲜蔬菜",price:8.80,
   img:"http://127.0.0.1:3000/img/detailsw/shengcai/1.jpg"},
   {pid:10,title:"绿鲜知 圆白菜 包菜 卷心菜 约500g 火锅食材 新鲜蔬菜",price:8.80,
   img:"http://127.0.0.1:3000/img/detailsw/juanxincai/1.jpg"},
   {pid:11,title:"自然之星 宁夏有机菜心 约250g 菜薹 菜尖 火锅食材 新鲜蔬菜",price:16.80,
   img:"http://127.0.0.1:3000/img/detailsw/caixin/1.jpg"},
   {pid:12,title:"绿鲜知 上海青 小油菜 小青菜 约400g 火锅食材 新鲜蔬菜",price:19.90,
   img:"http://127.0.0.1:3000/img/detailsw/xiaoqingcai/1.jpg"},
   {pid:13,title:"凡谷归真 西红柿 番茄 约1.25kg 新鲜蔬菜",price:19.90,
   img:"http://127.0.0.1:3000/img/detailsw/xihongshi/1.jpg"},
   {pid:14,title:"绿鲜知 西兰花 花椰菜 西蓝花 约300g 火锅食材 新鲜蔬菜",price:8.80,
   img:"http://127.0.0.1:3000/img/detailsw/xilanhua/1.jpg"},
   {pid:15,title:"绿鲜知 云南甜玉米 水果玉米 约2.5kg 6-9根 烧烤食材 新鲜蔬菜",price:23.80,
   img:"http://127.0.0.1:3000/img/detailsw/yumi/1.jpg"},
   {pid:16,title:"爱奇果 陕西眉县 徐香绿心猕猴桃 12个 单果80-95g 新鲜水果",price:19.90,
   img:"http://127.0.0.1:3000/img/detailsw/nangua/1.jpg"},
   {pid:17,title:"海外直采 越南巴沙鱼柳（去皮） BAP认证 450g 2片/袋 原装进口",price:29.90,
   img:"http://127.0.0.1:3000/img/detailsw/yuliu/1.jpg"},
   {pid:18,title:"Clearwater/北极清水 加拿大北极贝切片 100g 15-20片 日料刺身 烧烤食材 海鲜水产 生鲜",price:29.90,
   img:"http://127.0.0.1:3000/img/detailsw/beijibei/1.jpg"},
   {pid:19,title:"海外直采 泰国活冻黑虎虾（大号） 400g 16-20只/盒 原装进口（新老包装随机发送）",price:69.90,
   img:"http://127.0.0.1:3000/img/detailsw/heihuxia/1.jpg"},
   {pid:20,title:"獐子岛 冷冻大连蚬子肉250g 火锅食材 花甲 花蛤 火锅食材 海鲜水产",price:19.90,
   img:"http://127.0.0.1:3000/img/detailsw/huajia/1.jpg"},
   {pid:21,title:"翔泰 冷冻无公害金鲳鱼 BAP认证 700g 2条 袋装 海鲜水产",price:35.90,
   img:"http://127.0.0.1:3000/img/detailsw/jinchangyu/1.jpg"},
   {pid:22,title:"獐子岛 冷冻蒜蓉粉丝扇贝（MSC认证） 200g 6只 虾夷扇贝 海鲜水产",price:16.50,
   img:"http://127.0.0.1:3000/img/detailsw/shanbei/1.jpg"},
   {pid:23,title:"海鲜颂 鲜活刺身生蚝海蛎 梅岭牡蛎 冷水蚝 刺身生蚝2.5kg (约25-30个)",price:159.00,
   img:"http://127.0.0.1:3000/img/detailsw/shenghao/1.jpg"},
   {pid:24,title:"美威 智利原味三文鱼排（大西洋鲑） 240g/袋 4片装",price:49.90,
   img:"http://127.0.0.1:3000/img/detailsw/sanwenyu/1.jpg"}, 
   {pid:25,title:"雀巢（Nestle）脆脆鲨 黑科技小钢琴威化定制套装1088g",price:88.00,
   img:"http://127.0.0.1:3000/img/detailsw/cuicuisha/1.jpg"},
   {pid:26,title:"三只松鼠休闲零食膨化小吃方便面干脆面串烧味小贱拉面丸子85g/袋",price:11.90,
   img:"http://127.0.0.1:3000/img/detailsw/gancuimian/1.jpg"}, 
   {pid:27,title:"碧东混搭营养坚果包 每日坚果 休闲零食 混合坚果 节日礼盒 肩扛大零食包 25g*30包",price:118.00,
   img:"http://127.0.0.1:3000/img/detailsw/jianguo/1.jpg"}, 
   {pid:28,title:"卫龙 休闲零食 辣条 网红怀旧零食大礼包 办公室零食 亲嘴烧1250g/袋 约80片",price:19.90,
   img:"http://127.0.0.1:3000/img/detailsw/latiao/1.jpg"}, 
   {pid:29,title:"乐事（Lay’s）无限薯片 休闲零食 104g*3组合装（原味+烤肉+番茄）百事食品",price:18.90,
   img:"http://127.0.0.1:3000/img/detailsw/leshi/1.jpg"}, 
   {pid:30,title:"满199减120三只松鼠 夏威夷果160g 零食坚果炒货孕妇坚果每日坚果干果休闲零食办公室奶油味送开 160g",price:33.90,img:"http://127.0.0.1:3000/img/detailsw/xiaweiyiguo/1.jpg"}, 
   {pid:31,title:"士力架 花生夹心巧克力（全家桶）糖果 巧克力 休闲零食 460g",price:29.80,
   img:"http://127.0.0.1:3000/img/detailsw/shilijia/1.jpg"}, 
   {pid:32,title:"旺旺 雪饼仙贝京装零食大礼包 膨化食品 办公室休闲饼干 618g",price:18.90,
   img:"http://127.0.0.1:3000/img/detailsw/wangwang/1.jpg"}, 
   {pid:33,title:"酷兮兮 休闲零食大礼包礼盒一整箱进口食品零食小吃好吃的送女友女生团购礼盒1500g",price:49.90,
   img:"http://127.0.0.1:3000/img/detailsw/dazahui/1.jpg"}]

   for(var i=0;i<obj.length;i++){    
    if(id == obj[i].pid){
      res.send(obj[i]);}
   } 

})

app.get('/check',(req,res)=>{
  var id = req.query.id
  console.log(id)
   var sql = 'SELECT count(pid) as c FROM foodcart where pid = ?'
   pool.query(sql,[id],(err,result)=>{
    if(err)throw err;
    var c=result[0].c
   if(c==1){
    res.send({code:1,msg:'商品已存在'})}else if(c==0){res.send({code:0,msg:'添加成功'})}
  })
})

app.get("/cart3",(req,res)=>{
  var pid = req.query.pid,
      title = req.query.title,
      val = req.query.val,
      price = req.query.price,
      img = req.query.img
//console.log(val)
    var sql = "INSERT INTO foodcart(pid,title,val,price,img) VALUES (?,?,?,?,?)";
    pool.query(sql,[pid,title,val,price,img],(err,result)=>{
      if(err)throw err;
      res.send({code:1,msg:'添加成功'})
    })
})

app.get('/cart4',(req,res)=>{
    var id = req.query.id
    if(id){
     var sql = "SELECT * FROM foodcart"
     pool.query(sql,[],(err,result)=>{
       if(err)throw err;
       res.send(result)
       //console.log(result)
     })
    }
})

app.get('/deleteCart',(req,res)=>{
    var id = req.query.id
    var sql = "DELETE FROM foodcart WHERE pid = ?"
    pool.query(sql,[id],(err,result)=>{
      if(err)throw err;
      res.send({code:1,msg:'删除成功'})
    })
})