<template>
  <div :class="{'offcanvas':isHideNav}" class="app-wrapper">
    <a class="js-colorlib-nav-toggle colorlib-nav-toggle" :class="{'active':isHideNav}" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar" @click="handlerClickToggleNav"><i /></a>
    <!--  侧边栏  -->
    <sidebar class="sidebar-container" />
    <!--  中间内容部分  -->
    <div class="main-container">
      <app-main />
    </div>
  </div>
</template>

<script>
import { Sidebar, AppMain } from './components'
import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: 'Layout',
  components: {
    Sidebar,
    AppMain,
  },
  mixins: [ResizeMixin],
  data() {
    return {
      isHideNav: false,
    }
  },
  computed: {
  },
  mounted() {
  },
  methods: {
    handlerClickToggleNav() {
      this.isHideNav = !this.isHideNav
    },
  },
}
</script>
