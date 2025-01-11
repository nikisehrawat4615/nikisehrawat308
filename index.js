// Import dependencies
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
// MongoDB connection
mongoose.connect('mongodb://localhost:27017/feedbackApp')
  .then(() => console.log('Connected to MongoDB successfully!'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));


// Define a Mongoose schema and model for feedback
const feedbackSchema = new mongoose.Schema({
  department: String,
  branch: String,
  subject: String,
  teacher: String,
  feedback: String,
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

// API endpoint to submit feedback
app.post('/api/feedback', async (req, res) => {
  try {
    const { department, branch, subject, teacher, feedback } = req.body;
    const newFeedback = new Feedback({ department, branch, subject, teacher, feedback });
    await newFeedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while submitting feedback.' });
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
