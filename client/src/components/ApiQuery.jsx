import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import Cards from './Cards';
import { getPokemontoArtist, expressport } from '../utilities/global';



export default function ApiQuery() {
    const [query, setQuery] = useState('')
    const [artist, setArtist] = useState('')
    const [accessToken, setAccessToken] = useState('')
    const [albums, setAlbums] = useState([])

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const getSpotifyAccessToken = async () => {
        const response = await fetch(`${expressport}/api/getSpotifyAccessToken`);
        const data = await response.json();
        setAccessToken(data.access_token);
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
                className="flex justify-center mb-5"
            >
                <TextField id="standard-basic" label="Pokemon Name" />
                <Button type="submit" variant="contained" >Submit</Button>
            </Box>
            {artist && <h1 className="text-3xl font-bold text-center mb-8">We turned {query} into ...</h1>}

            <div className="grid grid-cols-3 gap-4 ">

                {albums.map((album, index) => (
                    <Cards key={index} name={album.name} url={album.images[0].url} link={album.external_urls.spotify} releaseDate={album.release_date} />
                ))}
            </div>

        </div>
    )
}