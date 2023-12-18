import React, { useState } from 'react';
import { Button, Container, Typography, TextField, Paper, Grid } from '@mui/material';

const UpdateFlight = () => {
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

  const handleUpdateFlight = async () => {
    try {
      const response = await fetch('http://3.134.76.216:8080/update-flight', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Flight updated successfully
        console.log('Flight updated successfully');
        // You might want to redirect the user or show a success message
      } else {
        // Handle error response
        console.error('Failed to update flight');
      }
    } catch (error) {
      // Handle network error or other issues
      console.error('Error updating flight:', error.message);
    }
  };

  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h2" gutterBottom>
          Update Flight
        </Typography>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <label>Flight ID:</label>
              <TextField
                fullWidth
                type="text"
                value={formData.flight_id}
                onChange={(e) => setFormData({ ...formData, flight_id: parseInt(e.target.value) })}
              />
            </Grid>
            <Grid item xs={12}>
              <label>Airline ID:</label>
              <TextField
                fullWidth
                type="text"
                value={formData.airline_id}
                onChange={(e) => setFormData({ ...formData, airline_id: parseInt(e.target.value) })}
              />
            </Grid>
            <Grid item xs={12}>
              <label>Flight Number:</label>
              <TextField
                fullWidth
                type="text"
                value={formData.flight_number}
                onChange={(e) => setFormData({ ...formData, flight_number: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <label>Departure Country:</label>
              <TextField
                fullWidth
                type="text"
                value={formData.departure_country}
                onChange={(e) => setFormData({ ...formData, departure_country: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <label>Flight Date:</label>
              <TextField
                fullWidth
                type="date"
                value={formData.flight_date}
                onChange={(e) => setFormData({ ...formData, flight_date: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <label>Arrival Country:</label>
              <TextField
                fullWidth
                type="text"
                value={formData.arrival_country}
                onChange={(e) => setFormData({ ...formData, arrival_country: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <label>Departure Time:</label>
              <TextField
                fullWidth
                type="text"
                value={formData.departure_time}
                onChange={(e) => setFormData({ ...formData, departure_time: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <label>Arrival Time:</label>
              <TextField
                fullWidth
                type="text"
                value={formData.arrival_time}
                onChange={(e) => setFormData({ ...formData, arrival_time: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <label>Flight Class:</label>
              <TextField
                fullWidth
                type="text"
                value={formData.flight_class}
                onChange={(e) => setFormData({ ...formData, flight_class: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <label>Flight Cost:</label>
              <TextField
                fullWidth
                type="number"
                value={formData.flight_cost}
                onChange={(e) => setFormData({ ...formData, flight_cost: parseFloat(e.target.value) })}
              />
            </Grid>
          </Grid>

          <Button variant="contained" onClick={handleUpdateFlight} style={{ marginTop: '20px' }}>
            Update Flight
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default UpdateFlight;
