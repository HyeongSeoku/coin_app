import Loader from 'components/Loader'
import { Suspense, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import Detail from 'routes/Detail'
import styles from './activity.module.scss'

const ActivityPage = () => {
  const { coinId } = useParams()
  const isDetail = useMemo(() => {
    if (!coinId) return false
    return true
  }, [coinId])

  return (
    <div className={styles.activityContainer}>
      {isDetail && (
        <Suspense fallback={<Loader />}>
          <Detail idState={coinId!} />
        </Suspense>
      )}
      {!isDetail && <span>Activity page</span>}
    </div>
  )
}

export default ActivityPage
