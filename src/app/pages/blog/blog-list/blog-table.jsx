import {
  faArrowLeft,
  faArrowRight,
  faSearch,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
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
import React, { useState, useEffect } from "react";
import PostsTable from "./blogs-table";
import axios from "axios";
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

  const postPerPage = 5;
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
          post.description.toLowerCase().includes(query) ||
          post.date.toLowerCase().includes(query)
      ).length
    );
    setPosts(
      res.data
        .filter(
          (post) =>
            post.title.toLowerCase().includes(query) ||
            post.description.toLowerCase().includes(query) ||
            post.date.toLowerCase().includes(query)
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

  // console.log(count, offSet, currentPage);
  // console.log(posts.filter(post=>post.title.toLowerCase().includes(query)));

  return (
    <Grid
      container
      sx={{
        backgroundColor: "rgba(205, 220, 236, 0.8)",
        padding: "20px",
        alignItems: "center",
        borderRadius: "10px",
        margin: "5rem 0",
      }}
    >
      <Grid item xs={3} sm={6}>
        <Typography variant="h5">Post List</Typography>
      </Grid>
      <Grid item xs={9} sm={6}>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            justifyContent: "flex-end",
          }}
        >
          <Link to="/blog/add">
            <Button variant="contained" color="primary" sx={{ height: "38px" }}>
              <FontAwesomeIcon icon={faPlus} size="lg" />
            </Button>
          </Link>
          <OutlinedInput
            sx={{
              width: {
                xs: "50%",
                sm: "auto",
              },
            }}
            startAdornment={
              <>
                <FontAwesomeIcon icon={faSearch} />
                <Divider
                  sx={{
                    margin: "5px 10px",
                  }}
                  orientation="vertical"
                  variant="middle"
                  flexItem
                />
              </>
            }
            id="search-bar"
            variant="outlined"
            placeholder="Search here..."
            size="small"
            onChange={(e, value) => {
              setQuery(e.target.value);
            }}
          />

          <Button onClick={Submit} variant="contained" color="primary">
            Search
          </Button>
        </Stack>
      </Grid>
      <PostsTable posts={posts} loadPosts={loadPosts} />
      <Grid container sx={{ gap: { xs: "1rem", sm: "0" } }}>
        <Grid item xs={12} sm={6}>
          <Stack>
            <Typography>
              Showing {offSet + 1} to {data < offSet + 5 ? data : offSet + 5} of{" "}
              {data} entries
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Stack spacing={2} sx={{ alignItems: "end" }}>
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
