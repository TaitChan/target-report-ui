<template>
  <div class="flex flex-column height-100-percent">
    <h3 class="flex justify-space-between">
      <div>
        <svg-icon icon-class="back" @click="$router.go(-1)"></svg-icon>
        {{ title }}{{ id }}
      </div>
      <div>
        <!--        <el-button>-->
        <!--          <svg-icon icon-class="plus"></svg-icon>-->
        <!--          自定义指标卡-->
        <!--        </el-button>-->
        <el-button @click="openDrawer">
          <svg-icon icon-class="plus"></svg-icon>
          选择指标卡
        </el-button>
        <el-button @click="handleCancel">取消</el-button>
        <el-button type="primary">{{ saveBtn }}</el-button>
      </div>
    </h3>
    <div class="report-save flex-1 overflow-scroll padding-20px">
      <grid-layout
        v-model:layout="editTargetList"
        :col-num="12"
        :is-draggable="true"
        :is-resizable="true"
        :responsive="false"
        :vertical-compact="true"
        :use-css-transforms="false"
      >
        <grid-item
          v-for="(target, index) in editTargetList"
          :key="target.cardId"
          :x="target.x"
          :y="target.y"
          :w="target.w"
          :h="target.h"
          :i="target.i"
        >
          <div class="edit-target-card flex flex-column padding-20px">
            <div class="flex justify-space-between pb-20px">
              <div>
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
              <div class="flex align-center">
                <el-tag type="info" class="mr-5px">仅供参考</el-tag>
                <div class="flex bg-gray-1 border-radius-6px color-info padding-2px">
                  <el-tooltip content="点击设置宽度50%" placement="top">
                    <span
                      style="width: 2em"
                      class="flex align-center justify-center cursor-pointer"
                      @click="target.w = 6"
                      :class="target.w === 6 ? 'color-primary border-radius-4px box-shadow-small bg-white' : ''"
                    >
                      <svg-icon icon-class="layout-banhang" class="font-size-20px"></svg-icon>
                    </span>
                  </el-tooltip>
                  <el-tooltip content="点击设置宽度100%" placement="top">
                    <span
                      style="width: 2em"
                      class="flex align-center justify-center cursor-pointer"
                      @click="target.w = 12"
                      :class="target.w === 12 ? 'color-primary border-radius-4px box-shadow-small bg-white' : ''"
                    >
                      <svg-icon icon-class="layout-zhenghang" class="font-size-20px"></svg-icon>
                    </span>
                  </el-tooltip>
                </div>
                <el-tooltip content="移除" placement="top">
                  <el-button link type="info" @click="handleDel(target.cardId)" class="ml-5px">
                    <svg-icon icon-class="delete" class="font-size-16px"></svg-icon>
                  </el-button>
                </el-tooltip>
              </div>
            </div>
            <div class="chart-item flex-1">
              <component :is="target.cardId"></component>
            </div>
          </div>
        </grid-item>
      </grid-layout>
    </div>
  </div>
  <el-drawer v-model="drawer" title="选择指标卡" size="min(800px,100%)" destroy-on-close>
    <report-save-drawer @cancel="drawer = false" @confirm="drawer = false"></report-save-drawer>
  </el-drawer>
</template>

<script>
  import ReportSaveDrawer from './report-save-drawer'
  import { useReportStore } from '@/stores/report.js'
  import { mapState, mapActions } from 'pinia'
  import { getReportDetail } from '@/api/report'
  import { GridLayout, GridItem } from 'vue-grid-layout'
  import SvgIcon from '@/components/svg-icon'

  export default {
    name: 'ReportSave',
    components: { SvgIcon, ReportSaveDrawer, GridLayout, GridItem },
    data() {
      return {
        id: this.$route.params.id || '',
        drawer: false,
        grid: undefined,
        editTargetList: [],
      }
    },
    computed: {
      ...mapState(useReportStore, ['activeTargetList']),
      isEdit() {
        return Boolean(this.$route.params.id)
      },
      title() {
        return this.isEdit ? '修改报表' : '新建报表'
      },
      saveBtn() {
        return this.isEdit ? '更新' : '保存'
      },
    },
    watch: {
      activeTargetList: {
        handler(val) {
          this.editTargetList = val
        },
        deep: true,
      },
    },
    created() {
      if (this.isEdit) {
        this.getReportDetail()
      } else {
        this.clearActiveTarget()
      }
    },
    mounted() {
      // this.grid = GridStack.init()
    },
    methods: {
      ...mapActions(useReportStore, ['setActiveTargetList', 'delActiveTarget', 'clearActiveTarget']),
      async getReportDetail() {
        const { data } = getReportDetail(this.id)
        data.forEach((v) => {
          v.active = true
        })
        this.editTargetList = data
      },
      openDrawer() {
        this.drawer = true
        console.log(JSON.stringify(this.editTargetList))
        this.setActiveTargetList(this.editTargetList)
      },
      handleDel(cardId) {
        this.setActiveTargetList(this.editTargetList)
        this.delActiveTarget(cardId)
      },
      handleCancel() {
        this.$confirm('离开后将不保留编辑内容', '确认要离开当前编辑页面吗？', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(async () => {
            this.$router.go(-1)
          })
          .catch(() => {
            console.log('1')
          })
      },
    },
    unmounted() {
      this.clearActiveTarget()
    },
  }
</script>

<style lang="scss" scoped>
  .report-save {
    background: #f0f9ff;
    border: 1px dashed #90cdf5;
    //opacity: 0.8;
  }
  .edit-target-card {
    height: 100%;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background: white;
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.03);
    &:hover {
      box-shadow: 0 6px 24px 0 rgba(0, 0, 0, 0.1);
    }
    .chart-item {
      & > div {
        height: 100%;
      }
    }
  }
  .grid-stack {
  }
  .grid-stack-item {
  }
  .grid-stack-item-content {
  }
  :deep(.vue-grid-item).vue-grid-placeholder {
    background: transparent;
    border: 1px dashed rgba(0, 0, 0, 1);
  }
</style>
