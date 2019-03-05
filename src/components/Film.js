import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

const Film = (props) => {
    console.log(props)
    return(
        // <div>
        //     { props.Film ? (
                <Card >
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {props.film.title}
                        </Typography>
                        <Typography component="p">
                        <br />
                            {props.film.overview}
                        <br /> 
                            {props.film.release_date}
                        </Typography>
                    </CardContent>
                    
                    <CardActions>
                    <Button size="small" >Learn More about Film</Button>
                    </CardActions> 
                </Card>
        //     ) : null}
        // </div>
    )
}

export default withStyles(styles)(Film);