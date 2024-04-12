import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Cards({ name, url, link, releaseDate }) {
    return (
        <a href={link} className="block mb-10">
            <Card sx={{ maxWidth: 350 }} className="rounded-3xl overflow-hidden transition duration-300 transform hover:scale-105">
                <CardMedia
                    sx={{ height: 350 }}
                    image={url}
                    title={name}
                    className="rounded-t-3xl"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <h1 className="text-xl text-center font-bold">{name}</h1>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <h1 className="text-xl text-center">Released on: {releaseDate}</h1>
                    </Typography>
                </CardContent>
                <CardActions className="flex justify-center">
                    <Button size="small" href={link} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        Go to Album
                    </Button>
                </CardActions>
            </Card>
        </a>
    );
}
