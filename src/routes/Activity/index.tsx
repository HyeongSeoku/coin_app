import { useParams } from 'react-router-dom'

import styles from './activity.module.scss'

const ActivityPage = () => {
  const { coinId } = useParams()

  return (
    <div className={styles.activityContainer}>
      <span>{coinId}</span>
      <span>Activity page</span>
    </div>
  )
}

export default ActivityPage
