
import {render} from 'react-dom';
import React, { Component, PropTypes } from 'react';

export default class App extends Component {
    render() {
        return <div>Привет из App</div>
    }
};



var Main = React.createClass({
    render: function () {
        return (
            <div className="main">
                <Search/>
                
            </div>
        );
    }
});