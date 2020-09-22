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
                    <p class=".text-justify">&nbsp;&nbsp;&nbsp;&nbsp;海南龙利跨境电商集团有限公司，简称“龙利集团”,目前全国已经拥有近10个关联公司，2020年在中央宣布成立海南自贸港的政策下，龙利集团加快了整合步伐，以海南自贸区龙利电子商务有限责任公司为母公司，整合海南龙利国际贸易公司、海南隆利源国际贸易有限公司、亳州龙利再生资源、亳州龙翔木业、亳州隆利丰再生资源、亳州隆利源再生资源、黑龙江龙利再生资源等10个再生资源公司，公司业务扩展到境外的美国、欧洲、东南亚国家，境内海南、广东、广西、福建、上海、重庆、河南、安徽、黑龙江等省份。
龙利集团注册地址海南省海口市海垦路119号九九华府C栋2001，集团公司主营业务为互联网批发：互联网+再生资源、互联网+财税服务、互联网+国际贸易。</p>
                    <p class=".text-justify">&nbsp;&nbsp;&nbsp;&nbsp;欢迎想来海南享受自贸港优惠政策及寻找商机的朋友联系我们！我们提供从工商注册、公司办公、记账报税、在线交易、代办进出口资质、报关清关等一站式服务！</p>
                    <!-- <p class=".text-justify">&nbsp;&nbsp;&nbsp;&nbsp;33333333333333333333333333333333333333333333.</p> -->
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
}
.CompanyIntroduction-container>div>p{
    font-size: 14px;
    line-height: 2.5rem;
}
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
.customer-block {
height: 300px;
}
</style>



