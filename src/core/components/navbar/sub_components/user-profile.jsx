import { faChevronDown, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Button, IconButton, Typography, styled } from '@mui/material'
import React from 'react'

const ProfileImg = styled('img')((theme) => ({

    width: '40px',
    borderRadius: '50%'


}))

const UserproComp = () => {
    return (
        <>
            {/* <Button sx={{ py: 0 }}>
                <Box component='span' fontSize='17px'>
                    <FontAwesomeIcon icon={faUser} />
                </Box>
                <Typography margin='0 15px 0 5px' variant='body2'> Username </Typography>
                <FontAwesomeIcon icon={faChevronDown} />
            </Button> */}

            <IconButton>
                <ProfileImg src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'  />
            </IconButton>
        </>
    )
}

export default UserproComp
