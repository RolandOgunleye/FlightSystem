import React, { useState } from 'react';
import { Button, Container, Typography, TextField, Grid, Paper } from '@mui/material';

const DeleteAirline = () => {
  const [formData, setFormData] = useState({
    airline_id: '',
  });

  const handleDeleteAirline = async () => {
    try {
      const response = await fetch('http://3.134.76.216:8080/delete-airline/' + formData.airline_id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Airline deleted successfully');
        // You might want to redirect the user or show a success message
      } else {
        console.error('Failed to delete airline');
      }
    } catch (error) {
      console.error('Error deleting airline:', error.message);
    }
  };

  return (
    <Container>
       <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
      <Typography variant="h2" gutterBottom>
        Delete Airline
      </Typography>
     
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Airline ID"
                variant="outlined"
                value={formData.airline_id}
                onChange={(e) => setFormData({ ...formData, airline_id: parseInt(e.target.value, 10) || '' })}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" type="button" color="error" onClick={handleDeleteAirline}>
                Delete Airline
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default DeleteAirline;
