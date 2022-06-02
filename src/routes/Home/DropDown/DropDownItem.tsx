import React, { useCallback, useMemo } from 'react'
import { useRecoilState } from 'recoil'
import { searchKeyWordState } from 'states/search'
import styles from './dropDown.module.scss'

const DropDownItem = ({ data }: { data: IDropDown }) => {
  const { name, id } = data
  const [keyWord, setKeyWord] = useRecoilState(searchKeyWordState)

  const handleClickDropDown = (e: React.MouseEvent<HTMLDivElement>) => {
    // TODO: id로 이동할 예정
    const { drop } = e.currentTarget.dataset
    setKeyWord(drop!)
  }

  // TODO : 로직 단순화
  const markText = useMemo(() => {
    let markIdx = 0
    if (!keyWord.length) {
      return <span />
    }
    const splitKeyWord = keyWord.split('')
    const targetElement = (
      <>
        {name.split('').map((element, idx) => {
          if (String(splitKeyWord[markIdx]).toLowerCase() === name[idx].toLowerCase()) {
            markIdx += 1
            const markKey = `mark_${idx}_${element}`
            return (
              <mark className={styles.markKeyWord} key={markKey}>
                {element}
              </mark>
            )
          }
          const spanKey = `span_${idx}_${element}`
          return (
            <span className={styles.spanKeyWord} key={spanKey}>
              {element}
            </span>
          )
        })}
      </>
    )
    return targetElement
  }, [keyWord, name])

  return (
    <li className={styles.dropDownItem}>
      <div role='button' tabIndex={0} onClick={handleClickDropDown} data-drop={name}>
        {markText}
      </div>
    </li>
  )
}

export default DropDownItem
