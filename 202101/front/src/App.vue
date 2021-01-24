<template>
  <div id="app">
    <lan-header></lan-header>
    <router-view></router-view>
    <lan-footer></lan-footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'app',
  components: {
    'lan-header': Header,
    'lan-footer': Footer
  },
}

</script>

<style lang="scss">
@import 'assets/layui/css/layui.css';
@import "assets/css/global.css";
@import "assets/layui/css/modules/layer/default/layer.css";
</style>
