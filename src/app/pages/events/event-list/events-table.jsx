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
import useAxiosFetch from "../../user/user-list/useAxiosFetch";

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
const tabelCell = [
  "ID",
  "Title",
  "Photo",
  "Description",
  "Date",
  "Time",
  "Location",
  "Actions",
];
const EventsTable = () => {
  const [data, setData] = useState([]);

  const [events, loading, error] = useAxiosFetch({
    axiosInstance: api,
    method: "get",
    url: "/events",
  });

  useEffect(() => {
    setData(events);
  }, [events]);

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;
  const indexOfLastPage = currentPage * usersPerPage;
  const indexOfFirstPage = indexOfLastPage - usersPerPage;
  const currentPost = data?.slice(indexOfFirstPage, indexOfLastPage);

  const pagesVisited = currentPage * usersPerPage;
  const pageCount = Math.ceil(data?.length / usersPerPage);

  const displayUsers = data?.slice(pagesVisited, pagesVisited + usersPerPage);

  const handleClick = (event, value) => {
    setCurrentPage(value);
  };

  const handleDelete = async (id) => {
    await api.delete(`/events/${id}`);
    const items = data.filter((events) => events.id !== id);
    setData(items);
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
                  {tabelCell.map((cell) => {
                    return (
                      <TableCell>
                        <Typography>{cell}</Typography>
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {currentPost?.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>
                      <Typography>{row.id}</Typography>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Typography> {row.title}</Typography>
                    </TableCell>
                    <TableCell>
                      <Box component="img" src={row.src}></Box>
                    </TableCell>
                    <TableCell>
                      <Typography>{`${row.description?.slice(
                        0,
                        25
                      )}...`}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{row.date}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{row.time}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{row.location}</Typography>
                    </TableCell>
                    <TableCell>
                      <Stack direction="row" spacing={2}>
                        <Link href={`events/edit/${row.id}`}>
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
            </Table>
          </>
        )}
      </TableContainer>

      {!loading && (
        <Grid container sx={{ gap: { xs: "1rem", sm: "0" } }}>
          <Grid item xs={12} sm={6}>
            <Stack>
              <Typography>
                Showing {indexOfFirstPage + 1} to {currentPost.length} {""}
                of {""}
                {events?.length} entries
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack spacing={2} sx={{ alignItems: "end" }}>
              <Pagination
                count={pageCount}
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

export default EventsTable;