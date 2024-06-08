import React from "react";
import CoverLayout from "./CoverLayout";
import Box from '@mui/material/Box';
import { Card, CardHeader, CardContent, CardMedia, CardActions, Typography, Button, TextField } from '@mui/material';

const Connected = (props) => {
  console.log("Props in Connected:", props); // Ajoutez ceci pour vérifier les props

  const backgroundImage = "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1400";

  return (
    <CoverLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#7fc7d9",
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
       
        {props.showButton ? (
          <Typography variant="body1" className="connected-account">
            You have already voted
          </Typography>
        ) : (
          <form>
            <Box my={1} />
            <Box display="flex" flexDirection="column" alignItems="center">
              <TextField
                id="filled-basic"
                label="Enter Candidate Index"
                value={props.number}
                onChange={props.handleNumberChange}
                variant="filled"
                sx={{ backgroundColor: 'white', borderRadius: '8px', width: '100%' }}
              />
              <Box my={1} />
              <Button
                variant="contained"
                className="login-button"
                onClick={props.voteFunction}
              >
                Vote
              </Button>
            </Box>
          </form>
        )}

        <div className="cards-container" style={{ display: 'flex', flexWrap: 'wrap', padding: '2px', justifyContent: 'center' }}>
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
        
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          style={{
            maxWidth: '400px',
            margin: '0 auto',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            backgroundColor: 'white',
          }}
        >
          <TextField
            type="text"
            value={props.newCandidateName}
            onChange={props.handleNewCandidateChange}
            placeholder="Candidate Name"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <input
            type="file"
            onChange={props.handleNewCandidateImageChange}
            style={{ display: 'none' }}
            id="newCandidateImage"
          />
          <label htmlFor="newCandidateImage" style={{ width: '100%' }}>
            <Button
              fullWidth
              variant="contained"
              component="span"
            >
              Upload Image
            </Button>
          </label>
          <Button
            variant="contained"
            color="primary"
            onClick={props.addCandidate}
            fullWidth
            style={{ marginTop: '10px' }}
          >
            Add Candidate
          </Button>
        </Box>
        
      </div>
    </CoverLayout>
  );
}

export default Connected;
