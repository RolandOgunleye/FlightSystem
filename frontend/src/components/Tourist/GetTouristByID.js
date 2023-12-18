import React, { useState } from 'react';
import { Paper, TextField, Button, Typography, Container, Grid } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const GetTouristByID = () => {
  const [formData, setFormData] = useState({
    tourist_id: '',
  });

  const [touristData, setTouristData] = useState(null);

  const columns = [
    { field: 'tourist_id', headerName: 'Tourist ID', flex: 1 },
    { field: 'tourist_first_name', headerName: 'First Name', flex: 1 },
    { field: 'tourist_last_name', headerName: 'Last Name', flex: 1 },
    { field: 'tourist_email', headerName: 'Email', flex: 1 },
    // Add more columns for other tourist information
  ];

  const handleGetTouristByID = async () => {
    try {
      const response = await fetch('http://3.134.76.216:8080/get-tourist-by-id/' + formData.tourist_id, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        // Set the tourist data and include an 'id' property for DataGrid
        setTouristData({ ...data, id: data.tourist_id });
        console.log('Tourist acquired successfully', data);
      } else {
        console.error('Failed to acquire tourist');
      }
    } catch (error) {
      console.error('Error acquiring tourist:', error.message);
    }
  };

  return (
    <Container>
      <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h2" gutterBottom>
          Get Tourist By ID
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
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" onClick={handleGetTouristByID}>
                Get Tourist By ID
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      {touristData && (
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={[touristData]}
            columns={columns}
            pageSize={1}
            disableColumnMenu
            disableSelectionOnClick
          />
        </div>
      )}
    </Container>
  );
};

export default GetTouristByID;
