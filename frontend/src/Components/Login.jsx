import * as React from "react";
import { Button, Typography } from "@mui/material";
import CoverLayout from "./CoverLayout";






 const Login = (props) => {
    const backgroundImage = "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1400";

    return (
        
    <CoverLayout
    sxBackground={{
      backgroundImage: `url(${backgroundImage})`,

      backgroundColor: "#7fc7d9", // Average color of the background image.
      backgroundPosition: "center",
    }} 
  >
    <img
    color="black"
      style={{ display: "none" }}
      src={backgroundImage}
      alt="increase priority"
    />
    <Typography color="white" align="center" variant="h2" marked="center">
      Blockchain Based Voting System
    </Typography>
    <Typography
      color="white"
      align="center"
      variant="h5"
      sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
    >
      A decentralized voting system that is built on the Ethereum blockchain.
    </Typography>
    <Button
      color="secondary"
      variant="contained"
      size="large"
      sx={{ minWidth: 200 }}
      onClick={props.connectWallet}
    >
      Enter the Voting System
    </Button>
  </CoverLayout>
);
 }

 export default Login;


