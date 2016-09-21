'use strict';

// note that we have to use "React" and "ReactDOM"
const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');
const JobsPage = require('./jobs');

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <JobsPage />
        );
    }
}

$('document').ready(function() {
    ReactDOM.render(
        <App />,
        document.getElementById('root'));
});
