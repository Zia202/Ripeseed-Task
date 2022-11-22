import { useState } from "react";
import Button from "./CustomComponents/button";
import CustomInputField from "./CustomComponents/customInputField";
import { Typography, Grid, Stack, Box } from "@mui/material";
import useStyles from "../styles/home.js";
import * as yup from "yup";

const Home = ({ handleHide }) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Email is required")
      .email("Please enter a valid email"),
  });

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <>
      <Grid container>
        <Grid
          item
          sm={6}
          md={6}
          lg={6}
          sx={{
            position: "relative",
          }}
        >
          <Typography variant="h4" className={classes.felix}>
            Felix
          </Typography>
          <Stack direction="column" spacing={14} className={classes.main_stack}>
            <Stack direction="column" spacing={2}>
              <Typography className={classes.primary_text} variant="h2">
                An Audio Assistant For Happiness
              </Typography>

              <Typography className={classes.secondary_text} variant="h5">
                Audio magic with your best mates. Start and finish each day with
                good vibes.
              </Typography>
            </Stack>
            <Stack direction="column" spacing={2}>
              <CustomInputField
                type="email"
                name="email"
                variant="primary"
                placeholder="Your email address"
                value={email}
                onChange={handleChange}
              />
              <Button
                variant="primary"
                color="light"
                size="xl"
                type="submit"
                onClick={() => {
                  handleHide(email);
                }}
              >
                Join Now
              </Button>
            </Stack>
          </Stack>
        </Grid>
        <Grid item sm={6} md={6} lg={6}></Grid>
      </Grid>
    </>
  );
};

export default Home;
