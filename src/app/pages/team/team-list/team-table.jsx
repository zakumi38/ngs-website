import React, { useState } from "react"
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Stack,
    TableBody,
    TableCell,
    Table,
    Link,
    Typography,
    TableContainer,
    TableHead,
    TableRow,
    DialogContentText,
    Button,
    Box,
} from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faPenToSquare,
    faTrash,
    faEye,
} from "@fortawesome/free-solid-svg-icons"
import styled from "@emotion/styled"
import api from "../../../../mockdatabase/database"

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
const TeamsTable = ({ teamMembers, action, setAction }) => {
    const [openModal, setOpenModal] = useState(false)
    const [modalId, setModalId] = useState("")
    const Delete = () => {
        api.delete(`/developer-team-members/${modalId}`).then(() => {
            let ticket = Math.random()
            while (ticket === action) ticket = Math.random()
            setAction(ticket)
            setOpenModal(false)
        })
    }
    return (
        <Box sx={{ width: "100%" }}>
            <TableContainer component="main" sx={{ margin: "20px 0" }}>
                <>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Typography>Id</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>Name</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>Email</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>Occupation</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography>Team</Typography>
                                </TableCell>
                                <TableCell sx={{ textAlign: "center" }}>
                                    <Typography>Actions</Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {teamMembers?.map((member) => (
                                <TableRow
                                    key={member.id}
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell>
                                        <Typography>{member.id}</Typography>
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        <Typography> {member.name}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography>{member.email}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography>
                                            {member.occupation}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography>{member.team}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Stack
                                            direction="row"
                                            spacing={2}
                                            justifyContent="space-between"
                                            gap="10px"
                                        >
                                            <Link
                                                href={`team/view/${member.id}`}
                                            >
                                                <ActionIcon
                                                    color="#0d97af"
                                                    icon={faEye}
                                                />
                                            </Link>
                                            <Link
                                                href={`team/edit/${member.id}`}
                                            >
                                                <ActionIcon
                                                    color="#2e7d32"
                                                    icon={faPenToSquare}
                                                />
                                            </Link>
                                            <div
                                                onClick={() => {
                                                    setOpenModal(true)
                                                    setModalId(member.id)
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
                </>
            </TableContainer>
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
        </Box>
    )
}

export default TeamsTable
