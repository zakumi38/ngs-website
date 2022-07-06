import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {  Stack,Link , Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import styled from "@emotion/styled";
import postsStyle from './post-list.module.sass'

// Images File
import Image1 from '../../../../assets/posts-image/01.jpg';
import Image2 from "../../../../assets/posts-image/02.jpg";
import Image3 from "../../../../assets/posts-image/03.jpg";
import Image4 from "../../../../assets/posts-image/04.jpg";


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

const Images = [Image1, Image2, Image3 , Image4];

const posts = [
  {
    id: 1,
    image: Images[0],
    title: "Cable TV",
    describtion : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis odio turpis, fini....',
    createDate : '27/6/2022'
  },
  {
    id: 2,
    image: Images[1],
    title: "Server",
    describtion : 'In a mauris leo. Etiam suscipit ex sodales eros volutpat, at consequatso....',
    createDate : '27/6/2022'
  },
  {
    id: 3,
    image: Images[2],
    title: "Internet",
    describtion : 'Duis ut justo in sem suscipit mollis. Aliquam gravida sem quis neque finibu....',
    createDate : '27/6/2022'
  },
  {
    id: 4,
    image : Images[3],
    title : 'Router Setup',
    describtion : 'Aenean facilisis justo pulvinar, vulputate ipsum in, ornare est. Cras porta, tellus eget.',
    createDate : '25/6/2022'
  }
];

const UsersTable = () => {
  return (
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
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <Typography>{post.id}</Typography>
              </TableCell>
              <TableCell component="th" scope="row">
                  <img className={postsStyle.image} src={post.image} alt="" />
              </TableCell>
              <TableCell>
                <Typography> {post.title}</Typography>
              </TableCell>
              <TableCell>
                <Typography>{post.describtion}</Typography>
              </TableCell>
              <TableCell>
                    <Typography>{post.createDate}</Typography>
              </TableCell>
              <TableCell>
                <Stack direction="row" spacing={2}>
                  <Link href="/edit-post"><ActionIcon color="#2e7d32" icon={faPenToSquare} /></Link>

                  <Link href="/delete-post"><ActionIcon color="#d32f2f" icon={faTrash} /></Link>
                </Stack>
              </TableCell>
            </TableRow>
          ))}


        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
