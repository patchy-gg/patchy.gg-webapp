<template>
  <div>
    <div class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Logged in
          </h1>
          <h2 class="subtitle">Welcome, {{ name }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Fantasy',
  middleware: 'authenticated',
  computed: {
    name() {
      return this.$store.state.user.email
        ? this.$store.state.user.email.split('@')[0]
        : this.$store.state.user.email
    }
  }
}
</script>
