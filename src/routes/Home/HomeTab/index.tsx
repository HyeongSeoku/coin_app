import { useMemo, useState } from 'react'

import { HOME_TAB } from 'constants/home'
import Tab from 'components/Tab'
import MyFeed from './MyFeed'
import TodayBestList from './TodayBestList'

import styles from './homeTab.module.scss'

const HomeTab = () => {
  const [selectedToggle, setSelectedToggle] = useState(HOME_TAB[0].id)
  const toggleContents = useMemo(() => {
    if (selectedToggle === 'TODAY_BEST') return <TodayBestList />
    return <MyFeed />
  }, [selectedToggle])

  return (
    <div className={styles.container}>
      <Tab tabData={{ contents: HOME_TAB, currentTabState: selectedToggle, setTabState: setSelectedToggle }} />
      <div className={styles.contentArea}>{toggleContents}</div>
    </div>
  )
}

export default HomeTab
