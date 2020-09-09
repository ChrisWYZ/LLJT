<template>
  <div id="GoTop" @click="GoTop()">
    <span>
      <img src="@/assets/img/goTop.png" alt="">
    </span>
  </div>
</template>
<script>
export default {
  name: "GoTop",
  data() {
    return {
      flag: false
    };
  },
  methods: {
    GoTop() {
      (function smoothscroll() {
        var currentScroll =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
          window.requestAnimationFrame(smoothscroll);
          window.scrollTo(0, currentScroll - currentScroll / 10);
        }
      })();
    }
  }
};
</script>
<style scoped>
#GoTop {
  width: 50px;
  height: 50px;
  position: fixed;
  right: 5%;
  bottom: 10%;
  z-index: 99999999;
  cursor: pointer;
  opacity: 0.2;
}
#GoTop > span {
  display: block;
  width: 100%;
  
  height: 100%;
}
</style>
