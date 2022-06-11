import { Suspense } from 'react'

import Loader from 'components/Loader'
import SearchForm from 'routes/Home/SearchForm'
import TopCoinCardList from './TopPriceCoinCardList'
import CoinTickerList from './CoinTickerList'
import DropDownList from 'components/DropDown'
import HomeToggle from './HomeToggle'

import styles from './home.module.scss'
import { useSetRecoilState } from 'recoil'
import { searchKeyWordState } from 'states/search'
import { useMount } from 'react-use'

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
          <DropDownList />
        </div>
        <HomeToggle />
        <TopCoinCardList />
        <CoinTickerList />
      </Suspense>
    </div>
  )
}

export default HomePage
