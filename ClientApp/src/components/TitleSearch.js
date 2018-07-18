import React from 'react';
import ReactDOM from 'react-dom';

export class TitleSearch extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            loading: true,
            searchTerm: '',
            title: '',
            titleDetails: '',
            titles: {}
        };
        this.onSearch = this.onSearch.bind(this);

        fetch('api/titles')
        .then(response => response.json())
        .then(data => {
            this.setState({ 
                titles: data, 
                loading: false 
            });
        });
    }

    onSearch(e){ 
        e.preventDefault();
        fetch('api/titles/find/'+ e.target.value)
        .then(response => response.json())
        .then(data => {
            this.setState({ 
                title: data, 
                loading: false 
            });
        });
    }
    
    getDetails(e){
        e.preventDefault();
        fetch('api/titles/'+ e.target.value)
        .then(response => response.json())
        .then(data => {
            this.setState({ 
                titleDetails: data, 
                loading: false 
            });
        });
    }

    render() {
        return <div>
            <h1>Title Search</h1>
            <form>
                <label>
                    Movie Title:
                    <input type="text" name="name" />
                </label>
                <input type="submit" onSubmit={() => this.onSearch}  value={this.state.searchTerm} />
            </form>
            <Titles titles={this.state.titles}/>
        </div>
    }
}