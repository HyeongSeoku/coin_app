import CoinCard from 'components/CoinCard'
import { sortBy } from 'lodash'
import { useMemo } from 'react'
import { useRecoilValue } from 'recoil'
import { coinTickerListState } from 'states/coin'
import Toggle from 'components/Toggle'
import { HOME_TOGGLE } from 'constants/home'

import styles from './todayBestList.module.scss'

// TODO: homeToggleState로 토글했을때 보여줄 컨텐츠 제어

const TodayBestList = () => {
  const coinTickerList = useRecoilValue(coinTickerListState)

  const toDayBest4List = useMemo(() => {
    const arr = sortBy(coinTickerList, `quotes.USD.percent_change_24h`).reverse()
    return arr.slice(0, 4)
  }, [coinTickerList])

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
                percentChange1h: coinData.quotes.USD.percent_change_1h,
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TodayBestList
