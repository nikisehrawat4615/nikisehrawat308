import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

// MongoDB connection setup
mongoose.connect('mongodb://localhost:27017/feedback_db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const app = express();
app.use(bodyParser.json());

// Controller for inserting quality scores
import { insertQualityScores } from './controllers/qualityScoresController.js';

// Route to insert quality scores
app.post('/qualityscores', insertQualityScores);

// Import and use the teacherScoresRouter
import teacherScoresRouter from './routes/teacherScoresRouter.js';
app.use('/api', teacherScoresRouter);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
