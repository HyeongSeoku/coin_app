import { HomeIcon, SearchIcon } from 'assets/svgs'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-use'
import cx from 'classnames'

import styles from './nav.module.scss'

const Nav = () => {
  const location = useLocation()

  const detectLocation = (loc: string) => {
    if (loc === '/') return 'home'
    if (loc.includes('search')) return 'search'

    return ''
  }

  const selectedNav = useMemo(() => {
    if (location.pathname === undefined) return ''
    return detectLocation(location.pathname)
  }, [location])

  return (
    <nav className={styles.navList}>
      <Link to='/'>
        <div className={cx(styles.navIconContainer, { [styles.selected]: selectedNav! === 'home' })}>
          <HomeIcon />
        </div>
      </Link>
      <Link to='search'>
        <div className={cx(styles.navIconContainer, { [styles.selected]: selectedNav! === 'search' })}>
          <SearchIcon />
        </div>
      </Link>
    </nav>
  )
}

export default Nav
