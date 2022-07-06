import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, IconButton } from '@mui/material'
import React from 'react'

const MessageComp = () => {

    return (
        <>
        
            <Box>
                <IconButton sx={{fontSize: '18px'}}>
                    <FontAwesomeIcon icon={faEnvelope} />
                </IconButton>
            </Box>
        
        </>
    )
}

export default MessageComp
