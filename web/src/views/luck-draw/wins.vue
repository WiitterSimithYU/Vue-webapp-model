<template>
  <div class="count-down">
    <video class="video-bg" src="/static/video/video1.mp4" autoplay loop="loop"></video>
    <img class="title-img" :class="id == 1 ? 'big': ''" :src="titleUrl"  />
    <div class="content">
      <div v-cloak class="side" v-if="id < 4">
        <img class="prize-img" :src="prizeUrl"/>
      </div>
      <div class="list" :class="list.length > 10 ? 'w3' : (list.length > 5 ? 'w2' : 'w1')">
        <div class="item" v-for="(item, index) in list" :key="index">
          <div class="real-name">{{ item.name }}</div>
          <div class="card-id" v-if="list.length <= 10">{{ item.userId }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        id: this.$route.query.id,
        titleUrl: '',
        prizeUrl: '',
        list: []
      }
    },
    created: function () {
      var data = {
        priceid: this.id
      };
      this.$http.get('/luck/start', data)
        .then((rs) => {
          console.log(rs);
          if(rs.code == 0) {
            this.list = rs.data.user;
            this.titleUrl = '/static/images/luck-draw-' + rs.data.priceId + '.png';
            this.prizeUrl = '/static/images/prize-' + rs.data.priceId + '.png';
          }
        });
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
    background-color: #000;
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
  .title-img {
    position: absolute;
    top: 0;
    left: 50%;
    width: 29.1667%;
    margin-top: 5%;
    margin-left: -14.58335%;
  }
  .title-img.big {
    width: 31.25%;
    margin-left: -15.625%;
  }
  .content {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin-top: 16%;
    width: 100%;
    padding: 5% 6% 8% 6%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  }
  .side {
    width: 33.33%;
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .prize-img {
    width: 25vw;
  }
  .list {
    height: 27vw;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
  }
  .list.w1 {
    width: 33.33%;
    margin-left: 10%;
  }
  .list.w2 {
    width: 66.66%;
  }
  .list.w3 {
    width: 80%;
  }
  .list.w2 .item {
    margin: 0 1%;
  }
  .list.w3 .item {
    margin: 0 1%;
  }
  .list .item {
    height: 3.95833vw;
    background-color: rgba(37,37,37,.92);
    flex: 0 0 auto;
    display: flex;
  }
  .list .item .real-name {
    width: 9vw;
    height: 100%;
    background: url(/static/images/name-bg.png) no-repeat;
    text-align: center;
    font-size: 1.9vw;
    line-height: 3.95833vw;
    letter-spacing: 1px;
    flex: 0 0 auto;
  }
  .list .item .card-id {
    width: 18vw;
    height: 100%;
    color: #CCA254;
    text-align: center;
    font-size: 1.7vw;
    line-height: 3.95833vw;
    flex: 0 0 auto;
  }
</style>
