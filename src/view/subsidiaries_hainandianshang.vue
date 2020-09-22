<template>
    <div id="subsidiaries">
        <div class="F1"> <img class="damen" src="@/assets/img/hainanll1.jpg"  width="250px" height="250px" align="left" alt="海南龙利电商" />
       <p class="wenben">&emsp;&emsp;<strong>海南自贸区龙利电子商务责任有限公司</strong>成立于2019年，注册在海南省澄迈县老城镇高新技术产业示范区海南生态软件园，实际办公地点位于海口市海垦路119号，公司主营业务为进出口再生纸浆、纸制品、国内废纸贸易及其他再生资源业务。
在中央大力发展推动海南自贸港的背景下，我公司享受海南自贸港进出口零关税、企业所得税减半15%的优惠政策，预计到2021年，我公司纳税达1个亿。公司办公面积500多平方米，为我公司法人名下自有商铺。
  我公司拥有专业的管理团队、专业的海关报关清关团队，公司的企业愿景是成为中国领先的再生资源服务商。2020年公司注册并开始运营海南贸易网，致力打造成为海内外进出口贸易信息化电子商务服务平台。</p>
    </div>
    <!-- 图片宣传 -->
    <div class="laydiv">
        <div class="swiper-slide customer-block"
            v-for="(item,index) in List"
            :key="index"
        >
            <div class="customer-logo">
                <img v-image-preview class="center-block" id="tu" :src="item.img" alt="picture">
            </div>
        </div>

    </div>
    <div calss="F2"> 
        <p>欢迎想来海南享受自贸港优惠政策及寻找商机的朋友联系我们！我们提供从工商注册、公司办公、记账报税、在线交易、代办进出口资质、报关清关等一站式服务！</p>
    </div>   
     

    </div>
</template>
<script>
export default {
    name: 'subsidiaries',
    data(){
        return{
            List:[
                {
                    img: require("@/assets/img/bozhoulongli1.jpg")
                },
                {
                    img: require("@/assets/img/bozhoulongli2.jpg")
                },
                {
                    img: require("@/assets/img/bozhoulongli3.jpg")
                }
            ]

        }
    }
}
</script>
<style scoped>
/* .wenben {
    width:600px;
    border: 2px solid #0088dd;
    padding: 10px;
}  */
img {
    width: 40%;
    height:40%;
    padding: 2px;
    background: white;
    float: left;
    border: 0.5px solid #efefef;
    border-radius: 15%;
    }
    .laydiv{
        width: 100%;
    }

    #tu{
        margin:4%;
        width: 25.3%;
        height: 150px;
        float: right;
        position: relative;
        padding: 0px;
        border: 0.5px solid #efefef;
        border-radius: 100px;
        -moz-border-radius: 100px;
        -weebbkit-border-radius: 100px;

    }
    .item > img {
        width: 260px;
        height: 165px;
        position: relative;
        right: 16%;
    }

    .damen{
        margin-right: 30px;
        margin-left:30px;
}
    /* .wenben{
        margin-right:30px;
    } */
</style>

