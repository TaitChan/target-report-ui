import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/target-mng',
  },
  {
    path: '/target-mng',
    name: 'targetMng',
    component: () => import('@/views/target-mng/index.vue'),
    meta: {
      title: '指标库',
    },
  },
  {
    path: '/report-mng',
    name: 'reportMng',
    component: () => import('@/views/report-mng/index.vue'),
    meta: {
      title: '度量报表',
    },
  },
  {
    path: '/report-mng/create',
    name: 'reportCreate',
    component: () => import('@/views/report-save/index.vue'),
    meta: {
      title: '新建报表',
      hidden: true,
    },
  },
  {
    path: '/report-mng/edit/:id',
    name: 'reportEdit',
    component: () => import('@/views/report-save/index.vue'),
    meta: {
      title: '修改报表',
      hidden: true,
    },
  },
  {
    path: '/report-mng/detail/:id',
    name: 'reportDetail',
    component: () => import('@/views/report-detail/index.vue'),
    meta: {
      title: '报表详情',
      hidden: true,
    },
  },
  {
    path: '/icons',
    name: 'IconsLibrary',
    component: () => import('@/views/z-util-page/icons/index.vue'),
    meta: {
      title: '图标管理',
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
