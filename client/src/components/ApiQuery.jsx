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

    const CLIENT_ID = ''
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
        } catch (e) {
            console.error(e)
        }
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

        </div>
    )
}