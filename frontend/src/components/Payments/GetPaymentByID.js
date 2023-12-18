import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Container, Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const GetPaymentByID = () => {
  const [formData, setFormData] = useState({
    payment_id: '',
  });
  const [paymentData, setPaymentData] = useState(null);
  const [loading, setLoading] = useState(false);

  const columns = [
    { field: 'payment_id', headerName: 'Payment ID', flex: 1 },
    { field: 'payment_type', headerName: 'Payment Type', flex: 1 },
    { field: 'processing_fees', headerName: 'Processing Fees', flex: 1 },
    { field: 'payment_status', headerName: 'Payment Status', flex: 1 },
  ];

  const headerStyle = {
    backgroundColor: 'black',
    color: 'white',
  };

  const handleGetPaymentByID = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://3.134.76.216:8080/get-payment-method-by-id/${formData.payment_id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setPaymentData(data);
      } else {
        console.error('Failed to acquire payment');
        setPaymentData(null);
      }
    } catch (error) {
      console.error('Error acquiring payment:', error.message);
      setPaymentData(null);
    } finally {
      setLoading(false);
    }
  };

  const getRowId = (row) => row.payment_id;

  return (
    <Container>
            <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px' }}>
      <Typography variant="h2" gutterBottom>
        Get Payment By ID
      </Typography>

        <form>
          <TextField
            label="Payment ID"
            variant="outlined"
            fullWidth
            value={formData.payment_id}
            onChange={(e) => setFormData({ ...formData, payment_id: parseInt(e.target.value, 10) || '' })}
            sx={{ marginBottom: 2 }}
          />

          <Button variant="contained" onClick={handleGetPaymentByID} sx={{ marginRight: 2 }}>
            Get Payment By ID
          </Button>
        </form>
      </Paper>

      <Typography variant="h4" sx={{ marginTop: 3, marginBottom: 2 }}>
        Payment Details
      </Typography>
      <div style={{ height: 200, width: '100%' }}>
        <DataGrid
          columns={columns}
          rows={paymentData ? [paymentData] : []}
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

export default GetPaymentByID;
