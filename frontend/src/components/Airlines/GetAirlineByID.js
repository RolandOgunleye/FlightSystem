import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Container, Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const GetAirlineByID = () => {
  const [formData, setFormData] = useState({
    airline_id: '',
  });
  const [airlineData, setAirlineData] = useState(null);
  const [loading, setLoading] = useState(false);

  const columns = [
    { field: 'airline_id', headerName: 'Airline ID', flex: 1 },
    { field: 'airline_name', headerName: 'Airline Name', flex: 1 },
  ];

  const headerStyle = {
    backgroundColor: 'black',
    color: 'white',
  };

  const handleGetAirlineByID = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://3.134.76.216:8080/get-airline-by-id/${formData.airline_id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setAirlineData(data);
      } else {
        console.error('Failed to acquire airline');
        setAirlineData(null);
      }
    } catch (error) {
      console.error('Error acquiring airline:', error.message);
      setAirlineData(null);
    } finally {
      setLoading(false);
    }
  };

  const getRowId = (row) => row.airline_id;

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Get Airline By ID
      </Typography>
      <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px' }}>
        <form>
          <TextField
            label="Airline ID"
            variant="outlined"
            fullWidth
            value={formData.airline_id}
            onChange={(e) => setFormData({ ...formData, airline_id: parseInt(e.target.value, 10) || '' })}
            sx={{ marginBottom: 2 }}
          />

          <Button variant="contained" onClick={handleGetAirlineByID} sx={{ marginRight: 2 }}>
            Get Airline By ID
          </Button>
        </form>
      </Paper>

      <Typography variant="h4" sx={{ marginTop: 3, marginBottom: 2 }}>
        Airline Details
      </Typography>
      <div style={{ height: 200, width: '100%' }}>
        <DataGrid
          columns={columns}
          rows={airlineData ? [airlineData] : []}
          loading={loading}
          pageSize={1}
          components={{
            header: {
              cell: (props) => (
                <div style={{ ...headerStyle, padding: '8px' }}>
                  {props.column.Header ? (
                    <props.column.Header {...props} />
                  ) : (
                    <div className="MuiDataGrid-colCellTitle">{props.column.name}</div>
                  )}
                </div>
              ),
            },
          }}
          getRowId={getRowId}
        />
      </div>
    </Container>
  );
};

export default GetAirlineByID;
