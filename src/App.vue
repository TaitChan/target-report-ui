<template>
  <div class="layout">
    <nav class="layout__nav">
      <ul>
        <li v-for="menu in menuList" :key="menu.value">
          <router-link :to="menu.path">{{ menu.meta?.title }}</router-link>
        </li>
      </ul>
    </nav>
    <main class="layout__main">
      <router-view />
    </main>
  </div>
</template>
<script>
  import { routes } from '@/router/index'
  export default {
    data() {
      return {}
    },
    computed: {
      menuList() {
        return routes.filter((route) => {
          return route.meta?.title && !route.meta?.hidden
        })
      },
    },
  }
</script>

<style lang="scss">
  .layout {
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100vw;
    &__nav {
      width: 210px;
      height: 100%;
      border-right: 1px solid var(--gray-1);
    }
    &__main {
      flex: 1;
      overflow: scroll;
      padding: 0 20px 20px;
    }
  }
</style>
