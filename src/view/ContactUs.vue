<template>
  <div id="ContactUs">
    <div class="banner container-fuild text-center">联系我们</div>
    <div class="container">
      <div class="container-fuild ContactUs-container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-6">
           海南龙利跨境电商集团有限公司 
            <br>
            <form class="form-horizontal" role="form">
              <div class="form-group">
                <label for="name" class="col-sm-2 control-label">地址</label>
                <div class="col-sm-10 col-xs-12">
                  海南省海口市龙华区南海大道海垦路九九华府119号（二楼）
                </div>
              </div>
              <div class="form-group">
                <label for="email" class="col-sm-2 control-label">邮箱</label>
                <div class="col-sm-10">
                  2419272698@qq.com
                </div>
              </div>
              <div class="form-group">
                <label for="tel" class="col-sm-2 control-label">电话</label>
                <div class="col-sm-10">
                  0898-66828131
                </div>
              </div>
              
              <div class="form-group">
                <label for="content" class="col-sm-2 control-label">微信</label>
                <div class="col-sm-10">
                  1404366753
                </div>
              </div><!--
            </form>
            
           亳州龙利再生资源回收有限公司
            <br>
            <form class="form-horizontal" role="form">
              <div class="form-group">
                <label for="name" class="col-sm-2 control-label">地址</label>
                <div class="col-sm-10 col-xs-12">
                  安徽省亳州市谯城区张良路东侧白芍路北侧（亳州龙利再生资源回收有限公司）
                </div>
              </div>
              <div class="form-group">
                <label for="email" class="col-sm-2 control-label">邮箱</label>
                <div class="col-sm-10">
                  2419272698@qq.com
                </div>
              </div>
              <div class="form-group">
                <label for="tel" class="col-sm-2 control-label">电话</label>
                <div class="col-sm-10">
                  0898-66828131
                </div>
              </div>
              <div class="form-group">
                <label for="content" class="col-sm-2 control-label">微信</label>
                <div class="col-sm-10">
                  1404366753
                </div>
              </div>
              -->
            </form>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6">
            <div id="map" class="wow zoomIn"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { WOW } from 'wowjs'
import BMap from "BMap";
export default {
  name: "ContactUs",
  data() {
    return {};
  },
  mounted() {
    var map = new BMap.Map("map"); // 创建地图实例
    var point = new BMap.Point(110.311713,20.005252); // 创建点坐标
    map.centerAndZoom(point, 18); // 初始化地图，设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    var marker = new BMap.Marker(point); // 创建标注
    map.addOverlay(marker); // 将标注添加到地图中
    var opts = {
      width: 50, // 信息窗口宽度
      height: 10, // 信息窗口高度
      title: "海南跨境电商集团有限公司" // 信息窗口标题
    };
    var infoWindow = new BMap.InfoWindow(
      "海南自贸区电子商务有限公司（二楼）",
      opts
    ); // 创建信息窗口对象
    map.openInfoWindow(infoWindow, map.getCenter()); // 打开信息窗口
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
  background-image: url("../assets/img/banner_1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: center center;
}
.ContactUs-container {
  padding: 80px 0;
  transition: all ease 0.5s;
  box-sizing: border-box;
}
#map {
  width: 100%;
  height: 365px;
}
.row {
  margin-right: 0;
  margin-left: 0;
}
@media screen and (max-width: 997px) {
  .ContactUs-container {
    padding: 20px 0;
  }
}
.form-group{
  margin: 2%;
}
.form-group>div{
  padding: 7px 15px 0;
}
</style>

