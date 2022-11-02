<template>
  <div :ref="chartRef" style="height: 100%"></div>
</template>

<script>
  export default {
    name: 'BaseChart',
    props: {
      chartRef: {
        type: [String, Number],
      },
      option: {
        type: Object,
      },
    },
    data() {
      return {}
    },
    mounted() {
      this.initChart()
    },
    methods: {
      initChart() {
        let myChart = this.$echarts.init(this.$refs[this.chartRef])
        this.option && myChart.setOption(this.option)
        // 自适应
        const resizeObserver = new ResizeObserver((entries) => {
          for (let entry of entries) {
            if (entry.contentBoxSize) {
              myChart.resize()
            }
          }
        })
        resizeObserver.observe(this.$refs[this.chartRef])
      },
    },
  }
</script>

<style scoped></style>
