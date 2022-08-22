import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import styled from "@emotion/styled";
import postsStyle from "./blog-list.module.sass";
import axios from "axios";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import api from "../../../../mockdatabase/database";

const ActionIcon = styled(FontAwesomeIcon)(
  {
    color: "#000",
    cursor: "pointer",
    fontSize: "25px",
    margin: "0 10px",
    "&:hover": {
      color: "#1976d2",
    },
  },
  (props) => ({
    color: props.color,
  })
);

const UsersTable = ({ posts, loadPosts }) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalId, setModalId] = useState("");
  const open = (id) => {
    setOpenModal(true);
    setModalId(id);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const Delete = async (id) => {
    await api.delete(`/blogs/${modalId}`);
    const items = posts.filter((blog) => blog.id !== modalId);
    loadPosts(items);
    setOpenModal(false);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <TableContainer component="main" sx={{ margin: "20px 0" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography>ID</Typography>
              </TableCell>
              <TableCell>
                <Typography>Image</Typography>{" "}
              </TableCell>
              <TableCell>
                <Typography>Title</Typography>
              </TableCell>
              <TableCell>
                <Typography>Description</Typography>
              </TableCell>
              <TableCell>
                <Typography>Create Date</Typography>
              </TableCell>
              <TableCell>
                <Typography>Actions</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map((post, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0,
                  },
                }}
              >
                <TableCell>
                  <Typography>{index + 1}</Typography>
                </TableCell>
                <TableCell component="th" scope="row">
                  <img className={postsStyle.image} src={post.img} alt="" />
                </TableCell>
                <TableCell>
                  <Typography> {post.title}</Typography>
                </TableCell>
                <TableCell>
                  <Typography className={postsStyle.paragraphResponsive}>
                    {post.description}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography>{post.date}</Typography>
                </TableCell>
                <TableCell>
                  <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="space-between"
                    gap="10px"
                    sx={{ "& a": { margin: 0 } }}
                  >
                    <Link to={`/blog/view/${post.id}`}>
                      <ActionIcon color="#0d97af" icon={faEye} />
                    </Link>
                    <Link to={`/blog/edit/${post.id}`}>
                      <ActionIcon color="#2e7d32" icon={faPenToSquare} />
                    </Link>
                    <div onClick={() => open(post.id)}>
                      <ActionIcon color="#d32f2f" icon={faTrash} />
                    </div>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Modal */}
      <Dialog
        open={openModal}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Are you sure?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you really want to delete this record?This process cannot be
            undone
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            margin: "15px",
            gap: "10px",
            justifyContent: "space-between",
          }}
        >
          <Button variant="contained" color="error" onClick={handleClose}>
            Disagree
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={Delete}
            autoFocus
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default UsersTable;
