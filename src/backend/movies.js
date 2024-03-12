

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;


mongoose.connect('mongodb+srv://Pavith:Pavithpass@cluster0.mlqxkko.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const movieSchema = new mongoose.Schema({
  name: String,
  releaseDate: Date,
});

const moviereviewSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  comments: String,
});

const Movie = mongoose.model('Movie-rating', movieSchema);
const Review = mongoose.model('Movie-review', moviereviewSchema)

// Middleware 
app.use(express.json());

//Adding movie
app.post('/submit', async (req, res) => {
  try {
    const { name, releaseDate } = req.body;

 
    const movie = new Movie({
      name,
      releaseDate,
    });


    await movie.save();

    res.status(201).send('Movie added successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error adding movie');
  }
});

//Adding Reviews
app.post('/submit', async (req, res) => {
  try {
    const { name, rating, comments } = req.body;

 
    const review = new Review({
      name,
      rating,
      comments,
    });


    await review.save();

    res.status(201).send('Review added successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error adding review');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
