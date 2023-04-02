import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default class ActionAreaCard extends React.Component {
    state = {
        name: "Sara",
        bio: "anything anything anything",
        imgSrc:"/,",
        profesion:"nothing"

    };
    render() {
return (
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
        <CardMedia
        component="img"
        height="140"
        image= {this.state.imgSrc}
        alt="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {this.state.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {this.state.bio}          </Typography>
        </CardContent>
    </CardActionArea>
    </Card>);
}}
