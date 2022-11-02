const handleData = (data) => {
  return {
    yAxisData: data.map((v) => v.label),
    seriesData: data.map((v) => v.value),
    seriesData2: data.map((v) => v.value2),
  }
}

export const getOption = (data) => {
  const id = 'sprint-work-time-investment-rank'
  const label = '迭代工时排名'

  const exampleData = [
    {
      label: '张三',
      value: 5,
      value2: 5,
    },
    {
      label: '李四',
      value: 20,
      value2: 18,
    },
    {
      label: '王五',
      value: 36,
      value2: 30,
    },
    {
      label: '赵六',
      value: 10,
      value2: 15,
    },
    {
      label: '孙七',
      value: 10,
      value2: 13,
    },
  ]
  const _data = data || exampleData
  const { yAxisData, seriesData, seriesData2 } = handleData(_data)

  const option = {
    color: ['#5FA7E9', '#9CCAF0'],
    legend: {
      data: ['登记工时', '预计工时'],
      right: 0,
      icon: 'rect',
      itemHeight: 12,
      itemWidth: 12,
    },
    tooltip: { show: true, trigger: 'axis' },
    grid: {
      bottom: 0,
      containLabel: true,
    },
    xAxis: {},
    yAxis: {
      data: yAxisData,
      axisTick: {
        show: false, // 刻度线
      },
    },
    series: [
      {
        name: '登记工时',
        type: 'bar',
        data: seriesData,
        itemStyle: {
          borderRadius: [0, 5, 5, 0], //（顺时针左上，右上，右下，左下）
        },
      },
      {
        name: '预计工时',
        type: 'bar',
        barGap: '0%',
        data: seriesData2,
        itemStyle: {
          borderRadius: [0, 5, 5, 0],
        },
      },
    ],
  }

  return {
    id,
    label,
    option,
  }
}
