<template>
  <div id="News">    
    <div class="title text-center">
      <h4> 新闻标题
        <small>/News headlines</small>
      </h4>
      <!-- 添加一个转跳列表 -->
      <div id="nav">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-3" id="myScrollspy">
          <ul class="nav nav-tabs nav-stacked center-block" id="mynav">
            <p>标题</p>
            <li            
              v-for="(item,index) in serviceList" :key="index" @click="toURL(item.id)">
              <a :href="'#'+item.id">{{item.title}}</a>
            </li>
          </ul>
        </div>
      </div>
       <!-- 转跳列表结束 -->
       </div>
    </div>
     

    <div class="container">
      <p>
        1由我亳州龙利、亳州龙翔、海南自贸区龙利电子商务、海南龙利国际贸易、海南隆利源国际贸易五家公司共同出资成立的海南龙利跨境电商集团有限公司，致力打造互联网+再生资源、互联网+国际贸易、互联网+财税服务的跨境电商平台! <br/> 
      </p>  
      <p>
        海南龙利跨境电商集团有限公司，简称“龙利集团”,目前全龙利集团注册地址海南省海口市海垦路119号九九华府C栋2001，集团公司主营业务为互联网批发：互联网+再生资源、互联网+财税服务、互联网+国际贸易。国已经拥有近10个关联公司，2020年在中央宣布成立海南自贸港的政策下，龙利集团加快了整合步伐，以海南自贸区龙利电子商务有限责任公司为母公司，整合海南龙利国际贸易公司、海南隆利源国际贸易有限公司、亳州龙利再生资源、亳州龙翔木业、亳州隆利丰再生资源、亳州隆利源再生资源、黑龙江龙利再生资源等10个再生资源公司，公司业务扩展到境外的美国、欧洲、东南亚国家，境内海南、广东、广西、福建、上海、重庆、河南、安徽、黑龙江等省份。
      2017年公司销售额达到21.86亿，纳税2个亿；2018年销售额突破了30亿，纳税2.98亿；先后荣获2018年度中国再生资源排行榜百强企业20强、2019年中国再生资源排行榜百强企业17强，2019年公司纳税额突破3个亿。
母公司海南自贸区龙利电子商务有限责任公司成立于2019年，注册在海南省澄迈县老城镇高新技术产业示范区海南生态软件园，实际办公地点位于海口市海垦路119号，公司主营业务为再生纸浆、纸制品进出口贸易及国内再生资源贸易。在中央大力发展推动海南自贸港的背景下，我公司享受海南自贸港进出口零关税、企业所得税减半15%的优惠政策，预计到2021年，集团公司纳税突破5个亿。公司办公面积500多平方米，为我公司法人名下自有商铺。
2020年公司注册并开始运营海南贸易网，致力打造成为海内外进出口贸易信息化电子商务服务平台。我公司拥有专业的管理团队、专业的海关报关清关团队、专业的财税服务团队，可为广大企业用户提供从工商注册、记账报税、涉税服务到代办进出口资质、报关清关一站式服务。
公司董事长兼总经理宋军先生，是中国再生资源协会副会长、安徽省亳州市慈善协会副会长、海南省亳州商会执行会长。
公司公司的企业精神：诚实守信、知行合一。
公司的企业口号：用双手开拓进取，用能力创造未来。
公司的企业价值观：言必信、行必果！
      </p>
      <div class="picture"> 
             <img src="../assets/img/hainanll3.jpg" alt="">  
              <img src="../assets/img/banner3.jpg" alt="">                 
        </div>         
      </div>   
     
        
  </div>
</template>
 <script>
 import { WOW } from "wowjs";
export default {
  name: "News",
  data() {
    return {
      serviceList: [
        {
          id: "News-1",
          title: "公司新闻1"
        },
        {
          id: "News-2",
          title: "公司新闻2"
        },
        {
          id: "News-3",
          title: "公司新闻3"
        },
        {
          id: "News-4",
          title: "行业新闻1"
        },
        {
          id: "News-5",
          title: "行业新闻2"
        },
        {
          id: "News-6",
          title: "行业新闻3"
        },
      ]
    }
  },
  methods:{
        diss(){},
        toURL(id){
            // const node = document.querySelector(`.list-item-${index}`)
            // console.log(index)
            if(id == 'News-1'){
                this.$router.push({
                    path: '/news1'
                })
            }
            else if(id == 'News-2'){
                this.$router.push({
                    path: '/news2'
                })
            }
            else if(id == 'News-3'){
                this.$router.push({
                    path: '/news3'
                })
            }
            else if(id == 'News-4'){
                this.$router.push({
                    path: '/news4'
                })
            }
            else if(id == 'News-5'){
                this.$router.push({
                    path: '/news5'
                })
            }
            else if(id == 'News-6'){
                this.$router.push({
                    path: '/news6'
                })
            }

        }
    }
}
</script>
<style >
 #News>.title>h4 {
  font-size: 30px;
  padding-top :15px;
  padding-bottom: 30px;
  border-bottom: 1px solid #ccc;
}
#News>.container{
  width: 70%; 
  
}
#News>.container>p:first-letter {
   font-style:italic;
    font-size: 30px;
    float: left;
    text-shadow: 3px 3px 3px greenyellow;    
}
#News>.container>p {
   font-family:"华文陆帅","Arial","Angsana New";
    font-size: 20px;
    vertical-align:middle;   
}
#News>.container>.picture>img{
    float: left;   
    margin: 10px;
    width:400px;
    height: 400px; 
}
#nav{   
  position:fixed
}
ul.nav-tabs {
  width: 200px;
  margin-top: 40px;
  border-radius: 4px;
  background: #fff;
  z-index: 99999;
  border: 1px solid #474747;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.067);
}
ul.nav-tabs li {
  text-align: center;
  margin: 0;
  border-top: 1px solid #474747;
}
ul.nav-tabs p {
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  background:#474747;
  margin: 0;
  padding: 10px 0;
}
ul.nav-tabs li:first-child {
  border-top: none;
}
ul.nav-tabs li a {
  margin: 0;
  padding: 8px 16px;
  border-radius: 0;
}
ul.nav-tabs li:first-child a {
  border-radius: 4px 4px 0 0;
}
ul.nav-tabs li:last-child a {
  border-radius: 0 0 4px 4px;
}
small{
  font-size: 1px;
}
</style>