import React, { useState } from 'react';
import { Button, Container, Typography, Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const GetAllFlights = () => {
  const [flightsData, setFlightsData] = useState(null);
  
  const columns = [
    { field: 'flight_id', headerName: 'Flight ID', width: 150 },
    { field: 'airline_id', headerName: 'Airline ID', width: 150 },
    { field: 'flight_number', headerName: 'Flight Number', width: 150 },
    { field: 'departure_country', headerName: 'Departure Country', width: 200 },
    { field: 'flight_date', headerName: 'Flight Date', width: 150 },
    { field: 'arrival_country', headerName: 'Arrival Country', width: 200 },
    { field: 'departure_time', headerName: 'Departure Time', width: 150 },
    { field: 'arrival_time', headerName: 'Arrival Time', width: 150 },
    { field: 'flight_class', headerName: 'Flight Class', width: 150 },
    { field: 'flight_cost', headerName: 'Flight Cost', width: 150 },
  ];

  const handleGetAllFlights = async () => {
    try {
      const response = await fetch('http://3.134.76.216:8080/get-all-flights', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        // Add an 'id' property to each row based on 'flight_id'
        const dataWithIds = data.map((row) => ({ ...row, id: row.flight_id }));
        setFlightsData(dataWithIds);
        console.log('Flights acquired successfully', dataWithIds);
      } else {
        console.error('Failed to acquire flights');
        setFlightsData(null);
      }
    } catch (error) {
      console.error('Error acquiring flights:', error.message);
    }
  };

  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <form>
      <Typography variant="h2" gutterBottom>
        Get All Flights
      </Typography>
      
          <Button variant="contained" onClick={handleGetAllFlights}>
            Get All Flights
          </Button>
        </form>
      </Paper>

      {flightsData && (
        <div style={{ height: 600, width: '100%' }}>
          <DataGrid
            rows={flightsData}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
          />
        </div>
      )}
    </Container>
  );
};

export default GetAllFlights;
