import React, { useState } from 'react';
import { Button, Container, Typography, TextField, Grid, Paper } from '@mui/material';

const DeletePayment = () => {
  const [formData, setFormData] = useState({
    payment_id: '',
  });

  const handleDeletePayment = async () => {
    try {
      const response = await fetch(`http://3.134.76.216:8080/delete-payment-method/${formData.payment_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Payment deleted successfully
        console.log('Payment deleted successfully');
        // You might want to redirect the user or show a success message
      } else {
        // Handle error response
        console.error('Failed to delete payment');
      }
    } catch (error) {
      // Handle network error or other issues
      console.error('Error deleting payment:', error.message);
    }
  };

  return (
    <Container>
      <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px' }}>
      <Typography variant="h2" gutterBottom>
        Delete Payment
      </Typography>
      
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Payment ID"
                variant="outlined"
                type="text"
                value={formData.payment_id}
                onChange={(e) => setFormData({ ...formData, payment_id: parseInt(e.target.value, 10) || 0 })}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" type="button" color="error" onClick={handleDeletePayment}>
                Delete Payment
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default DeletePayment;
