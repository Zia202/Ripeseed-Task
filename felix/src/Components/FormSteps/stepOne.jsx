import React, { forwardRef, useImperativeHandle } from "react";
import { Stack, Box, Grid, Typography, Button } from "@mui/material";
import CustomInputField from "../CustomComponents/customInputField";
import { Formik, useFormik } from "formik";
import useStyles from "../../styles/stepOne.js";

const initialValues = {
  nickname: "",
  username: "",
};

const StepOne = forwardRef((props, ref) => {
  const classes = useStyles();
  const handleFormSubmit = (values) => {
    console.log({ values });
    props.getStepOneData(values);
  };

  const { values, errors, handleChange, handleSubmit, handleBlur } = useFormik({
    initialValues: initialValues,
    onSubmit: handleFormSubmit,
  });

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
          component="form"
        >
          <Typography variant="h5" className={classes.text}>
            Your ears will love you. Complete your details below:
          </Typography>
          <Box>
            <Typography variant="subtitle1" className={classes.text}>
              Nickname
            </Typography>
            <CustomInputField
              name="nickname"
              placeholder="Tim Tim"
              variant="primary"
              color="light"
              size="lg"
              type="text"
              value={values.nickname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Box>
          <Box>
            <Typography variant="subtitle1" className={classes.text}>
              Username
            </Typography>
            <CustomInputField
              name="username"
              placeholder="@username"
              variant="primary"
              color="light"
              size="lg"
              type="text"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Box>
        </Stack>
      </Grid>
      <Grid item sm={6} md={6} lg={6}></Grid>
    </>
  );
});

export default StepOne;
