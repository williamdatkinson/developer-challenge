import ReactDOM from 'react-dom';
import React from 'react';
import {PageHeader} from 'react-bootstrap';

export default class Header extends React.Component{

    render(){
        return (
            <div>
                <PageHeader>
                    Title Search
                </PageHeader>
    
            </div>
        );
    }
}