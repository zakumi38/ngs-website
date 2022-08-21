import { faAdd, faRefresh, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Grid, OutlinedInput, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../../mockdatabase/database";
import useAxiosFetch from "./useAxiosFetch";
import UsersTable from "./users-table";

const UserTable = () => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;
  const indexOfLastPage = currentPage * usersPerPage;
  const indexOfFirstPage = indexOfLastPage - usersPerPage;

  const [users, loading, error] = useAxiosFetch({
    axiosInstance: api,
    method: "get",
    url: `/users?_start=${indexOfFirstPage}&_end=${indexOfLastPage}`,
  });

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClear = () => {
    setData(users);
    setSearchValue("");
  };

  useEffect(() => {
    setData(users);
  }, [users]);

  console.log(data);

  const handleSearch = () => {
    const search = searchValue.toLowerCase();
    console.log(search, users);
    const searchFilter = users?.filter(
      (user) =>
        user.userName.toLowerCase().includes(search) ||
        user.id === Number(searchValue) ||
        user.emailAddress.toLowerCase().includes(search) ||
        user.status.toLowerCase().includes(search)
    );
    setData(searchValue.length === 0 ? users : searchFilter);
  };

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
          gap="15px"
          direction="row"
          spacing={3}
          sx={{
            justifyContent: "space-between",
          }}
        >
          <OutlinedInput
            onChange={handleChange}
            sx={{
              width: {
                xs: "50%",
                sm: "auto",
              },
              p: "0",
            }}
            endAdornment={
              <Button
                onClick={handleSearch}
                variant="contained"
                sx={{
                  height: "100%",
                  boxShadow: "none",
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,

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
          />
          <Stack direction="row" gap="10px">
            <Link to="/user">
              <Button
                variant="contained"
                color="primary"
                sx={{ height: "100%" }}
              >
                <FontAwesomeIcon icon={faRefresh} size="lg" />
              </Button>
            </Link>
            <Link to="/user/add">
              <Button
                variant="contained"
                color="primary"
                sx={{ height: "100%" }}
              >
                <FontAwesomeIcon icon={faAdd} size="lg" />
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Grid>
      <UsersTable
        data={data}
        loading={loading}
        setData={setData}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        indexOfFirstPage={indexOfFirstPage}
        indexOfLastPage={indexOfLastPage}
        usersPerPage={usersPerPage}
      />
    </Grid>
  );
};

export default UserTable;
