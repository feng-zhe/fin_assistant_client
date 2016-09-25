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
            jobs: [], // job list
            job: null // this is the detail of a job
        };
        // query the jobs
        $.post('/api/jobs', {
                accountId: 'test'
            })
            .done((data) => {
                this.setState({
                    jobs: data.jobs // jobs should be an array
                });
            });
    }
    render() {
        return (
            this.state.job ? <JobDetail job={this.state.job}/> : <JobList jobs={this.state.jobs} onDetail={this.handleDetail.bind(this)}/>
        );
    }
    handleDetail(job) {
        this.setState({
            job: job
        });
    }
}

class JobList extends React.Component {
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
                            <JobListEntry job={job} onDetail={this.handleDetail.bind(this,job)}/>
                        );
                    })
                }
            </div>
        );
    }
    handleDetail() {
        this.props.onDetail(arguments[0]);
    }
}

class JobListEntry extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const recordTime = this.props.job.recordTime;
        const startTime = this.props.job.startTime;
        const result = this.props.job.result;
        return (
            <tr>
                <td>{recordTime?recordTime.toString():null}</td>
                <td>{startTime?startTime.toString():null}</td>
                <td>{result?(result.date?result.date.toString():null):null}</td>
                <td>{result?<button onClick={this.props.onDetail}>Detail</button>:null}</td>
            </tr>
        );
    }
}

class JobDetail extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const recordTime = this.props.job.recordTime;
        const startTime = this.props.job.startTime;
        const result = this.props.job.result;
        return (
            <div>
                <h2>Record Time: {recordTime?recordTime:null}</h2>
                <h2>Start Time: {startTime?startTime:null}</h2>
                <tr>
                    <th>Stock</th>
                    <th>Weight</th>
                </tr>
                {
                    (()=>{
                        const ret = [];
                        const stocks = this.props.job.result.stocks;
                        const weights = this.props.job.result.weights;
                        for(let i = 0; i< stocks.length; i++){
                            ret.push(
                                <tr>
                                    <td>{stocks[i]}</td>
                                    <td>{weights[i]}</td>
                                </tr>
                            );
                        }
                        return ret;
                    })()
                }
            </div>
        );
    }
}

module.exports = JobsPage;
