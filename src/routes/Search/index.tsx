import { useSearchParams, useParams } from 'react-router-dom'
import { useMount } from 'react-use'
import { useSetRecoilState } from 'recoil'

import DropDownList from 'components/DropDown'
import SearchForm from 'routes/Home/SearchForm'
import { dropDownOpenState } from 'states/search'

import styles from './search.module.scss'
import { Suspense, useMemo } from 'react'
import Loader from 'components/Loader'
import DefaultList from './DefaultList'
import ResultList from './ResultList'
import Detail from 'routes/Search/Detail'

const SearchPage = () => {
  const [searchParam] = useSearchParams()
  const currentKeyword = searchParam.get('name')
  const setDropDownState = useSetRecoilState(dropDownOpenState)
  const { coinId } = useParams()

  const isDetail = useMemo(() => {
    if (!coinId) return false
    return true
  }, [coinId])

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
            <DropDownList />
          </div>
          <div>{searchResultList}</div>
        </Suspense>
      )}
      {isDetail && (
        <Suspense fallback={<Loader />}>
          <Detail idState={coinId!} />
        </Suspense>
      )}
    </div>
  )
}

export default SearchPage
