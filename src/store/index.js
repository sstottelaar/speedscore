import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showSettings: false,
    players: [
      {
        name: 'Player 1',
        score: 0,
      },
      {
        name: 'Player 2',
        score: 0,
      },
    ],
  },
  mutations: {
    SET_VALUE(state, payload) {
      state[payload.key] = payload.value
    },
    SET_PLAYER_NAME(state, payload) {
      state.players[payload.player].name = payload.val
    },
    UPDATE_PLAYER_SCORE(state, payload) {
      state.players[payload].score++
    },
  },
  actions: {
    toggleSettingsModal({ commit, state }) {
      commit('SET_VALUE', generatePayload('showSettings', !state.showSettings))
    },
    updatePlayerName({ commit }, payload) {
      commit('SET_PLAYER_NAME', payload)
    },
    increaseScore({ commit, state }, payload) {
      let getScoreForPlayer = state.players[payload].score

      console.log(getScoreForPlayer)

      if (getScoreForPlayer <= 20) {
        commit('UPDATE_PLAYER_SCORE', payload)
      } else {
        console.log('Player has won!')
      }
    },
  },
  modules: {},
})

// Helper functions
function generatePayload(key, value) {
  return {
    key: key,
    value: value,
  }
}
