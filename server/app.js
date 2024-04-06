const express = require("express");
const axios = require('axios');
const cors = require('cors');
const { pokemonTypes, pokemonRap, genreToArtists } = require('./global.js')

const app = express();
app.use(cors());


// Middleware to parse JSON bodies
app.use(express.json({ limit: '10mb' }));

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ limit: '10mb', extended: true }));


app.get("/spotify", function (req, res) {

  const query = "Taylor Swift";

  // Mak: set up access token first
  // Follow procedure here to get access_token and refresh_token: https://benwiz.com/blog/create-spotify-refresh-token/

  const access_token = "BQCIcRp15VQ4J-h5MAscw8bUHAopmwIWg6NFA6sHrYXdqFI3bfqn-lvRj3U0fbBy88lAiZt0NxYSXdQnEBdzLfPAGOH8wdk6VaASeby1mfQe4Va1BFY";
  const token = "Bearer " + access_token;
  var searchUrl = "https://api.spotify.com/v1/search?q=" + query + "&type=track&limit=4";



  axios.get(searchUrl, {
    headers: {
      'Authorization': token,
    }
  })
    .then((resAxios) => {
      console.log(resAxios.data)
      spotifyResult = resAxios.data;

      //Extracting required data from 'result'. The following "items[0].id.videoId" is the address of the data that we need from the JSON 'ytResult'.
      let spotifyTrackIdAppJs00 = spotifyResult.tracks.items[0].id;
      let spotifyAlbumIdAppJs00 = spotifyResult.tracks.items[0].album.id;
      let spotifyArtistIdAppJs00 = spotifyResult.tracks.items[0].artists[0].id;
      console.log("Fetched values: https://open.spotify.com/track/" + spotifyTrackIdAppJs00 + ", \nhttps://open.spotify.com/album/" + spotifyAlbumIdAppJs00 + ", \nhttps://open.spotify.com/artist/" + spotifyArtistIdAppJs00);

      // The 'results' named EJS file is rendered and fed in response. The 'required' data is passed into it using the following letiable(s).
      // A folder named 'views' has to be in the same directory as "app.js". That folder contains 'results.ejs'.
      res.render("results", {
        spotifyTrackIdEjs00: spotifyTrackIdAppJs00,
        spotifyAlbumIdEjs00: spotifyAlbumIdAppJs00,
        spotifyArtistIdEjs00: spotifyArtistIdAppJs00
      });
      console.log("Values to be used in rendered file: " + spotifyTrackIdAppJs00 + ", " + spotifyAlbumIdAppJs00 + ", " + spotifyArtistIdAppJs00);
    })
    .catch((error) => {
      console.error(error)
    })
  res.send("Spotify activated :)");

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


// Starting the server. Should this be placed at the top of all other commands?
app.listen(3000, function () {
  console.log("Server is running on port 3000.")
})