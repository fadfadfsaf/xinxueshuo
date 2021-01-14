<template>
  <el-row class="banner">
    <el-col :span="24" :offset="2" class="lianx">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="A in 4" :key="A">
          <h3>{{ A }}</h3>
        </el-carousel-item>
      </el-carousel>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: "banner",
};
</script>
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
