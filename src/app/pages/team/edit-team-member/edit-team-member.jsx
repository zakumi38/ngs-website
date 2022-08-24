import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

// Files
import api from "../../../../mockdatabase/database"
import {
    Button,
    Container,
    Grid,
    IconButton,
    TextField,
    Typography,
    Select,
    FormControl,
    MenuItem,
} from "@mui/material"
import teamStyle from "../team-list/team.module.sass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faEye } from "@fortawesome/free-solid-svg-icons"
import axios from "axios"

const responsiveText = { sm: "end", md: "end", lg: "end", xl: "end" }
export default function EditTeamMember({ disabled = false }) {
    const [row, setRow] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        axios
            .get(`http://localhost:3500/developer-team-members/${id}`)
            .then((val) => {
                setRow(val.data)
            })
    }, [id])
    function editMember() {
        api.put(`/developer-team-members/${row.id}`, row)
        navigate("/team")
    }
    return (
        <Container maxWidth={false}>
            <Grid
                container
                sx={{
                    backgroundColor: "white",
                    borderRadius: "10px",
                    padding: "20px",
                }}
            >
                <Grid item>
                    <IconButton
                        aria-label="back"
                        onClick={(_) => navigate("/team", { replace: true })}
                    >
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </IconButton>
                </Grid>
                <Grid item container xs={12}>
                    <Grid
                        item
                        container
                        xs={12}
                        alignItems="center"
                        justifyContent="center"
                        marginBottom={"2rem"}
                    >
                        <div>
                            <img src="/04.jpg" alt="Team" />
                        </div>
                    </Grid>
                </Grid>
                <Grid item container justifyContent="center" rowGap={"20px"}>
                    <Grid
                        item
                        container
                        sm={8}
                        justifyContent="start"
                        alignItems="center"
                        columnSpacing={3}
                    >
                        <Grid item xs={12} sm={3} justifySelf="center">
                            <Typography
                                variant="h6"
                                textAlign={{ xs: "start", ...responsiveText }}
                            >
                                Name
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <TextField
                                disabled={disabled}
                                fullWidth
                                id="fullWidth"
                                value={row.name}
                                onChange={(e) =>
                                    setRow({ ...row, name: e.target.value })
                                }
                            />
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        container
                        sm={8}
                        justifyContent="start"
                        alignItems="center"
                        columnSpacing={3}
                    >
                        <Grid item xs={12} sm={3} justifySelf="center">
                            <Typography
                                variant="h6"
                                textAlign={{ xs: "start", ...responsiveText }}
                            >
                                Email
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <TextField
                                disabled={disabled}
                                fullWidth
                                id="fullWidth"
                                value={row.email}
                                onChange={(e) =>
                                    setRow({ ...row, email: e.target.value })
                                }
                            />
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        container
                        sm={8}
                        justifyContent="start"
                        alignItems="center"
                        columnSpacing={3}
                    >
                        <Grid item xs={12} sm={3} justifySelf="center">
                            <Typography
                                variant="h6"
                                textAlign={{ xs: "start", ...responsiveText }}
                            >
                                Experience
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <TextField
                                disabled={disabled}
                                fullWidth
                                id="fullWidth"
                                value={row.experience}
                                onChange={(e) =>
                                    setRow({
                                        ...row,
                                        experience: e.target.value,
                                    })
                                }
                            />
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        container
                        sm={8}
                        justifyContent="start"
                        alignItems="center"
                        columnSpacing={3}
                    >
                        <Grid item xs={12} sm={3} justifySelf="center">
                            <Typography
                                variant="h6"
                                textAlign={{ xs: "start", ...responsiveText }}
                            >
                                Phone Number
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <TextField
                                disabled={disabled}
                                fullWidth
                                id="fullWidth"
                                value={row.phone}
                                onChange={(e) =>
                                    setRow({
                                        ...row,
                                        phone: e.target.value,
                                    })
                                }
                            />
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        container
                        sm={8}
                        justifyContent="start"
                        alignItems="center"
                        columnSpacing={3}
                    >
                        <Grid item xs={12} sm={3} justifySelf="center">
                            <Typography
                                variant="h6"
                                textAlign={{ xs: "start", ...responsiveText }}
                            >
                                Occupation
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <TextField
                                disabled={disabled}
                                fullWidth
                                id="fullWidth"
                                value={row.occupation}
                                onChange={(e) =>
                                    setRow({
                                        ...row,
                                        occupation: e.target.value,
                                    })
                                }
                            />
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        container
                        sm={8}
                        justifyContent="start"
                        alignItems="center"
                        columnSpacing={3}
                    >
                        <Grid item xs={12} sm={3} justifySelf="center">
                            <Typography
                                variant="h6"
                                textAlign={{ xs: "start", ...responsiveText }}
                            >
                                Team
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <FormControl fullWidth>
                                <Select
                                    disabled={disabled}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={row.team ?? "Mobile"}
                                    onChange={(e) =>
                                        setRow({ ...row, team: e.target.value })
                                    }
                                    MenuProps={{
                                        classes: {
                                            paper: teamStyle.teamSelect,
                                        },
                                    }}
                                >
                                    {disabled ? (
                                        <MenuItem value={row.team}>
                                            {row.team}
                                        </MenuItem>
                                    ) : (
                                        [
                                            "Mobile",
                                            "Backend",
                                            "Database",
                                            "Website",
                                            "Dashboard Team",
                                        ].map((team) => (
                                            <MenuItem value={team} key={team}>
                                                {team}
                                            </MenuItem>
                                        ))
                                    )}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        container
                        sm={8}
                        justifyContent="start"
                        alignItems="center"
                        columnSpacing={3}
                    >
                        <Grid item xs={12} sm={3} justifySelf="center">
                            <Typography
                                variant="h6"
                                textAlign={{ xs: "start", ...responsiveText }}
                            >
                                Personal Experience
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <TextField
                                disabled={disabled}
                                fullWidth
                                id="fullWidth"
                                value={row.personalExp}
                                multiline
                                rows={3}
                                onChange={(e) =>
                                    setRow({
                                        ...row,
                                        personalExp: e.target.value,
                                    })
                                }
                            />
                        </Grid>
                    </Grid>
                    {!disabled ? (
                        <Grid
                            item
                            container
                            justifyContent="end"
                            marginTop="20px"
                        >
                            <Grid item sx={{ marginRight: "1rem" }}>
                                <Button
                                    variant="contained"
                                    color="error"
                                    onClick={() => navigate("/team")}
                                >
                                    Cancle
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    onClick={editMember}
                                    variant="contained"
                                >
                                    Save
                                </Button>
                            </Grid>
                        </Grid>
                    ) : (
                        <Grid
                            item
                            container
                            justifyContent="space-between"
                            marginTop="20px"
                        >
                            <Grid item xs={12} align="right">
                                <Button
                                    onClick={() => navigate("/team")}
                                    color="error"
                                    variant="contained"
                                    sx={{ marginRight: "1rem" }}
                                >
                                    Back
                                </Button>

                                <Button
                                    onClick={(_) =>
                                        navigate(
                                            `/team/${row.team}/${row.id}/edit`,
                                            {
                                                state: { row },
                                            }
                                        )
                                    }
                                    variant="contained"
                                >
                                    Edit
                                </Button>
                            </Grid>
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </Container>
    )
}
