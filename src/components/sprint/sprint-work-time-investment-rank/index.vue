<template>
  <base-chart chartRef="print-work-time-investment-rank" :option="option"></base-chart>
</template>
<script>
  import { getOption } from './index.js'
  export default {
    name: 'sprint-work-time-investment-rank',
    data() {
      return {
        option: {},
      }
    },
    created() {
      const { option } = getOption()
      this.option = option
    },
  }
</script>
