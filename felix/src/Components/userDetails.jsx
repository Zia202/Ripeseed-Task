import React, { useRef, useState } from "react";
import { Box, Typography, MobileStepper, Paper, Grid } from "@mui/material";
import Button from "./CustomComponents/button";
import StepOne from "./FormSteps/stepOne";
import StepTwo from "./FormSteps/stepTwo";
import StepThree from "./FormSteps/stepThree";
import Summary from "./FormSteps/summary";
import useStyles from "../styles/useDetails.js";

const UserDetails = ({ email }) => {
  const classes = useStyles();
  const stepOneRef = useRef();
  const stepTwoRef = useRef();
  const stepThreeRef = useRef();
  const getStepOneData = (data) => {
    console.log({ data });
    setData({
      nickname: data?.nickname,
      username: data?.username,
    });
  };
  //   const getStepTwoData = (data) => {
  //     console.log({ data });
  //     setData({
  //       nickname: data?.nickname,
  //       username: data?.username,
  //     });
  //   };
  const getStepThreeData = (stepThreeData) => {
    console.log({ stepThreeData });
    setData({
      ...data,
      reviews: stepThreeData?.reviews,
      favSong: stepThreeData?.favSong,
    });
  };

  const [activeStep, setActiveStep] = React.useState(0);
  const [data, setData] = useState({});
  const steps = [
    {
      image: "/images/cloud-one.png",
      formSteps: <StepOne ref={stepOneRef} getStepOneData={getStepOneData} />,
    },
    {
      image: "/images/cloud-two.png",
      formSteps: <StepTwo />,
    },
    {
      image: "/images/cloud-three.png",
      formSteps: (
        <StepThree ref={stepThreeRef} getStepThreeData={getStepThreeData} />
      ),
    },
    {
      image: "/images/cloud-four.png",
      formSteps: <Summary data={data} email={email} />,
    },
  ];
  const maxSteps = steps.length;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepOneData = () => {
    stepOneRef.current.handleSubmit();
    stepOneRef.current.handleFormSubmit();
    handleNext();
  };
  const handleStepThreeData = () => {
    stepThreeRef.current.handleSubmit();
    stepThreeRef.current.handleFormSubmit();
    handleNext();
  };

  return (
    <Grid container>
      <Grid item sm={6} md={6} lg={6} className={classes.bg_img}>
        <Box
          sx={{
            maxWidth: 500,
            flexGrow: 1,
          }}
        >
          <Box className={classes.steper_box}>
            {steps[activeStep].formSteps}
          </Box>
          {activeStep !== 3 && (
            <MobileStepper
              className={classes.mobile_stepper}
              variant="text"
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  variant="primary"
                  size="md"
                  type="submit"
                  color="light"
                  onClick={
                    activeStep === 0
                      ? handleStepOneData
                      : activeStep === 2
                      ? handleStepThreeData
                      : handleNext
                  }
                >
                  {activeStep == 0 ? "Next" : "Submit"}
                </Button>
              }
              backButton={
                <Button
                  variant={activeStep === 0 ? "secondary" : "disable"}
                  onClick={handleBack}
                  disabled={activeStep === 0}
                  color="dark"
                  size="md"
                >
                  Back
                </Button>
              }
            />
          )}
        </Box>
      </Grid>
      <Grid item sm={6} md={6} lg={6} sx={{ position: "relative" }}>
        <img src={steps[activeStep].image} className={classes.cloud_img} />
      </Grid>
    </Grid>
  );
};
export default UserDetails;
