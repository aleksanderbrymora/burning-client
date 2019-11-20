import React, { Component } from 'react';

class SeatChooser extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <table>
                    <Rows cols={this.props.cols} rows={this.props.rows} />
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
        <Columns key={row} cols={colArr} row={row}/>
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
        <Seat col={col} row={props.row} />
    )

    console.log(seatItems)

    return(
        <tr>
            {seatItems}
        </tr>
    )
}

const Seat = (props) => {
    let row = props.row
    let mapping = ['','A','B','C','D','E','F','G','H']
    return(
        <td>{row}{mapping[props.col]}</td>
    )
}