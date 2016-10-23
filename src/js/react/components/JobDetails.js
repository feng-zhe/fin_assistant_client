'use strict';

import React from 'react';

export default class JobDetail extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const recordTime = this.props.job.recordTime;
        const startTime = this.props.job.startTime;
        const result = this.props.job.result;
        const list = [];
        const stocks = this.props.job.result.stocks;
        const weights = this.props.job.result.weights;
        for(let i = 0; i< stocks.length; i++){
            list.push(
                <tr>
                    <td>{stocks[i]}</td>
                    <td>{weights[i]}</td>
                </tr>
            );
        }
        return (
            <div>
                <h2>Record Time: {recordTime?recordTime.toDateString():null}</h2>
                <h2>Start Time: {startTime?startTime.toDateString():null}</h2>
                <tr>
                    <th>Stock</th>
                    <th>Weight</th>
                </tr>
                { list }
            </div>
        );
    }
}
