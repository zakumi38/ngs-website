import React, {useState} from "react"
import {Button, Container, Grid, Typography} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import editProfileStyle from "./edit-profile.module.sass";
import "./edit-profile.module.sass"
import { CustomTextField } from "./EditProfile";
import api from "../../../mockdatabase/database";
import { useNavigate } from "react-router-dom";

export default function ChangePassword() {
    const [passwords, setPasswords] = useState({
        'new password':'',
        'confirm password':''
    })
    const [errorText, setErrorText] = useState('')
    const navigate = useNavigate()
    function changePassword(e){
        e.preventDefault()
        if(passwords['new password'] === passwords['confirm password']){
            api.patch('/user', {'password':passwords['new password']})
            navigate('/user-profile')
            return
        }
        setErrorText("Password isn't matched!")
    }
    return (
            <Container className={editProfileStyle.container2}>
               <Grid container spacing={2} component="form">
                    <Grid item xs={12} sx={{display: "flex", marginBottom: "40px"}}>
                        <FontAwesomeIcon icon={faArrowLeft} className={editProfileStyle.iconLeftArrow}/>
                        <Typography variant="h4" className={editProfileStyle.title}>Change Password</Typography>
                    </Grid>
                    <Grid container item xs={4} justifyContent='flex-end' alignItems='center' direction='column' gap='15px'>
                        <Typography component='h6' variant="h6" className={editProfileStyle.label}>New Password</Typography>
                        <Typography component='h6' variant="h6" className={editProfileStyle.label}>Confirm Password</Typography>
                    </Grid>
                    <Grid container item xs={8} justifyContent='flex-start' alignItems='center' direction='column' gap='15px'>
                        <Grid item container justifyContent='flex-start'>
                            <CustomTextField value={passwords['new password']} onChange={e => setPasswords({...passwords,'new password':e.target.value})} InputProps={{className:editProfileStyle.inputField}} variant="outlined"/>
                        </Grid>
                        <Grid item container justifyContent='flex-start'>
                            <CustomTextField value={passwords['confirm password']} onChange={e => setPasswords({...passwords,'confirm password':e.target.value})} InputProps={{className:editProfileStyle.inputField}} variant="outlined"/>
                        </Grid>
                    </Grid>
                    {errorText && <Grid container item xs={12} marginTop='15px' justifyContent='flex-end'>
                                <Grid item container sx={{width:'89%'}} justifyContent='center'>
                                    <Typography variant="body2" className={editProfileStyle.errorText}>{errorText}</Typography>
                                </Grid>
                            </Grid>}
                    <Grid item xs={12} container justifyContent='flex-end'>
                        <Button variant="contained" size="large" form="test" onClick={changePassword}>Save</Button>
                    </Grid>
               </Grid>
            </Container>
    )
}