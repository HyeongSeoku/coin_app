import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import store from 'store'
import cx from 'classnames'

import { DownIcon, EmptyStarIcon, NotChangeIcon, StarIcon, UpIcon } from 'assets/svgs'
import { COIN_ICON, DEFAULT_COIN_ICON } from 'constants/icons'
import { transformNumber } from 'utils/transformNumber'
import { FAV_STORE } from 'constants/favorite'

import styles from './coinCard.module.scss'
import { useRecoilState } from 'recoil'
import { favoriteListState } from 'states/favorite'

const CoinCard = ({ coinData }: { coinData: ICoinCardData }) => {
  const { name, symbol, price, percentChange1h } = coinData
  const [translatePrice, unit] = transformNumber(price)
  const [favoriteList, setFavoriteList] = useRecoilState(favoriteListState)
  const coinLogo = COIN_ICON[symbol] || DEFAULT_COIN_ICON

  const isFavorite = useMemo(() => {
    const target = favoriteList.find((item) => item.name === name)
    return typeof target !== 'undefined'
  }, [favoriteList, name])

  const favoriteIcon = useMemo(() => {
    return isFavorite ? <StarIcon className={styles.starIcon} /> : <EmptyStarIcon className={styles.starIcon} />
  }, [isFavorite])

  const [varianceText, varianceIcon] = useMemo(() => {
    let icon = <NotChangeIcon />
    let text = 'equl'
    if (!percentChange1h) return [text, icon]

    if (percentChange1h > 0) {
      icon = <UpIcon />
      text = 'up'
      return [text, icon]
    }

    icon = <DownIcon />
    text = 'down'
    return [text, icon]
  }, [percentChange1h])

  const addFavorite = () => {
    const targetObj = { name, symbol, price, percentChange1h }
    store.set(FAV_STORE, [targetObj, ...favoriteList])
    setFavoriteList(store.get(FAV_STORE))
  }

  const deleteFavorite = () => {
    const filteredList = favoriteList.filter((item) => item.name !== name)
    store.set(FAV_STORE, filteredList)
    setFavoriteList(store.get(FAV_STORE))
  }

  const handleFavoriteCoin = (e: React.SyntheticEvent<HTMLDivElement>) => {
    e.preventDefault()
    isFavorite ? deleteFavorite() : addFavorite()

    // TODO: 즐겨찾기 추가하는 로직 구현 예정 store js 사용
  }

  return (
    <Link to={`/activity/${name}`} className={styles.cardLink}>
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
