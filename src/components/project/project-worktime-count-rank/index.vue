<template>
  <base-chart chartRef="project-worktime-count-rank" :option="option"></base-chart>
</template>
<script>
  import { getOption } from './index.js'
  export default {
    name: 'project-worktime-count-rank',
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
