<template>
  <!-- banner_bottom -->
  <el-row id="banner_bottom" :gutter="20">
    <el-col :span="5" :offset="2">
      <div class="aaa">
        <img src="img/vis2018.png" alt="" />
        <h2>国际欢迎大会</h2>
      </div>
    </el-col>
    <el-col :span="5">
      <div class="aaa">
        <img src="img/vis2018.png" alt="" />
        <h2>国际欢迎大会</h2>
      </div>
    </el-col>
    <el-col :span="5">
      <div class="aaa">
        <img src="img/vis2018.png" alt="" />
        <h2>国际欢迎大会</h2>
      </div>
    </el-col>
    <el-col :span="5">
      <div class="aaa">
        <img src="img/vis2018.png" alt="" />
        <h2>国际欢迎大会</h2>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: "banner_bottom",
};
</script>
<style scoped>
#banner_bottom .aaa {
  margin: 20px 0;
  padding: 20px 0;
  background: #f8f8f8;
  text-align: center;
  color: #666;
}
#banner_bottom .aaa:hover {
  color: #333;
  background: #fff;
  box-shadow: 0px 0px 10px #dfdfdf;
}
#banner_bottom .aaa > img {
  width: 50px;
  height: 50px;
}
</style>
