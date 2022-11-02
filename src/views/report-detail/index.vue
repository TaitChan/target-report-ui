<template>
  <div class="height-100-percent flex flex-column">
    <h3 class="flex justify-space-between">
      <div>
        <svg-icon icon-class="back" @click="$router.go(-1)"></svg-icon>
        报表详情
      </div>
      <el-dropdown>
        <svg-icon icon-class="more-filled"></svg-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="jumpToReportEdit(id)">修改报表</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </h3>
    <div class="flex-1 overflow-scroll">
      <grid-layout
        v-model:layout="detailTargetList"
        :col-num="12"
        :is-draggable="false"
        :is-resizable="false"
        :responsive="false"
        :vertical-compact="true"
        :use-css-transforms="false"
      >
        <grid-item
          v-for="target in detailTargetList"
          :key="target.cardId"
          :x="target.x"
          :y="target.y"
          :w="target.w"
          :h="target.h"
          :i="target.i"
        >
          <div class="detail-target-card flex flex-column padding-20px">
            <div class="pb-20px">
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
            <div class="chart-item flex-1">
              <component :is="target.cardId"></component>
            </div>
          </div>
        </grid-item>
      </grid-layout>
    </div>
  </div>
</template>

<script>
  import { getReportDetail } from '@/api/report'
  import { GridLayout, GridItem } from 'vue-grid-layout'

  export default {
    name: 'ReportDetail',
    components: { GridLayout, GridItem },
    data() {
      return {
        detailTargetList: [],
        id: this.$route.params.id,
      }
    },
    created() {
      this.getReportDetail()
    },
    methods: {
      async getReportDetail() {
        const { data } = getReportDetail(this.id)
        this.detailTargetList = data
      },
      jumpToReportEdit(id) {
        this.$router.push(`/report-mng/edit/${id}`)
      },
    },
  }
</script>

<style lang="scss" scoped>
  .detail-target-card {
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
</style>
