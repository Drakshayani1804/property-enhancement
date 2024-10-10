import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'orange' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Property Enhancement
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/recommendations">Recommendations</Button>
        <Button color="inherit" component={Link} to="/tools">Tools</Button>
        <Button color="inherit" component={Link} to="/contact">Contact</Button> {/* Add Contact button */}
        <Button color="inherit" component={Link} to="/about">About Us</Button>
        <Button color="inherit" component={Link} to="/budgetestimator">Budget Estimator</Button>
        <Button color="inherit" component={Link} to="/consultationbooking">ConsultationBooking</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
