<template>
  <div class="first-login">
    <div>
      <span class="caption-login" @click="handle_login">登录</span>
      <span class="vertical-bar"></span>
      <span class="caption-register" @click="handle_register">注册</span>
    </div>
    <div class="da-input"
         v-if="this.option.jude">
      <div>
      <label class="label">{{option.userName.label}}</label>
        <el-tooltip
          :content="option.userName.tip"
          :disabled="option.userName.tip === undefined"
          placement="top-start">
      <input class="da-input__inner"
             :placeholder="option.userName.placeholder || '请输入用户名'"
             v-model="formData.userName"
             size="small">
        </el-tooltip>
      </div>
      <div>
        <label class="label">{{option.password.label}}</label>
        <el-tooltip
          :content="option.password.tip"
          :disabled="option.password.tip === undefined"
          placement="top-start">
        <input class="da-input__inner"
          type="password"
          :placeholder="option.password.placeholder || '请输入密码'"
          v-model="formData.password"
          size="small">
        </el-tooltip>
      </div>
      <button class="login-button" @click="submit_handle"><span>{{option.userName.buttonName}}</span></button>
  </div>
<!--    注册-->
    <div class="da-input"
         v-if="!this.option.jude">
      <div>
        <label class="label">{{option.userNameRegister.label}}</label>
        <el-tooltip
          :content="option.userNameRegister.tip"
          :disabled="option.userNameRegister.tip === undefined"
          placement="top-start">
          <input class="da-input__inner"
                 :placeholder="option.userNameRegister.placeholder"
                 v-model="formData.userName"
                 size="small">
        </el-tooltip>
      </div>
      <div>
        <label class="label">{{option.password.label}}</label>
        <el-tooltip
          :content="option.password.tip"
          :disabled="option.password.tip === undefined"
          placement="top-start">
          <input class="da-input__inner"
                 type="password"
                 :placeholder="option.password.placeholder || '请输入密码'"
                 v-model="formData.password"
                 size="small">
        </el-tooltip>
      </div>
      <button class="login-button" @click="submit_handle"><span>{{option.userNameRegister.buttonName}}</span></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  props: {
    option: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      formData: {
        userName: '',
        password: '',
        code: ''
      }
    }
  },
  methods: {
    handle_login: function (e) {
      this.$emit('login', 12)
    },
    handle_register: function (e) {
      console.log(this.option.userNameRegister.buttonName)
      this.$emit('register', e)
    },
    submit_handle: function (e) {
      this.$emit('submit', this.formData)
    }
  }
}
</script>

<style lang="scss" scoped>
  .first-login {
    display: inline-block;
    line-height: 1;
    width: 250px;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    // 禁止元素的文字被选中
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 0;
    font-size: 14px;
    border-radius: 4px;
    &:hover,
    &:focus {
      color: #409eff;
      border-color: #c6e2ff;
      background-color: #ecf5ff;
    }
  }
  .vertical-bar{
    padding-left: 40px;
    border-right: 1px solid #dddddd;
  }
  .caption-register{
    padding-left: 40px;
  }
  //input 的style属性
  .da-input {
    margin-top: 10px;
    position: relative;
    font-size: 14px;
    display: inline-block;
    .da-input__inner {
      margin-top: 20px;
      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      border-radius: 4px;
      border: 1px solid #dcdfe6;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 30px;
      line-height: 40px;
      outline: none;
      padding-left: 15px;
      transition: border-color .2s cubic-bezier(.645,.045,.355,1);

      &:focus {
        outline: none;
        border-color: #409eff;
      }
      &.is-disabled {
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        color: #c0c4cc;
        cursor: not-allowed;
      }
    }
  }
  //标签的样式
  .label{
    display: inline-block;
    width: 55px;
    text-align: right;
  }
  //登录的样式
  .login-button{
    margin-top: 20px;
    height: 30px;
    width: 191px;
    margin-left: 55px;
    border-radius: 4px;
    border: 1px #409eff solid;
    background-color: #409eff;
  }

</style>
