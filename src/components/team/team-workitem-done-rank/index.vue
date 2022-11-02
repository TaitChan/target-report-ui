<template>
  <base-chart chartRef="team-workitem-done-rank" :option="option"></base-chart>
</template>
<script>
  import { getOption } from './index.js'
  export default {
    name: 'team-workitem-done-rank',
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
