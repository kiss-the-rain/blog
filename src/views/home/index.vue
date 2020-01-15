<template>
  <div class="container-full">
    <div id="container" :class="{'folded': isFolded}">
      <div id="container-inner">
        <div v-if="!isFolded" id="header">
          <div id="header-inner">
            <div id="header-content" @click="backgroundImage">
              <h1>个人网站</h1>
              <p>Eric Lv's Personal Website</p>
            </div>
          </div>
        </div>
        <div id="content">
          <div id="content-inner">
            <div id="alpha">
              <div id="alpha-inner">
                <div id="page-alpha" style="margin-bottom:2em;">
                  <p>» <router-link to="blog"><a href="#">网络日志（Blog）</a></router-link></p>
                  <p>» <a href="#" @click="handlerLocate('survivor/')">文集：未来世界的幸存者</a> </p>
                  <p>» <a href="#" @click="handlerLocate('road/')">文集：前方的路</a> </p>
                  <!-- p>» <a href="tweets/">Tweets</a></p>
                  <p>» <a href="about.html">About</a></p -->
                </div>
                <div id="up-arrow" @click="handlerFoldContainer">
                  <i v-if="!isFolded" class="el-icon-caret-top" />
                  <i v-if="isFolded" class="el-icon-caret-bottom" />
                </div>
                <div id="page-beta">
                  <!--<div id="photo">
                  <p><img src="person2_150.jpg" /></p>
                  <p class="photo-desc">Taken in 2005</p>
                  </div>-->
                </div>
              </div>
            </div>
            <div id="beta">
              <div id="beta-inner" />
            </div>
          </div>
        </div>
        <div id="footer">
          <div id="footer-inner">
            <div id="footer-content">
              <p><a href="http://www.palemoon.top/">Contact</a> | palemoon.top</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      isFolded: false,
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    backgroundImage() {
    },
    handlerFoldContainer() {
      this.isFolded = !this.isFolded
    },
    handlerLocate(url) {
      this.$router.push(url)
    },
  },
}
</script>
<style lang="scss" scoped>
  .container-full {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("~@/assets/images/cover_bg_1.jpg");
    background-attachment: fixed;
    background-position: 50% 50%;
    transition: All 2s ease;

    #container {
      background-color: rgba(0,0,0,0.3);
      border-radius: 1.5em;
      color: #fefefe;
      overflow: auto;
      position: absolute;
      left: 50%;
      top: 50%;
      width: auto;
      height: auto;
      max-height: 80%;
      min-width: 90%;
      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      -o-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      transition: height 1s ease;
      transition: top 1s ease;

      @media (min-width: 641px) and (max-width:770px){
        min-width:70%;
      }

      @media (min-width: 771px){
        min-width:40%;
      }
      &.folded {
        top: 15px;
        margin-top: 5px;
        height: 40px;
        overflow: hidden;
      }

      #header {
        border-bottom: 1px solid #d3d3d3;
        margin: 1em 0;
        float: left;
        height: 5em;
        width: 100%;

        h1{
          font-size: 1.4rem;
          line-height: 90%;
          color: #fefefe;
          float: none;
          margin: auto;
          padding-top: 0.4rem;
          text-align: center;
          font-weight: bolder;
          text-shadow: 0 1px 1px #333;
        }
        p{
          text-align: center;
        }

      }

      #content {
        clear: both;
        margin: 1.5em 1em 1em 1em;
        #alpha {
          padding-top: 0.5em;
          width: 100%;
          p {
            margin-top: 1em;
            line-height: 180%;
            margin-left: 0.8em;
            background-color: rgba(0,0,0,0.5);
            padding: 0.25rem;
            border-radius: 0.5em;
            text-shadow: 0 1px 1px #333;
          }
          a{
            color: #fefefe;
            text-shadow: 0 1px 1px #333;
          }
          p,a{
            &:hover{
              background-color: #fefefe;
              color: #222;
            }
          }

          #up-arrow {
            position: absolute;
            right: 10px;
            top: 10px;
            width: 21px;
            height: 21px;
            font-size: 17px;
            line-height: 21px;
            text-align: center;
            color: #777;
            background-color: #fefefe;
            border-radius: 100%;
            cursor: n-resize;
          }

        }
      }

      #footer{
        margin: 0 1em;
        border-top: 1px solid #d3d3d3;
        color: #d3d3d3;
        padding-top: 0;
        clear: both;
        line-height: 1.2;
        p{
          text-align: right;
        }
      }
    }

  }
</style>
