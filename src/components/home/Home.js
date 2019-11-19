import React, {Component} from 'react';
import SearchForm from './SearchForm'
import Flights from './Flights'

class Home extends Component {
  constructor() {
    super();
    this.state = {
      query: {
        origin: {},
        destination: {}
      }
    }
  }

  

  render() {
    return (
      <div>
        <SearchForm />
        <Flights />
      </div>
    )
  };
}

export default Home;
