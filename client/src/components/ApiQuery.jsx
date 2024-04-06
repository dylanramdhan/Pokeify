import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
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

    const handleChange = (e) => {
        setQuery(e.target.value)
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


    // useEffect to load the table from the database 
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