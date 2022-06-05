import { useSearchParams } from 'react-router-dom'
import { useMount } from 'react-use'
import { useSetRecoilState } from 'recoil'

import DropDownList from 'components/DropDown'
import SearchForm from 'routes/Home/SearchForm'
import { dropDownOpenState } from 'states/search'

import styles from './search.module.scss'

const Search = () => {
  const [searchParam] = useSearchParams()
  const currentKeyword = searchParam.get('name')
  const setDropDownState = useSetRecoilState(dropDownOpenState)

  useMount(() => {
    setDropDownState(false)
  })

  return (
    <div>
      <div className={styles.searchContainer}>
        <SearchForm />
        <DropDownList />
      </div>
      <div>{currentKeyword}</div>
    </div>
  )
}

export default Search
