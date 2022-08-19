import { faAdd, faRefresh, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Divider,
  Grid,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import StyledButton from "../../component/StyledButton";
import UsersTable from "./users-table";

const UserTable = () => {
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
            sx={{
              width: {
                xs: "50%",
                sm: "auto",
              },
              p: "0",
            }}
            endAdornment={
              <Button
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
      <UsersTable />
    </Grid>
  );
};

export default UserTable;
