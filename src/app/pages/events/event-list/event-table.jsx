import {
    faAdd,
    faSearch,
    faXmark,
    faArrowLeft,
    faArrowRight,
    faRefresh,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    Button,
    Grid,
    OutlinedInput,
    Stack,
    Typography,
    Pagination,
    PaginationItem,
    IconButton,
} from "@mui/material"
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import usePaginate from "../../axios-server-side/server-side-pagination"
import EventsTable from "./events-table"

const rightArrow = () => {
    return <FontAwesomeIcon icon={faArrowRight} />
}
const leftArrow = () => {
    return <FontAwesomeIcon icon={faArrowLeft} />
}
const EventTable = () => {
    const [events, setEvents] = useState([])
    const [click, setClicked] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [query, setQuery] = useState("")
    const [entriesCount, setEntriesCount] = useState({
        start: 1,
        end: 5,
        totalPostsCount: 0,
        totalPagesCount: 0,
    })
    const eventsPerPage = 5
    const [totalItems, currentPageItems, loading, error, action, setAction] =
        usePaginate("events", currentPage, eventsPerPage, query, click)

    function actionTicket() {
        let ticket = Math.random()
        while (ticket === click) ticket = Math.random()
        setClicked(ticket)
        setCurrentPage(1)
    }
    useEffect(() => {
        if (!loading && !error) {
            setEvents(currentPageItems)
            setEntriesCount({
                start: totalItems.length
                    ? (currentPage - 1) * eventsPerPage + 1
                    : 0,
                end:
                    currentPage * eventsPerPage -
                    (eventsPerPage - currentPageItems.length),
                totalPostsCount: totalItems.length,
                totalPagesCount: Math.ceil(totalItems.length / eventsPerPage),
            })
        }
    }, [totalItems, currentPageItems, loading, error, click])
    useEffect(() => {
        !query && actionTicket()
    }, [query])
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
                    <OutlinedInput
                        onKeyUp={(e) => e.key === "Enter" && actionTicket()}
                        sx={{
                            width: {
                                xs: "100%",
                                sm: "70%",
                            },
                            height: "fit-content",
                            p: "0",
                        }}
                        endAdornment={
                            <>
                                {query && (
                                    <IconButton
                                        onClick={() => {
                                            setQuery("")
                                            setClicked(0)
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faXmark} />
                                    </IconButton>
                                )}
                                <Button
                                    onClick={actionTicket}
                                    variant="contained"
                                    sx={{
                                        height: "100%",
                                        boxShadow: "none",
                                        borderTopLeftRadius: 0,
                                        borderBottomLeftRadius: 0,
                                        p: { xs: "13px", lg: "15px" },
                                        "&:hover": {
                                            boxShadow: "none",
                                        },
                                    }}
                                >
                                    <FontAwesomeIcon icon={faSearch} />
                                </Button>
                            </>
                        }
                        value={query}
                        id="search-bar"
                        variant="outlined"
                        placeholder="Search here..."
                        size="small"
                        onChange={(e) => {
                            setQuery(e.target.value)
                        }}
                    />

                    <Stack
                        direction="row"
                        sx={{
                            marginTop: "0 !important",
                            width: "100%",
                            justifyContent: { xs: "start", sm: "end" },
                        }}
                        gap="10px"
                    >
                        <Link to="/events" style={{ textDecoration: "none" }}>
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{ height: "100%" }}
                                onClick={actionTicket}
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
                        <Link
                            to="/events/add"
                            style={{ textDecoration: "none" }}
                        >
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
                                    Add new Event
                                </Typography>
                            </Button>
                        </Link>
                    </Stack>
                </Stack>
            </Grid>
            <EventsTable
                events={events}
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

export default EventTable
