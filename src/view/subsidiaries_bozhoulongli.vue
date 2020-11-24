<template>
    <div id="bozhoulongli">
        <div>
            <a href="http://bozhoulongli.com/"><img src="@/assets/img/bozhoulongli.jpg" alt="亳州龙利回收资源有限公司" data-toggle="tooltip" data-placement="right" title="亳州龙利"></a>
            &emsp;&emsp;<strong>亳州龙利再生资源回收有限公司</strong><a>(http://bozhoulongli.com)</a>
            安徽亳州是谯城区区政办招商引资的一家总部经济企业，2014年在亳州市工商局注册成立，公司主营业务废旧物资回收，
            公司是以“打造规模规范标准专业信息化再生资源回收供给平台”为公司愿景，正在一步一步做大做强。
            公司业务扩展到海南、广东、广西、福建、上海、重庆、河南、安徽、黑龙江等省份，与我公司固定合作的绿色再生资源分拣中心有360多家。 
            公司以前的运营模式主要是“实体回收+贸易”，现在的经营模式主要是“城乡垃圾分类+资源回收两网融合新时代运营模式”。
            <br>
            <br>
            <br>
            <br>
           
        </div>
 <br>
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
        &emsp;&emsp;公司一直秉承着“诚信赢天下”作为公司的发展宗旨，正在一步一步做大做强。 历经风雨数载，公司在今后的发展中将会致力于打造规模规范标准专业信息化再生资源回收供给平台。<br>
            <br>
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
                  img: require("@/assets/img/zhengshu4.jpg"),
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
                  img: require("@/assets/img/zhengshu12.jpg"),
                  path: "",
                  title: '',
                  content: '',
                },
                {
                  img: require("@/assets/img/zhengshu4.jpg"),
                  path: "",
                  title: '',
                  content: '',
                },
                {
                  img: require("@/assets/img/zhengshu5.jpg"),
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

