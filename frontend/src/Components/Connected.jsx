import React from "react";
import CoverLayout from "./CoverLayout";
import { Card, CardHeader, CardContent, CardMedia, CardActions, Typography, Button, TextField } from '@mui/material';

const Connected = (props) => {
  const backgroundImage = "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1400";
  return (
  
    <CoverLayout
    sxBackground={{
      backgroundImage: `url(${backgroundImage})`,

      backgroundColor: "#7fc7d9", // Average color of the background image.
      backgroundPosition: "center",
    }} 
  >
    <div className="connected-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="h5" className="connected-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        You are Connected to Metamask
      </Typography>
      <Typography variant="body1" className="connected-account">
        Metamask Account: {props.account}
      </Typography>
      <Typography variant="body1" className="connected-account">
        Remaining Time: {props.remainingTime}
      </Typography>
      {props.showButton ? (
        <Typography variant="body1" className="connected-account">
          You have already voted
        </Typography>
      ) : (
        <form>
          <TextField
            type="number"
            label="Enter Candidate Index"
            value={props.number}
            onChange={props.handleNumberChange}
            variant="outlined"
            className="login-input"
          />
          <br />
          <Button variant="contained" className="login-button" onClick={props.voteFunction}>
            Vote
          </Button>
        </form>
      )}

      <div className="cards-container" style={{ display: 'flex', flexWrap: 'wrap',padding:'left:2', justifyContent: 'center' }}>
        {props.candidates.map((candidate, index) => (
          <div key={index} style={{ width: '25%', padding: '60px' }}>
            <Card sx={{ maxWidth: 345, minWidth: 300 }}>
              <CardHeader
                title={
                  <Typography align="center" variant="subtitle1">
                    {candidate.name}
                  </Typography>
                }
              />
              <CardContent>
                <CardMedia
                  component="img"
                  alt={`Candidate ${index + 1}`}
                  height="140"
                  image={candidate.image}
                />
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <Typography align="center" variant="body1">
                  <strong>{candidate.voteCount}</strong> votes
                </Typography>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
    </div>
    </CoverLayout>
  );
  
}

export default Connected;
