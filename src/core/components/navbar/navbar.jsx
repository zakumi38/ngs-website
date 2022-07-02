import React, { useEffect } from 'react'
import navBarStyles from './navbar.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { TextField } from '@mui/material'

const Navbar = ({navToggle ,setToggle}) => {
  const handleOnClick = () =>{
    setToggle(!navToggle)
  }
  
  useEffect(()=> {
    window.addEventListener('resize', ()=>{
      setToggle(false)
    })
  },[setToggle])
  

  return (
    <nav className={`${navBarStyles.navbar} 
    ${navToggle ? navBarStyles.active: ''}`}>

      <div className={navBarStyles.nav_Toggle}>
          <button onClick={handleOnClick}>
              <FontAwesomeIcon icon={ faBars }></FontAwesomeIcon>
          </button>
      </div>

      <div className={navBarStyles.nav_search}>
          <TextField id="outlined-size-small" label="Search" size="small" />
      </div>
    </nav>
  )
}

export default Navbar