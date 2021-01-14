<template>
  <el-row id="banner">
    <el-col :span="20" :offset="2" class="banner">
      <el-row>
        <el-col :span="15" :gutter="20">
          <el-carousel indicator-position="outside">
            <el-carousel-item v-for="A in 4" :key="A">
              <div class="images">{{ A }}</div>
            </el-carousel-item>
          </el-carousel>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: "banner",
};
</script>
<style scoped>
.banner {
  height: 500px;
  margin-top: 60px;
  background: #fff;
  box-shadow: 0px 0px 10px #215089;
  box-sizing: border-box;
  padding: 25px;
}
.images{
  height: 450px;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
