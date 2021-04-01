import { Validator } from 'vee-validate'

const dictionary = {
  'zh-CN': {
    messages: {
      required: field => '请输入' + field,
      email: () => '请输入正确的邮箱格式',
      min: () => '不符合最小长度要求',
      length: (field, args) => field + '长度要求' + args,
      confirmed: () => '两次密码不一致'
    },
    attributes: {
      email: '邮箱',
      password: '密码',
      repeactPassword: '密码',
      name: '账号',
      code: '验证码',
      nickname: '昵称',
      username: '用户名'
    }
  }
}

Validator.localize(dictionary)