<template>
  <div id="HomePage">
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
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
   
   
    <!-- 我们的服务 -->
    <div id="whyChooseUs" class="conatiner-fuild">
      <div class="container">
        <div class="whyChooseUs-title text-center">
          <p><strong>我们的服务</strong></p>
          <p>THE REASON TO CHOOSING US</p>
        </div>
        <div class="row">
          <div
            class="col-xs-12 col-sm-6 col-md-4 server-wrapper"
            v-for="(item,index) in serverList"
            :key="index"
          >
            <div
              class="server-block wow slideInUp"
              onmouseenter="this.style.color='#28f';this.style.borderColor='#28f'"
              onmouseleave="this.style.color='#666';this.style.borderColor='#ccc'"
            >
              <img class="center-block" :src="item.logo" alt="logo">
              <p class="text-center">{{item.title}}</p>
              <div
                class="text-center"
                v-html="item.content"
                onmouseenter="this.style.color='#28f'"
                onmouseleave="this.style.color='#ccc'"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 一站式服务 -->
    <div id="bigData" class="container-fuild">
      <div class="row bigData-container">
        <div class="col-xs-12 col-sm-12 col-md-6 wow zoomIn">
          <router-link to="/service"><img class="img-responsive" src="@/assets/img/yzsff.jpg" alt="一站式服务"></router-link>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6">
          <h2 class="bigData-title">
            一站式服务
            <small>/ One stop service</small>
          </h2>
          <p>立足于海南自贸区、知政策、享优惠、寻商机。海南龙利跨境电商集团有限公司，致力打造“互联网+再生资源”，“互联网+国际贸易”，“互联网+财税服务”的跨境电商平台，提供省心、放心的工商注册、公司办公、记账报税、在线交易、代办进出口资质、报关清关一站式服务!</p>
          <p>欢迎大家协同合作，资源整合，利益最大化！</p>
          <!-- <h2 class="bigData-device">PC/PAD/Phone &nbsp; 全设备支持</h2> -->
          <router-link to="/servicedetail" class="btn btn-lg btn-block btn-info">了解详情</router-link>
        </div>
      </div>
    </div> 
    <!-- 合作伙伴 -->
    <div id="customer" class="container-fuild">
      <div class="container customer-container">
        <div class="container-1">
          <p class="customer-title text-center">合作伙伴</p>
        </div>
        <div class="swiper-container customer-swiper hidden-xs">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide customer-block"
              v-for="(item,index) in customerList"
              :key="index"
            >
            <!-- 图标地址跳转 -->
              <div class="customer-logo">
            <a :href="item.url">
              <img class="center-block" :src="item.logo" alt="logo">
            </a> <!--  结束 -->
              </div>
              <div class="customer-yh">
                <img src="@/assets/img/yinhao.png" alt="引号">
              </div>
              <div class="customer-content1 wow">
                <small>&emsp;&emsp;{{item.content}}</small>
              </div>
              <div class="customer-content2">{{item.title}}</div>
            </div>
          </div>
          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
        <div class="row visible-xs customer-block">
          <div class="col-xs-12" v-for="(item,index) in customerList" :key="index">
            <div class="customer-logo"> 
              
            </div>
            <div class="customer-yh">
              <img src="@/assets/img/yinhao.png" alt="引号">
            </div>
            <div class="customer-content1">
              <small>{{item.content}}</small>
            </div>
            <div class="customer-content2">
              <small>{{item.title}}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 口号 -->
    <div id="contactUs" class="container-fuild text-center">
      <div class="container contactUs-container wow slideInUp">
        <h1>诚实守信&nbsp;知行合一</h1>
        <h3>用双手开拓进取，用能力创造未来。</h3>
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
</template>
<script>
import Swiper from "swiper";
import { WOW } from 'wowjs';
export default {
  name: "HomePage",
  data() {
    return {
      swiperList: [
        {
          img: require("@/assets/img/lunboxiu1.jpg"),
          path: "",
          title: '',
          content: '',
        },
        {
          img: require("@/assets/img/banner6.jpg"),
          path: "",
          title: '',
          content: '',
        },
        {
          img: require("@/assets/img/lunboxiu2.jpg"),
          path: "",
          title: '',
          content: '',
        },
        {
          img: require("@/assets/img/lunboxiu3.jpg"),
          path: "",
          title: '',
          content: '',
        }
      ],
      customerList: [
        {
          logo: require("@/assets/img/logo_zs.jpg"),
          url:"#",
          title:
            "北京中税税务咨询股份有限公司",
          content:
             "1997年北京中税税务师事务所成立，2018年改名为北京中税税务咨询股份有限公司， 并先后成立了服务不同行业的四家科技公司，"+
             "控股覆盖全国主要城市的咨询服务代理机构， 形成一家全国性大型综合的税务服务集团。中税始终秉承诚信、高效、专业和创新的服务理念，"+
             "在坚守中创新，伴随中国税收征管“互联网 + 税务”的变革，中税通过云端构建“信息化 + 咨询”的“数字中税”服务新模式，"+
             "以标准的信息化产品和专业的咨询服务产品，更广泛的为客户提供更高水平的涉税服务，为企业的经济活动保驾护航。"
        },
        {
          logo: require("@/assets/img/mingxingqiye.jpg"),
          url:"#",
          title:
            "江门市明星纸业有限公司",
          content:
            "江门市明星纸业有限公司成立于1997年11月，是由新会市睦洲糖纸厂与台湾中桥国际股份有限公司共同投资创办中外合资企业。"+
            "地处珠江三角洲南部的睦洲镇,比邻江门、中山、珠海三市交界，紧靠西江主航道,公司占地面积16万平方米，自有发电厂和污水处理厂，"+
            "拥有各类专业技术人员100多人,拥有5条造纸生产线及国内先进的造纸设备和先进环保设备，还有800米长河岸线可停泊2000多吨级的起卸码头。"+
            "在发展经济过程中，江门市明星纸业有限公司一直乘承\“绿色产业、环保先行\”的经营理念，引进国内的先进环保设备和技术，"+
            "努力减少企业生产对环境造成的影响，让各项环保和能耗指标做到优于国家标准，同时江门市明星纸业有限公司在发展企业生产的同时也履行社会责任,积极回馈社会。"
           
          
        },
        {
          logo: require("@/assets/img/logo_zy.png"),
          url:"#",
          title:
            "正业国际控股有限公司",
          content:
            "正业国际控股有限公司(「正业国际」或「公司」，连同其附属公司，并于香港联合交易所上市(「集团」股份代号:3363)，是一家集废纸回收、生态制造环保包装用纸、纸类包装产品的大型包装生产企业集团，为产品包装提供一体化解决方案。自1999年公司成立至今，已发展成为中国具有实力的大型家用空调包装制造商，正业国际深耕于名牌家电、食品调味料及电子产品的包装和高强瓦楞芯纸的研发生产、再生资源管理的服务等行业，也是中国先进的纸制包装生产企业优秀代表。"
        },

      ],
      serverList: [
        {
          logo: require("@/assets/img/a1.png"),
          title: "互联网+再生资源",
          content: "<p>再生纸浆、纸制品进出口贸易</p>国内废纸贸易；其他再生资源服务。"
        },
        {
          logo: require("@/assets/img/a2.png"),
          title: "互联网+国际贸易",
          content: "<p>帮助广大的贸易上下游产业链企业和用户快速实现</p>电商，提供专业的产品平行和垂直购买渠道。"
        },
        {
          logo: require("@/assets/img/a3.png"),
          title: "互联网+财税服务",
          content: "<p>提供工商注册、记账报税（涉税代理服务）</p>代办进出口资质、报关清关一站式服务。"
        },
      ]
    };
  },
  mounted() {
    /* banner-swiper */
    new Swiper(".banner-swiper", {
      loop: true, // 循环模式选项
      effect: 'fade',
      //自动播放
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      // 延迟加载
      lazy: {
        loadPrevNext: true
      },
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true //修改swiper的父元素时，自动初始化swiper
    });
    /* customer-swiper */
    new Swiper(".customer-swiper", {
      loop: true, // 循环模式选项
      slidesPerView: 3,
      //自动播放
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true //修改swiper的父元素时，自动初始化swiper
    });
    /* wowjs动画 */
    var wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true
    })
    wow.init();
  },
  methods: {
    
    // toService(){
    //   this.$router.push({path:"/servicedetail"})
    // }
  },

};
</script>
<style scoped>
/* 整体盒子 */
#HomePage {
  width: 100%;
}

/* 轮播图 */
#swiper {
  height: 600px;
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
  z-index: 999999999;
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
/* 一站式服务 */
#bigData {
  padding: 100px;
  transition: all ease 0.6s;
  box-sizing: border-box;
}
#bigData .bigData-title {
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}
#bigData p {
  font-size: 14px;
  color: #333;
  line-height: 2rem;
}
#bigData .bigData-device {
  margin: 50px 0 20px;
}

/* 口号 */
#contactUs {
  color: #fff;
  height: 400px;
  background: url("../assets/img/kouhao1.jpg") 0 0 no-repeat;
  background-size: 100% 100%;
  transition: all ease 0.6s;
}
.container-1{
  width: 100%;
  height: 300px;
  background: url("../assets/img/timg.jpg") 0 0;
}
.container-1>p{
  position: relative;
  top: 130px;
}
#contactUs .contactUs-container {
  padding-top: 50px;
}
#contactUs .contactUs-container button {
  width: 300px;
  height: 50px;
  margin-top: 40px;
}
#contactUs .contactUs-container .contactUs-contactWay span {
  display: inline-block;
  width: 48px;
  height: 48px;
  margin: 30px;
}
#contactUs .contactUs-container .contactUs-contactWay span:nth-of-type(1) {
  background: url("../assets/img/weixin.png") 0 0 no-repeat;
  background-size: 100% 100%;
}
#contactUs .contactUs-container .contactUs-contactWay span:nth-of-type(2) {
  background: url("../assets/img/weibo2.png") 0 0 no-repeat;
  background-size: 100% 100%;
}
#contactUs .contactUs-container .contactUs-contactWay span:nth-of-type(3) {
  background: url("../assets/img/qq2.png") 0 0 no-repeat;
  background-size: 100% 100%;
}

/* 合作伙伴 */
#customer {
  padding: 50px 0;
  box-sizing: border-box;
  background: #efefef;
  transition: all ease 0.6s;
}
#customer .customer-title {
  font-size: 30px;
  color: rgb(102, 102, 102);
  margin: 0 0 30px;
}
#customer .customer-block {
  background: #fff;
  padding: 30px;
}
#customer .customer-logo img {
  width: 94px;
  height: 94px;
  border: 1px solid #ccc;
}
#customer .customer-yh img {
  width: 34px;
  height: 34px;
}
#customer .customer-content1 {
 
  padding-bottom: 20px;
  border-bottom: 1px solid #0ce9f1;
}
#customer .customer-content2 {
  padding-top: 20px;
 
}


/* 我们的服务 */
#whyChooseUs {
  padding: 100px;
}
#whyChooseUs .whyChooseUs-title {
  margin-bottom: 50px;
}
#whyChooseUs .whyChooseUs-title p:nth-of-type(1) {
  font-size: 25px;
  font-weight: 500;
}
#whyChooseUs .whyChooseUs-title p:nth-of-type(2) {
  font-size: 14px;
}
#whyChooseUs .server-block {
  padding: 50px 20px;
  border: 1px solid #ccc;
  border-bottom: 5px solid #ccc;
}
#whyChooseUs .server-block img {
  width: 180px;
  height: 180px;
}
#whyChooseUs .server-block > p {
  font-size: 20px;
  margin: 30px 0;
}
#whyChooseUs .server-block > div {
  color: #ccc;
}

/* 媒体查询（手机） */
@media screen and (max-width: 768px) {
  #swiper {
    height: 200px;
  }
  #bigData {
    padding: 30px;
  }
  #bigData .bigData-title {
    font-size: 20px;
  }
  #bigData .bigData-device {
    font-size: 20px;
    margin: 10px 0 10px;
  }
  #contactUs {
    height: 200px;
    transition: all ease 0.6s;
  }
  #contactUs .contactUs-container {
    padding-top: 0;
  }
  #contactUs .contactUs-container h1 {
    font-size: 25px;
  }
  #contactUs .contactUs-container h3 {
    font-size: 18px;
  }
  #contactUs .contactUs-container button {
    width: 200px;
    height: 30px;
    margin-top: 20px;
  }
  #contactUs .contactUs-container .contactUs-contactWay span {
    display: inline-block;
    width: 28px;
    height: 28px;
    margin: 10px;
  }
  #customer {
    padding: 30px 0;
    box-sizing: border-box;
    background: #fff;
  }
  #customer .customer-title {
    font-size: 16px;
    font-weight: bold;
  }
  #customer .customer-logo img {
    width: 48px;
    height: 48px;
  }
  #customer .customer-block {
    padding: 30px;
  }
  #customer .customer-block > div {
    padding: 30px 0;
  }
  #whyChooseUs {
    padding: 20px 0;
    transition: all ease 0.6s;
  }
  #whyChooseUs .whyChooseUs-title p:nth-of-type(1) {
    font-size: 20px;
    font-weight: 700;
  }
  #whyChooseUs .whyChooseUs-title p:nth-of-type(2) {
    font-size: 12px;
  }
  #whyChooseUs .server-block {
    padding: 50px 0;
    border: 1px solid #ccc;
    border-bottom: 5px solid #ccc;
  }
  #whyChooseUs .server-block img {
    width: 48px;
    height: 48px;
  }
  #whyChooseUs .server-block > p {
    font-size: 20px;
    margin: 30px 0;
  }
  #whyChooseUs .server-block > div {
    color: #ccc;
  }
}

/* 媒体查询（平板） */
@media screen and (min-width: 768px) and (max-width: 996px) {
  #swiper {
    height: 400px;
  }
  #bigData {
    padding: 60px;
  }
  #bigData .bigData-title {
    font-size: 30px;
  }
  #bigData .bigData-device {
    font-size: 30px;
    margin: 30px 0 15px;
  }
  #contactUs {
    height: 300px;
  }
  #contactUs .contactUs-container {
    padding-top: 50px;
  }
  #contactUs .contactUs-container h1 {
    font-size: 30px;
  }
  #contactUs .contactUs-container h3 {
    font-size: 20px;
  }
  #contactUs .contactUs-container button {
    width: 300px;
    height: 50px;
    margin-top: 30px;
  }
  #contactUs .contactUs-container .contactUs-contactWay span {
    display: inline-block;
    width: 32px;
    height: 32px;
    margin: 15px;
  }
  #customer .customer-title {
    font-size: 24px;
  }
  #whyChooseUs {
    padding: 20px 0;
  }
  .col-xs-12{
    width:180px;
    height: 453px;
  }
}
</style>

