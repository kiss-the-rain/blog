<template>
  <section class="app-main">
    <el-scrollbar ref="scrollbar" wrap-class="scrollbar-wrapper" view-class="scrollbar-view" style="height: 100%;">
      <transition name="fade-transform" mode="out-in" @after-enter="afterEnter">
        <router-view :key="key" />
      </transition>
    </el-scrollbar>
  </section>
</template>

<script>
import { InitAnimate } from '../../utils/index'
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    },
  },
  mounted() {
    InitAnimate()
  },
  methods: {
    afterEnter() {
      InitAnimate()
    },
  },
}
</script>
