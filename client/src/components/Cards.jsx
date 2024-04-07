import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Cards({ name, url, link, releaseDate }) {
    return (

        <a href={link}>
            <Card sx={{ maxWidth: 350 }} className='mb-10' >
                <CardMedia
                    sx={{ height: 350 }}
                    image={url}
                    title={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <h1 className="text-xl text-center">{name}</h1>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <h1 className="text-xl text-center">Released on: {releaseDate}</h1>
                    </Typography>
                </CardContent>
                <CardActions className="flex justify-center">
                    <Button size="small" href={link} >Go to Album</Button>
                </CardActions>
            </Card>
        </a>
    );
}