import React, { useState } from 'react';
import { Typography, TextField, Button, Container, Paper, Grid } from '@mui/material';

const DeleteTourist = () => {
  const [formData, setFormData] = useState({
    tourist_id: '',
  });

  const handleDeleteTourist = async () => {
    try {
      const response = await fetch(`http://3.134.76.216:8080/delete-tourist/${formData.tourist_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Tourist deleted successfully
        console.log('Tourist deleted successfully');
        // You might want to redirect the user or show a success message
      } else {
        // Handle error response
        console.error('Failed to delete tourist');
      }
    } catch (error) {
      // Handle network error or other issues
      console.error('Error deleting tourist:', error.message);
    }
  };

  return (
    <Container>
      <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px' }}>
      <Typography variant="h2" gutterBottom>
        Delete Tourist
      </Typography>
      
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Tourist ID"
                variant="outlined"
                type="text"
                value={formData.tourist_id}
                onChange={(e) => setFormData({ ...formData, tourist_id: parseInt(e.target.value, 10) || 0 })}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" type="button" color="error" onClick={handleDeleteTourist}>
                Delete Tourist
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default DeleteTourist;
