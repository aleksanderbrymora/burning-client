import React, { Component } from 'react';
import SearchForm from './SearchForm'
import Flights from './Flights'
import axios from 'axios';

const URL_BASE = 'https://18d09913-278a-4ef4-94ac-3ed82f097c1c.mock.pstmn.io'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      query: {
        origin: {},
        destination: {},
        flights: [
          {
            date: "",
            destination: "",
            id: null,
            number: "",
            origin: "",
            plane_id: null,
            url: ""
          }
        ]
      }
    }
    this.flightSearch = this.flightSearch.bind(this);
  }

  flightSearch(origin, destination) {
    axios.get(`${URL_BASE}/${origin}/${destination}`).then((response) => {
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
