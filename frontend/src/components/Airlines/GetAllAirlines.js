import React, { useState } from 'react';
import { Button, Container, Typography, Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const GetAllAirlines = () => {
  const [airlinesData, setAirlinesData] = useState(null);
  
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 }, // Add an ID column
    { field: 'airline_id', headerName: 'Airline ID', width: 150 },
    { field: 'airline_name', headerName: 'Airline Name', width: 150 },
    // Add more columns as needed
  ];

  const handleGetAllAirlines = async () => {
    try {
      const response = await fetch('http://3.134.76.216:8080/get-all-airlines', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        // Add an 'id' property to each row
        const dataWithIds = data.map((row, index) => ({ ...row, id: index + 1 }));
        setAirlinesData(dataWithIds);
        console.log('Airlines acquired successfully', dataWithIds);
      } else {
        console.error('Failed to acquire airlines');
        setAirlinesData(null);
      }
    } catch (error) {
      console.error('Error acquiring airlines:', error.message);
    }
  };

  return (
    <Container>
       <Paper elevation={3} style={{ padding: 20, marginBottom: 20 }}>
      <Typography variant="h2" gutterBottom>
        Get All Airlines
      </Typography>
     
        <form>
          <Button variant="contained" onClick={handleGetAllAirlines}>
            Get All Airlines
          </Button>
        </form>
      </Paper>

      {airlinesData && (
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={airlinesData}
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

export default GetAllAirlines;
