<template>
  <div id="JobChance">
    <div class="banner container-fuild text-center">工作机会</div>
    <div class="container">
      <div class="JobChance-container wow pulse">
        <h2>推广运营</h2>
        <p>岗位职责</p>
        <ol>
          <li>负责本公司产品运营工作；</li>
          <li>能够根据产品的阶段性做出适合的推广计划，制定推广目标和预算，并负责实施；</li>
          <li>参与产品广告图片的主题策划，提高店铺点击率、浏览量和转化率；</li>
          <li>通过直通车、生意参谋、生意经等工具进行店铺分析，负责统计、分析推广数据及效果，并不断做出优化方案，及时提出营销改进方案；</li>
          <li>协助运营规则的建立，并推动运营方案的落地和实现；</li>
        </ol>
        <p>任职要求</p>
        <ol>
          <li>有较强的执行力，精通营销推广体系和规则；</li>
          <li>有一定的领悟能力，责任心强；</li>
          <li>具有较强的团队合作精神，善于与他人沟通；</li>
          <li>具备基础的Excel、SPSS知识及较强的文档编写能力；</li>
          <li>优秀的项目管理能力，能推动项目的执行与落地；</li>
        </ol>
        <button class="center-block btn btn-warning btn-lg">投递简历</button>
      </div>

      <div class="JobChance-container wow pulse">
        <h2>推广运营</h2>
        <p>岗位职责</p>
        <ol>
          <li>负责本公司产品运营工作；</li>
          <li>能够根据产品的阶段性做出适合的推广计划，制定推广目标和预算，并负责实施；</li>
          <li>参与产品广告图片的主题策划，提高店铺点击率、浏览量和转化率；</li>
          <li>通过直通车、生意参谋、生意经等工具进行店铺分析，负责统计、分析推广数据及效果，并不断做出优化方案，及时提出营销改进方案；</li>
          <li>协助运营规则的建立，并推动运营方案的落地和实现；</li>
        </ol>
        <p>任职要求</p>
        <ol>
          <li>有较强的执行力，精通营销推广体系和规则；</li>
          <li>有一定的领悟能力，责任心强；</li>
          <li>具有较强的团队合作精神，善于与他人沟通；</li>
          <li>具备基础的Excel、SPSS知识及较强的文档编写能力；</li>
          <li>优秀的项目管理能力，能推动项目的执行与落地；</li>
        </ol>
        <button class="center-block btn btn-warning btn-lg">投递简历</button>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from 'wowjs';
export default {
  name: "JobChance",
  data() {
    return {};
  },
  mounted(){
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
.JobChance-container {
  margin: 100px;
  padding: 30px;
  transition: all ease 0.5s;
  border: 1px dashed salmon;
}
.JobChance-container h2{
  color: rgb(255, 102, 19);
  font-weight: bolder;
  text-align: center;
}
.JobChance-container p{
font-size: 20px;
  color: rgb(255, 102, 19);
  font-weight: 700;
}
.JobChance-container ol{
    list-style-type: decimal;
    padding-left: 30px;
}
.JobChance-container ol>li{
    font-size: 14px;
    line-height: 2.7rem;
}
@media screen and (max-width: 997px) {
  .JobChance-container {
    margin: 20px 0;
    padding: 20px;
    border: 1px dashed salmon;
  }
}
</style>

