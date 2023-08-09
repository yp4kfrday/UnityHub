import React from 'react'
import styles from './Header.module.css'
import { Navbar, Auth, Logo } from './components'

const Header: React.FC = () => {

  return (
    <div className={styles.header}>
      <div className={styles.header__section}>
        <Logo />
        <Navbar />
      </div>
      <div className={styles.header__section}>
        <Auth />
      </div>
    </div>
  )
}

export { Header }