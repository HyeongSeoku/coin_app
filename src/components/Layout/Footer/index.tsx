import Nav from '../Nav'

import styles from './footer.module.scss'

// TODO: 모바일일떄 하단에 네비게이션, 이외에는 다른 레이아웃으로 보여줄것

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <Nav />
    </footer>
  )
}

export default Footer
