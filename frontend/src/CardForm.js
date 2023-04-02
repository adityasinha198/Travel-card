import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import DropDown from './DropDown';

export default function CardForm() {
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
                <DropDown label="From" />
            </Grid>
            <Grid item>
                <DropDown label="To" />
            </Grid>
        </Grid>
        <Button variant="contained" sx={{ marginTop: "20px" }}>Travel</Button>
        <Typography variant="h5" component="div" sx={{ margin: "20px" }}>
            Fare: Rs. 50
        </Typography>
      </CardContent>
    </Card>
  );
}
