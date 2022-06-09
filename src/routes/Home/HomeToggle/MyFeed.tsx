import CoinCard from 'components/CoinCard'
import { useMemo } from 'react'

import { useRecoilValue } from 'recoil'
import { favoriteListState } from 'states/favorite'

import styles from './homeToggle.module.scss'

// TODO: coinCard 컴포넌트말고 별도의 feedCoinCard 컴포넌트를 만들어서 휴지통 아이콘으로 삭제하는 기능 추가 고려 (불필요한 ui가 있다고 판단됨)
// FIXME: UI 왔다갔다 하는 오류 있음 (4개째 추가했을때 오류 발생)

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
