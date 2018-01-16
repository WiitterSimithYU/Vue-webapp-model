import Vue from 'vue'
import { jsonParse } from '@/libs/utils'
window.user = jsonParse(localStorage.getItem('user')) || {}

const state = {
  user: {
    realName  : window.user.realName  || '',
    cardId    : window.user.cardId    || ''
  }
}

const mutations = {
  setUser(state, user) {
    state.user.realName = user.realName || '';
    state.user.cardId   = user.cardId   || '';
  }
}

const actions = {
  setUser(context, user) {
    window.user = user;
    localStorage.setItem('user', JSON.stringify(user) || '');
    context.commit('setUser', user);
  }
}

const getters = {
  isSign: state => {
    return (state.user.realName !== '') && (state.user.cardId !== '');
  },
  getUser: state => {
    return state.user;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
