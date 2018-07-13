//import React, { Component } from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import React from 'react';
export class TitleSearchBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
      fetch('api/Titles/GetAll')
      .then(response => response.json())
      .then(data => data.results.map(title => (
      {
        Title: `${title}`,
        //Genres: `${title}`,  // need to map these peroperties as well
        //StoryLine: `${storyline}`,
        //Awards: `${Awards}`,
        //Participants: `${title}`,
        Release: `${title}`
      }
      )))
      .then(titles => this.setState(
        {
          titles,
          isLoading: false
        }
      ))
      .catch(error => console.log('parsing failed'))
  }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          < div> 
              <h1>Movie Title Search</h1>
            </div>
            <div className='row' >
              <label> Name:</label>
              <input type="text" value={this.state.value} onChange={this.handleChange} />
              <input type="submit" value="Submit" />
            </div>
        </form>
        // <div className={`content ${isLoading ? 'is-loading' : ''`}}>
        //   <div className="panel-group">
        //     {
        //       // !isLoading && contacts.lenght > 0 contacts.map(contact => {
        //       //   return <Collapsible title
        //       // }) : null
        //     }
        //   </div>
        // </div>
      );

    }
  }