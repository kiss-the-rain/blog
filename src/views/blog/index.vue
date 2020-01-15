<template>
  <div class="container-wrap colorlib-blog">
    <el-carousel :height="windowHeight" direction="vertical" :autoplay="true" :loop="true">
      <el-carousel-item>
        <div class="row">
          <div class="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
            <div class="slider-text-inner js-fullheight">
              <div class="desc">
                <h1>Hi! <br>I'm Eric</h1>
                <h2>other blog <a href="https://www.cnblogs.com/pale-moon/" target="_blank">cnblog</a></h2>
                <!--<p><a class="btn btn-primary btn-learn">Download CV <i class="icon-download4" /></a></p>-->
              </div>
            </div>
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="row">
          <div class="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
            <div class="slider-text-inner js-fullheight">
              <div class="desc">
                <h1>I am <br>a Programmer</h1>
                <h2>other blog <a href="https://www.cnblogs.com/pale-moon/" target="_blank">cnblog</a></h2>
                <!--<p><a class="btn btn-primary btn-learn">View Portfolio <i class="icon-briefcase3" /></a></p>-->
              </div>
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  data() {
    return {
      windowHeight: window.innerHeight + 'px',
    }
  },
  created() {
  },
  mounted() {
    const that = this
    window.onresize = function windowResize() {
      // 通过捕获系统的onresize事件触发我们需要执行的事件
      const h = window.innerHeight
      that.windowHeight = h + 'px'
    }
  },
  methods: {
  },
}
</script>
<style lang="scss" scoped>
  .el-carousel__item{
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom center;
    &:nth-child(2n) {
      background-image: url("~@/assets/images/img_bg_1.jpg");
    }

    &:nth-child(2n+1) {
      background-image: url("~@/assets/images/img_bg_2.jpg");
    }
    .row{
      height: 100%;
      .slider-text-inner{
        display: table;
        min-height: 500px;
        .desc{
          display: table-cell;
          vertical-align: middle;
          min-height: 700px;
          padding: 2.5em;
          position: relative;
        }
        h1{
          margin-bottom: 20px;
          font-size: 60px;
          line-height: 1.3;
          font-weight: 700;
        }
        h2{
          font-size: 18px;
          line-height: 1.5;
          margin-bottom: 30px;
          font-weight: 300;
          font-family: "Quicksand", Arial, sans-serif;
        }
      }
    }

  }

</style>
