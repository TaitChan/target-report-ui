export default {
  install(app: any) {
    //加载该目录下所有.vue文件
    //参数：1. 在那个目录找 2.是否加载子目录 3.加载的文件名（正则匹配）
    const ctx = require.context('./', true, /\.vue$/)
    ctx.keys().forEach((item) => {
      //item：组件的地址 ctx(item) 导入这个组件
      const component = ctx(item).default
      app.component(component.name, component)
    })
  },
}
