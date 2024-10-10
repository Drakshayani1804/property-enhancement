import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';

const Tools = () => {
  const [open, setOpen] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const tools = [
    {
      title: 'Budget Planner',
      description: 'Plan your home renovation expenses.',
      details: 'A budget planner helps you outline your expected costs and manage your spending during your home renovation projects.',
    },
    {
      title: 'Energy Savings Calculator',
      description: 'Estimate potential energy savings by upgrading your home.',
      details: 'This tool allows you to input your current energy usage and see potential savings from energy-efficient upgrades.',
    },
    {
      title: 'Home Improvement Guide',
      description: 'Get tips and tricks for affordable home improvements.',
      details: 'Our comprehensive guide provides insights into various home improvement projects, including budgeting tips and DIY ideas.',
    },
    {
      title: 'DIY Project Planner',
      description: 'Organize and plan your DIY projects effectively.',
      details: 'Use this planner to list your projects, materials needed, and a timeline to complete your DIY tasks.',
    },
    {
      title: 'Contractor Finder',
      description: 'Find reliable contractors for your home renovations.',
      details: 'This tool helps you connect with verified contractors in your area based on your renovation needs.',
    },
    {
      title: 'Material Cost Estimator',
      description: 'Estimate costs for materials needed for your projects.',
      details: 'Input your project specifications to get an accurate estimate of the materials required and their costs.',
    },
  ];

  const feedbackData = [
    {
      name: "John Doe",
      feedback: "The Budget Planner helped me manage my renovation costs effectively!",
      image: "https://randomuser.me/api/portraits/men/1.jpg", // Example image
    },
    {
      name: "Jane Smith",
      feedback: "Using the Energy Savings Calculator saved me a lot on my utility bills. Highly recommend!",
      image: "https://randomuser.me/api/portraits/women/1.jpg", // Example image
    },
    {
      name: "Alice Johnson",
      feedback: "The DIY Project Planner was a lifesaver! It kept me organized throughout my home improvement projects.",
      image: "https://randomuser.me/api/portraits/women/2.jpg", // Example image
    },
  ];

  const handleClickOpen = (tool) => {
    setSelectedTool(tool);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedTool(null);
  };

  const handleFeedbackOpen = () => {
    setFeedbackOpen(true);
  };

  const handleFeedbackClose = () => {
    setFeedbackOpen(false);
    setFeedback('');
  };

  const handleFeedbackSubmit = () => {
    // Handle feedback submission logic here
    console.log('Feedback submitted:', feedback);
    setSnackbarOpen(true); // Open snackbar for success message
    handleFeedbackClose(); // Close the feedback modal
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div className="p-10">
      <div className="grid grid-cols-2 gap-6 mb-10">
        {tools.map((tool, index) => (
          <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
            <CardContent>
              <Typography variant="h5" component="div">
                {tool.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {tool.description}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className="mt-4"
                onClick={() => handleClickOpen(tool)}
              >
                {tool.title === 'Budget Planner' ? 'Start Planning' : 
                 tool.title === 'Energy Savings Calculator' ? 'Calculate Savings' :
                 tool.title === 'Home Improvement Guide' ? 'View Guide' :
                 tool.title === 'DIY Project Planner' ? 'Start DIY' :
                 tool.title === 'Contractor Finder' ? 'Find Contractors' :
                 'Estimate Costs'}
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                className="mt-4 ml-2" // Added margin left
                onClick={handleFeedbackOpen}
              >
                Feedback
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tool Details Modal */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedTool?.title}</DialogTitle>
        <DialogContent>
          <Typography variant="body2">
            {selectedTool?.details}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Feedback Modal */}
      <Dialog open={feedbackOpen} onClose={handleFeedbackClose}>
        <DialogTitle>Submit Feedback</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Your Feedback"
            type="text"
            fullWidth
            multiline
            rows={4}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFeedbackClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleFeedbackSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for Feedback Submission Confirmation */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000} // Snackbar will hide after 3 seconds
        onClose={handleSnackbarClose}
        message="Feedback submitted successfully!"
      />

      {/* Static Feedback Section */}
      <div className="mt-10 p-5 border border-gray-300 rounded-lg">
        <Typography variant="h6" className="mb-4">User Feedback</Typography>
        {feedbackData.map((item, index) => (
          <div key={index} className="flex items-center mb-2">
            <img
              src={item.image}
              alt={item.name}
              className="w-12 h-12 rounded-full mr-2" // Small round shape
            />
            <div>
              <Typography variant="body2" className="font-bold">{item.name}:</Typography>
              <Typography variant="body2">{item.feedback}</Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
