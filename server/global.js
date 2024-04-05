const pokemonTypes = [
    'Normal',
    'Fire',
    'Water',
    'Grass',
    'Electric',
    'Ice',
    'Fighting',
    'Poison',
    'Ground',
    'Flying',
    'Psychic',
    'Bug',
    'Rock',
    'Ghost',
    'Dragon',
    'Dark',
    'Steel',
    'Fairy'
]

const pokemonRap = {
    "Normal": "Pop Rap",
    "Fire": "R&B",
    "Water": "Reggae Fusion",
    "Grass": "Jazz Rap",
    "Electric": "Electro Hip-Hop",
    "Ice": "Chillhop",
    "Fighting": "Hardcore Hip-Hop",
    "Poison": "Trap Soul",
    "Ground": "Dirty South",
    "Flying": "Cloud Rap",
    "Psychic": "Psychedelic Hip-Hop",
    "Bug": "Alternative Rap",
    "Rock": "Rock Rap",
    "Ghost": "Horrorcore",
    "Dragon": "Dragon Rap",
    "Dark": "Gangsta Rap",
    "Steel": "Industrial Hip-Hop",
    "Fairy": "Pop Rap"
};

const genreToArtists = {
    "Pop Rap": ["Drake", "Kanye West", "Post Malone", "Travis Scott"],
    "R&B": ["Frank Ocean", "The Weeknd", "Alicia Keys", "Bruno Mars"],
    "Reggae Fusion": ["Sean Paul", "Shaggy", "Bob Marley", "Damian Marley"],
    "Jazz Rap": ["A Tribe Called Quest", "De La Soul", "Guru", "Nujabes"],
    "Electro Hip-Hop": ["Kanye West", "Kid Cudi", "Missy Elliott", "The Black Eyed Peas"],
    "Chillhop": ["J Dilla", "ChilledCow", "lofi hip hop radio - beats to relax/study to", "Tomppabeats"],
    "Hardcore Hip-Hop": ["N.W.A", "Public Enemy", "Run-D.M.C.", "Beastie Boys"],
    "Trap Soul": ["Bryson Tiller", "PARTYNEXTDOOR", "6LACK", "Khalid"],
    "Dirty South": ["OutKast", "Lil Wayne", "T.I.", "Three 6 Mafia"],
    "Cloud Rap": ["Lil Uzi Vert", "Playboi Carti", "Yung Lean", "Lil Yachty"],
    "Psychedelic Hip-Hop": ["A$AP Rocky", "Kid Cudi", "Chance the Rapper", "Travis Scott"],
    "Alternative Rap": ["Kendrick Lamar", "Tyler, The Creator", "Earl Sweatshirt", "J. Cole"],
    "Rock Rap": ["Linkin Park", "Rage Against the Machine", "Beastie Boys", "Hollywood Undead"],
    "Horrorcore": ["Eminem", "Tech N9ne", "Brotha Lynch Hung", "ICP (Insane Clown Posse)"],
    "Dragon Rap": ["Logic", "Lupe Fiasco", "MF DOOM", "Childish Gambino"],
    "Gangsta Rap": ["2Pac", "Notorious B.I.G.", "Ice Cube", "Dr. Dre"],
    "Industrial Hip-Hop": ["Death Grips", "Clipping.", "Ho99o9", "Nine Inch Nails"]
};






module.exports = { pokemonTypes, pokemonRap, genreToArtists }; 