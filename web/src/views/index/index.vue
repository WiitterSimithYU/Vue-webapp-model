<template>
  <div class="index">
    index
    <router-link to="/logout">退出</router-link>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    created: function () {
      this.$http.get('/voting/content')
        .then((rs) => {
          console.log(rs);
        });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
