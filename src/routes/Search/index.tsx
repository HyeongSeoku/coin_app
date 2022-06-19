import { useSearchParams, useParams } from 'react-router-dom'
import { useMount } from 'react-use'
import { useSetRecoilState } from 'recoil'
import { Suspense, useMemo } from 'react'

import Loader from 'components/Loader'
import DefaultList from './DefaultList'
import ResultList from './ResultList'
import Detail from 'routes/Search/Detail'
import SearchForm from 'components/SearchForm'
import { dropDownOpenState } from 'states/search'

import styles from './search.module.scss'

const SearchPage = () => {
  const [searchParam] = useSearchParams()
  const currentKeyword = searchParam.get('name')
  const setDropDownState = useSetRecoilState(dropDownOpenState)
  const { coinName } = useParams()

  const isDetail = useMemo(() => {
    if (!coinName) return false
    return true
  }, [coinName])

  const searchResultList = useMemo(() => {
    if (!currentKeyword) return <DefaultList />
    return <ResultList keyword={currentKeyword} />
  }, [currentKeyword])

  useMount(() => {
    setDropDownState(false)
  })

  return (
    <div>
      {!isDetail && (
        <Suspense fallback={<Loader />}>
          <div className={styles.searchContainer}>
            <SearchForm />
          </div>
          <div>{searchResultList}</div>
        </Suspense>
      )}
      {isDetail && (
        <Suspense fallback={<Loader />}>
          <Detail />
        </Suspense>
      )}
    </div>
  )
}

export default SearchPage
