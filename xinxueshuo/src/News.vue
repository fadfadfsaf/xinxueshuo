<template>

</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// import "swiper/css/swiper.css";
export default {
  name: "index",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        // 自动播放
        autoplay: true,
        // 环路播放
        loop: true,
        // 切换效果
        effect: "cube",
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6,
        },
        // 分页器
        pagination: {
          el: ".swiper-pagination",
          // clickable设置为true时，点击分页器的指示点分页器会控制Swiper切换
          clickable: true,
        },
        // 前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
};
</script>

<style scope>
.swiper-container {
    width: 600px;
    height: 300px;
}  
</style> 