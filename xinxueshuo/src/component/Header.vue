<template>
  <div id="header">
    <el-row class="header">
      <el-col :span="4" :offset="2" class="aaa">
        <img src="img/logo.png" alt="" />
      </el-col>
      <el-col :span="4" :offset="14" class="text">
        <a href="000">
          <span class="el-icon-zoom-in"></span>
        </a>
        <div>
          <img src="img/zh.png" alt="" />
          <span>中文</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "header",
  data() {
    return {};
  },
};
</script>
<style scoped>
#header {
  height: 50px;
  padding: 10px 0px;
  line-height: 50px;
}
.aaa > img {
  width: auto;
  height: 50px;
}
.text a {
  font-size: 32px;
}
.text img {
  width: auto;
  height: 25px;
  padding-top: 10px;
}
.text div {
  display: inline-block;
  font-size: 14px;
}
</style>