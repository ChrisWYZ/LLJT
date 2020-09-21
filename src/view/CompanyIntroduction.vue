<template>
    <div id="CompanyIntroduction">
        <div class="banner container-fuild text-center">关于我们</div>
        <div class="container">
            <div class="row CompanyIntroduction-container">
                <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
                    <img class="img-responsive center-block" src="@/assets/img/LLdamen.jpg">
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6">
                    <h3>&nbsp;&nbsp;龙利集团有限责任公司</h3>
                    <p class=".text-justify">&nbsp;&nbsp;&nbsp;&nbsp;海南自贸区龙利电子商务有限公司成立于2019年，注册在海南省澄迈县老城镇高新技术产业示范区海南生态软件园，实际办公地点位于海口市海垦路119号，公司主营业务为进出口再生纸浆、纸制品、国内废纸贸易及其他再生资源业务。
在中央大力发展推动海南自贸港的背景下，我公司享受海南自贸港进出口零关税、企业所得税减半15%的优惠政策，预计到2021年，我公司纳税达1个亿。公司办公面积500多平方米，为我公司法人名下自有商铺。
  我公司拥有专业的管理团队、专业的海关报关清关团队，公司的企业愿景是成为中国领先的再生资源服务商。2020年公司注册并开始运营海南贸易网，致力打造成为海内外进出口贸易信息化电子商务服务平台。</p>
                    <p class=".text-justify">&nbsp;&nbsp;&nbsp;&nbsp;欢迎想来海南享受自贸港优惠政策及寻找商机的朋友联系我们！我们提供从工商注册、公司办公、记账报税、在线交易、代办进出口资质、报关清关等一站式服务！</p>
                    <!-- <p class=".text-justify">&nbsp;&nbsp;&nbsp;&nbsp;33333333333333333333333333333333333333333333.</p> -->
                </div>
            </div>
        </div>
        <!-- 图片宣传 -->
        
    </div>
    
</template>
<script>
import { WOW } from 'wowjs';
export default {
    name: 'CompanyIntroduction',
    data(){
        return{
            List:[
                {
                    img: require("@/assets/img/hainanll1.jpg")
                },
                {
                    img: require("@/assets/img/hainanll2.jpg")
                },
                {
                    img: require("@/assets/img/hainanll3.jpg")
                }
            ]
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

}
</style>



