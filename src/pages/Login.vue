<template>
  <div class="login">
    <div class="login__capition">
      <div class="login__capition__input">
        <input type="text" name="username" id="username" v-model="loginForm.username">
      </div>
      <div class="login__capition__input">
        <input :type="passwordType" name="secret" id="secret" v-model="loginForm.secret">
      </div>
      <div class="login__capition__input">
        <button type="button" name="button"@click="handleLogin">{{$t('login.logIn')}}</button>
        <button class="show-pwd" @click="showPwd">Show/Hide</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loginForm: {
        username: '',
        secret: ''
      },
      passwordType: 'password'
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = 'text'
      } else {
        this.passwordType = 'password'
      }
    },
    handleLogin () {
      console.log(this.username, this.secret)
          this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
            this.loading = false
            this.$router.push({ path: '/' })
          }).catch(() => {
            this.loading = false
          })
      // this.$refs.loginForm.validate(valid => {
      //   if (valid) {
      //     this.loading = true
      //     this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
      //       this.loading = false
      //       this.$router.push({ path: '/' })
      //     }).catch(() => {
      //       this.loading = false
      //     })
      //   } else {
      //     console.log('error submit!!')
      //     return false
      //   }
      // })
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
