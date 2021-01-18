<template>
  <div id="footer">
    <el-row class="footer">
      <el-col :span="6" :offset="2" class="lianx">
        <h4>联系我们 Contact Us：</h4>
        <p>联系：010-52468286</p>
        <p>邮箱：info@xinxueshuo.cn</p>
        <p>手机：15010927730</p>
        <p>地址：北京市朝阳区曙光西里时间国际A座1501</p>
      </el-col>
      <el-col :span="6" :offset="1">
        <h4>链接 Links：</h4>
        <div class="links">
          <img src="img/database.png" alt="" />
          <img src="img/class.png" alt="" />
        </div>
        <div class="apps">
          <img src="img/souhu.png" alt="" />
          <img src="img/toutiao.png" alt="" />
          <img src="img/weibo.png" alt="" />
          <img src="img/zhihu.png" alt="" />
          <img src="img/linked.png" alt="" />
          <img src="img/twitter.png" alt="" />
        </div>
      </el-col>
      <el-col :span="2" :offset="2" class="shop">
        <h4>微信公众号</h4>
        <img src="img/wechat_QR.png" alt="" />
      </el-col>
      <el-col :span="2" :offset="1" class="shop">
        <h4>教育研究院</h4>
        <img src="img/shop.jpg" alt="" />
      </el-col>
    </el-row>
    <el-row id="footer_bottom">
      <el-col :span="20" :offset="2" class="footer-">
        <p>新学说文化传媒有限公司 NEWSCHOOL INSIGHT MEDIA</p>
        <p>
          Copyright © 2018 xinxueshuo.cn All Rights Reserved 京ICP备
          16031987号-1
        </p>
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
#footer {
  background: #215089;
  height: 300px;
  color: #fff;
  padding: 30px 0px 0px;
  margin-top: 20px;
}
.shop img {
  width: 100%;
  height: 100%;
}
h4 {
  padding-bottom: 20px;
}
.lianx p {
  padding-bottom: 10px;
}
.links img {
  width: 48%;
  height: 48px;
  padding-bottom: 10px;
  padding-right: 3px;
}
.apps img {
  width: 15%;
}
#footer_bottom {
  border-top: 1px solid #fff;
  text-align: center;
  margin: 20px;
}
#footer_bottom P {
  padding: 10px 0px;
}
</style>