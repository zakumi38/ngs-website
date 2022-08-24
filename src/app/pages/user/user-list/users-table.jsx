import React, { useState } from "react"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import {
    Chip,
    Stack,
    TableBody,
    TableCell,
    Table,
    Typography,
    TableContainer,
    CircularProgress,
    TableHead,
    TableRow,
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
} from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons"
import styled from "@emotion/styled"
import api from "../../../../mockdatabase/database"
import { Link } from "react-router-dom"

const TableCells = styled(TableCell)(({ theme }) => ({
    borderBottom: "1px solid #2d2d2d24",

    "& .MuiTypography-root": {
        overflowX: "hidden",
        textOverflow: "ellipsis",
        [theme.breakpoints.down("md")]: {
            maxWidth: "100px",
        },
    },
}))

const ActionIcon = styled(FontAwesomeIcon)(
    {
        color: "#000",
        cursor: "pointer",
        fontSize: "25px",
        "&:hover": {
            color: "#1976d2",
        },
    },
    (props) => ({
        color: props.color,
    })
)
const UsersTable = ({ users, action, setAction }) => {
    const [openModal, setOpenModal] = useState(false)
    const [modalId, setModalId] = useState("")
    const Delete = () => {
        api.delete(`/events/${modalId}`).then(() => {
            let ticket = Math.random()
            while (ticket === action) ticket = Math.random()
            setAction(ticket)
            setOpenModal(false)
        })
    }
    return (
        <>
            <TableContainer
                component="main"
                sx={{ margin: "20px 0", minHeight: "400px" }}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCells>
                                <Typography>Id</Typography>
                            </TableCells>
                            <TableCells>
                                <Typography>Username</Typography>
                            </TableCells>
                            <TableCells>
                                <Typography>Email</Typography>
                            </TableCells>
                            <TableCells>
                                <Typography>Roles</Typography>
                            </TableCells>
                            <TableCells>
                                <Typography>Status</Typography>
                            </TableCells>
                            <TableCells>
                                <Typography>Actions</Typography>
                            </TableCells>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users?.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCells>
                                    <Typography>{row.id}</Typography>
                                </TableCells>
                                <TableCells component="th" scope="row">
                                    <Typography> {row.userName}</Typography>
                                </TableCells>
                                <TableCells>
                                    <Typography> {row.emailAddress}</Typography>
                                </TableCells>
                                <TableCells>
                                    <Typography>{row.roles}</Typography>
                                </TableCells>
                                <TableCells>
                                    <Chip
                                        sx={{ borderRadius: "5px" }}
                                        label={row.status}
                                        color={
                                            row.status === "Active"
                                                ? "success"
                                                : "error"
                                        }
                                    />
                                </TableCells>
                                <TableCells sx={{ width: "150px" }}>
                                    <Stack
                                        direction="row"
                                        spacing={2}
                                        justifyContent="space-between"
                                        gap="10px"
                                        sx={{ "& a": { margin: 0 } }}
                                    >
                                        <Link to={`/user/view/${row.id}`}>
                                            <ActionIcon
                                                color="#0d97af"
                                                icon={faEye}
                                            />
                                        </Link>
                                        <Link
                                            to={`/user/edit-user/${row.id}`}
                                            style={{ margin: 0 }}
                                        >
                                            <ActionIcon
                                                color="#2e7d32"
                                                icon={faPenToSquare}
                                            />
                                        </Link>
                                        <Link to="#" style={{ margin: 0 }}>
                                            <ActionIcon
                                                onClick={() => {
                                                    setOpenModal(true)
                                                    setModalId(row.id)
                                                }}
                                                color="#d32f2f"
                                                icon={faTrash}
                                            />
                                        </Link>
                                    </Stack>
                                </TableCells>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>{" "}
            </TableContainer>

            {/* Modal */}
            <Dialog
                open={openModal}
                onClose={() => setOpenModal(false)}
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
                        gap: "10px",
                        justifyContent: "space-between",
                    }}
                >
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => setOpenModal(false)}
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
        </>
    )
}

export default UsersTable
