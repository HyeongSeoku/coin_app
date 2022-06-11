import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import store from 'store'
import cx from 'classnames'

import { EmptyStarIcon, StarIcon } from 'assets/svgs'
import { COIN_ICON, DEFAULT_COIN_ICON } from 'constants/icons'
import { transformNumber } from 'utils/transformNumber'
import { FAV_STORE } from 'constants/favorite'
import { useRecoilState } from 'recoil'
import { favoriteListState } from 'states/favorite'
import { handleFavoriteList } from 'utils/favoriteControl'
import { useVariance } from 'hooks/useVariance'

import styles from './coinCard.module.scss'

const CoinCard = ({ coinData }: { coinData: ICoinCardData }) => {
  const { name, symbol, price, percentChange1h } = coinData
  const [translatePrice, unit] = transformNumber(price)
  const [favoriteList, setFavoriteList] = useRecoilState(favoriteListState)
  const coinLogo = COIN_ICON[symbol] || DEFAULT_COIN_ICON
  const [varianceText, varianceIcon] = useVariance(percentChange1h)

  const isFavorite = useMemo(() => {
    const target = favoriteList.find((item) => item.name === name)
    return typeof target !== 'undefined'
  }, [favoriteList, name])

  const favoriteIcon = useMemo(() => {
    return isFavorite ? <StarIcon className={styles.starIcon} /> : <EmptyStarIcon className={styles.starIcon} />
  }, [isFavorite])

  const handleFavoriteCoin = (e: React.SyntheticEvent<HTMLDivElement>) => {
    const favObj = { name, symbol, price, percentChange1h }
    e.preventDefault()
    handleFavoriteList(isFavorite, favoriteList, favObj)
    setFavoriteList(store.get(FAV_STORE))
  }

  return (
    <Link to={`/search/${name}`} className={styles.cardLink}>
      <li className={styles.cardContainer}>
        <div className={styles.imgContainer}>{coinLogo}</div>
        <div className={styles.titlContainer}>
          <span className={styles.nameText}>{name}</span>
          <span className={styles.symbolText}>{symbol}</span>
        </div>
        <div className={styles.priceContainer}>
          <span className={styles.priceText}>
            ${translatePrice}
            {unit}
          </span>
          <div className={styles.marketCapContainer}>
            <span className={styles.varianceIcon}>{varianceIcon}</span>
            <span
              className={cx(
                styles.marketCapText,
                { [styles.increase]: varianceText === 'up' },
                { [styles.decrease]: varianceText === 'down' }
              )}
            >
              {percentChange1h}%
            </span>
          </div>
        </div>
        <div role='button' tabIndex={0} className={styles.starIconContainer} onClick={handleFavoriteCoin}>
          {favoriteIcon}
        </div>
      </li>
    </Link>
  )
}

export default CoinCard
