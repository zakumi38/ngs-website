import { faBars, faList, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Button, IconButton, Stack } from '@mui/material'
import { styled, alpha } from '@mui/material/styles'
import React from 'react'
import navbar from './navbar.module.sass'
import NavMenuComp from './sub_components/nav-menu'

const SearchContainer = styled('form')(({ theme }) => ({

  height: `70%`,
  background: 'inherit'

}))

const SearchItem = styled('input')(({ theme }) => ({

  background: 'inherit',
  width: '50%',
  height: '100%',
  border: `1px solid ${alpha(theme.palette.grey[600], .5)}`,
  borderRadius: '20px',
  outline: 'none',
  padding: '0 20px',
  transition: 'all .3s linear',
  color: '#222',
  // color: alpha(theme.palette.common.white, .8),

  '&::placeholder': {

    // color: alpha(theme.palette.common.white, .5)
    color: '#222',

  },

  '&:focus': {
    width: '100%',
    // outline: `1px solid ${alpha(theme.palette.common.white, .5)}`,
    outline: 'none'
  },

  [theme.breakpoints.down('md')]: {

    width: '55%'
  },

  [theme.breakpoints.down('sm')]: {

    width: '80%'
  }

}))

const NavbarComp = ({ wide, handleWide, isMatch, slideIn }) => {
  return (
    <>

      {/* This is Navbar Session */}

      <Box component='div' className='nav'>
        <Stack component='div' direction='row' justifyContent='space-between' className={`${navbar.nav} ${wide && navbar.newNav} ${isMatch && navbar.fullNav}`}>
          <Stack direction='row' spacing={2} alignItems='center'>

            {/* Buger Bar Session */}

            {
              !isMatch ?
                <IconButton onClick={handleWide}>
                  <FontAwesomeIcon icon={faList} className={navbar.navBtn} />
                </IconButton> :
                <IconButton onClick={slideIn}>
                  <FontAwesomeIcon icon={faBars} className={navbar.navBtn} />
                </IconButton>
            }

            {/* Search Box Session */}

            <SearchContainer>
              <SearchItem placeholder='Search...' type='search' sx={{position: 'relative'}}/>
            </SearchContainer>

          </Stack>

            {/* Navbar Menu Session */}
            
            <NavMenuComp />
        </Stack>
      </Box>
    </>
  )
}

export default NavbarComp
