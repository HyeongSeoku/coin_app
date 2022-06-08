import { useSearchParams } from 'react-router-dom'
import { useMount } from 'react-use'
import { useSetRecoilState } from 'recoil'

import DropDownList from 'components/DropDown'
import SearchForm from 'routes/Home/SearchForm'
import { dropDownOpenState } from 'states/search'

import styles from './search.module.scss'
import { Suspense } from 'react'
import Loader from 'components/Loader'
import DefaultList from './DefaultList'

const SearchPage = () => {
  const [searchParam] = useSearchParams()
  const currentKeyword = searchParam.get('name')
  const setDropDownState = useSetRecoilState(dropDownOpenState)

  useMount(() => {
    setDropDownState(false)
  })

  return (
    <div>
      <Suspense fallback={<Loader />}>
        <div className={styles.searchContainer}>
          <SearchForm />
          <DropDownList />
        </div>
        <div>{currentKeyword}</div>
        {!currentKeyword && <DefaultList />}
      </Suspense>
    </div>
  )
}

export default SearchPage
