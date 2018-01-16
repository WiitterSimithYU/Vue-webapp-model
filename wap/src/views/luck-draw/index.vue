<template>
  <div class="luck-draw">
    抽奖 {{ id }}
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'LuckDraw',
    data () {
      return {
        id: this.$route.query.id
      }
    },
    computed: {
      ...mapGetters({
        user: 'getUser'
      })
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
