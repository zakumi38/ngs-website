import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Files
import api from "../../../mockdatabase/database";
import {
  Button,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
  Select,
  FormControl,
  MenuItem,
} from "@mui/material";
import teamStyle from "./team.module.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faEye,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";

const responsiveText = { sm: "end", md: "end", lg: "end", xl: "end" };
export default function EditTeamMember({ disabled = false }) {
  const {
    state: { row, teams },
  } = useLocation();
  console.log(row, teams);
  const navigate = useNavigate();
  const [name, setName] = useState(row.name);
  const [email, setEmail] = useState(row.email);
  const [team, setTeam] = useState(
    row.team[0].toUpperCase() + row.team.slice(1)
  );
  const [experience, setExperience] = useState(row.experience);
  const [phoneNumber, setPhoneNumber] = useState(row.phone);
  const [occupation, setOccupation] = useState(row.occupation);
  const [personalExperience, setPersonalExperience] = useState(row.personalExp);
  function editMember() {
    api.put(`/developer-team-members/${row.id}`, {
      image: "./logo512.png",
      name: name,
      occupation: occupation,
      team: team,
      experience: experience,
      phone: phoneNumber,
      email: email,
      personalExp: personalExperience,
    });
    navigate("/team");
  }
  return (
    <Container maxWidth={false} className={teamStyle.addTeamContainer}>
      <Grid
        container
        sx={{ backgroundColor: "white", borderRadius: "10px", padding: "20px" }}
      >
        <Grid item>
          <IconButton
            aria-label="back"
            onClick={(_) => navigate("/team", { replace: true })}
          >
            <FontAwesomeIcon icon={faArrowLeft} className={teamStyle.back} />
          </IconButton>
        </Grid>
        <Grid item container xs={12} className={teamStyle.teamForm}>
          <Grid item xs={12} className={teamStyle.teamImgContainer}>
            <div>
              <img src="/04.jpg" className={teamStyle.teamImg} alt="Team" />
              <div className={teamStyle.overlay}>
                <IconButton
                  aria-label="View Image"
                  className={teamStyle.imgViewIcon}
                >
                  <FontAwesomeIcon icon={faEye} />
                </IconButton>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          className={teamStyle.editInputsContainer}
        >
          <Grid
            item
            container
            sm={8}
            justifyContent="start"
            alignItems="center"
            columnSpacing={3}
            className={teamStyle.inputsWrapper}
          >
            <Grid item xs={12} sm={3} justifySelf="center">
              <Typography
                className={teamStyle.responsiveText}
                variant="h6"
                textAlign={{ xs: "start", ...responsiveText }}
              >
                Name
              </Typography>
            </Grid>
            <Grid item xs={12} sm={9}>
              <TextField
                className={`${teamStyle.responsiveText} ${
                  disabled ? teamStyle.disabled : ""
                }`}
                disabled={disabled}
                fullWidth
                id="fullWidth"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            sm={8}
            justifyContent="start"
            alignItems="center"
            columnSpacing={3}
            className={teamStyle.inputsWrapper}
          >
            <Grid item xs={12} sm={3} justifySelf="center">
              <Typography
                className={teamStyle.responsiveText}
                variant="h6"
                textAlign={{ xs: "start", ...responsiveText }}
              >
                Email
              </Typography>
            </Grid>
            <Grid item xs={12} sm={9}>
              <TextField
                className={`${teamStyle.responsiveText} ${
                  disabled ? teamStyle.disabled : ""
                }`}
                disabled={disabled}
                fullWidth
                id="fullWidth"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            sm={8}
            justifyContent="start"
            alignItems="center"
            columnSpacing={3}
            className={teamStyle.inputsWrapper}
          >
            <Grid item xs={12} sm={3} justifySelf="center">
              <Typography
                className={teamStyle.responsiveText}
                variant="h6"
                textAlign={{ xs: "start", ...responsiveText }}
              >
                Experience
              </Typography>
            </Grid>
            <Grid item xs={12} sm={9}>
              <TextField
                className={`${teamStyle.responsiveText} ${
                  disabled ? teamStyle.disabled : ""
                }`}
                disabled={disabled}
                fullWidth
                id="fullWidth"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            sm={8}
            justifyContent="start"
            alignItems="center"
            columnSpacing={3}
            className={teamStyle.inputsWrapper}
          >
            <Grid item xs={12} sm={3} justifySelf="center">
              <Typography
                className={teamStyle.responsiveText}
                variant="h6"
                textAlign={{ xs: "start", ...responsiveText }}
              >
                Phone Number
              </Typography>
            </Grid>
            <Grid item xs={12} sm={9}>
              <TextField
                className={`${teamStyle.responsiveText} ${
                  disabled ? teamStyle.disabled : ""
                }`}
                disabled={disabled}
                fullWidth
                id="fullWidth"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            sm={8}
            justifyContent="start"
            alignItems="center"
            columnSpacing={3}
            className={teamStyle.inputsWrapper}
          >
            <Grid item xs={12} sm={3} justifySelf="center">
              <Typography
                className={teamStyle.responsiveText}
                variant="h6"
                textAlign={{ xs: "start", ...responsiveText }}
              >
                Occupation
              </Typography>
            </Grid>
            <Grid item xs={12} sm={9}>
              <TextField
                className={`${teamStyle.responsiveText} ${
                  disabled ? teamStyle.disabled : ""
                }`}
                disabled={disabled}
                fullWidth
                id="fullWidth"
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            sm={8}
            justifyContent="start"
            alignItems="center"
            columnSpacing={3}
            className={teamStyle.inputsWrapper}
          >
            <Grid item xs={12} sm={3} justifySelf="center">
              <Typography
                className={teamStyle.responsiveText}
                variant="h6"
                textAlign={{ xs: "start", ...responsiveText }}
              >
                Team
              </Typography>
            </Grid>
            <Grid item xs={12} sm={9}>
              <FormControl fullWidth>
                <Select
                  className={`${teamStyle.responsiveText} ${
                    disabled ? teamStyle.disabled : ""
                  }`}
                  disabled={disabled}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={team}
                  onChange={(e) => setTeam(e.target.value)}
                  MenuProps={{ classes: { paper: teamStyle.teamSelect } }}
                >
                  {disabled ? (
                    <MenuItem
                      value={row.team}
                      className={teamStyle.teamSelectItem}
                    >
                      {row.team}
                    </MenuItem>
                  ) : (
                    teams.map((team) => (
                      <MenuItem
                        value={team.teamname}
                        key={team.id}
                        className={teamStyle.teamSelectItem}
                      >
                        {team.teamname}
                      </MenuItem>
                    ))
                  )}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid
            item
            container
            sm={8}
            justifyContent="start"
            alignItems="center"
            columnSpacing={3}
            className={teamStyle.inputsWrapper}
          >
            <Grid item xs={12} sm={3} justifySelf="center">
              <Typography
                className={teamStyle.responsiveText}
                variant="h6"
                textAlign={{ xs: "start", ...responsiveText }}
              >
                Personal Experience
              </Typography>
            </Grid>
            <Grid item xs={12} sm={9}>
              <TextField
                className={`${teamStyle.responsiveText} ${
                  disabled ? teamStyle.disabled : ""
                }`}
                disabled={disabled}
                fullWidth
                id="fullWidth"
                value={personalExperience}
                multiline
                rows={3}
                onChange={(e) => setPersonalExperience(e.target.value)}
              />
            </Grid>
          </Grid>
          {!disabled ? (
            <Grid item container justifyContent="end" marginTop="20px">
              <Grid item sx={{ marginRight: "1rem" }}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => navigate("/team")}
                >
                  Cancle
                </Button>
              </Grid>
              <Grid item>
                <Button onClick={editMember} variant="contained">
                  Save
                </Button>
              </Grid>
            </Grid>
          ) : (
            <Grid
              item
              container
              justifyContent="space-between"
              marginTop="20px"
            >
              <Grid item xs={12} align="right">
                <Button
                  onClick={() => navigate("/team")}
                  color="error"
                  variant="contained"
                  sx={{marginRight:"1rem"}}
                >
                  Back
                </Button>

                <Button
                  onClick={(_) =>
                    navigate(`/team/${row.team}/${row.id}/edit`, {
                      state: { row },
                    })
                  }
                  variant="contained"
                >
                  Edit
                </Button>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
