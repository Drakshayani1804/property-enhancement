import React, { useState } from 'react';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Box,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import emailjs from 'emailjs-com';  // Import EmailJS

const ContactPage = () => {
  const [country, setCountry] = useState('');
  const [projectScope, setProjectScope] = useState({
    furnishing: false,
    renovation: false,
    consultation: false,
  });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [doubts, setDoubts] = useState('');

  const handleSubmit = () => {
    if (!name || !email || !country || !address) {
      alert('Please fill out all required fields!');
      return;
    }

    // Send email via EmailJS with the email entered in the form as the recipient
    const templateParams = {
      name,
      email,  // User entered email
      to_email: email,  // Send to user email
      country,
      address,
      projectScope: JSON.stringify(projectScope),
      doubts,
    };

    emailjs.send(
      'service_bga8za2',    // Replace with your service ID
      'template_co36dei',   // Replace with your template ID
      templateParams,
      'VBzrhfELGVeM8LzL0'   // Replace with your user ID
    )
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);

      // Display success message and reset form quickly (after 1 second)
      setTimeout(() => {
        alert('Email sent successfully!');
        // Reset form fields after submission
        setName('');
        setEmail('');
        setCountry('');
        setAddress('');
        setDoubts('');
        setProjectScope({
          furnishing: false,
          renovation: false,
          consultation: false,
        });
      }, 1000);  // 1 second delay for pop-up
    })
    .catch((err) => {
      console.error('Failed to send email:', err);
      alert('Fail to send your Email. Please try again.');
    });



    // Reset form fields after submission
    setName('');
    setEmail('');
    setCountry('');
    setAddress('');
    setDoubts('');
    setProjectScope({
      furnishing: false,
      renovation: false,
      consultation: false,
    });
  };

  return (
    <div className="p-10" style={{ backgroundImage: "url('background-image-url.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Typography variant="h4" className="mb-6">
        Contact Us
      </Typography>
      <Box className="mb-4">
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-4"
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4"
        />
      </Box>
      <Box className="mb-4">
        <FormControl fullWidth variant="outlined" className="mb-4">
          <InputLabel>Country</InputLabel>
          <Select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            label="Country"
          >
            <MenuItem value="USA">USA</MenuItem>
            <MenuItem value="Canada">Canada</MenuItem>
            <MenuItem value="UK">UK</MenuItem>
            <MenuItem value="India">India</MenuItem>
            <MenuItem value="Australia">Australia</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Address"
          variant="outlined"
          fullWidth
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="mb-4"
        />
      </Box>
      <Typography variant="h6" className="mb-2">
        Project Scope
      </Typography>
      <FormControlLabel
        control={<Checkbox checked={projectScope.furnishing} onChange={(e) => setProjectScope({ ...projectScope, furnishing: e.target.checked })} />}
        label="Furnishing"
      />
      <FormControlLabel
        control={<Checkbox checked={projectScope.renovation} onChange={(e) => setProjectScope({ ...projectScope, renovation: e.target.checked })} />}
        label="Renovation"
      />
      <FormControlLabel
        control={<Checkbox checked={projectScope.consultation} onChange={(e) => setProjectScope({ ...projectScope, consultation: e.target.checked })} />}
        label="Consultation"
      />
      <TextField
        label="Any Doubts or Comments"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={doubts}
        onChange={(e) => setDoubts(e.target.value)}
      />
      <Typography variant="body1" className="mt-4">
        Our office is located at Karnataka, Bangalore. Please leave us a message or an email (interior@studiojari.com). We will reach you within one business day.
      </Typography>
      <Box display="flex" justifyContent="center" className="mt-4">
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default ContactPage;
