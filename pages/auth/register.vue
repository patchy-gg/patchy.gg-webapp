<template>
  <form>
    <input v-model="email" type="text" placeholder="email" />
    <div id="password-quality" :class="{ passwordIsGood: passwordIsGood }">
      {{ passwordIsGood ? 'Password is strong ' : 'Password is not strong' }}
    </div>
    <input v-model="password" type="password" placeholder="password" />
    <input
      v-model="passwordCheck"
      type="password"
      placeholder="repeat password"
    />
    <button type="submit" @click.prevent="register">Register</button>
  </form>
</template>

<script>
import { auth } from '~/plugins/firebase'
export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: '',
      passwordCheck: ''
    }
  },
  methods: {
    register() {
      auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .catch(e => {
          console.error(e)
        })
        .then(userCredential => {
          this.$router.push('/authenticated')
        })
    }
  },
  computed: {
    passwordIsGood() {
      return (
        this.password &&
        this.passwordCheck &&
        this.password === this.passwordCheck
      )
    }
  }
}
</script>
