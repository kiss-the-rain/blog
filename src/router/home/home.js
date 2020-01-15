export function home(spinRoute) {
  return {
    path: '/home',
    component: resolve => {
      spinRoute.show()
      require(['@/views/home/index'], spinRoute.resolve(resolve))
    },
    hidden: true,
  }
}
