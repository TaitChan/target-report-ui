const handleData = (data) => {
  let _average = data[0].value / (data.length - 1)
  data.forEach((v, index) => {
    v.value2 = (20 - index * _average).toFixed(1)
  })
  return {
    xAxisData: data.map((v) => v.label),
    seriesData: data.map((v) => v.value),
    seriesData2: data.map((v) => v.value2),
  }
}

export const getOption = (data) => {
  const id = 'work-time-burn-down'
  const label = '工时燃尽图'

  const exampleData = [
    {
      label: '04-01',
      value: 20,
    },
    {
      label: '04-02',
      value: 10,
    },
    {
      label: '04-03',
      value: 16,
    },
    {
      label: '04-04',
      value: 6,
    },
    {
      label: '04-05',
      value: 6,
    },
    {
      label: '04-06',
      value: 2,
    },
  ]
  const _data = data || exampleData
  const { xAxisData, seriesData, seriesData2 } = handleData(_data)

  const option = {
    color: ['#9CCAF0', '#68BC82'],
    legend: {
      data: ['实际工时余量', '理想工时余量'],
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
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: xAxisData,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: '实际工时余量',
        data: seriesData,
        type: 'line',
        areaStyle: {},
      },
      {
        name: '理想工时余量',
        data: seriesData2,
        type: 'line',
        symbol: 'none',
        itemStyle: {
          normal: {
            lineStyle: {
              type: 'dashed',
            },
          },
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
