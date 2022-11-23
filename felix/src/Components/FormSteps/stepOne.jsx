import React, { forwardRef, useImperativeHandle } from "react";
import { Stack, Box, Grid, Typography, Button } from "@mui/material";
import CustomInputField from "../CustomComponents/customInputField";
import { Formik, useFormik } from "formik";
import useStyles from "../../styles/stepOne.js";
import * as yup from "yup";

const StepOne = forwardRef((props, ref) => {
  const { data } = props;
  console.log({ data });
  const classes = useStyles();
  const handleFormSubmit = (values) => {
    console.log({ values });
    props.getStepOneData(values);
  };

  const validationSchema = yup.object().shape({
    nickname: yup.string().required("Nickname is required"),
    username: yup.string().required("Username is required"),
  });

  const { values, errors, handleChange, handleSubmit, handleBlur } = useFormik({
    initialValues: {
      nickname: data?.nickname || "",
      username: data?.username || "",
    },
    validationSchema,
    onSubmit: handleFormSubmit,
  });

  console.log("VAlues", { values });

  useImperativeHandle(
    ref,
    () => ({
      handleFormSubmit,
      handleSubmit,
    }),
    [],
  );
  // console.log(errors, "errors");
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
          // onSubmit={}
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
              defaultValue={values.nickname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Typography variant="caption">{errors.nickname}</Typography>
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
              defaultValue={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Typography variant="caption">{errors.username}</Typography>
          </Box>
        </Stack>
      </Grid>
      <Grid item sm={6} md={6} lg={6}></Grid>
    </>
  );
});

export default StepOne;
