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
      <p>&emsp;&emsp;海南自贸区龙利电子商务有限责任公司成立于2019年，在中央部署的海南自贸港大好形势下：海南自贸区龙利电子商务有限责任公司注册在海南省澄迈县老城镇高新技术产业示范区海南生态软件园，实际办公地点位于海口市海垦路119号，公司主营业务为再生纸浆、纸制品进出口贸易、国内废纸贸易、其他互联网+再生资源业务及互联网+财税服务。
      <p>&emsp;&emsp;由海南自贸区龙利电子商务有限责任公司为母公司，整合海南龙利国际贸易公司、海南隆利源国际贸易有限公司、亳州龙利再生资源回收有限公司、亳州龙翔木业有限公司共同出资成立了海南龙利跨境电商集团有限公司（以下简称：龙利集团），“龙利集团”经过近20年的发展演变，目前全国已经拥有近10个关联公司，旗下另有亳州隆利丰再生资源、亳州隆利源再生资源、黑龙江龙利再生资源等10个再生资源公司，公司业务扩展到境外的美国、欧洲、东南亚国家，境内海南、广东、广西、福建、上海、重庆、河南、安徽、黑龙江等省份。</p>
      <p>&emsp;&emsp;2020年公司注册并开始运营海南贸易网，致力打造成为海内外进出口贸易信息化电子商务服务平台。我公司拥有专业的管理财税服务团队、专业的海关报关清关团队，为我们的用户企业提供一站式服务。
公司法人宋军先生，是中国再生资源协会副会长、安徽省亳州市慈善协会副会长、海南省亳州商会执行会长。</p>
      <p> &emsp;&emsp;龙利集团公司2017年公司销售额达到21.86亿，2018年销售额突破30亿，进入亳州市纳税50强企业排行榜的前15名，进入七台河市纳税百强企业的第8名。2019年集团旗下龙利再生资源销售额31.98亿，荣获2019年度中国回收纸行业20强企业的第3名、 2019年度中国再生资源排行榜百强企业的第17名。2020年集团旗下龙利电商业务发展到境外的美国、欧洲、东南亚国家；与境内北京中税集团、江阴市华磊液压公司强强联手，打造互联网+财税服务、互联网+再生资源体系。</p>
      
    </div>   
     
<!-- 轮播图 -->
    <div id="swiper" class="container-fuild">
      <div class="swiper-container banner-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in swiperList" :key="index">
            <img class="swiper-lazy" :data-src="item.img" alt="轮播图">
            <div class="swiper-lazy-preloader"></div>
            <div class="swiper-slide-title">
                <h1>{{item.title}}</h1>
                <p>{{item.content}}</p>
            </div>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <!-- 1234567890- -->
        <!-- <div class="swiper-pagination"></div> -->

        <!-- 如果需要导航按钮 -->
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->
      </div>
    
    </div>
    </div>
</template>
<script>
import Swiper from "swiper";
import { WOW } from 'wowjs';
export default {
    name: 'subsidiaries',
    data(){
        return{
            List:[
                {
                    img: require("@/assets/img/dianshang01.jpg")
                },
                {
                    img: require("@/assets/img/bozhoulongli2.jpg")
                },
                {
                    img: require("@/assets/img/bozhoulongli3.jpg")
                }
            ],
            swiperList: [
                {
                  img: require("@/assets/img/xinwen1.jpg"),
                  path: "",
                  title: '',
                  content: '',
                },
                {
                  img: require("@/assets/img/zhengshu1.jpg"),
              
                  path: "",
                  title: '',
                  content: '',
                },
                {
                  img: require("@/assets/img/zhengshu2.jpg"),
                  path: "",
                  title: '',
                  content: '',
                },
                {
                  img: require("@/assets/img/zhengshu3.jpg"),
                  path: "",
                  title: '',
                  content: '',
                }
              ],

        }
    },
mounted() {
    /* banner-swiper */
    new Swiper(".banner-swiper", {
      loop: true, // 循环模式选项
      effect : 'coverflow',
      slidesPerView: 3,
      centeredSlides: true,
      //自动播放
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      // 如果需要分页器
      // pagination: {
      //   el: ".swiper-pagination",
      //   dynamicBullets: true,
      // },
      // 如果需要前进后退按钮
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev"
      // },
      // 延迟加载
      lazy: {
        loadPrevNext: true
      },
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true //修改swiper的父元素时，自动初始化swiper
    });
    
    
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
    img:hover {
        transform: scale(1.1,1.1);
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
    /* 轮播图 */
#swiper {
  height: auto;
  position: relative;
  left: 0%;
  top: 0;
}
#swiper .banner-swiper {
  width: 100%;
  height: 100%;
}
#swiper .banner-swiper .swiper-slide img {
  width: 100%;
  height: 100%;
}
#swiper .banner-swiper .swiper-slide{
  position: relative;
}
#swiper .banner-swiper .swiper-slide-title {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99999999;
  width: 100%;
  height: 100%;
  color: #fff;
  /* background: rgba(51, 51, 51, 0.534); */
  text-align: center;
  line-height: 80px;
}
#swiper .banner-swiper .swiper-slide-title > h1{
  font-size: 50px;
  margin-top: 12%;
}
#swiper .banner-swiper .swiper-slide-title > p{
  font-size: 20px;
  margin-top: 1%;
  font-weight: 700;
}
</style>

