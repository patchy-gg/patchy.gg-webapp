import { auth } from '~/plugins/firebase'
export default ({ store, redirect }) => {
  // loggedIn may be false if the firebase plugin hasn't updated the store yet,
  // so check both
  if (process.client && !store.state.user.loggedIn && !auth.currentUser) {
    return redirect('/auth/login')
  }
}
