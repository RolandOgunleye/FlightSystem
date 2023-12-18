import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid, Paper } from '@mui/material';

const CreateAirline = () => {
  const [formData, setFormData] = useState({
    airline_id: '',
    airline_name: '',
  });

  const handleCreateAirline = async () => {
    try {
      // Ensure airline_id is a valid number or set it to null
      const airlineId = formData.airline_id !== '' ? parseInt(formData.airline_id, 10) || '' : '';

      const response = await fetch('http://3.134.76.216:8080/create-airline', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, airline_id: airlineId }),
      });

      if (response.ok) {
        console.log('Airline created successfully');
        // You might want to redirect the user or show a success message
      } else {
        console.error('Failed to create airline. Status:', response.status);
        const errorData = await response.json();
        console.error('Error message:', errorData);
      }
    } catch (error) {
      console.error('Error creating airline:', error.message);
    }
  };

  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
        <Typography variant="h2" gutterBottom>
          Create Airline
        </Typography>
        <form style={{ width: '100%' }}>
          <TextField
            label="Airline ID"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 2 }}
            value={formData.airline_id}
            onChange={(e) => setFormData({ ...formData, airline_id: e.target.value })}
          />
          <TextField
            label="Airline Name"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 2 }}
            value={formData.airline_name}
            onChange={(e) => setFormData({ ...formData, airline_name: e.target.value })}
          />

          <Button variant="contained" onClick={handleCreateAirline} sx={{ marginTop: 2 }}>
            Create Airline
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default CreateAirline;
