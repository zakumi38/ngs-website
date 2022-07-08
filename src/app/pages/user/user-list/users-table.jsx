import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Chip, Stack, Link, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import styled from "@emotion/styled";
function createData(id, userName, emailAddress, roles, status) {
  return { id, userName, emailAddress, roles, status };
}

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
);

const rows = [
  createData("1", "Haydan", "work409@gmail.com", "Admin", "Active"),
  createData("1", "Haydan", "work409@gmail.com", "Admin", "Active"),
  createData("1", "Haydan", "work409@gmail.com", "Admin", "Active"),
  createData("1", "Haydan", "work409@gmail.com", "Admin", "Active"),
  createData("1", "Haydan", "work409@gmail.com", "Admin", "Active"),
];
const UsersTable = () => {
  return (
    <TableContainer component="main" sx={{ margin: "20px 0" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography>ID</Typography>
            </TableCell>
            <TableCell>
              <Typography>Username</Typography>{" "}
            </TableCell>
            <TableCell>
              <Typography>Email Address</Typography>
            </TableCell>
            <TableCell>
              <Typography>Roles</Typography>
            </TableCell>
            <TableCell>
              <Typography>Status</Typography>
            </TableCell>
            <TableCell>
              <Typography>Actions</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <Typography>{row.id}</Typography>
              </TableCell>
              <TableCell component="th" scope="row">
                <Typography> {row.userName}</Typography>
              </TableCell>
              <TableCell>
                <Typography> {row.emailAddress}</Typography>
              </TableCell>
              <TableCell>
                <Typography>{row.roles}</Typography>
              </TableCell>
              <TableCell>
                <Chip
                  sx={{ borderRadius: "10px" }}
                  label={row.status}
                  color={row.status === "Active" ? "success" : "error"}
                />
              </TableCell>
              <TableCell>
                <Stack direction="row" spacing={2}>
                  <Link href="/edit-user">
                    <ActionIcon color="#2e7d32" icon={faPenToSquare} />
                  </Link>

                  <Link href="/delete-user">
                    <ActionIcon color="#d32f2f" icon={faTrash} />
                  </Link>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
