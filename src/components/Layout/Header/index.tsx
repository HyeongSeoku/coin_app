import { Logo } from 'assets/svgs'
import { Link } from 'react-router-dom'
import styles from './header.module.scss'

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <Link to='/'>
          <Logo />
        </Link>
      </div>
    </header>
  )
}

export default Header
