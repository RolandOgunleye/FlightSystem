import React, { useState } from 'react';
import { Button, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const GetAllBookings = () => {
  const [bookings, setBookings] = useState([]);

  const handleGetAllBookings = async () => {
    try {
      const response = await fetch('http://3.134.76.216:8080/get-all-bookings', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setBookings(data);
        console.log('Bookings acquired successfully', data);
      } else {
        console.error('Failed to acquire bookings');
      }
    } catch (error) {
      console.error('Error acquiring bookings:', error.message);
    }
  };

  return (
    <Container>
      <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h2" gutterBottom>
          Get All Bookings
        </Typography>
        <form>
          <Button variant="contained" onClick={handleGetAllBookings}>
            Get All Bookings
          </Button>
        </form>

        <TableContainer component={Paper} style={{ marginTop: '20px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Booking ID</TableCell>
                <TableCell>Tourist ID</TableCell>
                <TableCell>Flight ID</TableCell>
                <TableCell>Payment ID</TableCell>
                <TableCell>Booking Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bookings.map((booking) => (
                <TableRow key={booking.booking_id}>
                  <TableCell>{booking.booking_id}</TableCell>
                  <TableCell>{booking.tourist_id}</TableCell>
                  <TableCell>{booking.flight_id}</TableCell>
                  <TableCell>{booking.payment_id}</TableCell>
                  <TableCell>{booking.booking_date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default GetAllBookings;
