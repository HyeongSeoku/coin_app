import { LoaderIcon } from 'assets/svgs'

import styles from './loader.module.scss'

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <LoaderIcon className={styles.loadingIcon} />
      <span>로딩중....</span>
    </div>
  )
}

export default Loader
