import React, { useState } from 'react';
import { Button, Container, Paper, TextField, Typography } from '@mui/material';

const UpdatePayment = () => {
  const [formData, setFormData] = useState({
    payment_id: '',
    payment_type: '',
    processing_fees: '',
    payment_status: '',
  });

  const handleUpdatePayment = async () => {
    try {
      const response = await fetch('http://3.134.76.216:8080/update-payment-method', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Payment updated successfully
        console.log('Payment updated successfully');
        // You might want to redirect the user or show a success message
      } else {
        // Handle error response
        console.error('Failed to update payment');
      }
    } catch (error) {
      // Handle network error or other issues
      console.error('Error updating payment:', error.message);
    }
  };

  return (
    <Container>
      <Paper elevation={3} sx={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h2" gutterBottom>
          Update Payment
        </Typography>
        <form>
          <TextField
            label="Payment ID"
            type="text"
            value={formData.payment_id}
            onChange={(e) => setFormData({ ...formData, payment_id: parseInt(e.target.value) || '' })}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Payment Type"
            type="text"
            value={formData.payment_type}
            onChange={(e) => setFormData({ ...formData, payment_type: e.target.value })}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Processing Fees"
            type="text"
            value={formData.processing_fees}
            onChange={(e) => setFormData({ ...formData, processing_fees: parseInt(e.target.value) || '' })}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Payment Status"
            type="text"
            value={formData.payment_status}
            onChange={(e) => setFormData({ ...formData, payment_status: e.target.value })}
            fullWidth
            margin="normal"
            variant="outlined"
          />

          <Button variant="contained" type="button" onClick={handleUpdatePayment} sx={{ marginTop: '20px' }}>
            Update Payment
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default UpdatePayment;
