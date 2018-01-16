<template>
  <div class="count-down">
    <video class="video-bg" src="/static/video/video3.mp4" autoplay></video>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        id: this.$route.query.id,
        isOpen: false
      }
    },
    created: function () {
      setTimeout(() => {
        this.isOpen = true;
      }, 10000);

      document.onkeydown = (event) => {
        var e = event || window.event || arguments.callee.caller.arguments[0];
        console.log(e);
        if(e.ctrlKey && e.keyCode == 13 && this.isOpen) {
          // 去开奖页面
          this.$router.push({path: 'wins', query: {id: this.id}});
        }
      };
    },
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .count-down {
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
</style>
