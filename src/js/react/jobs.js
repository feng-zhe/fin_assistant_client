'use strict';

// note that we have to use "React" and "ReactDOM"
const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');

class Jobs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
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
            <JobList />
        );
    }
}

class JobList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <h1>hello world</h1>
        );
    }
}

module.exports = Jobs;
