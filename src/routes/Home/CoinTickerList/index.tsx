import CoinCard from 'components/CoinCard'
import { useQuery } from 'react-query'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { getTop100CoinTickers } from 'services/coin'
import { coinTickerListState } from 'states/coin'

import styles from './coinTickerList.module.scss'

const CoinTickerList = () => {
  const setCoinTickerList = useSetRecoilState(coinTickerListState)

  const { data: coinTickers } = useQuery(['#top100coinTickers'], () => getTop100CoinTickers(), {
    refetchOnWindowFocus: false,
    suspense: true,
    cacheTime: Infinity,
    useErrorBoundary: true,
  })

  useEffect(() => {
    setCoinTickerList(coinTickers)
  }, [coinTickers, setCoinTickerList])

  return (
    <div>
      <h2 className={styles.coinListTitle}>Coin List</h2>
      <ul className={styles.coinListContainer}>
        {coinTickers.map((item: ITickerProps) => (
          <CoinCard
            key={`coin_ticker_${item.id}`}
            coinData={{
              name: item.name,
              symbol: item.symbol,
              price: item.quotes.USD.price,
              percentChange1h: item.quotes.USD.percent_change_1h,
            }}
          />
        ))}
      </ul>
    </div>
  )
}

export default CoinTickerList
