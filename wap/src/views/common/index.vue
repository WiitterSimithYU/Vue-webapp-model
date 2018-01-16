<template>
  <div class="common">
    <router-view></router-view>
    <transition name="fade">
      <div v-cloak v-show="!isSign" @click="sign">我是实名注册框</div>
    </transition>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'Common',
    data () {
      return {
        user: {
          realName: 'david',
          cardId: '23'
        }
      }
    },
    computed: {
      ...mapGetters({
        isSign: 'isSign'
      })
    },
    methods: {
      ...mapActions([
        'setUser'
      ]),
      sign: function () {
        var data = {
          username  : this.user.realName,
          userid    : this.user.cardId
        };
        this.$http.post('/user/login', data)
          .then((rs) => {
            console.log(rs);
            if(rs.code == 0) {
              this.setUser(this.user);
            } else {
              console.log(rs.msg);
            }
          });
      }
    }
  }
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
