const express = require("express");
const cors = require('cors');
const { pokemonTypes, pokemonRap, genreToArtists } = require('./global.js')
require('dotenv').config();
const { User } = require('./schema/user.js');


const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));


async function connectToMongo() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
}
connectToMongo();



'---'

// to create a new user in the database 
app.post('/database/postUser', async (req, res) => {
  try {
    const user = req.body;
    console.log('Received user information:', user);

    // Check if the user with the provided email already exists
    const existingUser = await User.findOne({ email: user.email });
    if (existingUser) {

      console.log('User with email already exists');
      return res.status(409).json({ error: 'User with email already exists' });
    }

    await User.create(user);

    console.log('User created successfully')
    res.status(201).json({ message: 'User created successfully' });

  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post("/api/pokemonQuery", function async(req, res) {
  const { name, types } = req.body

  const pokemonType = types[0].type.name
  const pokemonStrType = pokemonType.charAt(0).toUpperCase() + pokemonType.slice(1)
  const randomArtist = genreToArtists[pokemonRap[pokemonStrType]][Math.floor(Math.random() * genreToArtists[pokemonRap[pokemonStrType]].length)]
  // call the spotify api to get the artist's top tracks.
  // return it to the client
  res.json({ artist: randomArtist, genre: pokemonStrType, name: name })

})
app.post('/api/getSpotifyAccessToken', async (req, res) => {
  try {
    var authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials&client_id=' + process.env.CLIENT_ID + '&client_secret=' + process.env.CLIENT_SECRET
    };

    const response = await fetch('https://accounts.spotify.com/api/token', authParameters);

    if (response.ok) {
      const data = await response.json();
      res.json({ access_token: data.access_token });

    } else {
      throw new Error('Error: Could not get access token')
    }


  } catch (error) {
    // Handle errors
    console.error('Error occurred:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



// Starting the server. Should this be placed at the top of all other commands?
app.listen(3000, function () {
  console.log("Server is running on port 3000.")
})
