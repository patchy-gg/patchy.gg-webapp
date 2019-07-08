<template>
  <section class="container">
    <div class="columns is-centered">
      <div class="column is-one-third">
        <form class="has-background-light card m-top-l" @submit.prevent="login">
          <div class="card-header is-block is-black">
            <div class="card-header-title is-centered">
              <p class="is-size-4 ">Login</p>
            </div>
          </div>
          <div class="card-content has-text-left">
            <div class="field">
              <div class="control">
                <label class="label ">Email</label>
                <input
                  v-model="email"
                  class="input has-text-dark"
                  :class="{ 'is-danger': errorMessage }"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <p v-if="errorMessage" class="help is-danger">
                {{ errorMessage }}
              </p>
            </div>

            <div class="field">
              <div class="control">
                <label class="label ">Password</label>
                <input
                  v-model="password"
                  class="input"
                  :class="{ 'is-danger': errorMessage }"
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <div v-if="errorMessage" class="help is-danger">
              {{ errorMessage }}
            </div>
            <div class="field">
              <button
                class="button is-medium cta cta-button"
                :class="{ 'is-loading': loggingIn }"
                type="submit"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
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
