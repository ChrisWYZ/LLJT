<template>
    <div id="subsidiaries">
        <div class="F1"> <img class="damen" src="@/assets/img/hainanll1.jpg"  width="250px" height="250px" align="left" alt="海南龙利电商" />
       <p class="wenben">&emsp;&emsp;<strong>海南自贸区龙利电子商务有限责任公司</strong>
       成立于2019年，注册在海南省澄迈县老城镇高新技术产业示范区海南生态软件园，实际办公地点位于海口市海垦路119号，
       为海南龙利跨境电商集团有限公司的控股母公司，公司主营业务为进出口再生纸浆、纸制品、国内废纸贸易及其他再生资源业务。
      2020年公司运营的海南贸易网，致力打造成为海内外再生资源进出口贸易信息化窗口，为再生资源产业链提供供求的线上交易服务，
      成为国际、国内领先的再生资源行业电子商务平台。
      与此同时，办公面积近2000平米，可提供办公租赁业务。我公司同时拥有专业的管理团队、财税团队，可提供一站式工商注册、记账报税、进出口资质、清关报关外贸服务。</p>
    </div>
    <br>
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
    
  <!--  <div calss="F2"> 
      <p>&emsp;&emsp;海南自贸区龙利电子商务有限责任公司成立于2019年，在中央部署的海南自贸港大好形势下：海南自贸区龙利电子商务有限责任公司注册在海南省澄迈县老城镇高新技术产业示范区海南生态软件园，实际办公地点位于海口市海垦路119号，公司主营业务为再生纸浆、纸制品进出口贸易、国内废纸贸易、其他再生资源务。</p>
      
      
    </div>   -->
     
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
                    img: require("@/assets/img/hainanll5.jpg")
                },
                {
                    img: require("@/assets/img/hainanll6.jpg")
                }
            ],
            swiperList: [
                {
                  img: require("@/assets/img/zhengshu7.jpg"),
                  path: "",
                  title: '',
                  content: '',
                },
                {
                  img: require("@/assets/img/zhengshu9.jpg"),
              
                  path: "",
                  title: '',
                  content: '',
                },
                {
                  img: require("@/assets/img/zhengshu8.jpg"),
                  path: "",
                  title: '',
                  content: '',
                },
                {
                  img: require("@/assets/img/zhengshu10.jpg"),
                  path: "",
                  title: '',
                  content: '',
                },
                {
                  img: require("@/assets/img/zhengshu11.jpg"),
                  path: "",
                  title: '',
                  content: '',
                },
                {
                  img: require("@/assets/img/zhengshu12.jpg"),
                  path: "",
                  title: '',
                  content: '',
                },
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

