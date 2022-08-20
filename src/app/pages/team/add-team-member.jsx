import React, {useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Files
import api from '../../../mockdatabase/database';
import {Button, Container, Grid, IconButton, TextField, Typography, Select, FormControl, MenuItem} from "@mui/material";
import teamStyle from "./team.module.sass"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAdd, faArrowLeft} from "@fortawesome/free-solid-svg-icons";

export default function AddTeam() {
    const navigate = useNavigate()
    const {state:{teams}} = useLocation()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [experience, setExperience] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [team, setTeam] = useState(teams[0].teamname)
    const [occupation, setOccupation] = useState("")
    const [personalExperience, setPersonalExperience] = useState("")
    function addMember(){
        const memberInfo = {
            "image": "./logo512.png",
            "name": name,
            "occupation": occupation,
            "team": team,
            "experience": experience,
            "phone": phoneNumber,
            "email": email,
            "personalExp":personalExperience
        }
        api.post('/developer-team-members',memberInfo)
        navigate('/team',{state:true})
    }
    return (
        <Container className={teamStyle.addTeamContainer}>
            <Grid container sx={{backgroundColor:"white",borderRadius:"10px", padding: "20px"}}>
                <Grid item>
                    <IconButton aria-label="back"  onClick={_ => navigate('/team', {replace:true})}>
                        <FontAwesomeIcon icon={faArrowLeft} className={teamStyle.back}/>
                    </IconButton>
                </Grid>
                <Grid item container sm={12} className={teamStyle.teamForm}>
                    <Grid item sm={12} className={teamStyle.teamImgContainer}>
                        <div>
                            <img src="/04.jpg" className={teamStyle.teamImg} alt="Team"/>
                            <div className={teamStyle.overlay}>
                                <IconButton aria-label="View Image" className={teamStyle.imgViewIcon}>
                                    <FontAwesomeIcon icon={faAdd}/>
                                </IconButton>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <Grid item container justifyContent="center" className={teamStyle.inputsContainer}>
                    <Grid item container sm={8}  justifyContent="start" alignItems="center" columnSpacing={3}
                          className={teamStyle.inputsWrapper}>
                        <Grid item sm={3} justifySelf="center">
                            <Typography variant="h6" textAlign="end">
                                Name
                            </Typography>
                        </Grid>
                        <Grid item sm={9}>
                            <TextField required fullWidth id="fullWidth" value={name} onChange={e => setName(e.target.value)}/>
                        </Grid>
                    </Grid>
                    <Grid item container sm={8}  justifyContent="start" alignItems="center" columnSpacing={3}
                          className={teamStyle.inputsWrapper}>
                        <Grid item sm={3} justifySelf="center">
                            <Typography variant="h6" textAlign="end">
                                Email
                            </Typography>
                        </Grid>
                        <Grid item sm={9}>
                            <TextField required fullWidth id="fullWidth" value={email} onChange={e => setEmail(e.target.value)}/>
                        </Grid>
                    </Grid>
                    <Grid item container sm={8}  justifyContent="start" alignItems="center" columnSpacing={3}
                          className={teamStyle.inputsWrapper}>
                        <Grid item sm={3} justifySelf="center">
                            <Typography variant="h6" textAlign="end">
                                Experience
                            </Typography>
                        </Grid>
                        <Grid item sm={9}>
                            <TextField required fullWidth id="fullWidth" value={experience}
                                       onChange={e => setExperience(e.target.value)}/>
                        </Grid>
                    </Grid>
                    <Grid item container sm={8}  justifyContent="start" alignItems="center" columnSpacing={3}
                          className={teamStyle.inputsWrapper}>
                        <Grid item sm={3} justifySelf="center">
                            <Typography variant="h6" textAlign="end">
                                Phone Number
                            </Typography>
                        </Grid>
                        <Grid item sm={9}>
                            <TextField required fullWidth id="fullWidth" value={phoneNumber}
                                       onChange={e => setPhoneNumber(e.target.value)}/>
                        </Grid>
                    </Grid>
                    <Grid item container sm={8}  justifyContent="start" alignItems="center" columnSpacing={3}
                          className={teamStyle.inputsWrapper}>
                        <Grid item sm={3} justifySelf="center">
                            <Typography variant="h6" textAlign="end">
                                Occupation
                            </Typography>
                        </Grid>
                        <Grid item sm={9}>
                            <TextField required fullWidth id="fullWidth" value={occupation}
                                       onChange={e => setOccupation(e.target.value)}/>
                        </Grid>
                    </Grid>
                    <Grid item container sm={8}  justifyContent="start" alignItems="center" columnSpacing={3}
                          className={teamStyle.inputsWrapper}>
                        <Grid item sm={3} justifySelf="center">
                            <Typography variant="h6" textAlign="end">
                                Team
                            </Typography>
                        </Grid>
                        <Grid item sm={9}>
                            <FormControl fullWidth>

                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={team}
                                onChange={e => setTeam(e.target.value)}
                                MenuProps={{ classes: { paper: teamStyle.teamSelect } }}
                            >
                                {teams.map(team => <MenuItem value={team.teamname} key={team.id} className={teamStyle.teamSelectItem}>{team.teamname}</MenuItem>)}
                            </Select>
                        </FormControl>
                        </Grid>
                    </Grid>
                    <Grid item container sm={8}  justifyContent="start" alignItems="center" columnSpacing={3}
                          className={teamStyle.inputsWrapper}>
                        <Grid item sm={3} justifySelf="center">
                            <Typography variant="h6" textAlign="end">
                                Personal Experience
                            </Typography>
                        </Grid>
                        <Grid item sm={9}>
                            <TextField required fullWidth id="fullWidth" value={personalExperience} multiline rows={3}
                                       onChange={e => setPersonalExperience(e.target.value)}/>
                        </Grid>
                    </Grid>
                    <Grid item container justifyContent="end" marginTop="1rem">
                        <Grid item>
                            <Button variant="contained" startIcon={<FontAwesomeIcon icon={faAdd}/>} color="success"
                                    size="large" onClick={addMember}>
                                Add
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>);
}
