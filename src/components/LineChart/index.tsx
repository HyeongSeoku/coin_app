import { COLOR } from 'constants/color'
import { VictoryAxis, VictoryChart, VictoryLine } from 'victory'

interface IProps {
  graphData: { timestamp: string; price: number; volume_24h: number; market_cap: number }[]
  isIncrease: boolean
}

const LineChart = ({ data }: { data: IProps }) => {
  const { graphData, isIncrease } = data

  return (
    <VictoryChart domainPadding={0}>
      <VictoryAxis
        style={{
          axis: { stroke: 'transparent' },
          ticks: { stroke: 'transparent' },
          tickLabels: { fill: 'transparent' },
        }}
      />
      <VictoryLine
        data={graphData}
        x='timestamp'
        y='price'
        style={{ data: { strokeWidth: 8, stroke: isIncrease ? COLOR.UP : COLOR.DOWN } }}
        interpolation='basis'
      />
    </VictoryChart>
  )
}

export default LineChart
