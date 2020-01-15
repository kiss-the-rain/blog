<template>
  <div>
    <aside id="colorlib-aside" role="complementary" class="border js-fullheight">
      <div class="text-center">
        <div class="author-img" />
        <h1 id="colorlib-logo"><a>Eric Lv</a></h1>
        <span class="position"><a href="#">Front/End/Developer</a> in Wuhan</span>
      </div>
      <nav id="main-container-menu" role="navigation" class="navbar">
        <div id="navbar" class="collapse">
          <ul>
            <li v-for="route in routes.children" :key="route.path" :item="route" :base-path="route.path" :class="{'active': activeMenu === route.path}">
              <router-link :base-path="route.path" :to="route.path"><a href="#">{{ route.name }}</a></router-link>
            </li>
          </ul>
        </div>
      </nav>

      <div class="colorlib-footer">
        <p><small>&copy;
          Copyright &copy;2020 All rights reserved | This website is made with <i class="icon-heart" aria-hidden="true" /> by <a href="https://www.cnblogs.com/pale-moon/" target="_blank">author</a>
        </small></p>
        <ul>
          <li><a href="#"><i class="icon-facebook2" /></a></li>
          <li><a href="#"><i class="icon-twitter2" /></a></li>
          <li><a href="#"><i class="icon-instagram" /></a></li>
          <li><a href="#"><i class="icon-linkedin2" /></a></li>
        </ul>
      </div>

    </aside>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  computed: {
    routes() {
      return this.$router.options.routes.find(item => { return item.name === 'Blog' })
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
  },
  watch: {
  },
  methods: {
  },
}
</script>
