import {
  faAdd,
  faArrowLeft,
  faArrowRight,
  faRefresh,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  Button,
  Grid,
  OutlinedInput,
  Pagination,
  PaginationItem,
  Stack,
  Typography,
} from "@mui/material";
import React, {useState} from "react";
import { Link } from "react-router-dom";
import api from "../../../../mockdatabase/database";
import eventStyle from "./event-list.module.sass";
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
  const handleSearchValue = (e) => {
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
    console.log(searchFilter,search)
    setData(searchValue.length === 0 ? events : searchFilter);
  };

  return (
    <Grid
      container
      sx={{
        backgroundColor: "white",
        padding: "20px",
        alignItems: "center",
        borderRadius: "10px",
        margin: "5rem 0 0 0",
      }}
    >
      <Grid item xs={12} sx={{ marginBottom: { xs: "20px" } }}>
        <Typography variant="h5">Events List</Typography>
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
                onClick={handleSearch}
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
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            value={searchValue}
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
            <Link to="/events" className={eventStyle.eLink}>
              <Button
                onClick={handleClear}
                variant="contained"
                color="primary"
                sx={{ height: "100%" }}
              >
                <FontAwesomeIcon
                  icon={faRefresh}
                  size="lg"
                  className={eventStyle.erefresh}
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
            <Link to="/events/add" className={eventStyle.eLink}>
              <Button
                variant="contained"
                color="primary"
                sx={{ height: "100%" }}
              >
                <FontAwesomeIcon
                  icon={faAdd}
                  size="lg"
                  className={eventStyle.eplus}
                />
                <Typography
                  sx={{
                    display: { xs: "none", sm: "block" },
                    fontSize: { sm: "14px", md: "16px" },
                  }}
                >
                  Add new Event
                </Typography>
              </Button>
            </Link>
          </Stack>
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
