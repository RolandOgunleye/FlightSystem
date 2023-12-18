import React, { useState } from 'react';
import { Button, Container, Typography, TextField, Paper, Grid } from '@mui/material';

const CreateFlight = () => {
  const [formData, setFormData] = useState({
    flight_id: '',
    airline_id: '',
    flight_number: '',
    departure_country: '',
    flight_date: '',
    arrival_country: '',
    departure_time: '',
    arrival_time: '',
    flight_class: '',
    flight_cost: '',
  });

  const handleCreateFlight = async () => {
    try {
      console.log('Form Data:', formData); // Log the formData

      const response = await fetch('http://3.134.76.216:8080/create-flight', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Flight created successfully
        console.log('Flight created successfully');
        // You might want to redirect the user or show a success message
      } else {
        // Log the response status and error message
        console.error('Failed to create flight. Status:', response.status);
        const errorData = await response.json();
        console.error('Error message:', errorData);
      }
    } catch (error) {
      // Handle network error or other issues
      console.error('Error creating flight:', error.message);
    }
  };

  return (
    <Container>
       <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
      <Typography variant="h2" gutterBottom>
        Create Flight
      </Typography>
     
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Flight ID"
                variant="outlined"
                value={formData.flight_id}
                onChange={(e) => setFormData({ ...formData, flight_id: parseInt(e.target.value, 10) })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Airline ID"
                variant="outlined"
                value={formData.airline_id}
                onChange={(e) => setFormData({ ...formData, airline_id: parseInt(e.target.value, 10) })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Flight Number"
                variant="outlined"
                value={formData.flight_number}
                onChange={(e) => setFormData({ ...formData, flight_number: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Departure Country"
                variant="outlined"
                value={formData.departure_country}
                onChange={(e) => setFormData({ ...formData, departure_country: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Flight Date"
                variant="outlined"
                type="date"
                value={formData.flight_date}
                onChange={(e) => setFormData({ ...formData, flight_date: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Arrival Country"
                variant="outlined"
                value={formData.arrival_country}
                onChange={(e) => setFormData({ ...formData, arrival_country: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Departure Time"
                variant="outlined"
                value={formData.departure_time}
                onChange={(e) => setFormData({ ...formData, departure_time: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Arrival Time"
                variant="outlined"
                value={formData.arrival_time}
                onChange={(e) => setFormData({ ...formData, arrival_time: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Flight Class"
                variant="outlined"
                value={formData.flight_class}
                onChange={(e) => setFormData({ ...formData, flight_class: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Flight Cost"
                variant="outlined"
                type="number"
                value={formData.flight_cost}
                onChange={(e) => setFormData({ ...formData, flight_cost: parseFloat(e.target.value) })}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" onClick={handleCreateFlight}>
                Create Flight
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default CreateFlight;
