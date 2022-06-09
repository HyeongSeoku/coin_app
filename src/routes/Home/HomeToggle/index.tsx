import Toggle from 'components/Toggle'
import { HOME_TOGGLE } from 'constants/home'
import { useMemo } from 'react'
import { useRecoilValue } from 'recoil'
import { homeToggleState } from 'states/home'

import styles from './homeToggle.module.scss'
import MyFeed from './MyFeed'
import TodayBestList from './TodayBestList'

const HomeToggle = () => {
  const selectedToggle = useRecoilValue(homeToggleState)
  const toggleContents = useMemo(() => {
    if (selectedToggle === 'TODAY_BEST') return <TodayBestList />
    return <MyFeed />
  }, [selectedToggle])

  return (
    <div className={styles.container}>
      <Toggle toggleData={HOME_TOGGLE} />
      <div className={styles.contentArea}>{toggleContents}</div>
    </div>
  )
}

export default HomeToggle
