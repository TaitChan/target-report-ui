const handleData = (data) => {
  return { yAxisData: data.map((v) => v.label), seriesData: data.map((v) => v.value) }
}

export const getOption = (data) => {
  const id = 'project-worktime-count-rank'
  const label = '预估工时按项目排名'
  const exampleData = [
    {
      label: '项目1',
      value: 5,
    },
    {
      label: '项目2',
      value: 20,
    },
    {
      label: '项目3',
      value: 36,
    },
    {
      label: '项目4',
      value: 10,
    },
    {
      label: '项目5',
      value: 10,
    },
  ]
  const _data = data || exampleData
  const { yAxisData, seriesData } = handleData(_data)
  const option = {
    color: ['#5FA7E9', '#9CCAF0'],
    legend: {
      data: ['工时'],
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
        name: '工时',
        type: 'bar',
        data: seriesData,
        itemStyle: {
          borderRadius: [0, 10, 10, 0],
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
