import React, { useState } from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Box,
    Stack,
    Typography,
} from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faEye,
    faPenToSquare,
    faTrash,
} from "@fortawesome/free-solid-svg-icons"
import styled from "@emotion/styled"
import gallerylist from "./gallerylist.module.sass"
import api from "../../../../mockdatabase/database"
import { Link } from "react-router-dom"

const ActionIcon = styled(FontAwesomeIcon)(
    {
        color: "#000",
        cursor: "pointer",
        fontSize: "25px",
        margin: "0 10px",
        "&:hover": {
            color: "#1976d2",
        },
    },
    (props) => ({
        color: props.color,
    })
)

const GalleryTables = ({ entries, action, setAction }) => {
    const [openModal, setOpenModal] = useState(false)
    const [modalId, setModalId] = useState("")

    const Delete = () => {
        api.delete(`/gallery/${modalId}`).then(() => {
            let ticket = Math.random()
            while (ticket === action) ticket = Math.random()
            setAction(ticket)
            setOpenModal(false)
        })
    }

    return (
        <Box sx={{ width: "100%" }}>
            <TableContainer component="main" sx={{ margin: "20px 0" }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography>ID</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>Image</Typography>{" "}
                            </TableCell>
                            <TableCell>
                                <Typography>Title</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>Category</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>Create Date</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>Actions</Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {entries.map((entry) => (
                            <TableRow
                                key={entry.id}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell>
                                    <Typography>{entry.id}</Typography>
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    <img
                                        className={gallerylist.image}
                                        src={entry.img}
                                        alt=""
                                    />
                                </TableCell>
                                <TableCell>
                                    <Typography> {entry.title}</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>{entry.category}</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>{entry.date}</Typography>
                                </TableCell>
                                <TableCell>
                                    <Stack direction="row" spacing={2}>
                                        <Link to={`/gallery/view/${entry.id}`}>
                                            <ActionIcon
                                                color="#0d97af"
                                                icon={faEye}
                                            />
                                        </Link>
                                        <Link to={`/gallery/edit/${entry.id}`}>
                                            <ActionIcon
                                                color="#2e7d32"
                                                icon={faPenToSquare}
                                            />
                                        </Link>
                                        <div
                                            onClick={() => {
                                                setOpenModal(true)
                                                setModalId(entry.id)
                                            }}
                                        >
                                            <ActionIcon
                                                color="#d32f2f"
                                                icon={faTrash}
                                            />
                                        </div>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Modal */}
            <Dialog
                open={openModal}
                onClose={(_) => setOpenModal(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Are you sure?</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Do you really want to delete this record?This process
                        cannot be undone
                    </DialogContentText>
                </DialogContent>
                <DialogActions
                    sx={{
                        margin: "15px",
                        gap: "10px"
                    }}
                >
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={(_) => setOpenModal(false)}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={Delete}
                        autoFocus
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

export default GalleryTables
