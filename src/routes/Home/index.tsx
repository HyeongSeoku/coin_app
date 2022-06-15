import { Suspense } from 'react'
import { useSetRecoilState } from 'recoil'
import { searchKeyWordState } from 'states/search'
import { useMount } from 'react-use'

import Loader from 'components/Loader'
import TopCoinCardList from './TopPriceCoinCardList'
import CoinTickerList from './CoinTickerList'
import HomeTab from './HomeTab'
import SearchForm from 'components/SearchForm'

import styles from './home.module.scss'

const HomePage = () => {
  const setKeyWord = useSetRecoilState(searchKeyWordState)

  useMount(() => {
    setKeyWord('')
  })

  return (
    <div className={styles.homeContainer}>
      <Suspense fallback={<Loader />}>
        <div className={styles.searchContainer}>
          <SearchForm />
        </div>
        <HomeTab />
        <TopCoinCardList />
        <CoinTickerList />
      </Suspense>
    </div>
  )
}

export default HomePage
