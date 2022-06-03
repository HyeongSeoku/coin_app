import { Down, Up } from 'assets/svgs'
import { COIN_ICON, DEFAULT_COIN_ICON } from 'constants/icons'
import { transformNumber } from 'utils/transformNumber'

import cx from 'classnames'

import styles from './coinCard.module.scss'

interface ICoinCard {
  name: string
  symbol: string
  price: number
  market_cap_change_24h: number
}

const CoinCard = ({ coinData }: { coinData: ICoinCard }) => {
  const { name, symbol, price, market_cap_change_24h: marketCapChange24h } = coinData
  const [translatePrice, unit] = transformNumber(price)
  const isIncrease = marketCapChange24h > 0
  const varianceIcon = isIncrease ? <Up /> : <Down />
  const coinLogo = COIN_ICON[symbol] || DEFAULT_COIN_ICON

  return (
    <li className={styles.cardContainer}>
      <div className={styles.imgContainer}>{coinLogo}</div>
      <div className={styles.titlContainer}>
        <span className={styles.nameText}>{name}</span>
        <span className={styles.symbolText}>{symbol}</span>
      </div>
      <div className={styles.priceContainer}>
        <span className={styles.priceText}>
          {translatePrice}
          {unit}
        </span>
        <div className={styles.marketCapContainer}>
          <span className={styles.varianceIcon}>{varianceIcon}</span>
          <span className={cx(styles.marketCapText, { [styles.increase]: isIncrease })}>{marketCapChange24h}%</span>
        </div>
      </div>
    </li>
  )
}

export default CoinCard
