import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios"

// Files
import {Avatar, Box, Button, FormControl, Grid, TextField, Typography} from "@mui/material";


export default function EditGallery() {

  const [title,setTitle]=useState("");
  const [img,setImg]=useState("");
  const [category,setCategory]=useState("");
  const [date,setDate]=useState("");
  const [preview, setPreview] = useState(null)
  let navigate=useNavigate();

  const photoUpload = (e) =>{
    let imgReview = e.target.files[0]
    console.log(imgReview)
    if (imgReview) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(imgReview);
      console.log(reader)
    } else {
      setPreview(null);
    }
    setImg(e.target.files[0].name)
  }
  
  const data={
      title,
      img,
      category,
      date
  }

  let Submit = () => {
    axios.post(`http://localhost:3500/gallerys`,data)
    .then(
        res => {
          navigate('/gallery')
          console.log(res)
        }
    )

}

  return (
    <Box padding="20px" minHeight="100vh" backgroundColor ='#F1F1F1'>
      
      <Grid
        container
        sx={{
          background: "white",
          p: "40px 100px 40px 20px",
          alignItems: "center",
          borderRadius: "10px",
         m: "3.5rem 0",
        }}
      >
        <Grid item xs={12} sx={{ m: 2 }} >
          <Typography variant="h5" marginBottom="40px">Add Post</Typography>
        </Grid>
        <Grid width="100%" paddingLeft="40px">
            <Grid item container spacing={4}  marginBottom="40px" xs={12}>
            <Grid item xs={6}>
                <FormControl fullWidth>
                <TextField
                    placeholder="Post Title"
                    aria-describedby="my-helper-text"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
                </FormControl>
            </Grid>
            <Grid item xs={6} align="right">
                <FormControl fullWidth>
                <TextField placeholder="Date" 
                aria-describedby="my-helper-text" 
                    value={date}
                    onChange={(e)=>setDate(e.target.value)}
                />
                </FormControl>
            </Grid>
            </Grid>
            <Grid item xs={12}  marginBottom="40px">
            <FormControl>
            <Button 
            variant="contained" 
            component="label" 
            color="primary">
                  Upload a photo
            <input 
            type="file" 
            accept="image/*" 
            onChange={photoUpload}  
            hidden />
            </Button>
            </FormControl>
            </Grid>
            {preview && (
          <Grid item xs={6} marginBottom="40px">
            <Avatar src={preview} sx={{ width: 100, height: 100 }} variant="rounded"></Avatar>
          </Grid>
          )}
            <Grid item xs={12}  marginBottom="40px">
            <FormControl fullWidth>
                <TextField
                placeholder="Category"
                aria-describedby="my-helper-text"
                value={category}
                onChange={(e)=>setCategory(e.target.value)}
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
            onClick={Submit} 
          >
            Add Post
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}