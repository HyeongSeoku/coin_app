import CoinCard from 'components/CoinCard'
import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { getKeywordCoins, getTopp100CoinTickers } from 'services/coin'
import { coinKeyWordState, coinTickerListState } from 'states/coin'

import styles from './coinTickerList.module.scss'

const CoinTickerList = () => {
  const setCoinTickerList = useSetRecoilState(coinTickerListState)

  const setKeyWordList = useSetRecoilState(coinKeyWordState)
  const keyWordState = useRecoilValue(coinKeyWordState)

  const { data: keyWord } = useQuery(
    ['#keyWord'],
    () => getKeywordCoins().then((result) => setKeyWordList(result.splice(0, 500))),
    {
      refetchOnWindowFocus: false,
      suspense: true,
      cacheTime: Infinity,
      useErrorBoundary: true,
    }
  )

  const { data: coinTickers } = useQuery(['#top100coinTickers'], () => getTopp100CoinTickers(), {
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
      <ul className={styles.coinListContainer}>
        {coinTickers.map((item: ITickerProps) => (
          <CoinCard
            key={`coin_ticker_${item.id}`}
            coinData={{
              name: item.name,
              symbol: item.symbol,
              price: item.quotes.KRW.price,
              market_cap_change_24h: item.quotes.KRW.market_cap_change_24h,
            }}
          />
        ))}
      </ul>
    </div>
  )
}

export default CoinTickerList
