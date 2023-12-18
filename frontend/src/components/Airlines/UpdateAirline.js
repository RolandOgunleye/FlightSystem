import React, { useState } from 'react';
import { Button, Container, Typography, TextField, Paper, Grid } from '@mui/material';

const UpdateAirline = () => {
  const [formData, setFormData] = useState({
    airline_id: '',
    airline_name: '',
  });

  const handleUpdateAirline = async () => {
    try {
      const response = await fetch('http://3.134.76.216:8080/update-airline', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Airline updated successfully
        console.log('Airline updated successfully');
        // You might want to redirect the user or show a success message
      } else {
        // Handle error response
        console.error('Failed to update airline');
      }
    } catch (error) {
      // Handle network error or other issues
      console.error('Error updating airline:', error.message);
    }
  };

  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h2" gutterBottom>
          Update Airline
        </Typography>
        <form>
          <Grid container spacing={3}>
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
              <label>Airline Name:</label>
              <TextField
                fullWidth
                type="text"
                value={formData.airline_name}
                onChange={(e) => setFormData({ ...formData, airline_name: e.target.value })}
              />
            </Grid>
          </Grid>

          <Button variant="contained" onClick={handleUpdateAirline} style={{ marginTop: '20px' }}>
            Update Airline
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default UpdateAirline;
