import React from 'react'
import { Link } from 'react-router-dom'
import booking from './images/appointment.svg'
import payment from './images/payment.svg'
import doctor from './images/doctors.svg'
import dashboard from './images/dashboard.svg'
import './NavBar.css'

export interface NavBarProps {
  isLoading: boolean
}

const LINKS = [
  { label: 'Dashboard', href: '/dashboard', icon: dashboard },
  { label: 'Profile', href: '/my-profile', icon: booking },
  { label: 'Doctors', href: '/treatments', icon: doctor },
  { label: 'Appointments', href: '/bookings', icon: booking },
]

const FILES = [{ label: 'Payment', href: '/payment', icon: payment }]

export default function NavBar({ isLoading }: NavBarProps): JSX.Element {
  return (
    <nav className="navbar">
      {!isLoading &&
        LINKS.map(({ label, icon, href }) => {
          return (
            <div className="nav-item" key={label}>
              <Link to={href} className="nav-link">
                <img className="nav-image" src={icon} width={40} height={40} />
              </Link>
            </div>
          )
        })}
      {!isLoading &&
        FILES.map(({ label, icon, href }) => {
          return (
            <div className="nav-item" key={label}>
              <Link to={href} className="nav-link">
                <img className="nav-image" src={icon} width={40} height={40} />
              </Link>
            </div>
          )
        })}
    </nav>
  )
}
