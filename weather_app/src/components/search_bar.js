import React from 'react';

const API_KEY = '214b015c675c795513e0c7ebd3c9d242';

export default class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
    }

    onInputChange (event){
        event.preventDefault();
        this.setState({ term: event.target.value })
    }

    onFormSubmit(event){
        event.preventDefault();
    }
    render(){
        console.log(this.state);
        return (
            <form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
                <input
                    className="form-control"
                    placeholder="Get a five-day forecast in your faviorite cities"
                    onChange={this.onInputChange.bind(this)}
                    value={this.state.term} />
                <span className="input-group-button">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}