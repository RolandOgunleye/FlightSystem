import React, { useState } from 'react';
import { Button, Container, Typography, Alert, Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const GetAllPayments = () => {
  const [error, setError] = useState(null);
  const [payments, setPayments] = useState([]);

  const columns = [
    { field: 'payment_id', headerName: 'Payment ID', flex: 1 },
    { field: 'payment_type', headerName: 'Payment Type', flex: 1 },
    { field: 'processing_fees', headerName: 'Processing Fees', flex: 1 },
    { field: 'payment_status', headerName: 'Payment Status', flex: 1 },
  ];

  const handleGetAllPayments = async () => {
    try {
      const response = await fetch('http://3.134.76.216:8080/get-all-payment-methods', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        // Add a unique id to each row
        const rowsWithId = data.map((row, index) => ({ id: index + 1, ...row }));
        setPayments(rowsWithId);
        setError(null);
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Failed to acquire payments');
      }
    } catch (error) {
      setError('Error acquiring payments: ' + error.message);
    }
  };

  const handleCloseAlert = () => {
    setError(null);
  };

  return (
    <Container>
       <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px' }}>
      <Typography variant="h2" gutterBottom>
        Get All Payments
      </Typography>
     
        <form>
          <Button variant="contained" type="button" onClick={handleGetAllPayments}>
            Get All Payments
          </Button>

          {error && (
            <Alert severity="error" onClose={handleCloseAlert} sx={{ marginTop: '10px' }}>
              {error}
            </Alert>
          )}

          {payments.length > 0 && (
            <div style={{ height: 600, width: '100%', marginTop: '20px' }}>
              <DataGrid
                rows={payments}
                columns={columns}
                pageSize={5}
                disableSelectionOnClick
              />
            </div>
          )}
        </form>
      </Paper>
    </Container>
  );
};

export default GetAllPayments;
