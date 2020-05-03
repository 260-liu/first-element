<template>
  <div id="app">
   <login @login="good" @register="better" @submit="submit" :option="option"></login>
  </div>
</template>

<script>
import Login from '../packages/components/login/login'
export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { Login },
  data: function () {
    return {
      option: {
        jude: true,
        userName: {
          label: '用户名:',
          tip: '请输入用户名',
          placeholder: '请输入用户名',
          buttonName: '登录'
        },
        password: {
          label: '密码:',
          tip: '请输入密码',
          placeholder: '请输入密码'
        },
        userNameRegister: {
          label: '用户名',
          tip: '请输入用户名',
          placeholder: '邮箱/手机号/用户名',
          buttonName: '注册'
        }
      }
    }
  },
  methods: {
    good () {
      console.log('123')
      this.option.jude = true
    },
    better () {
      this.option.jude = false
    },
    submit (e) {
      var remind = {
        '用户名为空!': (e.userName === null || e.userName === ''),
        '密码为空！': (e.password == null || e.password === '')
      }
      for (var key in remind) {
        if (remind[key]) {
          alert(key)
          return false
        }
      }
    }
  }
}
</script>

<style lang="scss">

</style>
