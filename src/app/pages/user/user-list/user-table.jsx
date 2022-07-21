import { faSearch , faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome";
import {
  Button,
  Divider,
  Grid,
  OutlinedInput,
  Stack,
  Typography,
  Link
} from "@mui/material";
import React from "react";
import StyledButton from "../../component/StyledButton";
import UsersTable from "./users-table";

const UserTable = () => {
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
      <Grid item xs={3} sm={5}>
        <Typography variant="h5">User List</Typography>
      </Grid>

      <Grid item xs={2} sm={2}>
        <Link href={"/user/add"}>
          <Typography variant="h5" sx={{
            float: "right",
            color: "#000",
            border: "2px solid black",
            padding: "5px 10px",
            borderRadius : "10px"
          }}> 
            <FontAwesomeIcon icon={faPlusCircle} />
          </Typography>
        </Link>
      </Grid>

      <Grid item xs={7} sm={5}>
        <Stack
          direction="row"
          spacing={3}
          sx={{
            justifyContent: "flex-end",
          }}
        >
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
          <StyledButton variant="contained" color="primary">
            Search
          </StyledButton>
        </Stack>
      </Grid>
      <UsersTable />
    </Grid>
  );
};

export default UserTable;
