import React, { useState } from 'react';
import { Button, Container, Typography, TextField, Grid, Paper } from '@mui/material';

const UpdateReview = () => {
  const [formData, setFormData] = useState({
    review_id: '',
    review_rating: '',
    tourist_id: '',
    flight_id: '',
  });

  const handleUpdateReview = async () => {
    try {
      const response = await fetch('http://3.134.76.216:8080/update-review', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Review updated successfully
        console.log('Review updated successfully');
        // You might want to redirect the user or show a success message
      } else {
        // Handle error response
        console.error('Failed to update review');
      }
    } catch (error) {
      // Handle network error or other issues
      console.error('Error updating review:', error.message);
    }
  };

  return (
    <Container>
      <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h2" gutterBottom>
          Update Review
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Review ID"
                variant="outlined"
                type="text"
                value={formData.review_id}
                onChange={(e) => setFormData({ ...formData, review_id: parseInt(e.target.value) })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Review Rating"
                variant="outlined"
                type="text"
                value={formData.review_rating}
                onChange={(e) => setFormData({ ...formData, review_rating: parseInt(e.target.value) })}
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
              <Button variant="contained" type="button" onClick={handleUpdateReview}>
                Update Review
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default UpdateReview;
