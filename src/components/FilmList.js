import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import axios from 'axios';

import Film from './Film'; 
//http://127.0.0.1:5000/film
//https://film-analysis-api.herokuapp.com/film
class FilmList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            films: [],
            searchString: '',
            overviewString: '',
            genres: [],
        }
        //this.getFilms()
    }
    getFilms = () => {
        axios
        .get('https://film-analysis-api.herokuapp.com/film',{
            params: {
                name: this.state.searchString
            }
        })
        .then((response)=> {
            console.log(response);
            response.data = Array.from(response.data)
            this.setState({films: response.data});
        })
        .catch(function (error) {
            //handle error
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                { this.state.films ? (
                <div>
                    <TextField style={{padding: 24}}
                        id="searchInput"
                        placeholder="Enter a Film Overview to classify into a genre"   
                        margin="normal"
                        onChange={event => {this.setState({overviewString: event.target.value})}}
                        onKeyPress={event => {
                                    if (event.key === 'Enter') {
                                    this.getFilms()
                                    }
                                }}
                    />
                    <TextField style={{padding: 24}}
                        id="searchInput"
                        placeholder="Enter Search Query"   
                        margin="normal"
                        onChange={event => {this.setState({searchString: event.target.value})}}
                        onKeyPress={event => {
                                    if (event.key === 'Enter') {
                                    this.getFilms()
                                    }
                                }}
                    />
                    
                    <Grid container spacing={24} style={{padding: 24}}>
                    {/* Grid item xs={12} sm={6} lg={4} xl={3}> */}
                    {/* <Film film={this.state.films} /> */}
                    {/* </Grid> */}
                    {  
                        this.state.films.map(currentFilm => (
                            <Grid item xs={12} sm={6} lg={4} xl={3}>
                                <Film film={currentFilm}/>
                            </Grid>
                        ))
                    }
                    </Grid>
                </div>
        ) : "No Films found" }
        </div>
        )
    }
}

export default FilmList;