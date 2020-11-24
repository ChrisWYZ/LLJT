<template>
  <div id="ServiceDetail">
    <div class="banner container-fuild text-center">相关服务</div>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 " id="myScrollspy">
          <ul class="nav nav-pills center-block" id="myNav">
            <p>特色服务</p>
            <li class="col-xs-12 col-sm-12 col-md-2"
              :class="item.id==id?'active':''"
              v-for="(item,index) in serviceNavList"
              :key="index"
            >
              <a :href="'#'+item.id">{{item.title}}</a>
            </li>
          </ul>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 content  wow zoomIn">
          <div class="content-block" v-for="(item,index) in serviceContentList" :key="index">
            <h2 :id="item.id">
              {{item.title}}
              
              <small>/ {{item.eng_title}}</small>
            </h2>
            <div v-html="item.content"></div> 
            <div class="Service-img">
                <img v-image-preview class="center-block" id="tu" :src="item.img" alt="picture">
            </div>             
          </div>       
        </div>

            

      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from "wowjs";
export default {
  name: "ServiceDetail",
  data() {
    return {
      id: "section-1",
      serviceNavList: [
        {
          id: "section-1",
          title: "工商注册",
          
        },
        {
          id: "section-2",
          title: "公司办公",
          
        },
        {
          id: "section-3",
          title: "记账报税",
           children: []
        },
        {
          id: "section-4",
          title: "在线交易",
           
        },
        {
          id: "section-5",
          title: "进出口资质",
          
        },
        {
          id: "section-6",
          title: "清关报关",
           
        },
      ],
      serviceContentList: [
        {
          id: "section-1",
          title: "工商注册",
          eng_title: "business circles register",         
          content:
            "<h3>工商注册</h3><p> &emsp;&emsp;针对海南自贸港，众多省外企业或投资人对在海南省内注册公司流程复杂，手续繁琐，不知从何入手等问题；我司提供专业的一站式服务，从公司注册审核名称、提交资料、领取执照、到刻章，轻松四步快速领取营业执照，无需法人股东到现场，全程省心代办，足不出户轻松办理。 " +
           " </p><h3>工商注册信息包括以下内容</h3>"+
           "<p> &emsp;&emsp;1、企业名称;"+
           "<br/> &emsp;&emsp;2、法人及全体股东身份信息；"+
           "<br/> &emsp;&emsp;3、法人及全体股东个人U盾；"+
           "<br/> &emsp;&emsp;4、企业注册资本数额；"+
           "<br/> &emsp;&emsp;5、股东出资比例；"+
           "<br/> &emsp;&emsp;6、经营范围;"+
           "<br/> &emsp;&emsp;7、注册地址。</p>"+
           "&emsp;&emsp;业务联系电话：13519830705。</p>",
           
           img: require("@/assets/img/waimaotu1.jpg")
          
       },
       
        {
          id: "section-2",
          title: "公司办公",
          eng_title: "Company office",
          content:
            "<h3>提供办公场所</h3><p>&emsp;&emsp;当今经济社会，每个人、每家企业都不是不相关联的个体。"+
            "只有加强联系，抱团发展，才能更大空间地上升。传统写字楼多为单体写字楼，难免势单力薄；"+
            "办公集群，邻居即是生意伙伴是时代的新潮流。"+
           "我司现有1300平方米的集群式办公区域，位于海口市海垦路119号九九华府C栋2002，"+
           "可分隔20-400平米的办公场地定制，也提供工位租赁，方便小微企业公司注册、公司办公、整合资源、共同发展。</p>"+
           "&emsp;&emsp;业务联系电话：13519830705。</p>",
            img: require("@/assets/img/waimaotu2.jpg")
      },
        {
          id: "section-3",
          title: "记账报税",
          eng_title: "Book entry and tax return",
          content:
            "<h3>记账报税</h3><p> &emsp;&emsp;全国大多企业开办初期财税人力成本高，记账、税务处理不规范，经营模式以及业务流程未能与税收管理有效衔接，"+
            "对税收优惠政策理解不够，利用不足，未能充分享受税收红利。我司有专业的注册会计师，专业的财税管理团队提供代理记账和申报纳税。"+
            "并且在中央部署的海南自贸港大好形势下，龙利集团与北京中税税务咨询股份有限公司签署战略合作协议，强强联手，打造以海南自贸港为核心的权威性、"+
            "专业性的全国财税服务体系。</p>"+
            "&emsp;&emsp;业务联系电话：13519830705。</p>",
            img: require("@/assets/img/waimaotu3.jpg")
        },
        {
          id: "section-4",
          title: "在线交易",
          eng_title: "Online trading",
          content:
            "<h3>在线交易</h3><p> &emsp;&emsp;2020年公司注册并开始运营海南贸易网，打造国际、国内领先的再生资源交易平台，从信息的供求，到产品的供求和销售，"+
            "为再生资源行业提供一个信息化的B2B2C电子商务平台。通过海南贸易网来进行在线交易，线上线下相结合，实现多渠道销售，帮助入驻企业实现新零售，"+
            "这样可以减少企业在常规交易中投入的人力、财力和物流方面的绝大费用，降低了成本。为全球的贸易上下游企业提供专业的产品平行和垂直购买渠道。</p>"+
            "&emsp;&emsp;业务联系电话：13519830705。</p>",
            img: require("@/assets/img/waimaotu4.jpg")
        },
        {
          id: "section-5",
          title: "进出口资质",
          eng_title: "Online trading",
          content:
            "<h3>进出口资质</h3><p> &emsp;&emsp;常规贸易公司如果要经营进出口业务，需要办理进出口资质，我司可代办此资质，另外贸公司除了一般公司所需要的执照，"+
            "税务登记，银行，印章还需要商务局，海关，商检，外管局，贸促会，退税局等部门办理相关手续。"+
            "<br>&emsp;&emsp;上述部门会出具一种或者两三种证书。根据经营商品和相关资质不同，需要注册的部门不一样。"+
            "<br>&emsp;&emsp;龙利集团与北京中税税务咨询股份有限公司签署战略合作协议可提供覆盖海关、外管、税务完整的业务链的多维服务方案，"+
            "为企业合规经营保驾护航的同时，兼顾企业税收盈利点的挖掘和落地。</p>"+
            "&emsp;&emsp;业务联系电话：13519830705。</p>",
            img: require("@/assets/img/waimaotu5.jpg")
        },
        {
          id: "section-6",
          title: "清关报关",
          eng_title: "Online trading",
          content:
            "<h3>报关</h3><p> &emsp;&emsp;报关是指凡是进出国境的货物，必须经由设有海关的港口、车站、国际航空站，并由货物所有人向海关申报，经过海关放行后，货物才可提取或者装船出口。"+"</p><br><h3>清关</h3><p> &emsp;&emsp;清关是指进出口或转运货物出入一国关境时，依照各项法律法规和规定应当履行的手续。"+
            "清关只有在履行各项义务，办理海关申报、查验、征税、放行等手续后，货物才能放行，货主或申报人才能提货。"+
            "<br>&emsp;&emsp; 我司拥有专业的海关报关清关团队，提供专业高效的报关服务，满足客户的不同需求，快速完成货物报关清关流程。</p>"+
            "&emsp;&emsp;业务联系电话：13519830705。</p>",
            img: require("@/assets/img/waimaotu6.jpg")
        },
      ],
            
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    var top = document.getElementById(this.id).offsetTop;
    $(window).scrollTop(top + 400);
    $("#myNav").affix({
      offset: {
        top: 400
      }
    });
    var wow = new WOW();
    wow.init();
  }
};
</script>
<style scoped>
.banner {
  color: #fff;
  font-size: 30px;
  height: 150px;
  line-height: 150px;
  background-image: url("../assets/img/banner_2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
}
.nav {
  padding: 10px;
}
ul.nav-pills {
  width: 100%;
  margin-top: 20px;
  border-radius: 4px;
  background: #fff;
  z-index: 99999;
  border: 0px solid #474747;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.067);
}
ul.nav-pills li {
  text-align: center;
  margin: 0;
  border-top: 1px solid #474747;
}
ul.nav-pills p {
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  background: #474747;
  margin: 0;
  padding: 10px 0;
}
ul.nav-pills li:first-child {
  border-top: none;
}
ul.nav-pills li a {
  margin: 0;
  border-radius: 4px;
}
ul.nav-pills li.active a,
ul.nav-pills li.active a:hover {
  color: #fff;
  background: #474747;
  border: 1px solid #474747;
}
ul.nav-pills li:first-child a {
  border-radius: 4px 4px 0 0;
}
ul.nav-pills li:last-child a {
  border-radius: 0 0 4px 4px;
}
ul.nav-pills.affix {
  top: 3px;
  left: 0;
  right: 0;
   position: static; 
}
.content-block {
  margin: 50px 0;
}
.content-block > h2 {
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
}
 /* 
   img {
    width: 269px;
    height:269px;
    padding: 2px;
    background: white;
    border: 0.5px solid #efefef;
    border-radius: 15%;
    transform: scale(1.1,1.1);
    }
      

  .Service-img{
    
    }
    */
.Service-img img{
    width: 100%;
    height:420px;
    padding: 2px;
    background: white;
    border: 0.5px solid #efefef;
    border-radius: 10%;
    transition: all 0.5s ease;
}


 
small{
  font-size: 1px;
}
</style>
