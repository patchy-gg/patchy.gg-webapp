<template>
  <div class="section has-text-light">Email: {{ user.email }}</div>
</template>
<script>
export default {
  name: 'Authenticated',
  middleware: 'authenticated',
  computed: {
    user() {
      return this.$store.state.user
    }
  }
}
</script>
