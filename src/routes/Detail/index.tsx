import { COIN_ICON, DEFAULT_COIN_ICON } from 'constants/icons'
import { useMemo } from 'react'
import { useQuery } from 'react-query'
import { getCoinDetail, getCoinDetailTicker } from 'services/coin'
import cx from 'classnames'

import { EmptyStarIcon } from 'assets/svgs'
import { calculateDate } from 'utils/calculateDate'
import { VictoryAxis, VictoryChart, VictoryLine, VictoryTooltip } from 'victory'

import styles from './detail.module.scss'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'

interface IProps {
  idState: string
}

interface IGraphProps {
  timestamp: string
  price: number
  volume_24h: number
  market_cap: number
}

const Detail = ({ idState }: IProps) => {
  const [apiStart] = calculateDate()

  const { data: detailData } = useQuery([`${idState}detailData`, idState], () => getCoinDetailTicker(idState), {
    refetchOnWindowFocus: false,
    staleTime: 60000,
    cacheTime: Infinity,
    suspense: true,
    useErrorBoundary: true,
  })

  const { data: detailChartData } = useQuery(
    [`#chartData${detailData.id}`, detailData.id],
    () =>
      getCoinDetail({ coinId: detailData.id, start: apiStart, interval: '1h' }).then((res) => {
        const result = res.data.map((item: IGraphProps) => ({
          timestamp: dayjs(item.timestamp).format('YYYY.MM.DD HH:mm:ss'),
          // timestamp: item.timestamp,
          price: item.price,
          volume_24h: item.volume_24h,
          market_cap: item.market_cap,
        }))
        return result
      }),
    {
      refetchOnWindowFocus: false,
      suspense: true,
      cacheTime: Infinity,
      useErrorBoundary: true,
      onSuccess: (res) => {
        console.log(res)
      },
    }
  )

  const coinLogo = useMemo(() => {
    if (!detailData) return DEFAULT_COIN_ICON
    if (COIN_ICON[detailData.symbol] !== undefined) return COIN_ICON[detailData.symbol]
    return DEFAULT_COIN_ICON
  }, [detailData])

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={cx(styles.headerItem, styles.backIcon)}>
          <Link to='/'>뒤로</Link>
        </div>
        <div className={cx(styles.headerItem, styles.coinIconContainer)}>
          <span className={styles.coinLogo}>{coinLogo}</span>
          <span className={styles.coinText}>{detailData.symbol}</span>
        </div>
        <div className={cx(styles.headerItem, styles.starIconContainer)}>
          <EmptyStarIcon className={styles.starIcon} />
        </div>
      </div>

      <div className={styles.contentContainer}>
        <div>{detailData.name}</div>
        <div>
          <span>{detailData.quotes.USD.price}</span>
          <div>
            <span>아이콘</span>
            <span>{detailData.quotes.USD.percent_change_24h}</span>
          </div>

          <div className={styles.chartContainer}>
            <div className={styles.chart}>
              <VictoryChart domainPadding={0}>
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
                  data={detailChartData}
                  style={{ labels: { fontSize: 10 } }}
                  x='timestamp'
                  y='price'
                  labelComponent={<VictoryTooltip dy={0} centerOffset={{ x: 25 }} />}
                />
                <VictoryAxis
                  tickFormat={(y) => dayjs(y).format('HH')}
                  style={{
                    axis: { strokeWidth: 0.5, stroke: '#cccccc' },
                    tickLabels: { fontSize: 12, padding: 10, fill: '#cccccc' },
                    ticks: { stroke: '#cccccc', size: 0 },
                  }}
                />
              </VictoryChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
