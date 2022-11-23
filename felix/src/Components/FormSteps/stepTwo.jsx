import { useState } from "react";
import { Stack, Box, Grid, Typography, Chip } from "@mui/material";
import useStyles from "../../styles/stepTwo.js";
const StepTwo = ({ parentData, getStepTwoData }) => {
  const classes = useStyles();
  console.log({ parentData });
  const [data, setData] = useState({
    airpod: parentData.airpod || "",
    device: parentData.device || "",
    spotify: parentData.spotify || "",
  });
  const handleDevice = (value) => {
    setData({
      ...data,
      device: value,
    });
    getStepTwoData("device", value);
  };
  const handleAirpod = (value) => {
    setData({
      ...data,
      airpod: value,
    });
    getStepTwoData("airpod", value);
  };
  const handleSpotify = (value) => {
    setData({
      ...data,
      spotify: value,
    });
    getStepTwoData("spotify", value);
  };

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
              <Chip
                label="IPhone"
                className={
                  data.device === "iphone" ? classes.chipClick : classes.chip
                }
                onClick={() => handleDevice("iphone")}
              />
              <Chip
                label="Android"
                className={
                  data.device === "android" ? classes.chipClick : classes.chip
                }
                onClick={() => handleDevice("android")}
              />
            </Stack>
          </Box>
          <Box>
            <Typography variant="subtitle1" className={classes.text}>
              Do you own AirPods?
            </Typography>
            <Stack direction="row" spacing={1}>
              <Chip
                label="Nope"
                className={
                  data.airpod === "Nope" ? classes.chipClick : classes.chip
                }
                onClick={() => handleAirpod("Nope")}
              />
              <Chip
                label="AirPods 1"
                className={
                  data.airpod === "AirPods1" ? classes.chipClick : classes.chip
                }
                onClick={() => handleAirpod("AirPods1")}
              />
              <Chip
                label="AirPods 2"
                className={
                  data.airpod === "AirPods2" ? classes.chipClick : classes.chip
                }
                onClick={() => handleAirpod("AirPods2")}
              />
              <Chip
                label="AirPods pro"
                className={
                  data.airpod === "AirPodsPro"
                    ? classes.chipClick
                    : classes.chip
                }
                onClick={() => handleAirpod("AirPodsPro")}
              />
            </Stack>
          </Box>
          <Box>
            <Typography variant="subtitle1" className={classes.text}>
              Do you use Spotify?
            </Typography>
            <Stack direction="row" spacing={1}>
              <Chip
                label="Nope"
                className={
                  data.spotify === "nope" ? classes.chipClick : classes.chip
                }
                onClick={() => handleSpotify("nope")}
              />
              <Chip
                label="Sometimes"
                className={
                  data.spotify === "sometimes"
                    ? classes.chipClick
                    : classes.chip
                }
                onClick={() => handleSpotify("sometimes")}
              />
              <Chip
                label="Chronic"
                className={
                  data.spotify === "chronic" ? classes.chipClick : classes.chip
                }
                onClick={() => handleSpotify("chronic")}
              />
            </Stack>
          </Box>
        </Stack>
      </Grid>
      <Grid item sm={6} md={6} lg={6}></Grid>
    </>
  );
};

export default StepTwo;
