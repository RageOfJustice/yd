import React from 'react'
import { Logo } from '../assets/images'
import { YD_URL } from '../constants'

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-md navbar-dark bg-secondary">
      <span className="navbar-brand">
        <Logo />
      </span>
      <ul className="nav navbar-nav">
        <li className="nav-item">
          <a
            className="nav-link"
            rel="noopener noreferrer"
            target="_blank"
            href={YD_URL}
          >
            Перейти в Yandex.Disk
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Выйти
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
