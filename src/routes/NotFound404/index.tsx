import { NotFound } from 'assets/svgs'
import styles from './notFound404.module.scss'

const NotFoundPage = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.title}>경로를 찾을수 없습니다.</h1>
      <NotFound className={styles.notFound} />
    </div>
  )
}

export default NotFoundPage
