import React from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { useMount } from 'react-use'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { modalOpenState } from 'states/modal'

import { dropDownOpenState, searchKeyWordState } from 'states/search'

import styles from './searchForm.module.scss'

const SearchForm = () => {
  const navigate = useNavigate()
  const [keyWord, setKeyWord] = useRecoilState(searchKeyWordState)
  const setDropDownState = useSetRecoilState(dropDownOpenState)
  const setModalState = useSetRecoilState(modalOpenState)

  useMount(() => {
    setDropDownState(false)
  })

  const handleChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    setKeyWord(value)
  }

  const handleSubmitKeyword = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (keyWord !== '') {
      return navigate({ pathname: '/search', search: createSearchParams({ name: keyWord }).toString() })
    }
    return setModalState({ open: true, text: '검색어를 입력해주세요!' })
  }

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmitKeyword}>
      <input placeholder='Search Crypto' value={keyWord} onChange={handleChangeKeyword} />
    </form>
  )
}

export default SearchForm
