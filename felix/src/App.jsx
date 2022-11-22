import { useState } from "react";
import "./App.css";
import { Box } from "@mui/material";
import Home from "./Components/home";
import UserDetails from "./Components/userDetails";

const App = () => {
  const [hide, setHide] = useState(false);
  const [email, setEmail] = useState("");
  const handleHide = (email) => {
    setEmail(email);
    setHide(true);
  };

  return (
    <Box className="bg_img">
      {!hide ? <Home handleHide={handleHide} /> : <UserDetails email={email} />}
    </Box>
  );
};

export default App;
