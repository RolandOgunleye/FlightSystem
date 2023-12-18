import React, { useState, useEffect } from 'react';
import { Button, Container, Typography, Paper } from '@mui/material';

const GetAllReviews = () => {
  const [reviews, setReviews] = useState([]);

  const handleGetAllReviews = async () => {
    try {
      const response = await fetch('http://3.134.76.216:8080/get-all-reviews', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setReviews(data);
        console.log('Reviews acquired successfully', data);
      } else {
        console.error('Failed to acquire reviews');
      }
    } catch (error) {
      console.error('Error acquiring reviews:', error.message);
    }
  };

  useEffect(() => {
    handleGetAllReviews();
  }, []); // Run once on component mount

  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h2" gutterBottom>
          Get All Reviews
        </Typography>
        <form>
          <Button variant="contained" type="button" onClick={handleGetAllReviews}>
            Get All Reviews
          </Button>
        </form>
      </Paper>

      {reviews.map((review) => (
        <Paper key={review.review_id} elevation={3} style={{ marginTop: '20px', padding: '20px' }}>
          <Typography variant="h4" gutterBottom>
            Review ID: {review.review_id}
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
      ))}
    </Container>
  );
};

export default GetAllReviews;
