import React, { forwardRef, useImperativeHandle } from "react";
import { Stack, Box, Grid, Typography } from "@mui/material";
import CustomInputField from "../CustomComponents/customInputField";
import Button from "../CustomComponents/button";
import { useFormik } from "formik";
import useStyles from "../../styles/stepThree";

const initialValues = {
  reviews: "",
  favSong: "",
};

const StepThree = forwardRef((props, ref) => {
  const handleFormSubmit = (values) => {
    console.log("Step three Values", { values });
    props.getStepThreeData(values);
  };

  const { values, errors, handleChange, handleSubmit, handleBlur } = useFormik({
    initialValues: initialValues,
    onSubmit: handleFormSubmit,
  });

  const classes = useStyles();
  useImperativeHandle(
    ref,
    () => ({
      handleFormSubmit,
      handleSubmit,
    }),
    [],
  );

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
          spacing={3}
          sx={{ position: "absolute", top: "150px" }}
        >
          <Typography variant="h5" className={classes.lable_text}>
            Homestretch. Just a few more questions:{" "}
          </Typography>
          <Box>
            <Typography variant="subtitle1" className={classes.lable_text}>
              How long does it take to get ready for work?
            </Typography>
            <textarea
              className={classes.textarea}
              placeholder="*Yawn* I usually.."
              variant="primary"
              color="light"
              size="lg"
              name="reviews"
              value={values.reviews}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Box>
          <Box>
            <Typography variant="subtitle1" className={classes.lable_text}>
              What is your goto song that makes you feel happy?
            </Typography>
            <CustomInputField
              placeholder="Your favourite song 🎵"
              variant="primary"
              color="light"
              size="lg"
              name="favSong"
              value={values.favSong}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Box>
          <Box>
            <Typography variant="subtitle1" className={classes.lable_text}>
              Are you available for survey + early product releases?
            </Typography>
            <Stack direction="row" spacing={1}>
              <Button variant="secondary" color="dark" size="sm">
                Yes
              </Button>
              <Button variant="secondary" color="dark" size="md">
                Maybe
              </Button>
              <Button variant="secondary" color="dark" size="sm">
                No
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Grid>
      <Grid item sm={6} md={6} lg={6}></Grid>
    </>
  );
});

export default StepThree;
