import Toggle from 'components/Toggle'
import { HOME_TOGGLE } from 'constants/home'
import { useMemo, useState } from 'react'

import styles from './homeToggle.module.scss'
import MyFeed from './MyFeed'
import TodayBestList from './TodayBestList'

const HomeToggle = () => {
  const [selectedToggle, setSelectedToggle] = useState(HOME_TOGGLE[0].id)
  const toggleContents = useMemo(() => {
    if (selectedToggle === 'TODAY_BEST') return <TodayBestList />
    return <MyFeed />
  }, [selectedToggle])

  return (
    <div className={styles.container}>
      <Toggle
        toggleData={{ contents: HOME_TOGGLE, currentToggleState: selectedToggle, setToggle: setSelectedToggle }}
      />
      <div className={styles.contentArea}>{toggleContents}</div>
    </div>
  )
}

export default HomeToggle
