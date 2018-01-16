<template>
  <div class="luck-draw">
    <video class="video-bg" src="/static/video/video1.mp4" autoplay loop="loop"></video>
    <img class="title-img" src="/static/images/luck-title.png" />
    <img class="qrcode-box" src="/static/images/qrcode-box.png" />
    <div class="qrcode" v-html="qrcode"></div>
    <img class="start-btn" @click="start" src="/static/images/start-btn.png"/>
  </div>
</template>

<script>
  var qr = require('qr-image');
  export default {
    data () {
      return {
        id: this.$route.query.id,
        qrcode: ''
      }
    },
    created: function () {
      this.qrcode = qr.imageSync('https://www.baidu.com', { type: 'svg' });
    },
    methods: {
      start: function () {
        var data = {
          priceid: this.id
        };
        this.$http.get('/luck/open', data)
          .then((rs) => {
            console.log(rs);
            if(rs.code == 0) {
              // 去倒计时页面
              this.$router.push({path: 'count-down', query: {id: this.id}});
            }
          });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .luck-draw {
    position: relative;
    width: 100%;
    min-height: 100vh;
    padding-top: 56.25%;
    overflow: hidden;
  }
  .video-bg {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1920px;
    height: 1080px;
    margin-top: -540px;
    margin-left: -960px;
  }
  .qrcode-box {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 54.479%;
    margin-left: -27.2395%;
  }
  .title-img {
    position: absolute;
    top: 0;
    left: 50%;
    width: 24.479%;
    margin-top: 4.5%;
    margin-left: -12.2395%;
  }
  .qrcode {
    position: absolute;
    bottom: 12.5vw;
    left: 50%;
    width: 25.8%;
    margin-left: -12.9%;
  }
  .start-btn {
    position: absolute;
    width: 6.6667%;
    right: 5.729%;
    bottom: 4.6875%;
    cursor: pointer;
  }
</style>
