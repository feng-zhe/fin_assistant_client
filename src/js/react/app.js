'use strict';

// note that we have to use "React" and "ReactDOM"
import React from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import $ from 'jquery';
import JobPage from './components/JobPage';
import JobDetails from './components/JobDetails';
import reducer from './reducers';
import { DOMAINS } from './constants';
import { setJobs } from './actions';

let store = createStore(reducer, { domain: DOMAINS.JOBS });

// TODO: mock up data
let jobs = [
    {   recordTime: new Date('2015-01-01'),
        startTime: new Date('2015-02-02'),
        result: {
            date: new Date('2015-03-03'),
            stocks: ['A','B','C'],
            weights: [1,2,3]
        }
    },
    {   recordTime: new Date('2016-01-01'),
        startTime: new Date('2016-02-02'),
        result: {
            date: new Date('2016-03-03'),
            stocks: ['D','E','F'],
            weights: [4,5,6]
        }
    }
];
store.dispatch(setJobs(jobs));

// the SPA
class App_P extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let page;
        switch(this.props.domain){
            case DOMAINS.JOBS:
                page = <JobPage jobs={this.props.data.jobs}/>;
                break;
            case DOMAINS.JOB_DETAILS:
                page = <JobDetails job={this.props.data.job}/>;
                break;
            default:
                page = <div>ERROR!</div>;
                break;
        }
        return page;
    }
}

const mapStateToProps = (state)=>{
    return {
        domain: state.domain,
        data: state.data
    };
};

const App = connect(
    mapStateToProps
)(App_P);

$('document').ready(function() {
    render( 
        <Provider store={store}>
            <App />
        </Provider>, 
        document.getElementById('root')
    );
});
