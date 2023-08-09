import React from 'react'
import styles from './Navbar.module.css'

const Navbar: React.FC = () => {
  const navItems = [
    { id: 1, title: 'Home', link: '/' },
    { id: 2, title: 'Todo', link: '/todo' },
    { id: 3, title: 'Contact', link: '/contact' },
  ];

  const currentPath = window.location.pathname;

  return (
    <div className={styles.header__nav}>
      <ul>
        {navItems.map((item) => (
          <li key={item.id}>
            <a href={item.link} className={item.link === currentPath ? styles.active : ''}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export { Navbar }