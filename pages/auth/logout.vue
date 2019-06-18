<template>
  <div>
    Logging out...
  </div>
</template>
<script>
import { auth } from '~/plugins/firebase'
export default {
  name: 'Logout',
  mounted() {
    auth.signOut().then(() => {
      this.$router.push('/')
    })
  }
}
</script>
