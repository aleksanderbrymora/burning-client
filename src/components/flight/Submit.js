import React, { Component } from 'react'
import axios from 'axios';

// const URL_BASE = 'https://aleks-chris-burning-server.herokuapp.com'
const URL_BASE = 'http://localhost:3000'


class Submit extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: ''
        }
        this._handleInputName = this._handleInputName.bind(this);
        this._handleInputEmail = this._handleInputEmail.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleInputName(event) {
        this.setState({
                name: event.target.value
            })
    }
    _handleInputEmail(event) {
        this.setState({
                email: event.target.value
            })
    }

    _handleSubmit(event) {
        event.preventDefault();
        if (this.state.name.length > 0 && this.state.email.length > 0 && this.props.chosenSeat.length > 0) {
            let reservation = {
                name: this.state.name,
                email: this.state.email,
                seat: this.props.chosenSeat,
                flight_id: this.props.flightId
            }
            console.log(reservation)
            axios.post(`${URL_BASE}/reservations.json`, reservation).then((response) =>
                console.log(response)
            )
        }
    }

    render() {
        return(
            <div className='container' onSubmit={this._handleSubmit}>
                <h4>Please confirm your details</h4>
                <form>
                    <label className='row'>
                        Name:
                            <input type='text' onChange={this._handleInputName}></input>
                    </label>
                    <label className='row'>
                        Email:
                            <input type='email' onChange={this._handleInputEmail}></input>
                    </label>
                    <label className='row'>
                        Seat:
                            <p>{this.props.chosenSeat}</p>
                    </label>
                    <button className='row'>Book Flight</button>
                </form>
            </div>
        )
    }
}

export default Submit