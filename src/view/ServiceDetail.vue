<template>
  <div id="ServiceDetail">
    <div class="banner container-fuild text-center">相关服务</div>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-3" id="myScrollspy">
          <ul class="nav nav-tabs nav-stacked center-block" id="myNav">
            <p>特色服务</p>
            <li
              :class="item.id==id?'active':''"
              v-for="(item,index) in serviceNavList"
              :key="index"
            >
              <a :href="'#'+item.id">{{item.title}}</a>
            </li>
          </ul>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-9 content  wow zoomIn">
          <div class="content-block" v-for="(item,index) in serviceContentList" :key="index">
            <h2 :id="item.id">
              {{item.title}}
              <small>/ {{item.eng_title}}</small>
            </h2>
            <div v-html="item.content"></div>
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
          title: "工商注册"
        },
        {
          id: "section-2",
          title: "公司办公"
        },
        {
          id: "section-3",
          title: "记账报税"
        },
        {
          id: "section-4",
          title: "在线交易"
        },
        {
          id: "section-5",
          title: "进出口资质"
        },
        {
          id: "section-6",
          title: "清关报关"
        },
      ],
      serviceContentList: [
        {
          id: "section-1",
          title: "工商注册",
          eng_title: "business circles register",
          content:
            "<h3>工商注册</h3><p>设立公司须依法向公司登记机关申请设立登记，公司凭营业执照刻制印章，开立银行账户，申请纳税登记。当前，我国公司登记机关是工商行政管理机关。</p><h3>工商注册信息包括以下内容</h3><p>1、企业名称<br/>2、企业注册地址<br/>3、企业法定代表人姓名；一般是由两个人以上的才叫公司，<br/>4、企业注册资本数额；<br/>5、企业类型；<br/>6、企业经营方式和经营范围；有个人独立经营、合伙经营、有限责任公司以及LLC(一种相对比较新的形式，叫做“股份有限责任公司”。4种方式。<br/>7、企业投资人（是公司的就是股东的基本情况，如名称或者姓名、出资额等等）；<br/>8、企业的分支机构。</p>"
        },
        {
          id: "section-2",
          title: "公司办公",
          eng_title: "Company office",
          content:
            "<h3>提供办公场所</h3><p></p>"
        },
        {
          id: "section-3",
          title: "记账报税",
          eng_title: "Book entry and tax return",
          content:
            "<h3>记账报税</h3><p>记账报税就是将公司各种费用、成本、收入等明细登录好并汇总成账簿方便报税时使用，本身是两个步骤。</p><h3>记账</h3><p>1、根据日常发生的业务填制记凭证。记账凭证下要附正式发票。<br/>2、根据记账凭证登记现金日记账、银行存款日记账、各明细分类账。<br/>3、月末，根据全月记账凭证汇总，填制科目汇总表，据科目汇总表登记总账。（如果业务量很大，记账凭证很多，也可以按旬汇总，登记总账）<br/>4、结账。根据总账各账户余额及发生额填报财务报表。</p><h3>报税</h3><p>报税，就是纳税申报。纳税申报是指纳税人按照税法规定的期限和内容向税务机关提交有关纳税事项书面报告的法律行为，是纳税人履行纳税义务、承担法律责任的主要依据，是税务机关税收管理信息的主要来源和税务管理的一项重要制度。</p>"
        },
        {
          id: "section-4",
          title: "在线交易",
          eng_title: "Online trading",
          content:
            "<h3>在线交易</h3><p>具体是指通过互联网进行的交易，其交易主要凭借虚拟货币完成各种实体物品、信息服务、虚拟产品的购买。网上交易主要是在网络的虚拟环境上进行的交易，类似与现实世界当中的商店，差别是利用电子商务的各种手段，达成从买到卖的过程的虚拟交易过程。随着电子信息时代的到来，从上个世纪90年代后，通过互联网完成的交易与日俱增，现在几乎所有物品均可在互联网上交易。</p><h3>在线交易条件</h3><p>1、以实际交易货币为前提，通过银行实现与虚拟货币的转换，购买或出售均以此为交易货币，部分是通过线下的汇款、到货付款等方式实现。<br/>2、有支付机构的依托。当前大多为第三方资金监管和支付机构，如支付宝、财付通等。<br/>3、物流体系的对接。在线交易如购买对象为实体物品，需要完成物品的转接到货。当前经常出现到货慢、途中丢货等情况，因此任何提供在线交易的网站无论自建还是推荐物流机构，都必须保证物流服务的对接和完善。<br/>4、诚信体系。相比现实中面对面的交易，因为互联网的虚拟性，在线交易更需要诚信的确保。所有支付机构都是在努力建设诚信体系，中国较通用的支付宝是通过绑定现实身份证和评价完成，电子贸易领域较通用的在线交易方式为绑定现实企业资料、法人身份证、银行卡和诚信评价来完成，与现实身份绑定、诚信评价是较为通用的手段。</p>"
        },
        {
          id: "section-5",
          title: "进出口资质",
          eng_title: "Online trading",
          content:
            "<h3>进出口资质</h3><p>进出口资质即进出口许可证，是由国家有关机关给进出口商签发的允许商品进口或出口的证书。进出口许可证制度是我国及世界各国普遍采用的对外贸易管制手段之一。采用进出口许可证制度，商品的进出口都要在申领了许可证以后，方可对外签订合同或办理订货手续，没有许可证，一律不准进出口。进出口许可证的主要内容包括： 商品名称、规格、数量、进出口商国别、期限、总值、运输方式、贸易方式和支付方式等等。</p>"
        },
        {
          id: "section-6",
          title: "清关报关",
          eng_title: "Online trading",
          content:
            "<h3>报关</h3><p>报关是指进出口货物装船出运前，向海关申报的手续。按照我国海关法规定: 凡是进出国境的货物，必须经由设有海关的港口、车站、国际航空站，并由货物所有人向海关申报，经过海关放行后，货物才可提取或者装船出口。海关对进出口货物的通关手续，包括接受申报，审核单证，查验货物，征税，结关放行等五道手续。报关流程，方案，手续根据货品的不同从而有着不同的具体方法。</p><br><h3>清关</h3><p>清关（Customs Clearance）即结关，是指进出口或转运货物出入一国关境时，依照各项法律法规和规定应当履行的手续。清关只有在履行各项义务，办理海关申报、查验、征税、放行等手续后，货物才能放行，货主或申报人才能提货。 </p>"
        },
      ]
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    var top = document.getElementById(this.id).offsetTop;
    $(window).scrollTop(top + 300);
    $("#myNav").affix({
      offset: {
        top: 300
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
  background-attachment: scroll;
  background-position: center center;
}
ul.nav-tabs {
  width: 200px;
  margin-top: 40px;
  border-radius: 4px;
  background: #fff;
  z-index: 99999;
  border: 1px solid #474747;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.067);
}
ul.nav-tabs li {
  text-align: center;
  margin: 0;
  border-top: 1px solid #474747;
}
ul.nav-tabs p {
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  background: #474747;
  margin: 0;
  padding: 10px 0;
}
ul.nav-tabs li:first-child {
  border-top: none;
}
ul.nav-tabs li a {
  margin: 0;
  padding: 8px 16px;
  border-radius: 0;
}
ul.nav-tabs li.active a,
ul.nav-tabs li.active a:hover {
  color: #fff;
  background: #474747;
  border: 1px solid #474747;
}
ul.nav-tabs li:first-child a {
  border-radius: 4px 4px 0 0;
}
ul.nav-tabs li:last-child a {
  border-radius: 0 0 4px 4px;
}
ul.nav-tabs.affix {
  top: 30px;
}
.content-block {
  margin: 50px 0;
}
.content-block > h2 {
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
}
small{
  font-size: 1px;
}
</style>
