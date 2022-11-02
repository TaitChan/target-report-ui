<template>
  <div class="grid grid-template-columns-25-percent sprint-work-time-summary">
    <div
      v-for="item in option"
      :key="item.label"
      class="font-size-12px color-info flex flex-column align-center justify-center"
    >
      <div class="color-gray-8" :style="{ color: item.color }">
        <span class="font-size-24px font-weight">{{ item.value }}</span>
        小时
      </div>
      <div class="mt-5px">
        {{ item.label }}
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'sprint-work-time-summary',
    data() {
      return {
        cName: '迭代工时概览',
        option: [
          {
            label: '工时容量',
            value: 104,
          },
          {
            label: '预估工时',
            value: 29,
          },
          {
            label: '登记工时',
            value: 12,
            color: '#DE795E',
          },
          {
            label: '预估偏差',
            value: 17,
          },
        ],
      }
    },
    created() {},
  }
</script>
<style lang="scss">
  .sprint-work-time-summary {
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
  }
</style>
