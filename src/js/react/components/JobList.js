'use strict';

import React from 'react';
import JobListEntry from './JobListEntry';

export default class JobList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="joblist">
                <tr>
                    <th>Record Time</th>
                    <th>Start Time</th>
                    <th>Finish Time</th>
                    <th>Detail</th>
                </tr>
                {
                    this.props.jobs.map((job)=>{
                        return (
                            <JobListEntry job={job} />
                        );
                    })
                }
            </div>
        );
    }
}
