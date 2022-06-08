import { useMemo, useRef } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import cx from 'classnames'

import { COIN_ICON, DEFAULT_COIN_ICON } from 'constants/icons'
import { getCoinDetail, getCoinDetailTicker } from 'services/coin'
import { BackLogo, DownIcon, EmptyStarIcon, UpIcon } from 'assets/svgs'
import { calculateDate } from 'utils/calculateDate'
import { fixedNumber } from 'utils/transformNumber'
import DetailChart from './DetailChart'

import styles from './detail.module.scss'

interface IProps {
  idState: string
}

// TODO:토글에 따라 그래프 데이터 다르게 받아오는 기능 추가 구현
// TODO: 그래프 디자인 세부 변경 label padding, 그래프 색상, 등등

const Detail = ({ idState }: IProps) => {
  const [apiStart] = calculateDate()
  const chartRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const { data: detailData } = useQuery([`${idState}detailData`, idState], () => getCoinDetailTicker(idState), {
    refetchOnWindowFocus: false,
    staleTime: 60000,
    cacheTime: Infinity,
    suspense: true,
    useErrorBoundary: true,
  })

  const { price, percent_change_24h: percentChange24h } = detailData.quotes.USD
  const { symbol, name } = detailData
  const isIncrease = percentChange24h > 0
  const varianceLogo = isIncrease ? <UpIcon /> : <DownIcon />

  const { data: detailChartData } = useQuery(
    [`#chartData${detailData.id}`, detailData.id],
    () => getCoinDetail({ coinId: detailData.id, start: apiStart, interval: '1h' }).then((res) => res.data),
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

  const isChartScoll = () => {
    if (!containerRef.current || !chartRef.current) return false
    return containerRef.current.offsetWidth < chartRef.current.offsetWidth
  }

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={cx(styles.headerItem, styles.backIcon)}>
          <Link to='/'>
            <BackLogo />
          </Link>
        </div>
        <div className={cx(styles.headerItem, styles.coinIconContainer)}>
          <span className={styles.coinLogo}>{coinLogo}</span>
          <span className={styles.coinText}>{symbol}</span>
        </div>
        <div className={(styles.headerItem, styles.starIconContainer)}>
          <EmptyStarIcon className={styles.starIcon} />
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.name}>{name}</div>
        <div className={styles.priceContainer}>
          <span className={styles.priceText}>{fixedNumber(price)}$</span>
          <div className={styles.percentContainer}>
            <span className={styles.percentLogo}>{varianceLogo}</span>
            <span className={styles.percentText}>{percentChange24h}%</span>
          </div>
        </div>
        <div className={styles.toggleContainer}>토글 영역</div>

        <div className={cx(styles.chartContainer, { [styles.chartGradient]: isChartScoll })} ref={containerRef}>
          <div className={styles.chartWrapper}>
            <div className={styles.chart} ref={chartRef}>
              <DetailChart chartData={detailChartData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
