import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import CircularProgress from '@mui/material/CircularProgress';

const Recommendations = () => {
  const [homeSize, setHomeSize] = useState('');
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState([]);

  const locations = [
    { value: 'India', label: 'India' },
    { value: 'New York', label: 'New York' },
    { value: 'Los Angeles', label: 'Los Angeles' },
    { value: 'Chicago', label: 'Chicago' },
    { value: 'Houston', label: 'Houston' },
    // Add more locations as needed
  ];

  const handleSubmit = () => {
    // Validate input
    if (!homeSize || !location) {
      alert('Please fill in all fields.');
      return;
    }

    setLoading(true);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      // Dummy recommendations based on inputs
      const newRecommendations = [
        `Based on a home size of ${homeSize} sq ft in ${location}, we recommend upgrading your lighting fixtures.`,
        `Consider adding a garden space to enhance your property value.`,
        `Explore energy-efficient appliances for your home.`,
      ];
      setRecommendations(newRecommendations);
      setLoading(false);
    }, 2000); // Simulate a 2 second API response
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-6">Get Personalized Recommendations</h1>

      {/* Display the image first */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
        <img
          src="https://ucarecdn.com/665d42ec-ec35-4b4b-9e76-4a0d2eee613b/" // Image URL
          alt="Home Interior Recommendation"
          style={{ width: '10000px', borderRadius: '10px' }}
        />
      </div>

      {/* Form fields below the image */}
      <div className="grid grid-cols-2 gap-4">
        <TextField
          label="Home Size (sq ft)"
          variant="outlined"
          fullWidth
          value={homeSize}
          onChange={(e) => setHomeSize(e.target.value)}
          type="number" // Set input type to number
          inputProps={{ min: 0 }} // Prevent negative numbers
        />
        <TextField
          select
          label="Location"
          variant="outlined"
          fullWidth
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          {locations.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>

      {/* Center the button */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleSubmit}
          disabled={loading} // Disable button while loading
        >
          {loading ? <CircularProgress size={24} /> : 'Get Recommendations'}
        </Button>
      </div>

      {/* Display the recommendations */}
      {recommendations.length > 0 && (
        <div className="mt-6">
          <h2 className="text-2xl mb-4">Your Recommendations:</h2>

          <ul className="list-disc pl-5">
            {recommendations.map((rec, index) => (
              <li key={index} className="mb-2">{rec}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Recommendations;
