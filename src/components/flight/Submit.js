import React, { Component } from 'react'
import axios from 'axios';

const URL_BASE = 'https://aleks-chris-burning-server.herokuapp.com'
// const URL_BASE = 'http://localhost:3000'


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
            axios.post(`${URL_BASE}/reservations.json`, reservation).then((response) => {
                //refresh or something?
                console.log('success')
                this.props.clearSeat();
                this.setState({
                    name: '',
                    email: ''
                })
                }
            )
        }
    }


//             {/* <div className='container' onSubmit={this._handleSubmit}>

//             <form>
//   <div class="form-group">
//     <label for="exampleInputEmail1">Email address</label>
//     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
//     <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//   </div>
//   <div class="form-group">
//     <label for="exampleInputPassword1">Password</label>
//     <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
//   </div>
//   <div class="form-group form-check">
//     <input type="checkbox" class="form-check-input" id="exampleCheck1">
//     <label class="form-check-label" for="exampleCheck1">Check me out</label>
//   </div>
//   <button type="submit" class="btn btn-primary">Submit</button>
// </form> */}

    render() {
        return(
            <div>
                <form onSubmit={this._handleSubmit}>
                    <div className="form-group">
                        <label className='row'>Your name</label>
                        <input 
                            onChange={this._handleInputName} 
                            value={this.state.name} 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter Name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className='row'>Email address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter email"
                            onChange={this._handleInputEmail}
                            value={this.state.email}
                            required
                        />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone.</small>
                    </div>
                    <div className="form-gorup">
                        <label className='row'>Seat</label>
                        <p>{this.props.chosenSeat}</p>
                    </div>
                    <button type="submit" className='row btn btn-outline-success'>Book Flight</button>
                </form>
            </div>
        )
    }
}

export default Submit