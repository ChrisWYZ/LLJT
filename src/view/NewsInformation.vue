<template>
    <div id="NewsInformation">
        <div class="container">
            <div class="container text-center">
                <h3>新闻动态</h3>
                <p style="color:#b2b2b2">Company News</p>
            </div>
            <div class="nav container text-center">
                <a href="javascript:void(0)" class="active">公司新闻</a>
                <a href="javascript:void(0)" class="active">行业动态</a>
            </div>
            <ul class="news-container container-fuild">
                <li v-for="(item,index) in newsList" :key="index" class="wow fadeIn"  @click="toURL(item.id)">
                    <div class="content">
                        <p >{{item.title}}</p>
                        <p>{{item.introduce}}</p>
                        <img class="center-block" id="photo" :src="item.logo"  alt="logo">
                    </div>
                    <div class="time">
                        <p>{{item.date}}</p>
                        <span>{{item.year}}</span>
                    </div>
                    <div class="circle">
                        <img src="../assets/img/circle.png">
                        <i class="line center-block"></i>
                    </div>
                    
                </li>
                
            </ul>
            <div class="contaianer-fuild text-center more">
                <i class="glyphicon glyphicon-th"></i>
            </div>
            
        </div>
                <!-- 联系我们 -->
    <div id="contactUs" class="container-fuild text-center">
      <div class="container contactUs-container wow slideInUp">
        <h1>诚实守信&nbsp;知行合一</h1>
        <h3>用双手开拓进取，用能力创造未来。</h3>
        <h3>言必信、行必果！</h3>
        <h3>人人讲诚信、事事做诚信！</h3>
        <router-link to="/ContactUS"><button 
          class="btn btn-default btn-sm"
          onmouseleave="this.style.borderColor='#ffffff'; this.style.backgroundColor='#ffffff'; this.style.color='#3f3f3f';"
          onmouseenter="this.style.backgroundColor='transparent'; this.style.borderColor='#ffffff'; this.style.color='#ffffff';"
        >联系我们</button></router-link>
        <div class="contactUs-contactWay">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
import { WOW } from 'wowjs';
export default {
    name: 'NewsInformation',
    data(){
        return{
            
            newsList:[
                {
                    id: '001',
                    title: '2020中国品牌博鳌峰会',
                    introduce: '非常荣幸我们公司荣获“中国行业十大影响力品牌”奖、“中国自主品牌500强”奖;公司宋军董事长获选“中国新时代十大品牌人物”。',
                    logo: require("@/assets/img/boao01.jpg"),
                    date: '09-27',
                    year: '2020',

                
                    
                },{
                    id: '002',
                    title: '立足海南自贸港、知政策、享优惠、寻商机',
                    introduce: '海南是我国最大的经济特区，具有实施全面深化改革和试验最高水平开放政策的独特优势。',
                    logo: require("@/assets/img/hangye12.jpg"),
                    date: '09-12',
                    year: '2020'
                 
                },{
                    id: '003',
                    title: '赴海口调研会员再生纸浆进口业务开展及两网融合工作推进情况',
                    introduce: '2020年11月第五届中国回收纸行业大会将在海口举办',
                    logo: require("@/assets/img/xinwen0051.jpg"),
                    date: '09-25',
                    year: '2020'
                },{
                    id: '004',
                    title: '海南将成为奢侈品购物消费新天堂',
                    introduce: '离岛免税购物火爆，吸引境外消费回流效果明显，化妆品、香水、首饰、手表等免税商品成为抢手货。',
                    logo: require("@/assets/img/hangye5.jpg"),
                    date: '08-17',
                    year: '2020'
                },{
                    id: '005',
                    title: '战略合作',
                    introduce: '海南自贸区龙利电子商务有限责任公司与北京中税税务咨询股份有限公司正式签约战略合作协议',
                    logo: require("@/assets/img/zhanlve1.jpg"),
                    date: '08-14',
                    year: '2020'
                },{
                    id: '006',
                    title: '海南自由贸易港',
                    introduce: '海南自由贸易港的建设发展趋势',
                    logo: require("@/assets/img/hangye1.jpg"),
                    date: '06-01',
                    year: '2020'
                }
                
            ],
            
           
        }
        
    },
    mounted(){
        var wow = new WOW();
        wow.init();
        
    },
    methods:{
        diss(){},
        toURL(id){
            // const node = document.querySelector(`.list-item-${index}`)
            // console.log(index)
            if(id==1){
                this.$router.push({
                    path: '/news1'
                })
            }
            else if(id==2){
                this.$router.push({
                    path: '/news2'
                })
            }
            else if(id==3){
                this.$router.push({
                    path: '/news3'
                })
            }
            else if(id==4){
                this.$router.push({
                    path: '/news4'
                })
            }
            else if(id==5){
                this.$router.push({
                    path: '/news5'
                })
            }
            else if(id==6){
                this.$router.push({
                    path: '/news6'
                })
            }

        }
    }

}
</script>
<style scoped>
.nav{
    margin: 20px 0;
}
.nav>a{
    display: inline-block;
    text-decoration: none;
    width: 120px;
    height: 45px;
    line-height: 45px;
    color: #333;
    border: 1px solid #333;
}
.nav>a.active{
    color: #333;
    border-color: #333;
}
.nav>a:hover{
    color: rgb(54, 141, 24);
    border-color:  rgb(54, 141, 24);
}
.news-container{
    overflow: hidden;
    margin-bottom: 0;
}
.news-container>li{
    width: 55.6%;
    height: 420px;
    float: left;
    color: #333;
    text-align: right;
    border-left: .5px solid transparent;
    border-right: .5px solid transparent;
}
.news-container>li:hover{
    color: rgb(54, 141, 24);
    border: 1px solid  rgb(54, 141, 24);
    cursor: pointer;
}
.news-container>li:nth-of-type(2n){
    float: right;
    text-align: left;
}
.news-container>li>.content{
    width: 60%;
    float: left;
    padding: 20px 0;
}
.news-container>li>.time{
    width: 20%;
    float: left;
    padding: 10px 0;
}
.news-container>li>.time>p{
    font-size: 30px;
    margin: 5px 0;
}
.news-container>li>.circle{
    width: 20%;
    height: 100%;
    float: left;
    position: relative;
}
.news-container>li>.circle>img{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 20px;
    height: 20px;
}
.news-container>li>.circle>i{
    display: block;
    width: 1px;
    height: 100%;
    background: #707070;
}
.news-container>li:nth-of-type(2n)>.content{
    float: right;
}
.news-container>li:nth-of-type(2n)>.time{
    float: right;
}
.news-container>li:nth-of-type(2n)>.circle{
    float: right;
}
.news-container>li:nth-of-type(1)>.circle>i{
    height: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
}
.more{
    font-size: 25px;
    color: #707070;
}
.more>i{
    cursor: pointer;
}
@media screen and (max-width: 767px){
    .news-container>li{
        width: 100%;
    }
    .news-container>li>.content{
        width: 70%;
        text-align: left;
        float: right;
    }
    .news-container>li>.time{
        width: 30%;
        text-align: left;
        float: right;
    }
    .news-container>li>.circle{
        display: none;
    }
    #customer .customer-logo img {
  width: 94px;
  height: 94px;
  border: 1px solid #ccc;
}
  #customer .customer-logo img {
    margin-left:30px;  
    width: 48px;
    height: 48px;
  }
  #customer .customer-block {
    padding: 30px;
  }
  #customer .customer-block > div {
    padding: 30px 0;
  }

}
  /* 联系我们 */
#contactUs {
  color: #fff;
  height: 400px;
  background: url("../assets/img/kouhao.jpg") 0 0 no-repeat;
  background-size: 100% 100%;
  transition: all ease 0.6s;
  padding: 80px;
}
/* 口号+按钮 */
#contactUs .contactUs-container {
  padding: 0px;
} 
/* 按钮 */
 #contactUs .contactUs-container button {
  width: 300px;
  height: 50px;
  margin-top:20px;
} 
 #contactUs .contactUs-container .contactUs-contactWay span {
  display: inline-block;
  width: 48px;
  height: 48px;
  margin: 30px;
} 
.customer-block {
height: 300px;
}
.news-container>li:nth-of-type(2n-1)>.content>#photo{
    width: 100%;
    height: auto;
    position: relative;
    left: 100px;
}
.news-container>li:nth-of-type(2n)>.content>#photo{
    width: 100%;
    height: auto;
    position: relative;
    right: 100px;
}
</style>