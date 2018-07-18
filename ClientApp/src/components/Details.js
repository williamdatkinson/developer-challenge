import React from 'react';
import ReactDOM from 'react-dom';

export class Details extends React.Component {
    constructor(props){
        super(props);
        this.state ={};
    }

    render() {
        return <div>
            <h1>Details</h1>
            This is the Details Component
        </div>
    }
}