import CoinCard from 'components/CoinCard'
import { sortBy } from 'lodash'
import { useMemo } from 'react'
import { useRecoilValue } from 'recoil'
import { coinTickerListState } from 'states/coin'

import styles from './todayBestList.module.scss'

const TodayBestList = () => {
  const coinTickerList = useRecoilValue(coinTickerListState)

  const toDayBest3List = useMemo(() => {
    const arr = sortBy(coinTickerList, `quotes.KRW.market_cap_change_24h`).reverse()
    return arr.slice(0, 4)
  }, [coinTickerList])

  return (
    <div>
      <ul className={styles.todayBestListContainer}>
        {toDayBest3List.map((coinData) => (
          <CoinCard
            key={`today_best_${coinData.id}`}
            coinData={{
              name: coinData.name,
              symbol: coinData.symbol,
              price: coinData.quotes.KRW.price,
              market_cap_change_24h: coinData.quotes.KRW.market_cap_change_24h,
            }}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodayBestList
