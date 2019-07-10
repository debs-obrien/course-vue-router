<template>
  <div>
    <h1>Login</h1>
    <input v-model="username" />
    <input v-model="password" type="password" />
    <button @click="login">Log In</button>
  </div>
</template>

<script>
import store from '@/store'
export default {
  data() {
    return {
      username: null,
      password: null
    };
  },
  methods: {
    login () {
      store.user = this.username
      const redirectPath = this.$route.query.redirect || '/'
      this.$router.push(redirectPath)
    }
  }
};
</script>

<style lang="scss" scoped></style>
