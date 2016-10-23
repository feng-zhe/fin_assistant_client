'use strict';

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { showJobDetail } from '../actions';

class JobListEntry_P extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const recordTime = this.props.job.recordTime;
        const startTime = this.props.job.startTime;
        const result = this.props.job.result;
        let finishDate = 'N/A';
        if(result&&result.date){
            finishDate = result.date.toString();
        }
        return (
            <tr>
                <td>{recordTime?recordTime.toDateString():null}</td>
                <td>{startTime?startTime.toDateString():null}</td>
                <td>{result?(result.date?result.date.toDateString():null):null}</td>
                <td><button onClick={()=>this.props.onClickDetail(this.props.job)}>Detail</button></td>
            </tr>
        );
    }
}

const mapStateToProps = (state)=>{
    return {};
}

const mapDispatchToProps = (dispatch)=>{
    return {
        onClickDetail: (job)=>{
            dispatch(showJobDetail(job));
        }
    }
}

const JobListEntry = connect(
    mapStateToProps,
    mapDispatchToProps
)(JobListEntry_P);

export default JobListEntry;
