const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  MovieName: {
    type: String,
    required: true,
  },
  Rating: {
    type: Number,
    required: true,
  },
  Cast: [{
    type: String,
    required: true,
  }],
  Genre: {
    type: String,
    required: true,
  },
  ReleaseDate: {
    type: Date,
    required: true,
  }
});

const User = mongoose.model('MovieList', UserSchema,'MovieList');


module.exports = User;