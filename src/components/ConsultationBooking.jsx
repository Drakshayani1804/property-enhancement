import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

const ConsultationBooking = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');

  const handleBooking = () => {
    if (!name || !email || !date) {
      alert('Please fill out all fields!');
      return;
    }

    // Here you can handle booking logic
    console.log({ name, email, date });
    alert('Consultation booked successfully!');
    setName('');
    setEmail('');
    setDate('');
  };

  return (
    <Box sx={{ maxWidth: '100vw', mx: 'auto', pb: 4 }}>
      {/* Title: Book a Consultation */}
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ padding: '16px 0', fontWeight: 'bold' }}
      >
        Book a Consultation
      </Typography>

      {/* Full-width Image with increased height */}
      <Box sx={{ position: 'relative', width: '100%', mb: 2 }}>
        <img
          src="https://www.skygreeninterior.com/wp-content/uploads/2023/06/Interior-consulting.jpg"
          alt="Consultation Address"
          style={{
            width: '100%',
            height: '700px', // Increased height for better visibility
            objectFit: 'cover', // Ensure the image covers the container
            display: 'block',
            margin: '0 auto',
          }}
        />
        {/* Overlay Form Positioned in the Middle of the Image */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)', // Center the form
            bgcolor: 'rgba(255, 255, 255, 0.5)', // More transparent background
            p: 3,
            borderRadius: 2,
            boxShadow: 3,
            maxWidth: '400px', // Max width for the form
            width: '90%', // Full width for smaller screens
          }}
        >
          <TextField
            label="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
            size="medium"
            variant="outlined"
          />
          <TextField
            label="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
            size="medium"
            variant="outlined"
          />
          <TextField
            label="Preferred Date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            fullWidth
            margin="normal"
            size="medium"
            InputLabelProps={{
              shrink: true, // Ensure label stays above the date picker
            }}
          />
          <Box textAlign="center" mt={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleBooking}
              sx={{
                backgroundColor: '#1976d2', // Add button color
                '&:hover': {
                  backgroundColor: '#155a9e', // Darken on hover
                },
              }}
            >
              Book Now
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ConsultationBooking;
