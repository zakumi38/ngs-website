import React, { useEffect, useState } from "react";
import {
  faAdd,
  faArrowLeft,
  faArrowRight,
  faRefresh,
  faSearch,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Style from "./blog-list.module.sass";
import usePaginate from "../../axios-server-side/server-side-pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Grid,
  IconButton,
  OutlinedInput,
  Pagination,
  PaginationItem,
  Stack,
  Typography,
} from "@mui/material";
import PostsTable from "./blogs-table";
import { Link } from "react-router-dom";

const rightArrow = () => {
  return <FontAwesomeIcon icon={faArrowRight} />;
};
const leftArrow = () => {
  return <FontAwesomeIcon icon={faArrowLeft} />;
};

const UserTable = () => {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [click, setClicked] = useState(false);
  const [entriesCount, setEntriesCount] = useState({
    start: 1,
    end: 4,
    totalPostsCount: 0,
    totalPagesCount: 0,
  });
  const postsPerPage = 4;

  const [totalItems, currentPageItems, loading, error, action, setAction] =
    usePaginate("blogs", currentPage, postsPerPage, query, click);

  function actionTicket() {
    let ticket = Math.random();
    while (ticket === click) ticket = Math.random();
    setClicked(ticket);
    setCurrentPage(1);
  }
  useEffect(() => {
    if (!loading && !error) {
      setPosts(currentPageItems);
      setEntriesCount({
        start: totalItems.length ? (currentPage - 1) * postsPerPage + 1 : 0,
        end:
          currentPage * postsPerPage - (postsPerPage - currentPageItems.length),
        totalPostsCount: totalItems.length,
        totalPagesCount: Math.ceil(totalItems.length / postsPerPage),
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
        backgroundColor: "#ffffff",
        padding: "20px",
        alignItems: "center",
        borderRadius: "10px",
        margin: "5rem 0",
      }}
    >
      <Grid item xs={12} sx={{ marginBottom: { xs: "20px" } }}>
        <Typography variant="h5">Post List</Typography>
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
            onKeyUp={(e) => {
              e.key === "Enter" && actionTicket();
            }}
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
                      setQuery("");
                      setClicked(0);
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
              setQuery(e.target.value);
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
            <Link to="/blog" className={Style.Link}>
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
            <Link to="/blog/add" className={Style.Link}>
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
                  Add new Blog
                </Typography>
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Grid>
      <PostsTable posts={posts} action={action} setAction={setAction} />
      <Grid container sx={{ gap: { xs: "1rem", sm: "0" } }}>
        <Grid item xs={12} sm={6}>
          <Stack sx={{ alignItems: { xs: "center", sm: "flex-start" } }}>
            <Typography>
              Showing {entriesCount.start} to {entriesCount.end} of{" "}
              {entriesCount.totalPostsCount} entries
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Stack spacing={2} sx={{ alignItems: { xs: "center", sm: "end" } }}>
            <Pagination
              count={entriesCount.totalPagesCount}
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
