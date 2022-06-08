import { VictoryAxis, VictoryChart, VictoryLine } from 'victory'
import { COLOR } from 'constants/color'

interface IProps {
  graphData: IChart[]
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
