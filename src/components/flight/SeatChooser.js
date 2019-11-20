import React, { Component } from 'react';

class SeatChooser extends Component {
    constructor() {
        super();
        this.state = {
            seatPicked: {
                code: '',
                row: '',
                col: '',
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
    }

    render() {
        return (
            <div>
                <table>
                    <Rows taken={this.props.taken} chosen={this.state.seatPicked.code} cols={this.props.cols} rows={this.props.rows} onClick={this._handleSeatPick} />
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
    rowItems = rowArr.map( (row) => <Columns taken={props.taken} chosen={props.chosen} key={row} cols={colArr} row={row} onClick={props.onClick}/> )

    return(
        <tbody>
            {rowItems}
        </tbody>
    )

}

const Columns = (props) => {
    let seatItems = '';

    seatItems = props.cols.map( (col) =>  <Seat taken={props.taken} chosen={props.chosen} key={col} col={col} row={props.row} onClick={props.onClick} /> )

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
    if (seat.length === 2) seat = '0' + seat;

    if (props.taken[seat]) {
        return (<td className="btn btn-warning m-1">{props.taken[seat]}</td>)
    } else if (props.chosen === seat) {
        return (<td className="btn btn-success m-1">You</td>)
    } else {
        return (<td className="btn btn-sm btn-outline-success m-1" onClick={() => props.onClick(seat, props.col, row)}>{seat}</td>)
    }
}