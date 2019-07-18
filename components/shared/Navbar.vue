<template>
  <nav
    role="navigation"
    id="navbar"
    aria-label="main navigation"
    class="navbar"
  >
    <div class="container">
      <div class="navbar-brand navbar-center"></div>
      <div class="navbar-menu">
        <div class="navbar-brand">
          <div
            class="navbar-item has-text-white"
            style="font-family: impact"
          ></div>
        </div>
        <div class="navbar-end">
          <div @click="openLoginModal" class="navbar-item button">
            Login / Register
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import netlifyIdentity from 'netlify-identity-widget'

if (process.client) {
  netlifyIdentity.init({
    container: '#login-modal'
  })
}
export default {
  methods: {
    openLoginModal() {
      netlifyIdentity.open()
    }
  }
}
</script>

<style lang="scss">
#navbar {
  background-color: $outer-space;
}
</style>
