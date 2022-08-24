import React, { useState, useEffect} from "react"
import {Button, Container, Grid, Typography, TextField, styled,Select, FormControl, MenuItem} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faPencil} from "@fortawesome/free-solid-svg-icons"
import editProfileStyle from "./edit-profile.module.sass"
import { useNavigate } from "react-router-dom";
import api from "../../../mockdatabase/database";

export const CustomTextField = styled(TextField)({
    width: "70%",
    borderColor: "#000",
})
export default function UserProfile() {
    const [isChangingPassword, setIsChangingPassword] = useState(false)
    const [inputs, setInputs] = useState({
        'username':'',
        'email':'',
        'role':'admin'
    })
    const [passwordInput, setPasswordInput] = useState('')
    const [errorText ,setErrorText] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        api.get('/user').then(res => setInputs({'username':res.data.username, 'email':res.data.email, 'role':res.data.role}))
    },[])
    useEffect(() => {
        console.log(editProfileStyle.color)
    },[editProfileStyle.color])
    function passwordCheck(e){
        e.preventDefault()
        api.get('/user').then(res => {
            if(res.data.password === passwordInput){
                navigate('/change-password')
                setErrorText('')
                return
            }
            setErrorText('Password is incorrect!')
        })
    }
    function save(){
        api.patch('/user', inputs)
    }
    return (
            <Container className={editProfileStyle.form}>
                <Grid container  spacing={2} sx={{alignItems: {xs: "center"} , marginTop:"20px"}} className={editProfileStyle.formGrid} component="form">
                    <Grid item xs={12} sx={{display: "flex", padding: 0}}>
                        <FontAwesomeIcon icon={faArrowLeft} className={editProfileStyle.iconLeftArrow} onClick={() => navigate('/', {replace:true})}/>
                        <Typography variant="h4" className={editProfileStyle.title}>Edit Profile</Typography>
                    </Grid>
                    <Grid item xs={2}
                            sx={{display: "flex", justifyContent: "center", position: "relative", margin: "0 auto"}}>
                        <img className={editProfileStyle.editProfilePhoto}
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                alt=""/>
                        <FontAwesomeIcon icon={faPencil} className={editProfileStyle.editProfilePhotoPencil}/>
                    </Grid>
                    <Grid container item xs={12} spacing={4}>
                        <Grid container item xs={4} justifyContent='flex-end' alignItems='center' direction='column' gap='15px'>
                            <Typography component='h6' variant="h6" className={editProfileStyle.label}>Username</Typography>
                            <Typography component='h6' variant="h6" className={editProfileStyle.label}>Email</Typography>
                            <Typography component='h6' variant="h6" className={editProfileStyle.label}>Role</Typography>
                            {isChangingPassword && <Typography component='h6' variant="h6" className={editProfileStyle.label}>Old Password</Typography>}
                        </Grid>
                        <Grid container item xs={8} justifyContent='flex-start' alignItems='center' direction='column' gap='15px'>
                            <Grid item container justifyContent='flex-start'>
                                <CustomTextField value={inputs.username} onChange={e => setInputs({...inputs,'username':e.target.value})} InputProps={{className:editProfileStyle.inputField}} variant="outlined"/>
                            </Grid>
                            <Grid item container justifyContent='flex-start'>
                                <CustomTextField value={inputs.email} onChange={e => setInputs({...inputs,'email':e.target.value})} InputProps={{className:editProfileStyle.inputField}} variant="outlined"/>
                            </Grid>
                            <Grid item container justifyContent='flex-start'>
                                <FormControl defaultValue={"admin"} disabled className={editProfileStyle.inputField} sx={{width: "70%", textAlign:'center'}}>
                                    <Select
                                        className={editProfileStyle.inputField}
                                        value={inputs.role}
                                        displayEmpty
                                        inputProps={{'aria-label': 'Without label'}}
                                        >
                                        <MenuItem value="admin" selected>Admin</MenuItem>
                                        <MenuItem value="editor">Editor</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            {isChangingPassword && <Grid item container justifyContent='flex-start'>
                                <CustomTextField value={passwordInput} onChange={e => setPasswordInput(e.target.value)} InputProps={{className:editProfileStyle.inputField}} variant="outlined"/>
                            </Grid>}
                        </Grid>
                        {errorText && <Grid container item xs={12} justifyContent='flex-end'>
                                <Grid item container sx={{width:'89%'}} justifyContent='center'>
                                    <Typography variant="body2" className={editProfileStyle.errorText}>{errorText}</Typography>
                                </Grid>
                            </Grid>}
                    </Grid>
                    {
                        isChangingPassword ?
                            <>
                                <Grid container item xs={12} justifyContent='flex-end'>
                                    <Grid item container sx={{width:'89%'}} justifyContent='center'>
                                        <Typography variant="body2" className={editProfileStyle.forgotPassword}>Forgot Password?</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container item xs={12}>
                                    <Button variant="contained" size="large" sx={{marginLeft: "auto"}} type="submit" onClick={e =>passwordCheck(e)}>NEXT</Button>
                                </Grid>
                            </>
                            :
                            <>
                                <Grid container item xs={12} justifyContent='flex-end'>
                                    <Grid item container sx={{width:'89%'}} justifyContent='center'>
                                        <Typography variant="body2" onClick={_ => setIsChangingPassword(!isChangingPassword)} className={editProfileStyle.forgotPassword}>Change Password</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container item xs={12}>
                                    <Button variant="contained" size="large" sx={{marginLeft: "auto"}} type="submit" onClick={save}>SAVE</Button>
                                </Grid>
                            </>
                    }
                </Grid>
            </Container>
    )
}