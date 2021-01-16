<template>
  <div id="contents">
    <el-row class="Title">
      <el-col :span="8" :offset="2">
        <span class="rule"></span>
      </el-col>
      <el-col :span="4" class="text">
        <div>
          <p>行业动态</p>
          <p>Industry News</p>
        </div>
      </el-col>
      <el-col :span="8">
        <span class="rule"></span>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="contents">
      <el-col :span="10" :offset="2">
        <el-col :span="12">
          <img src="img/1608781879096.png" alt="" />
        </el-col>
        <el-col :span="12">
          <a href=""> 重磅！北京推动设立“公共户”，规范二手学区房交易？ </a>
          <p>全面推进单校划片和多校划片相结合，就近入学更加公平完善。</p>
        </el-col>
      </el-col>
      <el-col :span="10">
        <el-col :span="12"> <img src="img/1608781879096.png" alt="" /></el-col>
        <el-col :span="12">
          <a href=""> 重磅！北京推动设立“公共户”，规范二手学区房交易？ </a>
          <p>全面推进单校划片和多校划片相结合，就近入学更加公平完善。</p>
          </el-col
        ></el-col
      >
    </el-row>
  </div>
</template>
<script>
export default {
  name: "contents",
  data() {
    return {};
  },
};
</script>
<style scoped>
img {
  width: 100%;
}
.Title {
  width: 100%;
  height: auto;
  margin: 20px 0;
  text-align: center;
}
.rule {
  align-self: center;
  display: inline-block;
  height: 1px;
  width: 100%;
  background: #000;
}
.text p {
  width: 100%;
  padding-bottom: 5px;
}
</style>
