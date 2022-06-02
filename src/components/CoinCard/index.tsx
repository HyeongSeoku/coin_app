import { Bitcoin, Down, Up } from 'assets/svgs'
import styles from './coinCard.module.scss'

interface ICoinCard {
  name: string
  symbol: string
  price: number
  market_cap_change_24h: number
}

const CoinCard = ({ coinData }: { coinData: ICoinCard }) => {
  const { name, symbol, price, market_cap_change_24h: marketCapChange24h } = coinData

  const varianceIcon = marketCapChange24h < 0 ? <Down /> : <Up />

  return (
    <li className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <Bitcoin />
      </div>
      <div className={styles.titlContainer}>
        <span className={styles.nameText}>{name}</span>
        <span className={styles.symbolText}>{symbol}</span>
      </div>
      <div className={styles.priceContainer}>
        <span className={styles.priceText}>{price}</span>
        <div>
          <span>{varianceIcon}</span>
          <span className={styles.marketCapText}>{marketCapChange24h}</span>
        </div>
      </div>
    </li>
  )
}

export default CoinCard
