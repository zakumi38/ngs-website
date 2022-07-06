import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconButton } from '@mui/material'
import React from 'react'

const NotiComp = () => {
    return (
        <>
            <IconButton sx={{fontSize: '18px'}}>
                <FontAwesomeIcon icon={faBell} />
            </IconButton>
        </>
    )
}

export default NotiComp
