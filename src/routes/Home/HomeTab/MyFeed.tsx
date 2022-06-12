import CoinCard from 'components/CoinCard'
import { useMemo } from 'react'

import { useRecoilValue } from 'recoil'
import { favoriteListState } from 'states/favorite'

import styles from './homeTab.module.scss'

const MyFeed = () => {
  const favoriteList = useRecoilValue(favoriteListState)
  const feedList = useMemo(() => {
    if (favoriteList.length <= 4) return favoriteList
    return favoriteList.slice(0, 4)
  }, [favoriteList])

  const EmptyFavList = <div className={styles.emptyListText}>즐겨찾기한 아이템이 없습니다.</div>

  return (
    <div className={styles.feedContainer}>
      {!feedList.length && EmptyFavList}
      {feedList.map((item) => (
        <CoinCard
          key={`fav_coin_card${item.symbol}`}
          coinData={{ name: item.name, symbol: item.symbol, price: item.price, percentChange1h: item.percentChange1h }}
        />
      ))}
    </div>
  )
}
export default MyFeed
