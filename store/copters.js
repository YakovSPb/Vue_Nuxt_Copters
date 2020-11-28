export const state = () => ({
  copters: []
})

export const mutations = {
  setUsers(state, copters) {
    state.copters = copters
  }
}

export const actions = {
  async fetch({commit}) {
    const copters = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')
    commit('setUsers', copters)
  }
}

export const getters = {
  copters: s => s.copters
}