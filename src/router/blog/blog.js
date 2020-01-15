export function blog(Layout, spinRoute) {
  return {
    path: '/blog',
    component: Layout,
    name: 'Blog',
    redirect: '/home',
    meta: { title: 'Blog', activeMenu: '/blog' },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: resolve => {
          spinRoute.show()
          require(['@/views/blog/index'], spinRoute.resolve(resolve))
        },
        meta: { title: 'Home', activeMenu: '/home' },
      },
      {
        path: '/about',
        name: 'About',
        component: resolve => {
          spinRoute.show()
          require(['@/views/about/index'], spinRoute.resolve(resolve))
        },
        meta: { title: 'About', activeMenu: '/about' },
      },
    ],
  }
}
