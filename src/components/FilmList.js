import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

import Film from './Film'; 

class FilmList extends Component {
    state = {
        films: [],
        searchString: ''
    }
    constructor() {
        super()
        this.getFilms()
    }
    getFilms = () => {
        axios
        .get('http://127.0.0.1:5000/film',{
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

    onSearchInputChange = (event) => {
        console.log("Search changed ... " + event.target.value)
        if (event.target.value){
            this.setState({searchString: event.target.value})
        } else {
            this.setState({searchString: ''})
        }
        this.getFilms()
    }
    render() {
        return (
            <div>
                { this.state.films ? (
                <div>
                    <TextField style={{padding: 24}}
                        id="searchInput"
                        placeholder="Search for Movie by Name"   
                        margin="normal"
                        onChange={this.onSearchInputChange}
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