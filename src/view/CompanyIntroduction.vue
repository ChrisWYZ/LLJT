<template>
    <div id="CompanyIntroduction">
        <div class="banner container-fuild text-center">关于我们</div>
        <div class="container">
            <div class="row CompanyIntroduction-container">
                <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
                    <img class="img-responsive center-block" src="@/assets/img/LLdamen.jpg">
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6">
                    <h3><strong>&nbsp;&nbsp;龙利集团有限责任公司</strong></h3>
                    <hr />
                    <p class=".text-justify">&nbsp;&nbsp;&nbsp;&nbsp;海南龙利跨境电商集团有限公司，简称“龙利集团”,目前全国已经拥有近10个关联公司，2020年在中央宣布成立海南自贸港的政策下，龙利集团加快了整合步伐，以海南自贸区龙利电子商务有限责任公司为母公司，整合海南龙利国际贸易公司、海南隆利源国际贸易有限公司、亳州龙利再生资源回收有限公司、亳州龙翔木业有限公司共同出资成立了龙利集团，公司业务扩展到境外的美国、欧洲、东南亚国家，境内海南、广东、广西、福建、上海、重庆、河南、安徽、黑龙江等省份。</p>
                    <p class=".text-justify">&nbsp;&nbsp;&nbsp;&nbsp;龙利集团注册地址海南省海口市海垦路119号九九华府C栋2001，集团公司主营业务为互联网批发：互联网+再生资源、互联网+国际贸易、互联网+财税服务。</p>
                </div>
                <!-- 文本介绍 -->
                <div class="wenben">
                    <p>&emsp;&emsp;2017年公司销售额达到21.86亿，纳税2个亿；2018年销售额突破了30亿，纳税2.98亿；先后荣获2018年度中国再生资源排行榜百强企业20强、2019年中国再生资源排行榜百强企业17强，2019年公司纳税额突破3个亿。2020年公司荣获中国（行业）十大影响力品牌和中国自主品牌500强；公司董事长宋军先生荣获中国新时代十大品牌人物。</p>
                    <p>&emsp;&emsp;母公司海南自贸区龙利电子商务有限责任公司成立于2019年，注册在海南省澄迈县老城镇高新技术产业示范区海南生态软件园，实际办公地点位于海口市海垦路119号，公司主营业务为再生纸浆、纸制品进出口贸易及国内再生资源贸易。在中央大力发展推动海南自贸港的背景下，海南自贸港进出口零关税、企业所得税减半15%等的优惠政策下，预计到2021年，集团公司纳税突破5个亿。公司办公面积500多平方米，为我公司法人名下自有商铺。</p>
                    <p>&emsp;&emsp;2020年公司注册并开始运营海南贸易网，致力打造成为海内外进出口贸易信息化电子商务服务平台。我公司拥有专业的管理团队、专业的海关报关清关团队、专业的财税服务团队，可为广大企业用户提供从工商注册、记账报税、涉税服务到代办进出口资质、报关清关一站式服务。</p>
                   <ul> 
                    <li>&emsp;&emsp;公司董事长兼总经理宋军先生，是中国再生资源协会副会长、安徽省亳州市慈善协会副会长、海南省亳州商会执行会长。</li>
                    <li>&emsp;&emsp;公司公司的企业精神：诚实守信、知行合一。</li>
                    <li>&emsp;&emsp;公司的企业口号：用双手开拓进取，用能力创造未来。</li>
                    <li>&emsp;&emsp;公司的企业价值观：言必信、行必果！人人讲诚信、事事做诚信！</li>
                    <li>&emsp;&emsp;合作洽谈：13278915888、13519830705.</li>
                   </ul> 
                </div>
            </div>
        </div>
        <!-- 图片宣传 -->
         <div class="laydiv">
            <!-- <div class="container"> -->
            <!-- <div class="CompangIntroduction-container row"> -->
        <div class="swiper-slide customer-block" 
        >
        
            <div class="customer-logo col-xs-12 col-sm-4 col-md-4">
                <img v-image-preview class="center-block" src="@/assets/img/hainanll1.jpg"  width="250px" height="250px" alt="picture" >
            </div>
            <div class="customer-logo col-xs-12 col-sm-4 col-md-4">
                <img v-image-preview class="center-block" src="@/assets/img/hainanll2.jpg" width="250px" height="250px" alt="picture" >
            </div>
            <div class="customer-logo col-xs-12 col-sm-4 col-md-4">
                <img v-image-preview class="center-block" src="@/assets/img/hainanll3.jpg" width="250px" height="250px" alt="picture" >
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

    </div>
    
</template>
<script>
import { WOW } from 'wowjs';
export default {
    name: 'CompanyIntroduction',
    data(){
        return{
            
        }
    },
    mounted(){
        var wow = new WOW();
        wow.init();
    }
}
</script>
<style scoped>
.banner{
    color: #fff;
    font-size: 30px;
    height: 150px;
    line-height: 150px;
    background-image: url('../assets/img/banner_3.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
    background-position: center center;
}
.row{
    margin-right: 0;
    margin-left: 0;
}
.CompanyIntroduction-container{
    padding: 100px 0;
    color: #808080;
    transition: all ease 0.5s;
    font-size: 16px;
    line-height: 2.5rem;
}
/*.CompanyIntroduction-container>div>p{
    font-size: 16px;
    line-height: 2.5rem;
}
*/
@media screen and (max-width: 997px){
    .CompanyIntroduction-container{
    padding: 10px 0;
    color: #808080;
}
    img {
    width: 40%;
    height:40%;
    padding: 2px;
    background: white;
    float: right;
    border: 0.5px solid #efefef;
    border-radius: 10%;
    }
    .item > img {
        width: 260px;
        height: 165px;
        position: relative;
        right: 16%;
    }
    .laydiv{
        width: 100%;
    }

    #tu{
        margin:4%;
        width: 25.3%;
        height: 150px;
        float: left;
        position: relative;
        border: 0.5px solid #efefef;
        border-radius: 15%;

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

/* 略略略 */
.customer-block {
height: 300px;
}
.wenben{
    margin-top:380px;
}
</style>



