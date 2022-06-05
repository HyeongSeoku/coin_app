import { useMemo } from 'react'
import { DownIcon, EmptyStarIcon, NotChangeIcon, StarIcon, UpIcon } from 'assets/svgs'
import { COIN_ICON, DEFAULT_COIN_ICON } from 'constants/icons'
import { transformNumber } from 'utils/transformNumber'

import cx from 'classnames'

import styles from './coinCard.module.scss'
import { Link } from 'react-router-dom'

interface ICoinCard {
  name: string
  symbol: string
  price: number
  percentChange24h: number
}

const CoinCard = ({ coinData }: { coinData: ICoinCard }) => {
  const { name, symbol, price, percentChange24h } = coinData
  const [translatePrice, unit] = transformNumber(price)
  const coinLogo = COIN_ICON[symbol] || DEFAULT_COIN_ICON

  const [varianceText, varianceIcon] = useMemo(() => {
    let icon = <NotChangeIcon />
    let text = 'equl'
    if (!percentChange24h) return [text, icon]

    if (percentChange24h > 0) {
      icon = <UpIcon />
      text = 'up'
      return [text, icon]
    }

    icon = <DownIcon />
    text = 'down'
    return [text, icon]
  }, [percentChange24h])

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
              {percentChange24h}%
            </span>
          </div>
        </div>
        <div>
          <EmptyStarIcon />
        </div>
      </li>
    </Link>
  )
}

export default CoinCard
