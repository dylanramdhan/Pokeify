# Pokeify


<p align="center">
  <img src="./README/pokemon.gif" alt="animated" width="350" height="350" />
</p>


<p align="center">
  <img src="./README/sign.png" />
</p>

## Description
Who's that Pokémon? Is it Pikachu? Is it Charizard? Is it Squirtel? Oh no way, it's _**Pokéify**_!!


Pokéify is your go-to spot for finding new artists and Pokémons! This development of the idea came to us as we were listening to music and enjoying the fun reminiscences of Pokémon. In the design of Pokéify, it is the development of a web-based application that allows users to search any of their favorite Pokémon, and find an assortment of related musics and artists that relatively relate towards the Pokémon's element.


## Contributing Members
- Jason Jiang (jx3onj@bu.edu)
- Dylan Ramdhan (dylram01@bu.edu)
- Daniel Cui (dcui@bu.edu)
- Wai Lun Mak (angusmak@bu.edu)

## How To Launch
### Running the Program
1. **Clone the Repository**
  * Start a new terminal and run the following commands:\
      &nbsp;&nbsp;&nbsp;&nbsp; *git clone*\
      &nbsp;&nbsp;&nbsp;&nbsp; *git@github.com:dylanramdhan/Pokeify.git*
2. **Download Necessary Packages**\
      &nbsp;&nbsp;&nbsp;&nbsp; *npm install*
3. **Run Frontend Code**\
    &nbsp;&nbsp;&nbsp;&nbsp; *cd client*\
    &nbsp;&nbsp;&nbsp;&nbsp; *npm run dev*
4. **Run Backend Code**\
    On another terminal, run the following commands:\
      &nbsp;&nbsp;&nbsp;&nbsp; *cd server*\
      &nbsp;&nbsp;&nbsp;&nbsp; *nodemon app.js*
<br>
<br>  

### Obtaining Credentials
**Note:** To enable backend functionality, you need to authenticate the Spotify API by replacing CLIENT_ID and CLIENT_SECRET with your own credentials in the *.env* file.\
Follow these steps to do so:

1. **Obtain Spotify API Credentials**
  * Visit the Spotify Developer Dashboard:\
   &nbsp;&nbsp;&nbsp;&nbsp; *https://developer.spotify.com/dashboard*
  * Log in with your Spotify account or sign up if you don't have one.
  * Create a new application to obtain your CLIENT_ID and CLIENT_SECRET.
2. **Replace CLIENT_ID and CLIENT_SECRET**
  * Navigate to the project directory in your terminal
  * Open the *.env* file using a text editor.
  * Replace the placeholders CLIENT_ID and CLIENT_SECRET with the credentials obtained from the Spotify Developer Dashboard
        
3. **Save the Changes**
  * Save the *.env* file after updating the credentials.

## Resources
[PokéAPI](https://pokeapi.co/) <br>
[Spotify API](https://developer.spotify.com/documentation/web-api) <br>
