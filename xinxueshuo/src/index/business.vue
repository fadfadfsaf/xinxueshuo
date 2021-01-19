<template>
  <div id="business">
    <!-- 业务版块----------------------------------------------------- -->
    <el-row class="Title">
      <el-col :span="8" :offset="2">
        <span class="rule"></span>
      </el-col>
      <el-col :span="4" class="text">
        <div>
          <p class="text_p">业务版块</p>
          <p>Business Segments</p>
        </div>
      </el-col>
      <el-col :span="8">
        <span class="rule"></span>
      </el-col>
    </el-row>
    <el-row :gutter="50">
      <el-col :span="11" :offset="2" class="info">
        <!-- <div v-for="(v, i) in text" :key="i">
          <h2 class="bus_h2">
            {{ v.h2 }}
          </h2>
          <h1>{{ v.h1 }}</h1>
          <p class="title_bottom_p">{{ v.p }}</p>
        </div> -->
        <div class="text1" v-if="text === 'A'">
          <h2 class="bus_h2">Media department</h2>
          <h1>媒体</h1>
          <p class="title_bottom_p">
            新学说作为专注K12的国际学校行业垂直深度媒体，通过新学说官网、微信公众号、新学说企鹅号、新学说搜狐号、新学说今日头条号、新学说微博、新学说博客等全媒体渠道，联合新学说自有线上线下活动等渠道构建媒体传播矩阵，聚焦国际学校行业信息，为行业学校、机构、从业人员、关注人员等，提供专业、广泛、深度、平等的交流平台及高效的信息服务。2019年，新学说从文字、音频、视频等多种形式入手，构建多媒体矩阵，已实现在更广大范围内介绍国际学校，推广国际教育理念的目的。媒体
            咨询服务
          </p>
        </div>
        <div class="text2" v-else-if="text === 'B'">
          <h2 class="bus_h2">Business Consulting</h2>
          <h1>媒体1</h1>
          <p class="title_bottom_p">TEXT2</p>
        </div>
        <div class="text3" v-else-if="text === 'C'">
          <h2 class="bus_h2">conference activities</h2>
          <h1>媒体2</h1>
          <p class="title_bottom_p">TEXT3</p>
        </div>
        <div class="text4" v-else-if="text === 'D'">
          <h2 class="bus_h2">Institute of Education</h2>
          <h1>媒体3</h1>
          <p class="title_bottom_p">TEXT4</p>
        </div>
      </el-col>
      <el-col :span="8" :offset="1">
        <div class="imgs">
          <img
            @mouseenter="a"
            src="img/1554171403570.jpg"
            alt=""
            class="img1"
          />
          <img
            @mouseenter="b"
            src="img/1554171442726.jpg"
            alt=""
            class="img2"
          />
          <img
            @mouseenter="c"
            src="img/1554171463820.jpg"
            alt=""
            class="img3"
          />
          <img
            @mouseenter="d"
            src="img/1554171887879.jpg"
            alt=""
            class="img4"
          />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // text: [
      //   {
      //     h2: "Media department",
      //     h1: "媒体",
      //     p:
      //       "新学说作为专注K12的国际学校行业垂直深度媒体，通过新学说官网、微信公众号、新学说企鹅号、新学说搜狐号、新学说今日头条号、新学说微博、新学说博客等全媒体渠道，联合新学说自有线上线下活动等渠道构建媒体传播矩阵，聚焦国际学校行业信息，为行业学校、机构、从业人员、关注人员等，提供专业、广泛、深度、平等的交流平台及高效的信息服务。2019年，新学说从文字、音频、视频等多种形式入手，构建多媒体矩阵，已实现在更广大范围内介绍国际学校，推广国际教育理念的目的。媒体 咨询服务",
      //   },
      //   { h2: "Business Consulting", h1: "媒体", p: "新学说" },
      //   { h2: "Institute of Education", h1: "媒体", p: "新学说" },
      //   { h2: "conference activities", h1: "媒体", p: "新学说" },
      // ],
      text: "A",
    };
  },
  methods: {
    a: function () {
      // console.log(this.$data);
      console.log(this.$data.text);
      this.$data.text = "A";
    },
    b: function () {
      this.$data.text = "B";
    },
    c: function () {
      this.$data.text = "C";
    },
    d: function () {
      this.$data.text = "D";
    },
  },
};
</script>

<style>
</style>