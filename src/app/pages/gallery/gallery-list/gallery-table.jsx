import React, { useEffect, useState } from "react"
import axios from "axios"
import {
    faAdd,
    faArrowLeft,
    faArrowRight,
    faRefresh,
    faSearch,
    faXmark,
} from "@fortawesome/free-solid-svg-icons"
import Style from "./gallerylist.module.sass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    Button,
    Grid,
    OutlinedInput,
    Pagination,
    PaginationItem,
    Stack,
    Typography,
    IconButton,
} from "@mui/material"
import GalleryTables from "./gallerys-table"
import usePaginate from "../../axios-server-side/server-side-pagination"
import { Link } from "react-router-dom"

const rightArrow = () => {
    return <FontAwesomeIcon icon={faArrowRight} />
}
const leftArrow = () => {
    return <FontAwesomeIcon icon={faArrowLeft} />
}

const GalleryTable = () => {
    const [entries, setEntries] = useState([])
    const [query, setQuery] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [click, setClicked] = useState(false)
    const [entriesCount, setEntriesCount] = useState({
        start: 1,
        end: 4,
        totalPostsCount: 0,
        totalPagesCount: 0,
    })
    const entriesPerPage = 4

    const [totalItems, currentPageItems, loading, error, action, setAction] =
        usePaginate("gallery", currentPage, entriesPerPage, query, click)

    function actionTicket() {
        let ticket = Math.random()
        while (ticket === click) ticket = Math.random()
        setClicked(ticket)
        setCurrentPage(1)
    }
    useEffect(() => {
        if (!loading && !error) {
            setEntries(currentPageItems)
            setEntriesCount({
                start: totalItems.length
                    ? (currentPage - 1) * entriesPerPage + 1
                    : 0,
                end:
                    currentPage * entriesPerPage -
                    (entriesPerPage - currentPageItems.length),
                totalPostsCount: totalItems.length,
                totalPagesCount: Math.ceil(totalItems.length / entriesPerPage),
            })
        }
    }, [totalItems, currentPageItems, loading, error, click])
    useEffect(() => {
        !query && actionTicket()
    },[query])

    return (
        <Grid
            container
            sx={{
                backgroundColor: "#ffffff",
                padding: "20px",
                alignItems: "center",
                borderRadius: "10px",
                margin: "5rem 0",
            }}
        >
            <Grid item xs={12} sx={{ marginBottom: { xs: "20px" } }}>
                <Typography variant="h5">Gallery List</Typography>
            </Grid>

            <Grid item xs={12} sx={{ margin: { xs: "20px 0", md: "0" } }}>
                <Stack
                    gap="15px"
                    spacing={3}
                    sx={{
                        justifyContent: "space-between",
                        flexDirection: { xs: "column", sm: "row" },
                        alignItems: "center",
                    }}
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
                        <Link to="/gallery" className={Style.Link}>
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{ height: "100%" }}
                                onClick={actionTicket}
                            >
                                <FontAwesomeIcon
                                    icon={faRefresh}
                                    size="lg"
                                    className={Style.refresh}
                                />
                                <Typography
                                    sx={{
                                        display: { xs: "none", sm: "block" },
                                        fontSize: { sm: "14px", md: "16px" },
                                    }}
                                >
                                    Refresh List
                                </Typography>
                            </Button>
                        </Link>
                        <Link to="/gallery/add" className={Style.Link}>
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{ height: "100%" }}
                            >
                                <FontAwesomeIcon
                                    icon={faAdd}
                                    size="lg"
                                    className={Style.plus}
                                />
                                <Typography
                                    sx={{
                                        display: { xs: "none", sm: "block" },
                                        fontSize: { sm: "14px", md: "16px" },
                                    }}
                                >
                                    Add new Gallery
                                </Typography>
                            </Button>
                        </Link>
                    </Stack>
                </Stack>
            </Grid>
            <GalleryTables
                entries={entries}
                aciton={action}
                setAction={setAction}
            />
            <Grid container sx={{ gap: { xs: "1rem", sm: "0" } }}>
                <Grid item xs={12} sm={6}>
                    <Stack
                        sx={{ alignItems: { xs: "center", sm: "flex-start" } }}
                    >
                        <Typography>
                            Showing {entriesCount.start} to {entriesCount.end}{" "}
                            of {entriesCount.totalPostsCount} entries
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Stack
                        spacing={2}
                        sx={{ alignItems: { xs: "center", sm: "end" } }}
                    >
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

export default GalleryTable
