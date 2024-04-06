import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { pokemonQueryUrl, expressport } from '../utilities/global';





const getPokemontoArtist = async (query) => {
    const res = await fetch(pokemonQueryUrl + query)
    if (res.ok) {
        const data = await res.json()
        // pass the data to the backend for manipulation 
        const spotifyRes = await fetch(`${expressport}/api/pokemonQuery`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if (spotifyRes.ok) {
            const spotifyData = await spotifyRes.json()
            return spotifyData.artist
        } else {
            alert('Error: You have inputted a wrong Pokemon name. Please try again.')
        }

    } else {
        alert('Error: You have inputted a wrong Pokemon name. Please try again.')
    }
}

export default function ApiQuery() {
    const [query, setQuery] = useState('')
    const [artist, setArtist] = useState('')
    const [accessToken, setAccessToken] = useState('')
    const [albums, setAlbums] = useState([])

    const CLIENT_ID = 'f18d386ae31746aea86f3eb2d9cdbad1'
    const CLIENT_SECRET = 'd38e056805f24b1e98a8aefa639ab94b'

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const getSpotifyAccessToken = async () => {
        var authParameters = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET

        }

        fetch('https://accounts.spotify.com/api/token', authParameters)
            .then(res => res.json())
            .then(data => setAccessToken(data.access_token))
    }



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const getArtist = await getPokemontoArtist(query)
            setArtist(getArtist)
            console.log(getArtist)
            search()
        } catch (e) {
            console.error(e)
        }
    }

    async function search() {
        var searchParameters = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "authorization": "Bearer " + accessToken

            }
        }

        var ArtistID = await fetch('https://api.spotify.com/v1/search?q=' + artist + '&type=artist', searchParameters)
            .then(res => res.json())
            .then(data => { return data.artists.items[0].id })

        console.log(ArtistID)

        var returnedAlbums = await fetch('https://api.spotify.com/v1/artists/' + ArtistID + '/albums' + '?include_groups=album&market=US&limit=50', searchParameters)
            .then(res => res.json())
            .then(
                data => {
                    console.log(data)
                    setAlbums(data.items);

                }
            )

    }


    useEffect(() => {
        getSpotifyAccessToken()
        console.log(accessToken)
    }, [])


    return (
        <div>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
                onChange={handleChange}
            >
                <TextField id="standard-basic" label="Standard" variant="standard" />
                <Button type="submit" variant="contained" >Text</Button>
            </Box>

            {albums.map(album => {
                return <div key={album.id}>
                    <h1>{album.name}</h1>
                    <img src={album.images[0].url} alt={album.name} />
                </div>
            })
            }

        </div>
    )
}