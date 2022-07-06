import React from "react";
import {
  Breadcrumbs,
  FormControl,
  TextField,
  InputLabel,
  Grid,
  Link,
  Typography,
  Box,
  Button,
} from "@mui/material";

export default function EditPost() {
  const inputRef = React.useRef();
  const [selectionStart, setSelectionStart] = React.useState();
  const updateSelectionStart = () =>
    setSelectionStart(inputRef.current.selectionStart);
  return (
    <Box padding="20px" minHeight="100vh">
      <Typography variant="h4" display="inline-block" margin="0 20px 20px 0">
        DashBoard
      </Typography>
      <Breadcrumbs sx={{ color: "#54677B", display: "inline-block" }}>
        <Link
          underline="hover"
          color="inherit"
          href="/post-list"
        >
          Post
        </Link>
        <Link
          underline="hover"
          href="/edit-post"
          color="black"
        >
          Edit Post
        </Link>
      </Breadcrumbs>
      <Grid
        container
        sx={{
          background: "#CDDCEC 80%",
          p: "40px 100px 40px 20px",
          alignItems: "center",
          borderRadius: "10px",
          m: "20px 0",
        }}
      >
        <Grid item xs={12} sx={{ m: 2 }} >
          <Typography variant="h5" marginBottom="40px">Edit Post</Typography>
        </Grid>
        <Grid width="100%" paddingLeft="40px">
            <Grid item container spacing={4}  marginBottom="40px" xs={12}>
            <Grid item xs={6}>
                <FormControl fullWidth>
                <TextField
                    placeholder="Post Title"
                    aria-describedby="my-helper-text"
                />
                </FormControl>
            </Grid>
            <Grid item xs={6} align="right">
                <FormControl fullWidth>
                <TextField placeholder="Date" aria-describedby="my-helper-text" />
                </FormControl>
            </Grid>
            </Grid>
            <Grid item xs={12}  marginBottom="40px">
            <FormControl fullWidth>
                <TextField
                placeholder="Post Image"
                aria-describedby="my-helper-text"
                />
            </FormControl>
            </Grid>
            <Grid item xs={12}  marginBottom="40px">
            <FormControl fullWidth>
                <TextField
                onSelect={updateSelectionStart}
                inputRef={inputRef}
                placeholder="Post Description"
                aria-describedby="my-helper-text"
                multiline
                inputProps={{ style: { height: "200px", overflowY: "scroll" } }}
                />
            </FormControl>
            </Grid>
        </Grid>

        <Grid item align="right" width="100%">
          <Button
            color="primary"
            variant="contained"
            sx={{
              width: { xs: "100%", sm: "25%", md: "18%", lg: "15%" },
              minHeight: "50px",
              minWidth: "100px",
            }}
          >
            Update
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}