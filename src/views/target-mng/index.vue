<template>
  <div class="flex flex-column height-100-percent">
    <h3>指标库</h3>
    <el-tabs v-model="activeTab">
      <el-tab-pane v-for="tab in tabList" :key="tab.name" :label="tab.label" :name="tab.name">
        <template #label>
          {{ tab.label }}
          <el-tag effect="light" round>
            {{ tab.count }}
          </el-tag>
        </template>
      </el-tab-pane>
    </el-tabs>
    <div class="flex-1 overflow-scroll">
      <div class="grid grid-gap-10px grid-template-columns-250px">
        <div class="target-card" v-for="target in filterTargetList" :key="target.cardId">
          <div>
            <el-image :src="target.picUrl"></el-image>
          </div>
          <div class="font-size-16px font-weight pl-20px">
            {{ target.title }}
            <el-tooltip placement="top">
              <template #content>
                <div style="max-width: 300px">
                  {{ target.description }}
                </div>
              </template>
              <svg-icon icon-class="question" class="color-info"></svg-icon>
            </el-tooltip>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { getTargetList, getTabList } from '@/api/target'

  export default {
    name: 'TargetMng',
    components: {},
    data() {
      return {
        targetList: [],
        tabList: [],
      }
    },
    computed: {
      activeTab: {
        get() {
          return this.$route.query.activeTab || 'all'
        },
        set(value) {
          this.$router.replace({
            path: this.$route.path,
            query: { ...this.$route.query, activeTab: value },
          })
        },
      },
      filterTargetList() {
        if (this.activeTab === 'all') {
          return this.targetList
        } else {
          return this.targetList.filter((v) => {
            return v.category === this.activeTab
          })
        }
      },
    },
    created() {
      this.getTabList()
      this.getTargetList()
    },
    methods: {
      async getTabList() {
        const { data } = await getTabList()
        this.tabList = data
      },
      async getTargetList() {
        const { data } = await getTargetList()
        this.targetList = data
        this.tabList.unshift({ label: '全部指标卡', name: 'all', count: data.length })
      },
    },
  }
</script>

<style lang="scss" scoped>
  .target-card {
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.03);
    &:hover {
      box-shadow: 0 6px 24px 0 rgba(0, 0, 0, 0.1);
    }
    & > div:first-child {
    }
    & > div:last-child {
      height: 50px;
      line-height: 50px;
      background: white;
    }
  }
</style>
