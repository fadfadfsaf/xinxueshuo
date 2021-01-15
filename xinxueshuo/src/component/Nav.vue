<template>
  <el-row id="nav">
    <el-col :span="20" :offset="2">
      <el-menu
        mode="horizontal"
        background-color="#215089"
        text-color="#fff"
        active-text-color="#fff"
      >
        <el-menu-item index="1">首 页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">关于我们</template>
          <el-menu-item index="2-1">加入我们</el-menu-item>
          <el-menu-item index="2-2">联系我们</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">资讯中心</el-menu-item>
        <el-submenu index="4">
          <template slot="title">会议活动</template>
          <el-menu-item index="4-1">VIS国际学校发展大会</el-menu-item>
          <el-menu-item index="4-2">FIT国际教师风采大赛</el-menu-item>
          <el-menu-item index="4-3">最具影响力校长</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">研究院</template>
          <el-menu-item index="5-1">校长专业发展项目</el-menu-item>
          <el-menu-item index="5-2">国际学院职能岗位课程</el-menu-item>
          <el-menu-item index="5-3">研究报告</el-menu-item>
          <el-menu-item index="5-4">国际学院内参</el-menu-item>
          <el-menu-item index="5-5">专家智库</el-menu-item>
        </el-submenu>
        <el-menu-item index="6">咨询服务</el-menu-item>
        <el-menu-item index="7"> 会 员</el-menu-item>
        <el-menu-item index="8">国际学校四库全</el-menu-item>
        <el-menu-item index="9">在线课堂</el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: "Nav",
  data() {
    return {
      state: 1,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    // 我这里监听的是侧边的滚动条
    handleScroll: () => {
      // 滚动时，距离顶部的距离
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      var nav = document.getElementById("nav");
      if (scrollTop >= 60) {
        nav.style = "top:0";
      } else {
        nav.style = "top:50";
      }
    },
  },
};
</script>
<style scoped>
#nav {
  width: 100%;
  background: #215089;
  color: #ffffff;
  position: fixed;
  z-index: 999;
}
</style>