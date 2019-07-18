<template>
  <section class="container">
    <div data-netlify-identity-menu></div>
    <!-- Add a simpler button:
      Simple button that will open the modal.
    -->
    <div data-netlify-identity-button>Login with Netlify Identity</div>
  </section>
</template>

<script>
import { auth } from '~/plugins/firebase'
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
      loggingIn: false
    }
  },
  methods: {
    login() {
      this.errorMessage = ''
      this.loggingIn = true
      return auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.loggingIn = false
          this.$router.push('/fantasy')
        })
        .catch(e => {
          this.loggingIn = false
          this.errorMessage = e.message
        })
    }
  }
}
</script>
