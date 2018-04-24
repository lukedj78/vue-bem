<template>
  <div class="login">
    <div class="login__capition">
      <div class="login__capition__input">
        <input type="text" name="username" id="username" v-model="username">
      </div>
      <div class="login__capition__input">
        <input type="password" name="secret" id="secret" v-model="secret">
      </div>
      <div class="login__capition__input">
        <input type="submit" name="secret" value="Send">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      username: '',
      secret: ''
    }
  }
}
</script>

<style scoped>
.login {display: table; height: 70vh; width:100%; position: relative; z-index:1; padding: 0 20px;}
.login__capition {display: table-cell;vertical-align: middle;text-align: center;color:#fff;}
.login__capition__input {margin: 10px;}
.login__capition__input input[type="password"], .login__capition__input input[type="text"] {height: 40px;width: 300px;border: 1px solid; padding: 10px;}

</style>
