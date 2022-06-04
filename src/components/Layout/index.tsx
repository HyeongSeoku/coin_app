import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

import styles from './layout.module.scss'

const Layout = () => {
  return (
    <div className={styles.layoutBackground}>
      <div className={styles.layoutContainer}>
        <Header />
        <main className={styles.mainContainer}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
