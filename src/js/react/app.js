'use strict';

// note that we have to use "React" and "ReactDOM"
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <h1> hello world </h1>
        );
    }
}

$('document').ready(function() {
    ReactDOM.render(
        <Home />,
        document.getElementById('root'));
});
