import Toggle from 'components/Toggle'
import { HOME_TOGGLE } from 'constants/home'
import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { homeToggleState } from 'states/home'

import styles from './homeToggle.module.scss'

const HomeToggle = () => {
  const selectedToggle = useRecoilValue(homeToggleState)

  useEffect(() => {
    console.log(selectedToggle)
  }, [selectedToggle])

  return (
    <div className={styles.container}>
      <Toggle toggleData={HOME_TOGGLE} />
      <div className={styles.contentArea} />
    </div>
  )
}

export default HomeToggle
