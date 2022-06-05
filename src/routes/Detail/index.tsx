import { COIN_ICON, DEFAULT_COIN_ICON } from 'constants/icons'
import { useEffect, useMemo } from 'react'
import { useQuery } from 'react-query'
import { getCoinDetail, getCoinDetailTicker } from 'services/coin'
import cx from 'classnames'

import styles from './detail.module.scss'
import { EmptyStarIcon } from 'assets/svgs'
import { calculateDate } from 'utils/calculateDate'
import { VictoryAxis, VictoryChart, VictoryLine } from 'victory'

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
    [`#chartData${detailData.id}`],
    () =>
      getCoinDetail({ coinId: detailData.id, start: apiStart, interval: '1h' }).then((res) => 
        res.data.map((item: IGraphProps) => {item.timestamp,...item})
      ),
    {
      refetchOnWindowFocus: false,
      suspense: true,
      cacheTime: Infinity,
      useErrorBoundary: true,
    }
  )

  const coinLogo = useMemo(() => {
    if (!detailData) return DEFAULT_COIN_ICON
    if (COIN_ICON[detailData.symbol] !== undefined) return COIN_ICON[detailData.symbol]
    return DEFAULT_COIN_ICON
  }, [detailData])

  useEffect(() => {
    console.log(detailChartData)
  }, [detailChartData])

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={cx(styles.headerItem, styles.backIcon)}>뒤로</div>
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

          <div>
            <VictoryChart domainPadding={0}>
              <VictoryAxis
                style={{
                  axis: { stroke: 'transparent' },
                  ticks: { stroke: 'transparent' },
                  tickLabels: { fill: 'transparent' },
                }}
              />
              <VictoryLine data={detailChartData!.data} x='timestamp' y='price' />
            </VictoryChart>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
