import React from 'react'
import { Logo } from '../assets/images'
import { Link } from 'react-router-dom'
import { YD_URL } from '../constants'

const Header = ({ logout }) => (
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
          <Link onClick={logout} className="nav-link" to="/">
            Выйти
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
