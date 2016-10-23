'use strict';

import React from 'react';
import { connect } from 'react-redux';
import JobList from './JobList';

export default class JobPage extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <JobList jobs={this.props.jobs} />
        );
    }
}
