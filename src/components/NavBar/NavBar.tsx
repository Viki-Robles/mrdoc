import React, { useState, Fragment } from 'react'
import booking from '../NavBar/images/booking.svg'
import doctor from '../NavBar/images/doctor.svg'
import dashboard from '../NavBar/images/dashboard.svg'
import { Box, Image, Button } from 'theme-ui'
import { Link } from 'react-router-dom'
import { DASHBOARD_PAGE_PATH } from '../../config/paths'
import { links } from '../../theme/links'

const LINKS = [
  { label: 'Dashboard', href: '/dashboard', icon: dashboard },
  { label: 'Treatments', href: '/treatments', icon: doctor },
  { label: 'Bookings', href: '/bookings', icon: booking },
]
export default function NavBar(): JSX.Element {
  const [isOpen, setisOpen] = useState(false)

  const toggleMenuButton = () => {
    setisOpen(!isOpen)
  }
  return (
    <Fragment>
      <Button
        sx={{ display: ['block', 'none'], position: 'absolute', zIndex: 1 }}
        onClick={toggleMenuButton}
      >
        Menu
      </Button>

      {isOpen && (
        <Box
          sx={{
            display: 'grid',
            height: ['70vh', '100vh'],
            width: ['50%', '5%'],
            bg: 'blue.800',
            color: 'bright',
            position: ['absolute', 'relative'],
          }}
        >
          <Box
            sx={{
              display: 'grid',
              justifyContent: 'center',
              alignItems: 'center',
            }}
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
      )}
    </Fragment>
  )
}
