<template>
  <div id="app">
    <div class="layui-container">
      <form class="layui-form" action="">
        <div class="layui-form-item">
          <label class="layui-form-label">邮箱</label>
          <div class="layui-input-block">
            <ValidationProvider class="hello" rules="required|email" v-slot="v">
            <input
              type="text"
              name="email"
              placeholder="请输入邮箱"
              class="layui-input"
              v-model="email"
            />
            <span class="errors">{{v.errors[0]}}</span>
            </ValidationProvider>
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码框</label>
          <div class="layui-input-block">
            <ValidationProvider class="hello" rules="required|min:6" v-slot="v">
              <input
                type="password"
                name="password"
                placeholder="请输入密码"
                maxlength="6"
                class="layui-input"
                v-model="password"
              />
              <span class="errors">{{v.errors[0]}}</span>
            </ValidationProvider>
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">验证码</label>
          <div class="layui-input-block">
            <ValidationProvider class="hello" rules="required|length:4" v-slot="v">
              <input
                type="text"
                name="code"
                placeholder="请输入验证码"
                autocomplete="off"
                class="layui-input"
                v-model="code"
                maxlength="4"
              />
              <span class="errors">{{v.errors[0]}}</span>
            </ValidationProvider>
            <span style="display:inline-block;" v-html="verifyCode"></span>
          </div>
        </div>
        <div class="layui-form-item">
          <button type="button" class="layui-btn">立即登录</button>
          <a href="" style="margin-left: 30px">忘记密码?</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ValidationProvider, extend } from 'vee-validate'
import { required, email, length, min } from 'vee-validate/dist/rules'
import { localize } from 'vee-validate'
import zh from 'vee-validate/dist/locale/zh_CN.json'

extend('required', required);
extend('email', email);
extend('length', length);
extend('min', min);
extend('minmax', {
  validate(value, { min, max }) {
    if(value.length >= min && value.length <= max){
      return true;
    }
    return `密码长度为${min}-${max}个字符`;
  },
  params: ['min', 'max']
});

localize({
  'zh-CN': {
    names: {
      email: '邮箱',
      password: '密码',
      code: '验证码',
    },
    messages: {
      ...zh.messages,
      required: '请输入{_field_}',
      email: '请输入正确的邮箱格式',
      length: '验证码长度要求4',
      minmax: '密码长度要求6-8个字符',
      min: '不符合最小长度要求'
    }
  },
  en: {
    // 为每个字段定义不同的内容
    fields: {
      password: {
        required: 'Password cannot be empty!',
        max: 'Are you really going to remember that?',
        min: 'Too few, you want to get doxed?'
      }
    }
  }
})
localize('zh-CN')

export default {
  data () {
    return {
      verifyCode: null,
      code: '',
      email: '',
      password: '',
    }
  },
  components: {
    ValidationProvider
  },
  mounted () {
    axios.get('http://localhost:3000/getCaptcha').then(res => {
      // console.log(res)
      if (res.status === 200) {
        if (res.data.code === 200) {
          this.verifyCode = res.data.data.data
          // console.log(this.verifyCode)
        }
      }
    })
  }
}
</script>

<style lang="scss">
.layui-input {
  width: 190px;
  display: inline-block;
  margin-right: 20px;
}
.hello{
  display: block;
}
.errors{
  color: red;
}
</style>
