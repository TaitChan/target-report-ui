const handleData = (data) => {
  return {
    yAxisData: data.map((v) => v.label),
    seriesData: data.map((v) => v.value),
    seriesData2: data.map((v) => v.value2),
  }
}

export const getOption = (data) => {
  const id = 'team-workitem-done-rank'
  const label = '工作项排名'

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
      data: ['总量', '完成'],
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
        name: '总量',
        type: 'bar',
        data: seriesData,
        itemStyle: {
          borderRadius: [0, 5, 5, 0],
        },
      },
      {
        name: '完成',
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
