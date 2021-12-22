import React from 'react'
import { Link } from 'react-router-dom'
import booking from './images/appointment.svg'
import payment from './images/payment.svg'
import doctor from './images/doctors.svg'
import dashboard from './images/dashboard.svg'
import './NavBar.css'

const LINKS = [
  { label: 'Dashboard', href: '/dashboard', icon: dashboard },
  { label: 'Treatments', href: '/treatments', icon: doctor },
  { label: 'Appointments', href: '/bookings', icon: booking },
]

const FILES = [{ label: 'Payment', href: '/payment', icon: payment }]

export default function NavBar(): JSX.Element {
  return (
    <nav className="navbar">
      <h3 className="nav-header">MEDICINE</h3>
      {LINKS.map(({ label, icon, href }) => {
        return (
          <div className="nav-item" key={label}>
            <Link to={href} className="nav-link">
              <img className="nav-image" src={icon} width={40} height={40} />
              <div className="link-text">{label}</div>
            </Link>
          </div>
        )
      })}
      <h3 className="nav-header">FILES</h3>
      {FILES.map(({ label, icon, href }) => {
        return (
          <div className="nav-item" key={label}>
            <Link to={href} className="nav-link">
              <img className="nav-image" src={icon} width={40} height={40} />
              <div className="link-text">{label}</div>
            </Link>
          </div>
        )
      })}
    </nav>
  )
}
