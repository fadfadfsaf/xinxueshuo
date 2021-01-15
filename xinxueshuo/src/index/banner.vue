<template>
  <el-row id="banner">
    <el-col :span="20" :offset="2">
      <el-col :span="15">
        <el-carousel height="450px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="8">123</el-col>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: "banner",
};
</script>
<style scoped>
#banner,
#banner_img {
  height: 500px;
  margin: 100px 0;
  background: #fff;

  padding: 25px;
}
.block {
  width: 60%;
  box-shadow: 0px 0px 10px #215089;
  padding: 25px;
  border: #000 1px solid;
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

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
