export const state = () => ({
  user: {
    loggedIn: false,
    email: ''
  }
})

export const mutations = {
  setUser(state, payload) {
    state.user = {
      email: payload.email,
      loggedIn: Boolean(payload.email)
    }
  }
}
