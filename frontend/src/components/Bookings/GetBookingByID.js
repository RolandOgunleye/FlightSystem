import React, { useState } from 'react';
import { Button, Container, Typography, TextField, Grid, Paper } from '@mui/material';

const GetBookingByID = () => {
  const [formData, setFormData] = useState({
    booking_id: '',
  });

  const [bookingData, setBookingData] = useState(null);

  const handleGetBookingByID = async () => {
    try {
      const response = await fetch(`http://3.134.76.216:8080/get-booking-by-id/${formData.booking_id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setBookingData(data);
        console.log('Booking acquired successfully', data);
      } else {
        console.error('Failed to acquire booking');
        setBookingData(null);
      }
    } catch (error) {
      console.error('Error acquiring booking:', error.message);
      setBookingData(null);
    }
  };

  return (
    <Container>
      <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h2" gutterBottom>
          Get Booking By ID
        </Typography>
        <form>
          <TextField
            fullWidth
            label="Booking ID"
            variant="outlined"
            type="text"
            value={formData.booking_id}
            onChange={(e) => setFormData({ ...formData, booking_id: parseInt(e.target.value, 10) || 0 })}
            sx={{ marginBottom: '15px' }}
          />

          <Button variant="contained" type="button" onClick={handleGetBookingByID}>
            Get Booking By ID
          </Button>
        </form>

        {bookingData && (
          <Paper elevation={3} sx={{ marginTop: '20px', padding: '20px' }}>
            <Typography variant="h4" gutterBottom>
              Booking Details
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography>
                  <strong>Tourist ID:</strong> {bookingData.tourist_id}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography>
                  <strong>Flight ID:</strong> {bookingData.flight_id}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography>
                  <strong>Payment ID:</strong> {bookingData.payment_id}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography>
                  <strong>Booking Date:</strong> {bookingData.booking_date}
                </Typography>
              </Grid>
              {/* Add additional details if needed */}
            </Grid>
          </Paper>
        )}
      </Paper>
    </Container>
  );
};

export default GetBookingByID;
