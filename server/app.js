const express = require("express");
const axios = require('axios');
const app = express();

app.get("/", function(req, res) {
  
  const query = "Kanye";

  // Mak: set up access token first
  // Follow procedure here to get access_token and refresh_token: https://benwiz.com/blog/create-spotify-refresh-token/

  const access_token = "BQDG5AuVwg9trVUnTjcbYOuTEh4sO1Vdl7ifWTFcV7jpyGRwVL6eXVqqTQr9-U17_HypXHachwRwE5CSMQ_2IQBu8Zdmi3sYeJDdlHpsxqbkvROunm9HD2KsaMO1KyNMji-4ef_ACzcj4oR3M3nSym285b4SGN3x3iCl50zeDFbqmSegWqNtAltHFhv4loQAZbk";
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
// Starting the server. Should this be placed at the top of all other commands?
app.listen(3000, function() {
  console.log("Server is running on port 3000.")
})