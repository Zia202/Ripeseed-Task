import { makeStyles } from "@mui/styles";
export default makeStyles({
  bg_img: {
    display: "flex",
    justifyContent: "center",
    height: "100vh",
    backgroundImage: "url(/images/form-bg.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  steper_box: {
    height: 555,
    maxWidth: 400,
    width: "100%",
    p: 2,
  },
  mobile_stepper: {
    borderRadius: "20px",
    backgroundColor: "transparent !important",
    border: "1px solid rgba(22, 68, 94, 0.1)",
    height: "50px",
    marginTop: "50px",
  },
  cloud_img: {
    position: "absolute",
    top: "5%",
    left: "10%",
  },
});
