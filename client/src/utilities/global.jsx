export const pokemonQueryUrl = 'https://pokeapi.co/api/v2/pokemon/'

export const expressport = "http://localhost:3000";


export const getPokemontoArtist = async (query) => {
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