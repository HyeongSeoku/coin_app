import CoinCard from 'components/CoinCard'
import { sortBy } from 'lodash'
import { useEffect, useMemo } from 'react'
import { useRecoilValue } from 'recoil'
import { coinTickerListState } from 'states/coin'
import Toggle from 'components/Toggle'
import { HOME_TOGGLE } from 'constants/home'

import styles from './todayBestList.module.scss'
import { homeToggleState } from 'states/home'

const TodayBestList = () => {
  const coinTickerList = useRecoilValue(coinTickerListState)
  const homeSelectedToggle = useRecoilValue(homeToggleState)

  const toDayBest4List = useMemo(() => {
    const arr = sortBy(coinTickerList, `quotes.USD.percent_change_24h`).reverse()
    return arr.slice(0, 4)
  }, [coinTickerList])

  useEffect(() => {
    console.log(homeSelectedToggle)
  }, [homeSelectedToggle])

  return (
    <div className={styles.container}>
      <Toggle toggleData={HOME_TOGGLE} />
      <div className={styles.todayBestListContainer}>
        <ul className={styles.todayBestList}>
          {toDayBest4List.map((coinData) => (
            <CoinCard
              key={`today_best_${coinData.id}`}
              coinData={{
                name: coinData.name,
                symbol: coinData.symbol,
                price: coinData.quotes.USD.price,
                percentChange24h: coinData.quotes.USD.percent_change_24h,
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TodayBestList
