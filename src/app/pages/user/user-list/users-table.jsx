import React, { useState, useEffect } from "react";
import {
  faArrowLeft,
  faArrowRight,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import {
  Grid,
  Pagination,
  PaginationItem,
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
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import styled from "@emotion/styled";
import api from "../../../../mockdatabase/database";
import useAxiosFetch from "./useAxiosFetch";
import { Link } from "react-router-dom";

const TableCells = styled(TableCell)(({ theme }) => ({
  borderBottom: "1px solid #2d2d2d24",

  "& .MuiTypography-root": {
    overflowX: "hidden",
    textOverflow: "ellipsis",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100px",
    },
  },
}));

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
);
const rightArrow = () => {
  return <FontAwesomeIcon icon={faArrowRight} />;
};
const leftArrow = () => {
  return <FontAwesomeIcon icon={faArrowLeft} />;
};
const tabelCell = ["ID", "User Name", "Email", "Roles", "Status", "Actions"];
const UsersTable = () => {
  const [data, setData] = useState([]);

  const [openModal, setOpenModal] = useState(false);
  const [modalId, setModalId] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;
  const indexOfLastPage = currentPage * usersPerPage;
  const indexOfFirstPage = indexOfLastPage - usersPerPage;
  const [users, loading] = useAxiosFetch({
    axiosInstance: api,
    method: "get",
    url: `/users?_start=${indexOfFirstPage}&_end=${indexOfLastPage}`,
  });
  const handleClick = async (event, value) => {
    setCurrentPage(value);
    const user = await api.get(
      `/users?_start=${indexOfFirstPage}&_end=${indexOfLastPage}`
    );
    setData(user.data);
  };
  useEffect(() => {
    setData(users);
  }, [users]);
  // const currentPost = data?.slice(indexOfFirstPage, indexOfLastPage);

  const pageCount = Math.ceil(data?.length / usersPerPage);

  const handleDelete = async (id) => {
    await api.delete(`/users/${modalId}`);
    const items = data.filter((user) => user.id !== modalId);
    setData(items);
    setOpenModal(false);
    // const user = (await api.get("/users")).data;
    // setData(user);
  };

  const open = (id) => {
    setOpenModal(true);
    setModalId(id);
  };
  const handleClose = () => {
    setOpenModal(false);
  };
  return (
    <>
      <TableContainer
        component="main"
        sx={{ margin: "20px 0", minHeight: "400px" }}
      >
        {loading && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "400px",
            }}
          >
            <CircularProgress size="4rem" />
          </Box>
        )}
        {!loading && data && (
          <>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {tabelCell.map((cell, index) => (
                    <TableCells key={index}>
                      <Typography>{cell}</Typography>
                    </TableCells>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
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
                        color={row.status === "Active" ? "success" : "error"}
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
                          <ActionIcon color="#0d97af" icon={faEye} />
                        </Link>
                        <Link
                          to={`/user/edit-user/${row.id}`}
                          style={{ margin: 0 }}
                        >
                          <ActionIcon color="#2e7d32" icon={faPenToSquare} />
                        </Link>
                        <Link to="#" style={{ margin: 0 }}>
                          <ActionIcon
                            onClick={() => open(row.id)}
                            // onClick={() => handleDelete(row.id)}
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
          </>
        )}
      </TableContainer>

      {/* Modal */}
      <Dialog
        open={openModal}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Are you sure?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you really want to delete this record?This process cannot be
            undone
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            margin: "15px",
            gap: "10px",
            justifyContent: "space-between",
          }}
        >
          <Button variant="contained" color="error" onClick={handleClose}>
            Disagree
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={handleDelete}
            autoFocus
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>

      {!loading && (
        <Grid container sx={{ gap: { xs: "1rem", sm: "0" } }}>
          <Grid item xs={12} sm={6}>
            <Stack>
              <Typography>
                Showing {indexOfFirstPage + 1} to{" "}
                {data.length % usersPerPage === 0
                  ? indexOfLastPage
                  : data.length + indexOfFirstPage}{" "}
                {""}
                of {""}
                {data?.length < 5
                  ? data.length + indexOfFirstPage
                  : data.length}{" "}
                entries
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack spacing={2} sx={{ alignItems: "end" }}>
              <Pagination
                shape="rounded"
                count={data.legth > 5 ? pageCount : pageCount + 4}
                color="primary"
                page={currentPage}
                onChange={handleClick}
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
      )}
    </>
  );
};

export default UsersTable;
