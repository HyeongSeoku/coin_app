import { ActivityIcon, HomeIcon } from 'assets/svgs'
import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-use'
import cx from 'classnames'

import styles from './nav.module.scss'

// TODO: 모바일일때 하단에 네비게이션, 이외에는 다른 레이아웃으로 보여줄것

const Nav = () => {
  const location = useLocation()

  // TODO: route조건 추가
  const detectLocation = (loc: string) => {
    if (loc === '/') return 'home'
    if (loc.includes('activity')) return 'activity'
    return 'home'
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
      <Link to='activity'>
        <div className={cx(styles.navIconContainer, { [styles.selected]: selectedNav! === 'activity' })}>
          <ActivityIcon />
        </div>
      </Link>
      <Link to='activity'>
        <div className={cx(styles.navIconContainer, { [styles.selected]: selectedNav! === '' })}>
          <ActivityIcon />
        </div>
      </Link>
      <Link to='/activity'>
        <div className={cx(styles.navIconContainer, { [styles.selected]: selectedNav! === '' })}>
          <ActivityIcon />
        </div>
      </Link>
    </nav>
  )
}

export default Nav
