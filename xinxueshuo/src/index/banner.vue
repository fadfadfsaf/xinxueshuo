<template>
  <el-row id="banner">
    <el-col :span="20" :offset="2" class="banner">
      <el-row>
        <el-col :span="15" :gutter="20">
          <el-carousel indicator-position="outside" class="ban">
            <el-carousel-item class="images" v-for="A in 4" :key="A">
              <div>{{ A }}</div>
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
  margin: 60px 0px;
  background: #fff;
  box-shadow: 0px 0px 10px #215089;
  box-sizing: border-box;
  overflow: none;
  padding: 35px;
}
.ban {
  box-sizing: border-box;
  padding: 35px;
  height: 450px;
  box-sizing: border-box;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
