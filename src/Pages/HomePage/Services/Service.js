import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const Service = ({ service }) => {

    const { name, image, description } = service;

    return (

        <Grid item xs={4} sm={4} md={4} >

            <Card className="shadow-none" sx={{ minWidth: 275, boxShadow: 0, border: 0 }} >
                <CardContent>
                    <CardMedia
                        style={{ borderRadius: "10px", width: "auto", height: "100px", margin: "0 auto" }}
                        component="img"
                        image={image}
                        alt="Paella dish"
                    />
                    <Typography sx={{ m: 2 }} variant="h5" component="div">
                        {name}
                    </Typography>

                    <Typography Typography color="text.secondary"
                        variant="body2" >
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>

    );
};

export default Service;