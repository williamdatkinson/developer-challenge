import React from 'react';

export class SearchTextBox extends React.Component {

    render(){
        return 
           <form>
                <div className="form-group">
                    <input type="email" 
                    class="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter email"/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
            </form>
    }

}