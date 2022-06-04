import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-use'
import { useSetRecoilState } from 'recoil'
import { homeToggleState } from 'states/home'

import styles from './toggle.module.scss'

interface IToggleProps {
  id: string
  name: string
  icon: JSX.Element
}

const Toggle = ({ toggleData }: { toggleData: IToggleProps[] }) => {
  const [selectedToggle, setSelectedToggle] = useState(toggleData[0].name)
  const setHomeSelectedToggle = useSetRecoilState(homeToggleState)
  const { pathname } = useLocation()

  const handleChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSelectedToggle(value)
    if (pathname === '/') setHomeSelectedToggle(value)
  }

  return (
    <div className={styles.radioGroup}>
      {toggleData.map((toggleItem) => (
        <div className={styles.radioItem} key={`toggle_${toggleItem.id}`}>
          <input
            className={styles.radioBtn}
            type='radio'
            name='radio'
            value={toggleItem.name}
            id={toggleItem.id}
            checked={selectedToggle === toggleItem.name}
            onChange={handleChangeRadio}
          />
          <label className={styles.radioText} htmlFor={toggleItem.id}>
            {toggleItem.name}
          </label>
        </div>
      ))}
    </div>
  )
}

export default Toggle
