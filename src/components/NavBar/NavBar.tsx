import React, { useState } from 'react'
import booking from '../NavBar/images/booking.svg'
import doctor from '../NavBar/images/doctor.svg'
import dashboard from '../NavBar/images/dashboard.svg'
import { Grid, Text, Box, Image } from 'theme-ui'
import { Link } from 'react-router-dom'
import { DASHBOARD_PAGE_PATH, SIGN_UP_PAGE_PATH } from '../../config/paths'

const LINKS = [
  { label: 'Dashboard', href: '/dashboard', icon: dashboard },
  { label: 'Treatments', href: '/treatments', icon: doctor },
  { label: 'Bookings', href: '/bookings', icon: booking },
]
export default function NavBar(): JSX.Element {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <Box
      sx={{
        display: 'grid',
        height: '100vh',
        width: ['10%', '5%'],
        bg: 'blue.800',
        color: 'bright',
      }}
    >
      <Box
        sx={{ display: 'grid', justifyContent: 'center', alignItems: 'center' }}
      >
        <Image src={dashboard} />
        <Link to={DASHBOARD_PAGE_PATH}>
          <Image src={doctor} />
        </Link>

        <Image src={booking} />
      </Box>
      <Box
        sx={{
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'end',
          pb: 4,
        }}
      >
        <Image src={doctor} />
      </Box>
    </Box>
  )
}
