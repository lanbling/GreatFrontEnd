<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li class="layui-this">登录</li>
          <li>
            <router-link :to="{ name: 'reg' }">注册</router-link>
          </li>
        </ul>
        <div
          class="layui-form layui-tab-content"
          id="LAY_ucm"
          style="padding: 20px 0"
        >
          <div class="layui-tab-item layui-show">
            <div class="layui-form layui-form-pane">
              <div class="layui-form-item">
                <label for="L_email" class="layui-form-label">用户名</label>
                <div class="layui-input-inline">
                  <input
                    type="text"
                    autocomplete="off"
                    class="layui-input"
                    name="username"
                    v-model="username"
                    placeholder="请输入用户名"
                    v-validate="'required|email'"
                  />
                </div>
                <div class="layui-form-mid">
                  <span style="color: #c00">{{
                    errors.first("username")
                  }}</span>
                </div>
              </div>
              <div class="layui-form-item">
                <label for="L_pass" class="layui-form-label">密码</label>
                <div class="layui-input-inline">
                  <input
                    type="password"
                    autocomplete="off"
                    class="layui-input"
                    placeholder="请输入密码"
                    name="password"
                    v-model="password"
                    v-validate="'required|min:6'"
                  />
                </div>
                <div class="layui-form-mid">
                  <span style="color: #c00">{{
                    errors.first("password")
                  }}</span>
                </div>
              </div>
              <div class="layui-form-item">
                <div class="layui-row">
                  <label for="L_vercode" class="layui-form-label">验证码</label>
                  <div class="layui-input-inline">
                    <input
                      type="text"
                      autocomplete="off"
                      class="layui-input"
                      placeholder="请输入验证码"
                      name="code"
                      v-model="code"
                      v-validate="'required|length:4'"
                    />
                  </div>
                  <div>
                    <span
                      style="position: relative; top: -12px"
                      v-html="svg"
                      @click="getCode"
                    ></span>
                  </div>
                </div>
                <div class="layui-form-mid">
                  <span style="color: #c00">{{ errors.first("code") }}</span>
                </div>
              </div>
              <div class="layui-form-item">
                <button
                  class="layui-btn"
                  lay-filter="*"
                  lay-submit
                  @click="login()"
                >
                  立即登录
                </button>
                <span style="padding-left: 20px">
                  <router-link :to="{ name: 'forget' }">忘记密码？</router-link>
                </span>
              </div>
              <div class="layui-form-item fly-form-app">
                <span>或者使用社交账号登入</span>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCode, login } from "@/api/index";
import uuid from "uuid/v4";

export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      code: "",
      svg: "",
    };
  },
  created() {
    // this.getCode();
  },
  mounted() {
    let sid = "";
    if (localStorage.getItem("sid")) {
      sid = localStorage.getItem("sid");
    } else {
      sid = uuid();
      localStorage.setItem("sid", sid);
    }
    this.$store.commit("setSid", sid);
    console.log(sid);
    this.getCode();
  },
  methods: {
    getCode() {
      let sid = this.$store.state.sid;
      getCode(sid).then((res) => {
        if (res.code === 200) {
          console.log(res);
          this.svg = res.data.data;
        }
      });
    },
    login() {
      console.log(111);
      let postData = {
        username: this.username,
        password: this.password,
        code: this.code,
        sid: this.$store.state.sid,
      };
      login(postData).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
