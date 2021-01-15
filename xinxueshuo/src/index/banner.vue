<template>
  <el-row>
    <el-col :span="20" :offset="2">
      <div class="block" id="banner">
        <span class="demonstration">默认 Hover 指示器触发</span>
        <el-carousel height="450px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: "banner",
};
</script>
<style scoped>
#banner {
  height: 500px;
  margin: 80px 0;
  background: #fff;
  box-shadow: 0px 0px 10px #215089;
  padding: 25px;
}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 450px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
