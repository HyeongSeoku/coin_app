import Loader from 'components/Loader'
import SearchForm from 'routes/Home/SearchForm'
import ErrorMessage from 'components/ErrorMessage'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import DropDownList from './DropDown'
import TopCoinCardList from './TopPriceCoinCardList'
import TodayBestList from './TodayBestList'

import styles from './home.module.scss'
import CoinTickerList from './CoinTickerList'

const HomePage = () => {
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

export default HomePage
