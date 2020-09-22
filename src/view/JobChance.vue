<template>
  <div id="JobChance">
    <div class="banner container-fuild text-center">工作机会</div>
    <div class="container-fuild">
    <div class="container row">
      <div class="JobChance-container wow pulse col-md-12">
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
        <button class="center-block btn btn-success btn-lg" data-toggle="modal" data-target="#myModal">联系我们</button>
      </div>

      <div class="JobChance-container wow pulse col-md-12">
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
        <button class="center-block btn btn-success btn-lg" data-toggle="modal" data-target="#myModal">查看详情</button>
      </div>
      <!-- modal框 -->
      <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="myModalLabel">请通过以下方式投递简历</h4>
            </div>
            <div class="modal-body">
              <ol>
                <li>QQ</li>
                <li>邮箱</li>
                <li>微信</li>
              </ol>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

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
  margin: 50px 200px;
  padding: 30px;
  transition: all ease 0.5s;
  border: 1px dashed rgb(54, 141, 24);
}
.JobChance-container h2{
  color: rgb(54, 141, 24);
  font-weight: bolder;
  text-align: center;
}
.JobChance-container p{
font-size: 20px;
  color: rgb(54, 141, 24);
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
    border: 1px dashed rgb(54, 141, 24);
  }
}
</style>

