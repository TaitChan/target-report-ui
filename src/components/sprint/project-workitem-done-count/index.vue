<template>
  <div class="flex project-workitem-done-count">
    <div
      v-for="item in option"
      :key="item.label"
      style="width: 25%"
      class="font-size-12px color-info flex flex-column align-center justify-center"
    >
      <div class="color-gray-8" :style="{ color: item.color }">
        <span class="font-size-24px font-weight">{{ item.value }}</span>
        个
      </div>
      <div class="mt-5px">
        {{ item.label }}
      </div>
    </div>
    <div class="flex-1 flex flex-column justify-center font-size-12px color-info">
      <div class="flex justify-center align-center" v-for="v in list" :key="v.label" style="width: 100%">
        <span class="mr-12px">{{ v.label }}</span>
        <el-progress
          :color="v.color"
          :percentage="((v.count / v.total) * 100).toFixed(0)"
          style="width: 60%; height: 8px"
        >
          <span style="width: 50px" class="font-size-12px color-info ml-12px">{{ v.count }}/{{ v.total }}</span>
        </el-progress>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'project-workitem-done-count',
    data() {
      return {
        cName: '迭代工作项概览',
        option: [
          {
            label: '工作项总数',
            value: 34,
          },
          {
            label: '工作项完成数',
            value: 10,
          },
        ],
        list: [
          {
            label: '需求',
            count: 60,
            total: 102,
            color: '#55AB6C',
          },
          {
            label: '缺陷',
            count: 87,
            total: 190,
            color: '#DD6F60',
          },
          {
            label: '任务',
            count: 5,
            total: 29,
            color: '#7E80DC',
          },
        ],
      }
    },
    created() {},
  }
</script>
<style lang="scss">
  .project-workitem-done-count {
    & > div:not(:last-child) {
      position: relative;
    }
    & > div:not(:last-child)::after {
      position: absolute;
      top: calc(50% - 1.5em);
      right: 0;
      content: '';
      height: 3em;
      width: 1px;
      background: var(--gray-1);
    }
    & > div:last-child > div:not(:last-child) {
      margin-bottom: 10px;
    }
  }
</style>
