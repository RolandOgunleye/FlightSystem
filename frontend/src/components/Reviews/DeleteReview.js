import React, { useState } from 'react';
import { Button, Container, Typography, TextField, Paper, Grid } from '@mui/material';

const DeleteReview = () => {
  const [formData, setFormData] = useState({
    review_id: '',
  });

  const handleDeleteReview = async () => {
    try {
      const response = await fetch(`http://3.134.76.216:8080/delete-review/${formData.review_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Review deleted successfully
        console.log('Review deleted successfully');
        // You might want to redirect the user or show a success message
      } else {
        // Handle error response
        console.error('Failed to delete review');
      }
    } catch (error) {
      // Handle network error or other issues
      console.error('Error deleting review:', error.message);
    }
  };

  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h2" gutterBottom>
          Delete Review
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
                onChange={(e) => setFormData({ ...formData, review_id: parseInt(e.target.value, 10) || 0 })}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" type="button" color="error" onClick={handleDeleteReview}>
                Delete Review
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default DeleteReview;
