const express = require("express");
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());


// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.get("/spotify", function (req, res) {

  const query = "Drake";

  // Mak: set up access token first
  // Follow procedure here to get access_token and refresh_token: https://benwiz.com/blog/create-spotify-refresh-token/

  const access_token = "BQDExkoA-BQDExkoA-mOUZr5tzp2EYeDmuNU5nWO9gm4lZpOWz3q5QNoAxZ2D0r9IVNawd6Fqlm8fO-2_zsg0e_b-eaPPWbF6GsEGXv8X6kl2fkpaRBPfOMDTEn__mLILOqWCuBOmcCdGchmNiTRuD8AHrqbGwaU7mPXqFOR7OBHESb3KqjtDw9I4OxzZS7WTOCbmgDZo2bU-2_zsg0e_b-eaPPWbF6GsEGXv8X6kl2fkpaRBPfOMDTEn__mLILOqWCuBOmcCdGchmNiTRuD8AHBQDExkoA-mOUZr5tzp2EYeDmuNU5nWO9gm4lZpOWz3q5QNoAxZ2D0r9IVNawd6Fqlm8fO-2_zsg0e_b-eaPPWbF6GsEGXv8X6kl2fkpaRBPfOMDTEn__mLILOqWCuBOmcCdGchmNiTRuD8AHrqbGwaU7mPXqFOR7OBHESb3KqjtDw9I4OxzZS7WTOCbmgDZo2bUrqbGwaU7mPXqFOR7OBHESb3KqjtDw9I4OxzZS7WTOCbmgDZo2bU-SIimMwUDn1otadYnh9f1KNNXZ3WdXrk_5_RK4c4";
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

app.post("/api/pokemonQuery", function (req, res) {
  res.send("Pokemon Query activated :)")
  console.log(req.body)
})
// Starting the server. Should this be placed at the top of all other commands?
app.listen(3000, function () {
  console.log("Server is running on port 3000.")
})