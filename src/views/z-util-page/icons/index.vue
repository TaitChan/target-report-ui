<template>
  <div class="flex flex-column height-100-percent">
    <h3 class="flex justify-space-between">
      图标管理
      <el-input style="width: 300px" v-model="search" placeholder="请输入图标名称" clearable>
        <template #append>
          <el-button>
            <svg-icon icon-class="search"></svg-icon>
          </el-button>
        </template>
      </el-input>
    </h3>
    <el-tabs v-model="tabName" class="flex-1">
      <el-tab-pane v-for="item in tabList" :key="item.name" :label="item.label" :name="item.name">
        <tab-pane :search="search" :name="tabName"></tab-pane>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import TabPane from './components/TabPane.vue'
  export default {
    name: 'IconsLibrary',
    components: { TabPane },
    data() {
      return {
        tabList: [
          { label: '单色图标', name: 'alone' },
          { label: '彩色图标', name: 'color' },
        ],
      }
    },
    computed: {
      search: {
        get() {
          return this.$route.query.search || ''
        },
        set(value) {
          this.$router.push({
            path: this.$route.path,
            query: { ...this.$route.query, search: value },
          })
        },
      },
      tabName: {
        get() {
          return this.$route.query.tabName || 'alone'
        },
        set(value) {
          this.$router.push({
            path: this.$route.path,
            query: { ...this.$route.query, tabName: value },
          })
        },
      },
    },
    methods: {},
  }
</script>

<style lang="scss" scoped></style>
