<template>
    <div class="go-back">
        <span @click="goBack">go back</span>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      return this.$router.go(-1)
    },
  },
}
</script>


<style scoped>
.go-back {
  text-align: left;
  cursor: pointer;
}
</style>