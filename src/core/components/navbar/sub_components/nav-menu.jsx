import React, { useState } from 'react'
import { Stack, Button } from '@mui/material'
import MessageComp from './message'
import NotiComp from './noti'
import UserproComp from './user-profile'
import NewsComp from './news'

const NavMenuComp = () => {
    const [message, setMessge] = useState()
    const [noti, setNoti] = useState()
    const [user, setUser] = useState()
    const [news, setNews] = useState()
    return (
        <>
            <Stack direction='row' spacing={1} alignItems='center'>
                <MessageComp />
                <NotiComp />
                <UserproComp />
                {/* <NewsComp /> */}
            </Stack>
        </>
    )
}

export default NavMenuComp
