import { VictoryAxis, VictoryChart, VictoryLine, VictoryTooltip } from 'victory'
import dayjs from 'dayjs'

const DetailChart = ({ chartData }: { chartData: IChart[] }) => {
  return (
    <VictoryChart domainPadding={0} padding={{ top: 30, bottom: 30, right: 50, left: 60 }}>
      <VictoryAxis
        dependentAxis
        style={{
          axis: { stroke: 'transparent' },
          tickLabels: { fontSize: 12, padding: 20, fill: '#cccccc' },
          ticks: { stroke: '#cccccc', size: 0 },
          grid: { stroke: '#eeeeee' },
        }}
      />
      <VictoryLine
        data={chartData}
        x='timestamp'
        y='price'
        interpolation='monotoneX'
        domainPadding={{ x: 0, y: 0 }}
        style={{ labels: { fontSize: 10, padding: 10 }, data: { strokeWidth: 1, stroke: '#008000' } }}
        labelComponent={<VictoryTooltip dy={0} centerOffset={{ x: 25 }} />}
      />

      {/* <VictoryBar data={detailChartData} x='timestamp' y='price' /> */}
      <VictoryAxis
        tickFormat={(y) => dayjs(y).format('HH')}
        style={{
          axis: { strokeWidth: 0 },
          tickLabels: { fontSize: 12, padding: 20, fill: '#cccccc' },
          ticks: { stroke: '#cccccc', size: 0 },
        }}
      />
    </VictoryChart>
  )
}

export default DetailChart
