import {
    faAdd,
    faArrowLeft,
    faArrowRight,
    faRefresh,
} from "@fortawesome/free-solid-svg-icons"
import teamStyle from "./team.module.sass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    Button,
    Grid,
    Select,
    MenuItem,
    FormControl,
    Stack,
    Typography,
    Pagination,
    PaginationItem,
} from "@mui/material"
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import usePaginateTeam from "../../axios-server-side/server-side-pagnation-team"
import TeamsTable from "./team-table"

const rightArrow = () => {
    return <FontAwesomeIcon icon={faArrowRight} />
}
const leftArrow = () => {
    return <FontAwesomeIcon icon={faArrowLeft} />
}
const TeamTable = () => {
    const [teamMembers, setTeamMembers] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [team, setTeam] = useState("All")
    const [entriesCount, setEntriesCount] = useState({
        start: 1,
        end: 5,
        totalPostsCount: 0,
        totalPagesCount: 0,
    })
    const membersPerPage = 5
    const [totalItems, currentPageItems, loading, error, action, setAction] =
        usePaginateTeam(
            "developer-team-members",
            currentPage,
            membersPerPage,
            team
        )
    useEffect(() => {
        if (!loading && !error) {
            setTeamMembers(currentPageItems)
            setEntriesCount({
                start: (currentPage - 1) * membersPerPage + 1,
                end:
                    (currentPage - 1) * membersPerPage +
                    currentPageItems.length,
                totalPostsCount: totalItems.length,
                totalPagesCount: Math.ceil(totalItems.length / membersPerPage),
            })
        }
    }, [totalItems, currentPageItems, loading, error])
    return (
        <Grid
            container
            sx={{
                backgroundColor: "white",
                padding: "20px",
                alignItems: "center",
                borderRadius: "10px",
                margin: "5rem 0 0 0",
            }}
        >
            <Grid item xs={12} sx={{ marginBottom: "20px" }}>
                <Typography variant="h5">Events List</Typography>
            </Grid>
            <Grid item xs={12} sx={{ margin: { xs: "20px 0", md: "0" } }}>
                <Stack
                    spacing={3}
                    sx={{
                        justifyContent: "space-between",
                        flexDirection: { xs: "column", sm: "row" },
                        alignItems: "center",
                    }}
                    gap="15px"
                >
                    <FormControl
                        sx={{
                            width: {
                                xs: "100%",
                                sm: "70%",
                            },
                        }}
                    >
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={team}
                            onChange={(e) => setTeam(e.target.value)}
                            MenuProps={{
                                classes: { paper: teamStyle.teamSelect },
                            }}
                        >
                            <MenuItem value={"All"}>All</MenuItem>
                            <MenuItem value={"Mobile"}>Mobile</MenuItem>
                            <MenuItem value={"Backend"}>Backend</MenuItem>
                            <MenuItem value={"Database"}>Database</MenuItem>
                            <MenuItem value={"Website"}>Website</MenuItem>
                            <MenuItem value={"Dashboard Team"}>
                                Dashboard Team
                            </MenuItem>
                        </Select>
                    </FormControl>
                    <Stack
                        direction="row"
                        sx={{
                            marginTop: "0 !important",
                            width: "100%",
                            justifyContent: { xs: "start", sm: "end" },
                        }}
                        gap="10px"
                    >
                        <Link to="/team" style={{ textDecoration: "none" }}>
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{ height: "100%" }}
                                onClick={() => {
                                    let ticket = Math.random()
                                    while (ticket === action) {
                                        ticket = Math.random()
                                    }
                                    setAction(ticket)
                                }}
                            >
                                <FontAwesomeIcon icon={faRefresh} size="lg" />
                                <Typography
                                    sx={{
                                        display: { xs: "none", sm: "block" },
                                        fontSize: { sm: "14px", md: "16px" },
                                        marginLeft: "5px",
                                    }}
                                >
                                    Refresh List
                                </Typography>
                            </Button>
                        </Link>
                        <Link to="/team/add" style={{ textDecoration: "none" }}>
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{ height: "100%" }}
                            >
                                <FontAwesomeIcon icon={faAdd} size="lg" />
                                <Typography
                                    sx={{
                                        display: { xs: "none", sm: "block" },
                                        fontSize: { sm: "14px", md: "16px" },
                                        marginLeft: "5px",
                                    }}
                                >
                                    Add new Member
                                </Typography>
                            </Button>
                        </Link>
                    </Stack>
                </Stack>
            </Grid>
            <TeamsTable
                teamMembers={teamMembers}
                action={action}
                setAction={setAction}
            />
            <Grid container sx={{ gap: { xs: "1rem", sm: "0" } }}>
                <Grid item xs={12} sm={6}>
                    <Stack>
                        <Typography>
                            Showing {entriesCount.start} to {entriesCount.end}{" "}
                            of {entriesCount.totalPostsCount} entries
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Stack spacing={2} sx={{ alignItems: "end" }}>
                        <Pagination
                            count={entriesCount.totalPagesCount}
                            color="primary"
                            page={currentPage}
                            onChange={(_, val) => setCurrentPage(val)}
                            renderItem={(item) => (
                                <PaginationItem
                                    components={{
                                        previous: leftArrow,
                                        next: rightArrow,
                                    }}
                                    {...item}
                                />
                            )}
                        />
                    </Stack>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default TeamTable
