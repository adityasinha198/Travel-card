import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import DropDown from './DropDown';

export default function CardForm() {

  const [from, setFrom] = React.useState('');
  const [to, setTo] = React.useState('');
  const [fare, setFare] = React.useState(0);
  const [showError, setShowError] = React.useState(false);

  const handleTravelClick = () => {
    if(!from || !to) {
      setShowError(true)
      return true;
    }
    
    setShowError(false)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ from: from, to: to })
    };

    fetch('http://localhost:8000/fare', requestOptions)
        .then(response => response.json())
        .then(data => {
            setFare(data.message);
        });
  }

  return (
    <Card sx={{ width: 350, borderRadius: "10px" }}>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ margin: "20px" }}> 
            Travel Card
        </Typography>
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
        >
            <Grid item>
                <DropDown label="From" onChange={setFrom} />
            </Grid>
            <Grid item>
                <DropDown label="To" onChange={setTo} />
            </Grid>
        </Grid>
        {showError && <Typography variant="body" component="div" sx={{ margin: "5px 20px 0px", color: "red" }}> 
            Please select From and To
        </Typography>}
        <Button variant="contained" sx={{ marginTop: "20px" }} onClick={handleTravelClick}>Travel</Button>
        <Typography variant="h5" component="div" sx={{ margin: "20px" }}>
            {`Fare: Rs. ${fare}`}
        </Typography>
      </CardContent>
    </Card>
  );
}
