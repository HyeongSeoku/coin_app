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

// TODO:토글에 따라 그래프 데이터 다르게 받아오는 기능 추가 구현
// TODO: 그래프 디자인 세부 변경 label padding, 그래프 색상, 등등

const Detail = ({ idState }: IProps) => {
  const [apiStart] = calculateDate()
  const { data: detailData } = useQuery([`${idState}detailData`, idState], () => getCoinDetailTicker(idState), {
    refetchOnWindowFocus: false,
    staleTime: 60000,
    cacheTime: Infinity,
    suspense: true,
    useErrorBoundary: true,
  })

  const { price, percent_change_24h: percentChange24h } = detailData.quotes.USD
  const { symbol, name } = detailData

  const { data: detailChartData } = useQuery(
    [`#chartData${detailData.id}`, detailData.id],
    () => getCoinDetail({ coinId: detailData.id, start: apiStart, interval: '1h' }).then((res) => res.data),
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
          <span className={styles.coinText}>{symbol}</span>
        </div>
        <div className={cx(styles.headerItem, styles.starIconContainer)}>
          <EmptyStarIcon className={styles.starIcon} />
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.name}>{name}</div>
        <div className={styles.priceContainer}>
          <span className={styles.priceText}>{price.toFixed(2)}$</span>
          <div className={styles.percentContainer}>
            <span>아이콘</span>
            <span className={styles.percentText}>{percentChange24h}</span>
          </div>
        </div>
        <div className={styles.toggleContainer}>토글 영역</div>

        <div className={styles.chartContainer}>
          <div className={styles.chart}>
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
                data={detailChartData}
                x='timestamp'
                y='price'
                domainPadding={{ x: 0, y: 0 }}
                style={{ labels: { fontSize: 10, padding: 10 }, data: { strokeWidth: 1, stroke: '#008000' } }}
                labelComponent={<VictoryTooltip dy={0} centerOffset={{ x: 25 }} />}
              />
              <VictoryAxis
                tickFormat={(y) => dayjs(y).format('HH')}
                style={{
                  axis: { strokeWidth: 0 },
                  tickLabels: { fontSize: 12, padding: 10, fill: '#cccccc' },
                  ticks: { stroke: '#cccccc', size: 0 },
                }}
              />
            </VictoryChart>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
