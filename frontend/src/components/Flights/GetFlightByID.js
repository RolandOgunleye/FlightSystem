import React, { useState } from 'react';
import { Button, Container, Typography, TextField, Paper, Grid } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const GetFlightByID = () => {
  const [formData, setFormData] = useState({
    flight_id: '',
  });

  const [flightData, setFlightData] = useState(null);

  const columns = [
    { field: 'flight_id', headerName: 'Flight ID', flex: 1 },
    { field: 'airline_id', headerName: 'Airline ID', flex: 1 },
    { field: 'flight_number', headerName: 'Flight Number', flex: 1 },
    { field: 'departure_country', headerName: 'Departure Country', flex: 1 },
    { field: 'flight_date', headerName: 'Flight Date', flex: 1 },
    { field: 'arrival_country', headerName: 'Arrival Country', flex: 1 },
    { field: 'departure_time', headerName: 'Departure Time', flex: 1 },
    { field: 'arrival_time', headerName: 'Arrival Time', flex: 1 },
    { field: 'flight_class', headerName: 'Flight Class', flex: 1 },
    { field: 'flight_cost', headerName: 'Flight Cost', flex: 1 },
  ];

  const handleGetFlightByID = async () => {
    try {
      const response = await fetch('http://3.134.76.216:8080/get-flight-by-id/' + formData.flight_id, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        // Ensure data has a unique identifier (id)
        const enrichedData = data ? { ...data, id: data.flight_id } : null;
        setFlightData(enrichedData ? [enrichedData] : null);
        console.log('Flight acquired successfully', data);
      } else {
        console.error('Failed to acquire flight');
        setFlightData(null);
      }
    } catch (error) {
      console.error('Error acquiring flight:', error.message);
      setFlightData(null);
    }
  };

  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
      <Typography variant="h2" gutterBottom>
        Get Flight By ID
      </Typography>
      
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Flight ID"
                variant="outlined"
                value={formData.flight_id}
                onChange={(e) => setFormData({ ...formData, flight_id: parseInt(e.target.value, 10) || 0 })}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" onClick={handleGetFlightByID}>
                Get Flight By ID
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      {flightData && (
        <div style={{ height: 200, width: '100%' }}>
          <DataGrid rows={flightData} columns={columns} pageSize={5} />
        </div>
      )}
    </Container>
  );
};

export default GetFlightByID;
