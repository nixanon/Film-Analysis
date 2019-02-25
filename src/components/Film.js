import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Film = (props) => {
    console.log(props)
    return(
        <div>
            { props.Film ? (
                <Card >
                    <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {props.film.fields.title}
                    </Typography>
                    <Typography component="p">
                        {props.film.fields.description}
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small" color="primary" href={props.course.fields.url} target="_blank">
                        Go To Film
                    </Button>
                    </CardActions>
                </Card>
            ) : null}
        </div>
    )
}

export default Film;