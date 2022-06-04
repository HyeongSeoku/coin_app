import { useQuery } from 'react-query'
import cx from 'classnames'

import { DownIcon, UpIcon } from 'assets/svgs'
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
  percentChange24h: number
}

// TODO: suspense 적용

const TopCoinCard = ({ data }: { data: IProps }) => {
  const { name, id, price, symbol, percentChange24h } = data
  const [apiStart] = calculateDate()
  const isIncrease = percentChange24h > 0
  const varianceIcon = isIncrease ? <UpIcon /> : <DownIcon />
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
                {Math.abs(percentChange24h)}%
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.priceContainer}>
        <span className={styles.symbolText}>{symbol}</span>
        <div>
          <span className={styles.priceText}>${translatePrice}</span>
          <span className={styles.priceText}>{unit}</span>
        </div>
      </div>
    </li>
  )
}

export default TopCoinCard
