import { auth } from './firebase'

export default context => {
  const { store } = context
  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged(user => {
      if (user) {
        return resolve(store.commit('setUser', user))
      } else {
        return resolve(store.commit('setUser', { loggedIn: false }))
      }
    })
  })
}
