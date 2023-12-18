import React, { useState } from 'react';
import { Button, Container, Typography, TextField, Grid, Paper } from '@mui/material';

const GetReviewByID = () => {
  const [review, setReview] = useState(null);
  const [formData, setFormData] = useState({
    review_id: '',
  });

  const handleGetReviewByID = async () => {
    try {
      const response = await fetch(`http://3.134.76.216:8080/get-review-by-id/${formData.review_id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setReview(data);
        console.log('Review acquired successfully', data);
      } else {
        console.error('Failed to acquire review');
        setReview(null);
      }
    } catch (error) {
      console.error('Error acquiring review:', error.message);
      setReview(null);
    }
  };

  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h2" gutterBottom>
          Get Review By ID
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
              <Button variant="contained" type="button" onClick={handleGetReviewByID}>
                Get Review By ID
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      {review && (
        <Paper elevation={3} style={{ marginTop: '20px', padding: '20px' }}>
          <Typography variant="h4" gutterBottom>
            Review Details
          </Typography>
          <Typography>
            <strong>Review ID:</strong> {review.review_id}
          </Typography>
          <Typography>
            <strong>Review Rating:</strong> {review.review_rating}
          </Typography>
          <Typography>
            <strong>Tourist ID:</strong> {review.tourist_id}
          </Typography>
          <Typography>
            <strong>Flight ID:</strong> {review.flight_id}
          </Typography>
        </Paper>
      )}
    </Container>
  );
};

export default GetReviewByID;
