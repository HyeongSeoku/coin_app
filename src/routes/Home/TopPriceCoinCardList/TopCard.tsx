import { useQuery } from 'react-query'
import cx from 'classnames'

import { Down, Up } from 'assets/svgs'
import LineChart from 'components/LineChart'
import { getCoinDetail } from 'services/coin'
import { calculateDate } from './utils/calculateDate'
import { transformNumber } from 'utils/transformNumber'

import styles from './topCoinCardList.module.scss'
import { COIN_ICON, DEFAULT_COIN_ICON } from 'constants/icons'

interface IProps {
  name: string
  id: string
  symbol: string
  price: number
  market_cap_change_24h: number
}

// TODO: suspense 적용

const TopCoinCard = ({ data }: { data: IProps }) => {
  const { name, id, price, symbol, market_cap_change_24h: marketCapChange24h } = data
  const [apiStart] = calculateDate()
  const isIncrease = marketCapChange24h > 0
  const varianceIcon = isIncrease ? <Up /> : <Down />
  const [translatePrice, unit] = transformNumber(price)
  const coinLogo = COIN_ICON[symbol] || DEFAULT_COIN_ICON

  const { data: chartData } = useQuery(
    [`#chartData${id}`],
    () => getCoinDetail({ coinId: id, start: apiStart, interval: '1h' }),
    {
      refetchOnWindowFocus: false,
      suspense: true,
      cacheTime: Infinity,
      useErrorBoundary: true,
    }
  )

  return (
    <li className={styles.topCoinCard}>
      <div className={styles.visualContainer}>
        <div className={styles.iconContainer}>{coinLogo}</div>
        <div className={styles.graphContainer}>
          <div className={styles.graph}>
            <LineChart data={{ graphData: chartData!.data, isIncrease }} />
          </div>
          <div className={styles.marketContainer}>
            <div>
              <span className={styles.varianceIcon}>{varianceIcon}</span>
              <span className={cx(styles.marketCapText, { [styles.up]: isIncrease })}>
                {Math.abs(marketCapChange24h)}%
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.priceContainer}>
        <span className={styles.symbolText}>{symbol}</span>
        <span className={styles.priceText}>
          {translatePrice}
          {unit}
        </span>
      </div>
    </li>
  )
}

export default TopCoinCard
