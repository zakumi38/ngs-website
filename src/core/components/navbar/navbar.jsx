import React from 'react'

// Files
import NavMenuComp from './sub_components/nav-menu'
import navbar from './navbar.module.sass'
import {faBars, faList} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Box, IconButton, Stack} from '@mui/material'
// import {styled} from '@mui/material/styles'

// const SearchContainer = styled('form')(({ theme }) => ({
//   height: `70%`,
//   background: 'inherit'
// }))

// const SearchItem = styled('input')(({ theme }) => ({

//   background: '#ECECEC',
//   width: '50%',
//   height: '100%',
//   // border: `1px solid ${alpha(theme.palette.grey[600], .5)}`,
//   border: "1px solid #ECECEC",
//   borderRadius: '20px',
//   outline: 'none',
//   padding: '0 20px',
//   transition: 'all .3s linear',
//   color: '#1E2019',

//   '&::placeholder': {
//     color: '#1E2019',
//   },

//   '&:focus': {
//     width: '100%',
//     outline: 'none'
//   },

//   [theme.breakpoints.down('md')]: {
//     width: '55%'
//   },

//   [theme.breakpoints.down('sm')]: {
//     width: '80%'
//   }
// }))

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

            {/* <SearchContainer>
              <SearchItem placeholder='Search...' type='search' sx={{position: 'relative' , borderRadius: '5px',"::placeholder":{color:"#7282a2"}} }/>
            </SearchContainer> */}

          </Stack>

            {/* Navbar Menu Session */}
            
            <NavMenuComp />
        </Stack>
      </Box>
    </>
  )
}

export default NavbarComp
