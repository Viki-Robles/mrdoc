import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import booking from './images/booking.svg'
import contract from './images/contract.svg'
import doctor from './images/doctor.svg'
import dashboard from './images/dashboard.svg'
import { Image } from 'theme-ui'

const LINKS = [
  { label: 'Dashboard', href: '/dashboard', icon: dashboard },
  { label: 'Treatments', href: '/treatments', icon: doctor },
  { label: 'Bookings', href: '/bookings', icon: booking },
  { label: 'Contract', href: '/contract', icon: contract },
]

export default function NavBar(): JSX.Element {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {LINKS.map(({ label, icon, href }) => {
          return (
            <li className="nav-item" key={label}>
              <Link to={href} className="nav-link">
                <Image
                  src={icon}
                  width={30}
                  height={30}
                  sx={{ margin: '0 1.5rem' }}
                />
                <span className="link-text">{label}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
