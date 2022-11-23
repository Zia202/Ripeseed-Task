import { makeStyles } from "@mui/styles";
export default makeStyles({
  lable_text: {
    color: "#16445E",
    fontWeight: "bold !important",
  },
  textarea: {
    display: "inline-flex",
    borderRadius: "20px",
    boxShadow: "0px 2px 8px rgba(22, 68, 94, 0.12)",
    border: "1px solid rgba(22, 68, 94, 0.1)",
    color: "#16445e",
    width: "400px",
    height: "48px",
    fontWeight: "bold !important",
    fontSize: "14px",
    lineHeight: "18px",
    outline: "none",
    padding: "1rem 2rem",
    background: "linear-gradient(180deg, #FFFFFF 0%, #E5E5E5 100%)",
    "&::placeholder": {
      color: "#849ba8",
      opacity: "1",
      fontWeight: "bold !important",
    },
  },

  chip: {
    borderRadius: "20px",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.16)",
    border: "1px solid transparent !important",
    height: "48px !important",
    fontSize: "15px !important",
    outline: "none !important",
    background: "linear-gradient(180deg, #FFFFFF 0%, #E5E5E5 100%)",
    color: " #16445E !important",
  },
  chipClick: {
    borderRadius: "20px",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.16)",
    border: "1px solid transparent !important",
    height: "48px !important",
    fontSize: "15px !important",
    outline: "none !important",
    background:
      "linear-gradient(180deg, #FF545C 0%, #E61E27 50.52%, #CE1921 100%)",
    color: " #FFFFFF !important",
  },
});
