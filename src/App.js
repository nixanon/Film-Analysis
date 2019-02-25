import React, { Component } from 'react';
import NavBar from './components/NavBar';
import FilmList from './components/FilmList';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <FilmList />
      </div>
    );
  }
}

export default App;
