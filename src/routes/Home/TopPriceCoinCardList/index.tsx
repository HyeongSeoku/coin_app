import { useMemo } from 'react'
import { useRecoilValue } from 'recoil'
import { coinTickerListState } from 'states/coin'
import { sortBy } from 'lodash'
import TopCoinCard from './TopCard'

import styles from './topCoinCardList.module.scss'

const TopPriceCoinCardList = () => {
  const coinTickerList = useRecoilValue(coinTickerListState)

  const top10TickerList = useMemo(() => {
    const arr = sortBy(coinTickerList, 'quotes.KRW.price').reverse()
    return arr.splice(0, 10)
  }, [coinTickerList])

  return (
    <div>
      <h2>Top 10 price</h2>
      <div className={styles.container}>
        <ul className={styles.topPriceList}>
          {top10TickerList.map((coinData) => (
            <TopCoinCard
              key={`top_price_coin${coinData.id}`}
              data={{
                name: coinData.name,
                id: coinData.id,
                price: coinData.quotes.KRW.price,
                symbol: coinData.symbol,
                market_cap_change_24h: coinData.quotes.KRW.market_cap_change_24h,
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TopPriceCoinCardList
