import Loader from 'components/Loader'
import SearchForm from 'routes/Home/SearchForm'
import ErrorMessage from 'components/ErrorMessage'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import CoinTickerList from './CoinTickerList'

import styles from './home.module.scss'
import DropDownList from './DropDown'
import TopCoinCardList from './TopPriceCoinCardList'
import TodayBestList from './TodayBestList'

const Home = () => {
  const handleErrorFallback = ({ error }: { error: Error }) => <ErrorMessage error={error} />

  return (
    <div className={styles.homeContainer}>
      <div className={styles.searchContainer}>
        <SearchForm />
        <DropDownList />
      </div>
      <Suspense fallback={<Loader />}>
        <ErrorBoundary fallbackRender={handleErrorFallback}>
          <TodayBestList />
          <TopCoinCardList />
          <CoinTickerList />
        </ErrorBoundary>
      </Suspense>
    </div>
  )
}

export default Home
