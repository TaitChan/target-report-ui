<template>
  <base-chart chartRef="work-time-burn-down" :option="option"></base-chart>
</template>
<script>
  import { getOption } from './index.js'
  export default {
    name: 'work-time-burn-down',
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
