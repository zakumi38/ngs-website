import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  faAdd,
  faArrowLeft,
  faArrowRight,
  faRefresh,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Style from "./blog-list.module.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Divider,
  Grid,
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

  const postPerPage = 4;
  const [currentPage, SetCurrentPage] = useState(1);
  const [data, setData] = useState(0);
  const count = Math.ceil(data / postPerPage);
  const [offSet, setOffSet] = useState(0);

  const handleChange = (e, value) => {
    SetCurrentPage(value);
  };

  const loadPosts = async () => {
    let res = await axios.get("http://localhost:3500/blogs");
    setData(
      res.data.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.description.toLowerCase().includes(query)
      ).length
    );
    setPosts(
      res.data
        .filter(
          (post) =>
            post.title.toLowerCase().includes(query) ||
            post.description.toLowerCase().includes(query)
        )
        .splice(offSet, postPerPage)
    );
    setOffSet(() => (currentPage - 1) * postPerPage);
  };

  useEffect(() => {
    loadPosts();
  }, [currentPage, offSet]);

  function Submit(value) {
    SetCurrentPage(1);
    loadPosts();
  }

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
            sx={{
              width: {
                xs: "100%",
                sm: "70%",
              },
              height: "fit-content",
              p: "0",
            }}
            endAdornment={
              <Button
                onClick={Submit}
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
            }
            id="search-bar"
            variant="outlined"
            placeholder="Search here..."
            size="small"
            onChange={(e, value) => {
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
            <Link to="/blog/add" className={Style.Link}>
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
                  Add new Blog
                </Typography>
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Grid>
      <PostsTable posts={posts} loadPosts={loadPosts} />
      <Grid container sx={{ gap: { xs: "1rem", sm: "0" } }}>
        <Grid item xs={12} sm={6}>
          <Stack sx={{ alignItems: { xs: "center", sm: "flex-start" } }}>
            <Typography>
              Showing {offSet + 1} to {data < offSet + 5 ? data : offSet + 5} of{" "}
              {data} entries
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Stack spacing={2} sx={{ alignItems: { xs: "center", sm: "end" } }}>
            <Pagination
              count={count}
              page={currentPage}
              onChange={handleChange}
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
