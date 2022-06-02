import React from 'react'
import { useRecoilState } from 'recoil'
import { searchKeyWordState } from 'states/search'
import styles from './searchForm.module.scss'

const SearchForm = () => {
  const [keyWord, setKeyWord] = useRecoilState(searchKeyWordState)

  const handleChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    setKeyWord(value)
  }

  const handleSubmitKeyword = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: 제출시 로직 작성
    console.log(keyWord)
  }

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmitKeyword}>
      <input value={keyWord} onChange={handleChangeKeyword} />
    </form>
  )
}

export default SearchForm
