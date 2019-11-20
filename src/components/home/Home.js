import React, { Component } from 'react';
import SearchForm from './SearchForm'
import Flights from './Flights'
import axios from 'axios';

const URL_BASE = 'https://aleks-chris-burning-server.herokuapp.com'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      query: {
        origin: {},
        destination: {},
        flights: []
      }
    }
    this.flightSearch = this.flightSearch.bind(this);
  }

  flightSearch(origin, destination) {
    axios.get(`${URL_BASE}/${origin}/${destination}.json`).then((response) => {
      console.log(response);
      console.log(`${URL_BASE}/${origin.toLowerCase()}/${destination.toLowerCase()}`);
      this.setState({ flights: response.data });
    })
  }

  render() {
    return (
      <div>
        <SearchForm onSubmit={this.flightSearch} />
        <Flights flights={this.state.flights} />
      </div>
    )
  };
}

export default Home;
