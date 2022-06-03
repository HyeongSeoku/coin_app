import { Logo } from 'assets/svgs'
import styles from './header.module.scss'

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div>
        <span className={styles.logoContainer} />
      </div>
    </header>
  )
}

export default Header
