<template>
  <section class="container">
    <div class="columns is-centered">
      <div class="column is-one-third">
        <form @submit.prevent="login" class="has-background-light card m-top-l">
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
              <button class="button is-medium is-primary" type="submit">
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
      errorMessage: ''
    }
  },
  methods: {
    login() {
      this.errorMessage = ''
      return auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push('/fantasy')
        })
        .catch(e => {
          this.errorMessage = e.message
        })
    }
  }
}
</script>
