const express = require("express");
const cors = require('cors');
const { pokemonTypes, pokemonRap, genreToArtists } = require('./global.js')
require('dotenv').config();

const app = express();
app.use(cors());
// Middleware to parse JSON bodies
app.use(express.json({ limit: '10mb' }));
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ limit: '10mb', extended: true }));


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
      // Send the access token in the response
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
