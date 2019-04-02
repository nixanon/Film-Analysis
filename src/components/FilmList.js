import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import axios from 'axios';

import Film from './Film'; 
//http://127.0.0.1:5000/film
//https://film-analysis-api.herokuapp.com/film
class FilmList extends Component {
    // state = {
    //     films: [],
    //     searchString: ''
    // }
    constructor(props) {
        super(props)
        this.state = {
            films: [],
            searchString: ''
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

    // handleChange = (event) => {
    //     if (event.target.value){
    //         this.setState({searchString: event.target.value})
    //     }
    // }
    // handleSubmit = (event) => {
    //     this.getFilms()
    // }
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
                        placeholder="Enter Search Query"   
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