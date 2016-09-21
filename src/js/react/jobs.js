/*
 * This file contains the page for display jobs
 */

'use strict';

// note that we have to use "React" and "ReactDOM"
const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');

// the jobs page
class JobsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: []
        };
        $.post('/api/jobs', {
                accountId: 'test'
            })
            .done((data) => {
                this.setState({
                    jobs: data.jobs
                });
            });
    }
    render() {
        return (
            <JobList jobs={this.state.jobs}/>
        );
    }
}

class JobList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="joblist">
            {
                this.props.jobs.map(function(obj){
                    return (
                        <JobListEntry />
                    );
                })
            }
            </div>
        );
    }
}

class JobListEntry extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <h1>Hello World</h1>
        );
    }
}

module.exports = JobsPage;
