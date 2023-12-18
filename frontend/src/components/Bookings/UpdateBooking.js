import React, { useState } from 'react';
import { Button, Container, Typography, TextField, Grid, Paper } from '@mui/material';

const UpdateBooking = () => {
  const [formData, setFormData] = useState({
    booking_id: '',
    tourist_id: '',
    flight_id: '',
    payment_id: '',
    booking_date: '',
  });

  const handleUpdateBooking = async () => {
    try {
      const response = await fetch('http://3.134.76.216:8080/update-booking', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Booking updated successfully
        console.log('Booking updated successfully');
        // You might want to redirect the user or show a success message
      } else {
        // Handle error response
        console.error('Failed to update booking');
      }
    } catch (error) {
      // Handle network error or other issues
      console.error('Error updating booking:', error.message);
    }
  };

  return (
    <Container>
      <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h2" gutterBottom>
          Update Booking
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Booking ID"
                variant="outlined"
                type="text"
                value={formData.booking_id}
                onChange={(e) => setFormData({ ...formData, booking_id: parseInt(e.target.value) })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Tourist ID"
                variant="outlined"
                type="text"
                value={formData.tourist_id}
                onChange={(e) => setFormData({ ...formData, tourist_id: parseInt(e.target.value) })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Flight ID"
                variant="outlined"
                type="text"
                value={formData.flight_id}
                onChange={(e) => setFormData({ ...formData, flight_id: parseInt(e.target.value) })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Payment ID"
                variant="outlined"
                type="text"
                value={formData.payment_id}
                onChange={(e) => setFormData({ ...formData, payment_id: parseInt(e.target.value) })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Booking Date"
                variant="outlined"
                type="date"
                value={formData.booking_date}
                onChange={(e) => setFormData({ ...formData, booking_date: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" type="button" onClick={handleUpdateBooking}>
                Update Booking
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default UpdateBooking;
