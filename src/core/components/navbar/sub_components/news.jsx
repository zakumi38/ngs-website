import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconButton } from '@mui/material'
import React from 'react'

const NewsComp = () => {
  return (
    <>
        <IconButton>
            <FontAwesomeIcon icon={faBars} />
        </IconButton>
    </>
  )
}

export default NewsComp
