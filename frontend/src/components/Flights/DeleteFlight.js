import React, { useState } from 'react';
import { Button, Container, Typography, TextField, Paper, Grid } from '@mui/material';

const DeleteFlight = () => {
  const [formData, setFormData] = useState({
    flight_id: '',
  });

  const handleDeleteFlight = async () => {
    try {
      const response = await fetch('http://3.134.76.216:8080/delete-flight/' + formData.flight_id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Flight deleted successfully
        console.log('Flight deleted successfully');
        // You might want to redirect the user or show a success message
      } else {
        // Handle error response
        console.error('Failed to delete flight');
      }
    } catch (error) {
      // Handle network error or other issues
      console.error('Error deleting flight:', error.message);
    }
  };

  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
      <Typography variant="h2" gutterBottom>
        Delete Flight
      </Typography>
      
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Flight ID"
                variant="outlined"
                value={formData.flight_id}
                onChange={(e) => setFormData({ ...formData, flight_id: parseInt(e.target.value, 10) || 0 })}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" type="button" color="error" onClick={handleDeleteFlight}>
                Delete Flight
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default DeleteFlight;
