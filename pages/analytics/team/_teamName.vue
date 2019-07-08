<template>
  <div></div>
</template>
<script>
export default {
  name: 'Team',
  data() {
    return {
      teamName: this.$router.params.teamName
    }
  },
  computed: {
    teamData() {
      return {
        aa: 'aa'
      }
    }
  }
}
</script>
