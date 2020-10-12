<template>
    <div id="bozhoulongli">
        <div>
            <a href="http://bozhoulongli.com/"><img src="@/assets/img/bozhoulongli.jpg" alt="亳州龙利回收资源有限公司" data-toggle="tooltip" data-placement="right" title="亳州龙利"></a>
            &emsp;&emsp;亳州龙利再生资源回收有限公司<a>(http://bozhoulongli.com)</a>是谯城区区政办招商引资的一家总部经济企业，2014年在亳州市工商局注册成立，公司主营业务废旧物资回收，公司是以“打造规模规范标准专业信息化再生资源回收供给平台”为公司愿景，正在一步一步做大做强。
公司旗下有海南龙利国际贸易公司、海南自贸区龙利电子商务有限责任公司、海南隆利源国际贸易有限公司、海南大帐房信息咨询有限公司、黑龙江龙利公司、亳州隆利丰、亳州隆利源、亳州龙翔等12个再生资源回收公司，公司业务扩展到海南、广东、广西、福建、上海、重庆、河南、安徽、黑龙江等省份，与我公司固定合作的绿色再生资源分拣中心有260多家。
公司以前的运营模式主要是“实体回收+贸易”，现在的经营模式主要是“城乡垃圾分类+资源回收两网融合新时代运营模式”。
公司的logo——龙利再生，之所以叫“龙利”，一是因为龙是我们中华文化的主要图腾和主要象征，二是公司创始人宋军先生的家乡是在龙扬镇，体现出宋军先生不忘家乡的初心，还有一个原因是宋军先生的属相也是龙；“利”字是因为公司秉持着“利国利民”的原则，所以公司取名为“龙利”。“logo”是一条正在腾飞的龙，象征着公司正在快速的发展，龙身是绿色的，体现出公司环保的理念。
2018年我们公司废纸销售额达到21.86亿，荣获了2017年度中国回收纸行业20强企业的第7名、荣获了2018中国再生资源排行榜百强企业排名第20。2017年度亳州龙利公司进入亳州市纳税50强企业排行榜排名第15名。
2019年废纸销售额突破了30亿，荣获了2018年度中国回收纸行业20强企业的第3名、荣获了2019中国再生资源排行榜百强企业排名第17。宋军先生还被中国再生资源回收利用协会授予副会长的职位。
        </div>

    <!-- 图片宣传 -->
    <div class="laydiv">
        <div class="swiper-slide customer-block"
            v-for="(item,index) in bozhoulongliList"
            :key="index"
        >
            <div class="customer-logo">
                <img v-image-preview class="center-block" id="xuanchuantu" :src="item.img" alt="picture" data-toggle="tooltip" data-placement="right" title="亳州龙利企业照">
            </div>
        </div>

    </div>

    <div>
        &emsp;&emsp;公司一直秉承着“诚信赢天下”作为公司的发展宗旨，正在一步一步做大做强。目前，公司拥有的资产有：在海南有500平方米的商铺和一栋7层的宿舍楼；在亳州，厂房占地30亩。以上资产，公司没有使用任何的银行贷款。

历经风雨数载，宋军先生积累了丰厚的经验，公司在宋总的带领下，秉持着诚信赢天下的宗旨，在今后的发展中将会致力于打造规模规范标准专业信息化再生资源回收供给平台，相信亳州龙利再生资源回收有限公司的发展会越来越辉煌
    </div>
    <!-- 图片宣传 -->
    <div id="myCarousel" class="carousel slide">
    <!-- 轮播（Carousel）指标 -->
        <!-- <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>    -->
        <!-- 轮播（Carousel）项目 -->
        <!-- <div class="carousel-inner">
            <div class="item active">
                <img src="@/assets/img/zhengshu1.jpg" alt="1">
                <img src="@/assets/img/zhengshu2.jpg" alt="2">
            </div>
            <div class="item">
                <img src="@/assets/img/zhengshu3.jpg" alt="3">
                <img src="@/assets/img/zhengshu4.jpg" alt="4">
            </div>
            <div class="item">
                <img src="@/assets/img/zhengshu5.jpg" alt="5">
                <img src="@/assets/img/zhengshu6.jpg" alt="6">
            </div>
        </div> -->
        <!-- 轮播（Carousel）导航 -->
        <!-- <a class="carousel-control left" href="#myCarousel" 
        data-slide="prev"> <span _ngcontent-c3="" aria-hidden="true" class="glyphicon glyphicon-chevron-right"></span></a>
        <a class="carousel-control right" href="#myCarousel" 
        data-slide="next">&rsaquo;</a> -->
        
        
        <!-- <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a> -->
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
      </div>
    
    </div>
    

    
</div>
</template>
<script>
import Swiper from "swiper";
import { WOW } from 'wowjs';
export default {
    name: 'bozhoulongli',
    data(){
        return{
            bozhoulongliList:[
                {
                    img: require("@/assets/img/bozhoulongli1.jpg")
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
    img {
    width: 40%;
    height:40%;
    padding: 2px;
    background: white;
    float: right;
    border: 0.5px solid #efefef;
    border-radius: 15%;
    }
    .laydiv{
        width: 100%;
    }

    #xuanchuantu{
        margin:4%;
        width: 25.3%;
        height: 150px;
        float: left;
        position: relative;
        border: 0.5px solid #efefef;
        border-radius: 15%;

    }
    #myCarousel{
        margin-top: 25px;
    }
    .item > img {
        width: 260px;
        height: 165px;
        position: relative;
        right: 16%;
    }
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