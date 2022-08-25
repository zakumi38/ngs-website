import {
  faAdd,
  faRefresh,
  faSearch,
  faXmark,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Style from "./user-list.module.sass";
import { Link } from "react-router-dom";
import {
  Button,
  Grid,
  OutlinedInput,
  Stack,
  Typography,
  IconButton,
  Pagination,
  PaginationItem,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import usePaginate from "../../axios-server-side/server-side-pagination";
import UsersTable from "./users-table";

const rightArrow = () => {
  return <FontAwesomeIcon icon={faArrowRight} />;
};
const leftArrow = () => {
  return <FontAwesomeIcon icon={faArrowLeft} />;
};

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [click, setClicked] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const [entriesCount, setEntriesCount] = useState({
    start: 1,
    end: 5,
    totalPostsCount: 0,
    totalPagesCount: 0,
  });
  const usersPerPage = 5;
  const [totalItems, currentPageItems, loading, error, action, setAction] =
    usePaginate("users", currentPage, usersPerPage, query, click);

  function actionTicket() {
    let ticket = Math.random();
    while (ticket === click) ticket = Math.random();
    setClicked(ticket);
    setCurrentPage(1);
  }
  useEffect(() => {
    if (!loading && !error) {
      setUsers(currentPageItems);
      setEntriesCount({
        start: totalItems.length ? (currentPage - 1) * usersPerPage + 1 : 0,
        end:
          currentPage * usersPerPage - (usersPerPage - currentPageItems.length),
        totalPostsCount: totalItems.length,
        totalPagesCount: Math.ceil(totalItems.length / usersPerPage),
      });
    }
  }, [totalItems, currentPageItems, loading, error, click]);
  useEffect(() => {
    !query && actionTicket();
  }, [query]);
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#fff",
        padding: "30px",
        alignItems: "center",
        borderRadius: "10px",
        margin: "5rem 0 0 0",
      }}
    >
      <Grid item xs={12} sx={{ marginBottom: "20px" }}>
        <Typography variant="h5">User List</Typography>
      </Grid>

      <Grid item xs={12} sx={{ margin: { xs: "20px 0", md: "0" } }}>
        <Stack
          spacing={3}
          sx={{
            justifyContent: "space-between",
            gap: { xs: "20px", md: "15px" },
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <OutlinedInput
            value={query}
            onKeyUp={(e) => e.key === "Enter" && actionTicket()}
            onChange={(e) => setQuery(e.target.value)}
            sx={{
              width: {
                xs: "50%",
                sm: "auto",
              },
              p: "0",
            }}
            endAdornment={
              <>
                {query && (
                  <IconButton
                    onClick={() => {
                      setQuery("");
                      setClicked(0);
                    }}
                  >
                    <FontAwesomeIcon icon={faXmark} />
                  </IconButton>
                )}
                <Button
                  variant="contained"
                  sx={{
                    height: { xs: "45px", md: "100%" },
                    boxShadow: "none",
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,

                    "&:hover": {
                      boxShadow: "none",
                    },
                  }}
                  onClick={actionTicket}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </Button>
              </>
            }
            id="search-bar"
            variant="outlined"
            placeholder="Search here..."
            size="small"
          />
          <Stack
            direction="row"
            gap="10px"
            sx={{ justifyContent: "space-between", m: "0 !important" }}
          >
            <Link to="/user" underline="none" className={Style.Link}>
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
                <Typography>Refresh List</Typography>
              </Button>
            </Link>
            <Link to="/user/add" className={Style.Link}>
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
                <Typography>Add new User</Typography>
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Grid>
      <UsersTable users={users} action={action} setAction={setAction} />
      <Grid container sx={{ gap: { xs: "1rem", sm: "0" } }}>
        <Grid item xs={12} sm={6}>
          <Stack>
            <Typography>
              Showing {entriesCount.start} to {entriesCount.end} of{" "}
              {entriesCount.totalPostsCount} entries
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
  );
};

export default UserTable;
