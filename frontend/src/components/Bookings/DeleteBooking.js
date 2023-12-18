import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid, Paper } from '@mui/material';

const DeleteBooking = () => {
  const [formData, setFormData] = useState({
    booking_id: '',
  });

  const handleDeleteBooking = async () => {
    try {
      const response = await fetch(`http://3.134.76.216:8080/delete-booking/${formData.booking_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Booking deleted successfully');
        // You might want to redirect the user or show a success message
      } else {
        console.error('Failed to delete booking');
      }
    } catch (error) {
      console.error('Error deleting booking:', error.message);
    }
  };

  return (
    <Container>
      <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h2" gutterBottom>
          Delete Booking
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
                onChange={(e) => setFormData({ ...formData, booking_id: parseInt(e.target.value, 10) || 0 })}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" type="button" color="error"onClick={handleDeleteBooking}>
                Delete Booking
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default DeleteBooking;
