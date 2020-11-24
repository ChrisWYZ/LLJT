<template>
    <div id="CompanyIntroduction">
        <div class="banner container-fuild text-center">关于我们</div>
        <div class="container">
            <div class="row CompanyIntroduction-container">
                <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
                    <img class="img-responsive center-block" src="@/assets/img/LLdamen.jpg">
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6">
                    <h3><strong>&nbsp;&nbsp;龙利集团简介</strong></h3>
                    <hr />
                    <p class=".text-justify">&nbsp;&nbsp;&nbsp;&nbsp;<strong>海南龙利跨境电商集团有限公司</strong><a>（www.longlijituan.com）</a>，简称“龙利集团”,从事国内废纸贸易近20年，海南龙利跨境电商集团有限公司，简称“龙利集团”,2020年在中央宣布成立海南自贸港的政策下，龙利集团加快了整合步伐，以海南自贸区龙利电子商务有限责任公司为母公司，海南龙利国际贸易、海南隆利源国际贸易、亳州龙利、亳州龙翔共同出资成立龙利集团，另有亳州隆利丰、亳州隆利源、亳州隆利旺、亳州龙创、亳州宏隆生态、黑龙江龙利等10多个关联公司，公司业务扩展到境外的美国、欧洲、东南亚国家，境内海南、广东、广西、福建、上海、重庆、河南、安徽、黑龙江等省份。</p>
                    <p class=".text-justify">&nbsp;&nbsp;&nbsp;&nbsp;利集团注册地址海南省海口市海垦路119号九九华府C栋2001，集团公司主营业务为：互联网+再生资源、互联网+财税服务、互联网+国际贸易。</p>
                </div>
                <!-- 文本介绍 -->
                <div class="wenben">
                    <p>&emsp;&emsp;董事长兼总经理为宋军，安徽省亳州人，共产党员，中国再生资源利用协会副会长，安徽省亳州市慈善协会副会长，海南省亳州商会执行会长，海南省亳州商会谯城分会会长。</p>
                    <p>&emsp;&emsp;2017年公司销售额达到21.86亿，纳税2个亿；2018年销售额突破了30亿，纳税2.98亿；先后荣获2018年度中国再生资源排行榜百强企业20强、2019年中国再生资源排行榜百强企业17强，2019年公司纳税额突破3个亿。2020年公司荣获中国（行业）十大影响力品牌和中国自主品牌 500强。 在中央大力发展推动海南自贸港的背景下，进出口零关税、企业所得税减至15%等多项优惠政策，预计到2021年，集团公司营业收入突破百亿。</p>
                    <br>
                   <ul>
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



