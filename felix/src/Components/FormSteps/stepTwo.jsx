import React from "react";
import { Stack, Box, Grid, Typography } from "@mui/material";
import CustomInputField from "../CustomComponents/customInputField";
import Button from "../CustomComponents/button";
import useStyles from "../../styles/stepTwo.js";
const StepTwo = () => {
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
        <Stack
          direction="column"
          spacing={2}
          sx={{ position: "absolute", top: "150px" }}
        >
          <Typography variant="h5" className={classes.text}>
            Building your audio preferences
          </Typography>
          <Box>
            <Typography variant="subtitle1" className={classes.text}>
              What kind of mobile device do you have?{" "}
            </Typography>
            <Stack direction="row" spacing={1}>
              <Button variant="secondary" color="dark" size="md">
                Iphone
              </Button>
              <Button variant="secondary" color="dark" size="md">
                Android
              </Button>
            </Stack>
          </Box>
          <Box>
            <Typography variant="subtitle1" className={classes.text}>
              Do you own AirPods?
            </Typography>
            <Stack direction="row" spacing={1}>
              <Button variant="secondary" color="dark" size="md">
                Npoe
              </Button>
              <Button variant="secondary" color="dark" size="lg">
                AirPods 1
              </Button>
              <Button variant="secondary" color="dark" size="lg">
                AirPods 2
              </Button>
              <Button variant="secondary" color="dark" size="lg">
                AirPods Pro
              </Button>
            </Stack>
          </Box>
          <Box>
            <Typography variant="subtitle1" className={classes.text}>
              Do you use Spotify?{" "}
            </Typography>
            <Stack direction="row" spacing={1}>
              <Button variant="secondary" color="dark" size="md">
                Nope
              </Button>
              <Button variant="secondary" color="dark" size="lg">
                Sometimes
              </Button>
              <Button variant="secondary" color="dark" size="md">
                Chronic
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Grid>
      <Grid item sm={6} md={6} lg={6}></Grid>
    </>
  );
};

export default StepTwo;
