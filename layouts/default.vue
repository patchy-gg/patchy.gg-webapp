<template>
  <div class="">
    <Navbar />
    <nuxt />
    <div id="login-modal"></div>
  </div>
</template>

<script>
import Navbar from '~/components/shared/Navbar'
export default {
  head() {
    return {
      script: [
        {
          src: 'https://identity.netlify.com/v1/netlify-identity-widget.js'
        }
      ]
    }
  },
  components: {
    Navbar
  }
}
</script>
