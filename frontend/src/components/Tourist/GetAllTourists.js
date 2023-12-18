import React, { useState, useEffect } from 'react';
import { Button, Typography, Container, Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const GetAllTourists = () => {
  const [touristsData, setTouristsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const columns = [
    { field: 'tourist_id', headerName: 'Tourist ID', flex: 1 },
    { field: 'tourist_first_name', headerName: 'First Name', flex: 1 },
    { field: 'tourist_last_name', headerName: 'Last Name', flex: 1 },
    { field: 'tourist_email', headerName: 'Email', flex: 1 },
    // Add more columns for other tourist information
  ];

  const headerStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '8px',
  };

  const handleGetAllTourists = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://3.134.76.216:8080/get-all-tourists', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setTouristsData(data);
      } else {
        console.error('Failed to acquire tourists');
        setTouristsData([]);
      }
    } catch (error) {
      console.error('Error acquiring tourists:', error.message);
      setTouristsData([]);
    } finally {
      setLoading(false);
    }
  };

  const getRowId = (row) => row.tourist_id;

  return (
    <Container>
       <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px' }}>
      <Typography variant="h2" gutterBottom>
        Get All Tourists
      </Typography>
     
        <form>
          <Button variant="contained" onClick={handleGetAllTourists} sx={{ marginRight: 2 }}>
            Get All Tourists
          </Button>
        </form>
      </Paper>

      <Typography variant="h4" sx={{ marginTop: 3, marginBottom: 2 }}>
        Tourists Information
      </Typography>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          columns={columns}
          rows={touristsData}
          loading={loading}
          pageSize={10}
          components={{
            header: {
              cell: (props) => (
                <div style={{ ...headerStyle }}>
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

export default GetAllTourists;
