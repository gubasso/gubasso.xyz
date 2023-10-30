<script>
  import CalHeatmap from 'cal-heatmap'
  import Tooltip from 'cal-heatmap/plugins/Tooltip'
  import CalendarLabel from 'cal-heatmap/plugins/CalendarLabel'
  import 'cal-heatmap/cal-heatmap.css'
  import { onMount, onDestroy } from 'svelte'

  let calHeatmap
  const cal = new CalHeatmap()

  onMount(async () => {
    let oneYearAgo = new Date()
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1)
    oneYearAgo.setMonth(oneYearAgo.getMonth() + 1)
    const data = [
      { date: '2023-10-01', value: 3 },
      { date: '2023-10-02', value: 30 },
      { date: '2023-08-02', value: 45 },
      { date: '2023-09-02', value: 60 },
      { date: '2023-07-15', value: 1 }
    ]

    const [min, max] = data.reduce(
      (prev, curr) => {
        const min = Math.min(prev[0], curr.value)
        const max = Math.max(prev[1], curr.value)
        return [min, max]
      },
      [1, 1]
    )

    await cal.paint(
      {
        data: {
          // source: data,
          x: 'date',
          y: 'value'
        },
        theme: 'dark',
        scale: {
          color: {
            range: ['#064bac', '#b5d3fc'],
            type: 'linear',
            domain: [min, max]
          }
        },
        domain: {
          type: 'month'
        },
        subDomain: {
          type: 'day',
          radius: 2
        },
        date: {
          timezone: 'America/Sao_Paulo',
          start: oneYearAgo,
          highlight: [
            new Date() // Highlight today
          ]
        }
      },
      [
        [
          Tooltip,
          {
            text: (_, value, dayjsDate) => {
              if (!value) {
                return ''
              }
              const contribution = `${value} ${value > 1 ? 'contributions' : 'contribution'}`
              const date = `${dayjsDate.toISOString().substring(0, 10)}`

              return `${contribution} on ${date}`
            }
          }
        ],
        [
          CalendarLabel,
          {
            position: 'right',
            key: 'right',
            text: () => ['', 'Mon', '', 'Thu', '', 'Fri', ''],
            textAlign: 'end',
            width: 30,
            padding: [0, 5, 0, 0]
          }
        ]
      ]
    )

    cal.fill([
      ...data,
      { date: '2023-06-01', value: 3 },
      { date: '2023-04-02', value: 30 },
      { date: '2023-03-02', value: 45 },
      { date: '2023-01-02', value: 60 }
    ])

    calHeatmap.scrollLeft = calHeatmap.scrollWidth
  })
  onDestroy(async () => {
    await cal.destroy()
  })
</script>

<div bind:this={calHeatmap} id="cal-heatmap" />

<style>
  #cal-heatmap {
    margin: auto;
    overflow-y: auto;
  }
  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  ::-webkit-scrollbar-track {
    border-radius: var(--borderRadius-small);
    background-color: var(--color-border-default);
    border: 1px solid var(--color-canvas-subtle);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: var(--color-border-default);
  }
</style>
