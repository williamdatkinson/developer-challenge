import React, { Component } from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';

export class FetchData extends Component {
    displayName = FetchData.name

    constructor(props) {
        super(props);
        this.state = {titles: [], loading: true };

        fetch('api/Titles/GetAll')
          .then(response => response.json())
          .then(data => {
            this.setState({ titles: data, loading: false });
        });
    }

    fetchData(e){
        fetch('api/Titles/GetAll')
          .then(response => response.json())
          .then(data => data.results.map(title => (
            {
            Title: `${title}`,
            //Genres: `${title}`,  // need to map these peroperties as well
            StoryLine: `${StoryLine}`,
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
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : fetch(.renderTilesList(this.state.forecasts);

    return (
      <div>
        <h1>Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
}
}