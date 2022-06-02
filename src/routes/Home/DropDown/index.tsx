import { useCallback, useEffect, useMemo, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { coinKeyWordState } from 'states/coin'
import { searchKeyWordState } from 'states/search'
import DropDownItem from './DropDownItem'

import styles from './dropDown.module.scss'

const DropDownList = () => {
  const keyWord = useRecoilValue(searchKeyWordState)
  const keyWordList = useRecoilValue(coinKeyWordState)

  const [dropDownOpen, setDropDownOpen] = useState(false)

  useEffect(() => {
    if (keyWord === '') setDropDownOpen(false)
    else setDropDownOpen(true)
  }, [keyWord])

  const filterDropDownList = useCallback(() => {
    if (!keyWord) return []
    const arr = keyWordList.filter((item) => item.name.toLowerCase().startsWith(keyWord.toLowerCase()))
    return arr
  }, [keyWord, keyWordList])

  const dropDownList = useMemo(() => {
    return filterDropDownList()
  }, [filterDropDownList])

  return (
    <div>
      {dropDownOpen && (
        <ul className={styles.dropDownContainer}>
          {dropDownList.map((item: IDropDown) => (
            <DropDownItem key={`key_word_${item.id}`} data={item} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default DropDownList
