<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li>
            <router-link :to="{name: 'login'}">登入</router-link>
          </li>
          <li class="layui-this">注册</li>
        </ul>
        <div class="layui-form layui-tab-content" id="LAY_ucm" style="padding: 20px 0;">
          <div class="layui-tab-item layui-show">
            <div class="layui-form layui-form-pane">
              <form method="post">
                <div class="layui-form-item">
                  <label for="L_email" class="layui-form-label">用户名</label>
                  <div class="layui-input-inline">
                    <input
                      type="text"
                      autocomplete="off"
                      class="layui-input"
                      placeholder="请填写用户名"
                      name="username"
                      v-model="username"
                      v-validate="'required|email'"
                    />
                  </div>
                  <div class="layui-form-mid layui-word-aux">将会成为您唯一的登入名</div>
                  <div class="layui-row">
                    <span style="color: #c00;">{{errors.first('username')}}</span>
                  </div>
                </div>
                <div class="layui-form-item">
                  <label for="L_username" class="layui-form-label">昵称</label>
                  <div class="layui-input-inline">
                    <input
                      type="text"
                      autocomplete="off"
                      class="layui-input"
                      placeholder="请输入昵称"
                      name="nickname"
                      v-model="nickname"
                      v-validate="'required|min:3'"
                    />
                  </div>
                  <div class="layui-row">
                    <span style="color: #c00;">{{errors.first('nickname')}}</span>
                  </div>
                </div>
                <div class="layui-form-item">
                  <label for="L_pass" class="layui-form-label">密码</label>
                  <div class="layui-input-inline">
                    <input
                      type="password"
                      autocomplete="off"
                      class="layui-input"
                      name="password"
                      placeholder="请输入密码"
                      v-model="password"
                      v-validate="'required|min:6'"
                      maxlength="16"
                    />
                  </div>
                  <div class="layui-form-mid layui-word-aux">6到16个字符</div>
                  <div class="layui-row">
                    <span style="color: #c00;">{{errors.first('password')}}</span>
                  </div>
                </div>
                <div class="layui-form-item">
                  <label for="L_repass" class="layui-form-label">确认密码</label>
                  <div class="layui-input-inline">
                    <input
                      type="password"
                      autocomplete="off"
                      class="layui-input"
                      name="repeactPassword"
                      placeholder="请确认密码"
                      v-model="repeactPassword"
                      v-validate="'required|min:6|confirmed:password'"
                      maxlength="16"
                    />
                  </div>
                  <div class="layui-row">
                    <span style="color: #c00;">{{errors.first('repeactPassword')}}</span>
                  </div>
                </div>
                <div class="layui-form-item">
                  <label for="L_vercode" class="layui-form-label">验证码</label>
                  <div class="layui-input-inline">
                    <input
                      type="text"
                      placeholder="请填写验证码"
                      autocomplete="off"
                      class="layui-input"
                      name="code"
                      v-model="code"
                      v-validate="'required|length:4'"
                      maxlength="4"
                    />
                  </div>
                  <div>
                    <span style="position:relative; top:-12px;" v-html="svg" @click="getCode()"></span>
                  </div>
                  <div class="layui-row">
                    <span style="color: #c00;">{{errors.first('code')}}</span>
                  </div>
                </div>
                <div class="layui-form-item">
                  <button class="layui-btn" lay-filter="*" lay-submit>立即注册</button>
                </div>
                <div class="layui-form-item fly-form-app">
                  <span>或者直接使用社交账号快捷注册</span>
                  <a
                    href
                    onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})"
                    class="iconfont icon-qq"
                    title="QQ登入"
                  ></a>
                  <a
                    href
                    onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})"
                    class="iconfont icon-weibo"
                    title="微博登入"
                  ></a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCode } from '@/api/index';
export default {
  name: 'reg',
  data(){
    return {
      username: '',
      nickname: '',
      password: '',
      repeactPassword: '',
      code: '',
      svg: ''
    }
  },
  created(){
    this.getCode();
  },
  methods: {
    getCode(){
      getCode().then(res => {
        console.log(res);
        this.svg = res.data.data;
      });
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
