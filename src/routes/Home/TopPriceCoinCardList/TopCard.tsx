import { useQuery } from 'react-query'
import cx from 'classnames'
import { Link } from 'react-router-dom'

import LineChart from 'components/LineChart'
import { getCoinDetail } from 'services/coin'
import { transformNumber } from 'utils/transformNumber'
import { calculateDate } from 'utils/calculateDate'
import { useVariance } from 'hooks/useVariance'
import { COIN_ICON, DEFAULT_COIN_ICON } from 'constants/icons'

import styles from './topCoinCardList.module.scss'

interface IProps {
  name: string
  id: string
  symbol: string
  price: number
  percentChange1h: number
}

const TopCoinCard = ({ data }: { data: IProps }) => {
  const { name, id, price, symbol, percentChange1h } = data
  const [apiStart] = calculateDate()
  const isIncrease = percentChange1h > 0
  const [varianceText, varianceIcon] = useVariance(percentChange1h)
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
    <Link to={`/search/${name}`} className={styles.cardLink}>
      <li className={styles.topCoinCard}>
        <div className={styles.visualContainer} data-name={name}>
          <div className={styles.iconContainer}>{coinLogo}</div>
          <div className={styles.graphContainer}>
            <div className={styles.graph}>
              <LineChart data={{ graphData: chartData!.data, isIncrease }} />
            </div>
            <div className={styles.marketContainer}>
              <div>
                <span className={styles.varianceIcon}>{varianceIcon}</span>
                <span
                  className={cx(
                    styles.marketCapText,
                    { [styles.increase]: varianceText === 'up' },
                    { [styles.decrease]: varianceText === 'down' }
                  )}
                >
                  {Math.abs(percentChange1h)}%
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
    </Link>
  )
}

export default TopCoinCard
