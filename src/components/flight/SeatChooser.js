import React, { Component } from 'react';

class SeatChooser extends Component {
    constructor() {
        super();
        this.state = {
            seatPicked: {
                code: '',
                row: '',
                col: ''
            }
        }
        this._handleSeatPick = this._handleSeatPick.bind(this)
    }

    _handleSeatPick (seat, col, row) {
        this.setState({
            seatPicked: {
                code: seat,
                row: row,
                col: col
            }
        })

        // can add code here to mark the chosen seat as coloured grey or whatever, or maybe that happens below in the build code based on the state? 
        // regardless each row has key of the row number, and each seat within the row has key of it's col number, if that helps

    }

    render() {
        return (
            <div>
                <table>
                    <Rows cols={this.props.cols} rows={this.props.rows} onClick={this._handleSeatPick} />
                </table>
            </div>
        )
    }
}

export default SeatChooser



const Rows = (props) => {
    let rowArr = [];
    for (let i = 1; i <= props.rows; i++) {
        rowArr.push(i)
    };
    let colArr = [];
    for (let i = 1; i <= props.cols; i++) {
        colArr.push(i)
    };
    
    let rowItems = '';
    rowItems = rowArr.map((row) => 
        <Columns key={row} cols={colArr} row={row} onClick={props.onClick}/>
    )

    return(
        <tbody>
            {rowItems}
        </tbody>
    )

}

const Columns = (props) => {
    let seatItems = '';

    seatItems = props.cols.map( (col) => 
        <Seat key={col} col={col} row={props.row} onClick={props.onClick} />
    )

    return(
        <tr>
            {seatItems}
        </tr>
    )
}

const Seat = (props) => {
    let row = props.row;
    let mapping = ['','A','B','C','D','E','F','G','H']
    let seat = row.toString() + mapping[props.col]
    if (seat.length === 2) seat = '0' + seat
    return(
        <td onClick={() => props.onClick(seat, props.col, row)}>{seat}</td>
    )
}