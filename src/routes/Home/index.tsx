import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import ErrorMessage from 'components/ErrorMessage'
import Loader from 'components/Loader'
import SearchForm from 'routes/Home/SearchForm'
import TopCoinCardList from './TopPriceCoinCardList'
import CoinTickerList from './CoinTickerList'
import DropDownList from 'components/DropDown'
import HomeToggle from './HomeToggle'

import styles from './home.module.scss'

const HomePage = () => {
  const handleErrorFallback = ({ error }: { error: Error }) => <ErrorMessage error={error} />

  return (
    <div className={styles.homeContainer}>
      <Suspense fallback={<Loader />}>
        <ErrorBoundary fallbackRender={handleErrorFallback}>
          <div className={styles.searchContainer}>
            <SearchForm />
            <DropDownList />
          </div>
          <HomeToggle />
          <TopCoinCardList />
          <CoinTickerList />
        </ErrorBoundary>
      </Suspense>
    </div>
  )
}

export default HomePage
