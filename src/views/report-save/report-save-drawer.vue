<template>
  <div class="height-100-percent flex flex-column">
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
      <div class="grid grid-gap-20px grid-template-columns-200px">
        <div
          class="target-card"
          v-for="target in filterTargetList"
          :key="target.cardId"
          @click="target.active = !target.active"
          :class="target.active ? 'active' : ''"
        >
          <svg-icon icon-class="success-filled" class="success-filled" v-if="target.active"></svg-icon>
          <div>
            <el-image :src="target.picUrl" style="height: 140px"></el-image>
          </div>
          <div>
            {{ target.title }}
            <el-tooltip :content="target.description" placement="top">
              <svg-icon icon-class="question" class="color-info"></svg-icon>
            </el-tooltip>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-20px flex justify-space-between">
      <div>
        已选
        <span class="color-primary pl-10px pr-10px">{{ drawerActiveTargetList.length }}/{{ targetList.length }}</span>
        个选项卡
      </div>
      <div>
        <el-button @click="$emit('cancel')">取消</el-button>
        <el-button type="primary" @click="handleImport">确定</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import { getTargetList, getTabList } from '@/api/target'
  import { useReportStore } from '@/stores/report.js'
  import { mapState, mapActions } from 'pinia'
  export default {
    name: 'ReportSaveDrawer',
    components: {},
    data() {
      return {
        tabList: [],
        activeTab: 'all',
        targetList: [],
      }
    },
    computed: {
      ...mapState(useReportStore, ['activeTargetList']),
      drawerActiveTargetList() {
        return this.targetList.filter((v) => v.active)
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
      ...mapActions(useReportStore, ['setActiveTargetList']),
      handleImport() {
        let _arr = []
        this.drawerActiveTargetList.forEach((v, index) => {
          let has = this.activeTargetList.find((w) => w.cardId === v.cardId)
          if (has) {
            _arr.push({ ...has, y: 0, i: index })
          } else {
            _arr.push({ ...v, x: 0, y: 0, w: v.w || 12, h: v.h || 2, i: index })
          }
        })
        this.setActiveTargetList(_arr)
        this.$emit('confirm')
      },
      async getTabList() {
        const { data } = await getTabList()
        this.tabList = data
      },
      async getTargetList() {
        const { data } = await getTargetList()
        this.targetList = data
        this.tabList.unshift({ label: '全部指标卡', name: 'all', count: data.length })
        this.targetList.forEach((item) => {
          this.activeTargetList.forEach((v) => {
            if (item.cardId === v.cardId) {
              item.active = v.active
            }
          })
        })
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
    cursor: pointer;
    position: relative;
    &:hover,
    &.active {
      box-shadow: 0 6px 24px 0 rgba(0, 0, 0, 0.1);
      border: 1px solid #169aee;
    }
    .success-filled {
      position: absolute;
      top: 10px;
      right: 10px;
      color: #169aee;
      z-index: 1;
    }
    & > div:first-child {
    }
    & > div:last-child {
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      font-weight: 500;
      padding-left: 20px;
      background: white;
    }
  }
</style>
