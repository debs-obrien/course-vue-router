<template>
  <div class="login">
    <h1>Login</h1>
    <div class="form">
    <label for="username">Username</label>
    <input v-model="username" name="username" />
    <label for="password">Password</label>
    <input v-model="password" type="password" />
    <button @click="logIn">Log In</button>
    </div>
  </div>
</template>

<script>
import store from '@/store'
export default {
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    logIn() {
      store.user = this.username
      const redirectPath = this.$route.query.redirect || '/'
      this.$router.push(redirectPath)
    }
  }
};
</script>

<style scoped>
.form{
  display:flex;
  flex-direction: column;
  max-width:400px;
  margin: 0 auto;
}

input{
  border: 1px solid green;
  padding: 10px;
  margin-bottom:20px;
}

</style>
