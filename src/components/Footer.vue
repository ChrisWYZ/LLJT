<template>
  <div id="footer" class="container-fluid">
    <div class="logo">
      <img src="@/assets/img/logo_white.png" alt="logo图">
    </div>
    <p class="title">海南跨境电商集团有限公司官方网站</p>
    <p class="address_tel_fax">
      <span>地址：海南省海口市龙华区海垦路九九华府旁</span>
      <span>Tel：0898-66828131</span>
      <!-- <span>Fax：8888-88888888</span> -->
    </p>
    <p class="email_wx">
      <span>邮箱：2419272698@qq.com</span>
      <span>公司微信号：Cuiyuan13368969378</span>
    </p>
    <p class="copy">Copyright &copy; 2020 龙利集团</p>
  </div>
</template>,
<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>
<style scoped>
#footer {
  width: 100%;
  height: 100%;
  color: #fff;
  background: #474747;
  overflow: hidden;
  text-align: center;
}
.logo {
  
  margin: 30px 46% 20px;
}
.title {
  font-size: 25px;
  margin-bottom: 20px;
}
.address_tel_fax {
  color: #d3d3d3;
  font-size: 14px;
  margin: 10px 0;
}
.email_wx {
  color: #d3d3d3;
  font-size: 14px;
}
.copy {
  color: #d3d3d3;
  font-size: 14px;
  margin: 50px 0 10px;
}
@media screen and (max-width: 997px) {
  .title {
    font-size: 20px;
  }
  .address_tel_fax {
    font-size: 12px;
  }
  .email_wx {

  font-size: 12px;
}
.copy {
  font-size: 12px;
  margin: 30px 0 10px;
}
}

</style>

