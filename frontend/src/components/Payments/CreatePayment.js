import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Paper } from '@mui/material';

const CreatePayment = () => {
  const [formData, setFormData] = useState({
    payment_id: '',
    payment_type: '',
    processing_fees: '',
    payment_status: '',
  });

  const handleCreatePayment = async () => {
    try {
      console.log('Form Data:', formData);

      const response = await fetch('http://3.134.76.216:8080/create-payment-method', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Payment created successfully');
        // You might want to redirect the user or show a success message
      } else {
        console.error('Failed to create payment. Status:', response.status);
        const errorData = await response.json();
        console.error('Error message:', errorData);
      }
    } catch (error) {
      console.error('Error creating payment:', error.message);
    }
  };

  return (
    <Container>
      <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h2" gutterBottom>
          Create Payment
        </Typography>
        <form style={{ width: '100%' }}>
          <TextField
            label="Payment ID"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 2 }}
            value={formData.payment_id}
            onChange={(e) => setFormData({ ...formData, payment_id: parseInt(e.target.value) || '' })}
          />
          <TextField
            label="Payment Type"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 2 }}
            value={formData.payment_type}
            onChange={(e) => setFormData({ ...formData, payment_type: e.target.value })}
          />
          <TextField
            label="Processing Fees"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 2 }}
            value={formData.processing_fees}
            onChange={(e) => setFormData({ ...formData, processing_fees: parseInt(e.target.value) || '' })}
          />
          <TextField
            label="Payment Status"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 2 }}
            value={formData.payment_status}
            onChange={(e) => setFormData({ ...formData, payment_status: e.target.value })}
          />

          <Button variant="contained" onClick={handleCreatePayment} sx={{ marginTop: 2 }}>
            Create Payment
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default CreatePayment;
