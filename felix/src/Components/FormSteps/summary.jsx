import React from "react";
import { Stack, Box, Grid, Typography } from "@mui/material";
import useStyles from "../../styles/summary.js";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
const Summary = (props) => {
  const { width, height } = useWindowSize();

  const classes = useStyles();
  return (
    <>
      <Grid
        item
        sm={6}
        md={6}
        lg={6}
        sx={{
          position: "relative",
        }}
      >
        <Confetti width={600} height={height} />;
        <Stack
          direction="column"
          spacing={3}
          sx={{
            position: "absolute",
            top: "60px",
            zIndex: "2",
          }}
        >
          <Typography variant="h2" className={classes.primary_text}>
            Kowabunga
          </Typography>
          <Typography variant="h6" className={classes.secondary_text}>
            Congrats, you joined the audio fold. Added to Felix.fm waitlist
          </Typography>
          <Stack direction="column" spacing={1} className={classes.stack}>
            <Typography
              variant="h6"
              sx={{ textAlign: "center", fontWeight: "bold" }}
            >
              Summary
            </Typography>
            <Typography variant="subtitle2" className={classes.label_text}>
              Your email
            </Typography>
            <Typography variant="subtitle2" className={classes.form_data_text}>
              {props.email}
            </Typography>
            <Typography variant="subtitle2" className={classes.label_text}>
              Reserved user name
            </Typography>

            <Typography variant="subtitle2" className={classes.form_data_text}>
              {props.data.username}
            </Typography>
            <Typography variant="subtitle2" className={classes.label_text}>
              Your fav song
            </Typography>
            <Typography variant="subtitle2" className={classes.form_data_text}>
              {props.data.favSong}{" "}
            </Typography>
          </Stack>
          <Typography variant="h6" className={classes.footer_text}>
            Skip the line by inviting your bestie and a few close buds.
          </Typography>
        </Stack>
      </Grid>
      <Grid item sm={6} md={6} lg={6}></Grid>
    </>
  );
};

export default Summary;
