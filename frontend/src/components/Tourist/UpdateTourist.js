import React, { useState } from 'react';
import { Button, Container, Typography, TextField, Paper, Grid } from '@mui/material';

const UpdateTourist = () => {
  const [formData, setFormData] = useState({
    tourist_id: '',
    tourist_first_name: '',
    tourist_last_name: '',
    tourist_email: '',
    // Add more fields as needed
  });

  const handleUpdateTourist = async () => {
    try {
      const response = await fetch('http://3.134.76.216:8080/update-tourist', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Tourist updated successfully
        console.log('Tourist updated successfully');
        // You might want to redirect the user or show a success message
      } else {
        // Handle error response
        console.error('Failed to update tourist');
      }
    } catch (error) {
      // Handle network error or other issues
      console.error('Error updating tourist:', error.message);
    }
  };

  return (
    <Container>
       <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
      <Typography variant="h2" gutterBottom>
        Update Tourist
      </Typography>
     
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Tourist ID"
                variant="outlined"
                value={formData.tourist_id}
                onChange={(e) => setFormData({ ...formData, tourist_id: parseInt(e.target.value, 10) || 0 })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="First Name"
                variant="outlined"
                value={formData.tourist_first_name}
                onChange={(e) => setFormData({ ...formData, tourist_first_name: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Last Name"
                variant="outlined"
                value={formData.tourist_last_name}
                onChange={(e) => setFormData({ ...formData, tourist_last_name: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                value={formData.tourist_email}
                onChange={(e) => setFormData({ ...formData, tourist_email: e.target.value })}
              />
            </Grid>
            {/* Add more TextField components for other tourist information */}
            <Grid item xs={12}>
              <Button variant="contained" onClick={handleUpdateTourist}>
                Update Tourist
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default UpdateTourist;
