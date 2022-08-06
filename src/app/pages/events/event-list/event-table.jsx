import { faAdd, faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Divider,
  Grid,
  OutlinedInput,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../../mockdatabase/database";
import StyledButton from "../../component/StyledButton";
import useAxiosFetch from "../../user/user-list/useAxiosFetch";
import EventsTable from "./events-table";

const EventTable = () => {
  const [data, setData] = useState([]);

  const [events, loading, error] = useAxiosFetch({
    axiosInstance: api,
    method: "get",
    url: "/events",
  });

  const [searchValue, setSearchValue] = useState("");
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleClear = () => {
    setData(events);
    setSearchValue("");
  };

  const handleSearch = () => {
    const search = searchValue.toLowerCase();
    const searchFilter = data?.filter(
      (post) =>
        post.title.toLowerCase().includes(search) ||
        post.id === Number(searchValue) ||
        post.description.toLowerCase().includes(search) ||
        post.location.toLowerCase().includes(search)
    );
    setData(searchValue.length === 0 ? events : searchFilter);
  };

  return (
    <Grid
      container
      sx={{
        backgroundColor: "rgba(205, 220, 236, 0.8)",
        padding: "20px",
        alignItems: "center",
        borderRadius: "10px",
        margin: "5rem 0 0 0",
      }}
    >
      <Grid item xs={3} sm={6}>
        <Typography variant="h5">Events List</Typography>
      </Grid>
      <Grid item xs={9} sm={6}>
        <Stack
          direction="row"
          spacing={3}
          sx={{
            justifyContent: "flex-end",
          }}
        >
          <Link to="/events/add">
            <Button variant="contained" color="primary" sx={{ height: "100%" }}>
              <FontAwesomeIcon icon={faAdd} size="lg" />
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
                <FontAwesomeIcon
                  style={{ cursor: "pointer" }}
                  icon={faSearch}
                />
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
            endAdornment={
              searchValue.length > 0 ? (
                <>
                  {" "}
                  <Divider
                    sx={{
                      margin: "5px 10px",
                    }}
                    orientation="vertical"
                    variant="middle"
                    flexItem
                  />
                  <FontAwesomeIcon
                    style={{ cursor: "pointer" }}
                    icon={faXmark}
                    onClick={handleClear}
                  />
                </>
              ) : (
                ""
              )
            }
            id="search-bar"
            variant="outlined"
            placeholder="Search here..."
            size="small"
            onChange={handleChange}
            value={searchValue}
          />
          <StyledButton
            onClick={handleSearch}
            variant="contained"
            color="primary"
          >
            Search
          </StyledButton>
        </Stack>
      </Grid>
      <EventsTable
        data={data}
        loading={loading}
        setData={setData}
        events={events}
      />
    </Grid>
  );
};

export default EventTable;
