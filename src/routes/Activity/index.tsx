import { useParams } from 'react-router-dom'

import styles from './activity.module.scss'

const ActivityPage = () => {
  const { coinId } = useParams()

  return <div className={styles.activityContainer}>Activity page</div>
}

export default ActivityPage
