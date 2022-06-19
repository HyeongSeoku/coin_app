import React, { useMemo, useRef } from 'react'
import { useQuery } from 'react-query'
import { Link, useParams } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import cx from 'classnames'
import store from 'store'

import { COIN_ICON, DEFAULT_COIN_ICON } from 'constants/icons'
import { getDetailData } from 'services/coin'
import { BackLogo, EmptyStarIcon, StarIcon } from 'assets/svgs'
import { calculateDate } from 'utils/calculateDate'
import { fixedNumber } from 'utils/transformNumber'
import DetailChart from './DetailChart'
import { favoriteListState } from 'states/favorite'
import { handleFavoriteList } from '../../../utils/favoriteControl'
import { FAV_STORE } from 'constants/favorite'
import { useVariance } from 'hooks/useVariance'

import styles from './detail.module.scss'

const Detail = () => {
  const params = useParams()
  const nameState = params.coinName
  const [apiStart] = calculateDate()

  const [favoriteList, setFavoriteList] = useRecoilState(favoriteListState)
  const chartRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const { data: coinData } = useQuery([`#chartData${nameState}`], () => getDetailData(nameState!, apiStart), {
    refetchOnWindowFocus: false,
    suspense: true,
    cacheTime: Infinity,
    useErrorBoundary: true,
  })
  const [detailData, detailGraph] = coinData!

  const { price, percent_change_1h: percentChange1h } = detailData.quotes.USD
  const { symbol, name } = detailData

  const coinLogo = COIN_ICON[symbol] || DEFAULT_COIN_ICON
  const isIncrease = percentChange1h > 0
  const [varianceText, varianceIcon] = useVariance(percentChange1h)

  const isFavorite = useMemo(() => {
    const target = favoriteList.find((item) => item.name === name)
    return typeof target !== 'undefined'
  }, [favoriteList, name])

  const favoriteIcon = useMemo(() => {
    return isFavorite ? <StarIcon className={styles.starIcon} /> : <EmptyStarIcon className={styles.starIcon} />
  }, [isFavorite])

  const onFavIconClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    const favObj = { name, symbol, price, percentChange1h }
    handleFavoriteList(isFavorite, favoriteList, favObj)
    setFavoriteList(store.get(FAV_STORE))
  }

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
        <div
          role='button'
          tabIndex={0}
          className={(styles.headerItem, styles.starIconContainer)}
          onClick={onFavIconClick}
        >
          {favoriteIcon}
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.name}>{name}</div>
        <div className={styles.priceContainer}>
          <span className={styles.priceText}>{fixedNumber(price)}$</span>
          <div className={styles.percentContainer}>
            <span className={styles.percentLogo}>{varianceIcon}</span>
            <span
              className={cx(
                styles.percentText,
                { [styles.increase]: varianceText === 'up' },
                { [styles.decrease]: varianceText === 'down' }
              )}
            >
              {percentChange1h}%
            </span>
          </div>
        </div>
        <div className={cx(styles.chartContainer, { [styles.chartGradient]: isChartScoll })} ref={containerRef}>
          <div className={styles.chartWrapper}>
            <div className={styles.chart} ref={chartRef}>
              <DetailChart data={{ chartData: detailGraph, isIncrease }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
