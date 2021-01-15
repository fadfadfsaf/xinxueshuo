<template>
  <el-row id="banner" :gutter="20">
    <el-col :span="20" :offset="2" :gutter="20" class="ban">
      <el-col :span="17">
        <el-carousel height="500px">
          <el-carousel-item v-for="item in imsges" :key="item">
            <!-- <h3 class="small">{{ item }}</h3> -->
            <!-- <div>{{ item }}</div> -->
            <img :src="''+item.src" />
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="7">
        <img src="img/1592992689120.jpg" alt="" />
        <img src="img/1591580942683.jpg" alt="" />
      </el-col>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: "banner",
  data() {
    return {
      imsges: [
        { src: "img/1568861703402.jpg" },
        { src: "img/1591580942683.jpg" },
        { src: "img/1592992689120.jpg" },
        { src: "img/1592992689120.jpg" },
      ],
    };
  },
};
</script>
<style scoped>
#banner,
#banner_img {
  height: 650px;
  margin: 100px 0;
  background: #fff;
  padding: 25px;
}
img {
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
}
.ban {
  padding: 20px;
  box-shadow: 0px 0px 20px #215089;
}
.block {
  width: 60%;
  box-shadow: 0px 0px 10px #215089;
  padding: 25px;
  border: #000 1px solid;
}
</style>
