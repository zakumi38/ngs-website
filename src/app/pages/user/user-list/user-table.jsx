import {faAdd, faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button, Divider, Grid, OutlinedInput, Stack, Typography} from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";
import StyledButton from "../../component/StyledButton";
import UsersTable from "./users-table";

const UserTable = () => {
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
      <Grid item xs={12} sm={3}>
        <Typography variant="h5">User List</Typography>
      </Grid>

      <Grid item xs={12} sm={9} sx={{ margin: { xs: "20px 0", md: "0" } }}>
        <Stack
          direction="row"
          spacing={3}
          sx={{
            justifyContent: { xs: "space-between", md: "flex-end" },
          }}
        >
          <Link to="/user/add">
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
          />
          <Button
            sx={{ minHeight: "60px", maxHeight: "65px", minWidth: "150px" }}
            variant="contained"
            color="primary"
          >
            Search
          </Button>
        </Stack>
      </Grid>
      <UsersTable />
    </Grid>
  );
};

export default UserTable;
