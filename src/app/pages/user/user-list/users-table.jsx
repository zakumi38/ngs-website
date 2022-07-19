import React, { useState, useEffect } from "react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  Grid,
  Pagination,
  PaginationItem,
  Chip,
  Stack,
  TableBody,
  TableCell,
  Table,
  Link,
  Typography,
  TableContainer,
  CircularProgress,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import styled from "@emotion/styled";
import api from "../../../../mockdatabase/database";
import useAxiosFetch from "./useAxiosFetch";

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
const rightArrow = () => {
  return <FontAwesomeIcon icon={faArrowRight} />;
};
const leftArrow = () => {
  return <FontAwesomeIcon icon={faArrowLeft} />;
};

const UsersTable = () => {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [users, loading, error] = useAxiosFetch({
    axiosInstance: api,
    method: "get",
    url: "/users",
  });

  useEffect(() => {
    setData(users);
  }, [users]);

  const [user, setUser] = useState(1);
  const usersPerPage = 5;

  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = data?.slice(pagesVisited, pagesVisited + usersPerPage);
  const pageCount = Math.ceil(data?.length / usersPerPage);
  console.log(displayUsers, pageCount, pagesVisited);

  const handleClick = (page) => {
    setUser(page);
    setPageNumber(page - 1);
  };

  const handleDelete = async (id) => {
    await api.delete(`/users/${id}`);
    const items = data.filter((user) => user.id !== id);
    setData(items);
  };

  console.log(users);
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
                {displayUsers?.map((row, index) => (
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
                        sx={{ borderRadius: "5px" }}
                        label={row.status}
                        color={row.status === "Active" ? "success" : "error"}
                      />
                    </TableCell>
                    <TableCell>
                      <Stack direction="row" spacing={2}>
                        <Link href={`user/edit-user/${row.id}`}>
                          <ActionIcon color="#2e7d32" icon={faPenToSquare} />
                        </Link>

                        <Link onClick={() => handleDelete(row.id)}>
                          <ActionIcon color="#d32f2f" icon={faTrash} />
                        </Link>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>{" "}
          </>
        )}
      </TableContainer>

      {!loading && (
        <Grid container sx={{ gap: { xs: "1rem", sm: "0" } }}>
          <Grid item xs={12} sm={6}>
            <Stack>
              <Typography>
                Showing {pagesVisited + 1} to {displayUsers?.length * user} of{" "}
                {}
                {users?.length} entries
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack spacing={2} sx={{ alignItems: "end" }}>
              <Pagination
                count={pageCount}
                color="primary"
                page={pageNumber + 1}
                onChange={(e) => handleClick(e.target.textContent)}
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
