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
        );
    }
}

$('document').ready(function() {
    ReactDOM.render(
        <Home />,
        document.getElementById('root'));
});
