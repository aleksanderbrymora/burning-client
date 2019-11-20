import React, { Component } from 'react';
import SearchForm from './SearchForm'
import Flights from './Flights'
import axios from 'axios';
import { Link } from 'react-router-dom';


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
      this.setState({ flights: response.data });
    })
  }

  render() {
    return (
      <div className="container">

         <nav className='row bg-primary d-flex flex-row '>
          <div className='col-5 d-flex flex-row justify-content-between'>
            <Link className='nav-item m-2 btn btn-outline-light' to='#'>Flights</Link>
            <Link className='nav-item m-2 btn btn-outline-light' to='#'>Reservations</Link>
            <Link className='nav-item m-2 btn btn-outline-light' to='#'>Planes</Link>
          </div>
          <div className='col-7 d-flex flex-row justify-content-end'>

          </div>
        </nav>

        <SearchForm onSubmit={this.flightSearch} />
        <Flights flights={this.state.flights} />
      </div>
    )
  };
}

export default Home;
